#!/usr/bin/env python3
"""
YouPicks maintenance script.

Standard library only - no pip install, no API key, no login.

  python3 update.py                check every video, refresh durations and covers
  python3 update.py --check        report only, write nothing
  python3 update.py --deploy       refresh, then git commit and push
  python3 update.py add VIDEO_ID --cat Maths --age 9 --reason "why this one"
                                   [--caution "parent note"] [--title "shorter title"]
                                   [--theme shape-of-numbers --stage 3 --note "role in the ladder"]

What the check does, per video:
  * YouTube oEmbed      -> is it still public? canonical title and channel
  * the watch page      -> playabilityStatus, playableInEmbed, lengthSeconds

A video that has gone private, been deleted, or had embedding switched off is
marked  "dead": true  and the player hides it. If it comes back, the next run
clears the flag. Titles are reported but never overwritten when titleLocked is
true, because the short titles here are written for a child, not copied.
"""

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(HERE, "data.js")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")
PAUSE = 0.6          # seconds between requests - be polite, we are not logged in
WATCH_BYTES = 900000 # enough to reach playabilityStatus without pulling 2.4 MB


# ----------------------------------------------------------------- data.js io

def read_data():
    src = open(DATA_JS, encoding="utf-8").read()
    i = src.find("const DATA")
    if i < 0:
        sys.exit("data.js: no 'const DATA' found")
    j = src.find("=", i)
    body = src[j + 1:].strip()
    if body.endswith(";"):
        body = body[:-1]
    head = src[:i]
    return head, json.loads(body)


def write_data(head, data):
    data["built"] = date.today().isoformat()
    body = json.dumps(data, indent=1, ensure_ascii=False)
    tmp = DATA_JS + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(head + "const DATA =\n" + body + ";\n")
    os.replace(tmp, DATA_JS)


# ----------------------------------------------------------------- network

def get(url, limit=None):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept-Language": "en-US,en;q=0.9",
    })
    with urllib.request.urlopen(req, timeout=30) as r:
        raw = r.read(limit) if limit else r.read()
    return raw.decode("utf-8", "replace")


def oembed(vid):
    """(title, channel, channel_url) or None when the video is gone."""
    url = ("https://www.youtube.com/oembed?format=json&url=" +
           urllib.parse.quote("https://www.youtube.com/watch?v=" + vid, safe=""))
    try:
        d = json.loads(get(url))
    except urllib.error.HTTPError:
        return None
    except Exception as e:
        print("    oembed error:", e)
        return None
    return d.get("title", ""), d.get("author_name", ""), d.get("author_url", "")


def playable(vid):
    """(status, embeddable, seconds) - any value may be None if not found."""
    try:
        h = get("https://www.youtube.com/watch?v=%s&hl=en" % vid, WATCH_BYTES)
    except Exception as e:
        print("    watch page error:", e)
        return None, None, None
    st = re.search(r'"playabilityStatus":\{"status":"([A-Z_]+)"', h)
    em = re.search(r'"playableInEmbed":(true|false)', h)
    ln = re.search(r'"lengthSeconds":"(\d+)"', h)
    return (st.group(1) if st else None,
            (em.group(1) == "true") if em else None,
            int(ln.group(1)) if ln else None)


def mmss(s):
    return "%d:%02d" % (s // 60, s % 60)


# ----------------------------------------------------------------- check

def check(data, dry):
    changed = 0
    problems = []
    renamed = []
    total = len(data["videos"])

    for n, v in enumerate(data["videos"], 1):
        vid = v["id"]
        print("[%d/%d] %s  %s" % (n, total, vid, v.get("title", "")[:48]))

        oe = oembed(vid)
        time.sleep(PAUSE)
        if oe is None:
            problems.append((vid, v.get("title", ""), "gone (private, deleted or blocked)"))
            if not v.get("dead"):
                v["dead"] = True
                changed += 1
                print("    -> marked dead")
            continue

        real_title, channel, channel_url = oe
        status, embeddable, seconds = playable(vid)
        time.sleep(PAUSE)

        if status and status != "OK":
            problems.append((vid, v.get("title", ""), "not playable: " + status))
            if not v.get("dead"):
                v["dead"] = True
                changed += 1
                print("    -> marked dead (%s)" % status)
            continue
        if embeddable is False:
            problems.append((vid, v.get("title", ""), "embedding switched off by the uploader"))
            if not v.get("dead"):
                v["dead"] = True
                changed += 1
                print("    -> marked dead (not embeddable)")
            continue

        if v.get("dead"):
            v["dead"] = False
            changed += 1
            print("    -> alive again, un-marked")

        if seconds and seconds != v.get("seconds"):
            v["seconds"] = seconds
            v["duration"] = mmss(seconds)
            changed += 1
            print("    -> duration now %s" % v["duration"])

        if channel and channel != v.get("channel"):
            print("    -> channel renamed: %s -> %s" % (v.get("channel"), channel))
            v["channel"] = channel
            changed += 1
        if channel_url and channel_url != v.get("channelUrl"):
            v["channelUrl"] = channel_url
            changed += 1

        want_cover = "https://i.ytimg.com/vi/%s/hqdefault.jpg" % vid
        if v.get("cover") != want_cover:
            v["cover"] = want_cover
            changed += 1

        if v.get("titleLocked"):
            if real_title and real_title.lower() != v.get("title", "").lower():
                renamed.append((vid, v["title"], real_title))
        elif real_title and real_title != v.get("title"):
            print("    -> title updated")
            v["title"] = real_title
            changed += 1

    print("\n" + "=" * 62)
    print("%d videos checked, %d fields updated" % (total, changed))

    if problems:
        print("\nNEEDS ATTENTION (%d):" % len(problems))
        for vid, title, why in problems:
            print("  %s  %-42s %s" % (vid, title[:42], why))
        print("\n  Replace these, or delete the entry from data.js and from any")
        print("  theme stage that lists it.")
    else:
        print("\nEvery video still plays and still allows embedding.")

    if renamed:
        print("\nUPSTREAM TITLE CHANGED (your short title is kept):")
        for vid, mine, theirs in renamed:
            print("  %s\n    yours:  %s\n    theirs: %s" % (vid, mine, theirs[:70]))

    orphans = orphan_check(data)
    if orphans:
        print("\nNOT IN ANY QUEST (they only show under Browse):")
        for vid, title in orphans:
            print("  %s  %s" % (vid, title[:50]))

    if dry:
        print("\n--check: nothing written.")
    return changed


def orphan_check(data):
    used = set()
    for t in data["themes"]:
        for s in t["stages"]:
            for it in s["items"]:
                used.add(it["id"])
    return [(v["id"], v.get("title", "")) for v in data["videos"]
            if v["id"] not in used and not v.get("dead")]


# ----------------------------------------------------------------- add

def add(data, args):
    vid = args.video_id
    if any(v["id"] == vid for v in data["videos"]):
        sys.exit("%s is already in data.js" % vid)

    oe = oembed(vid)
    if oe is None:
        sys.exit("%s does not resolve - check the id, it may be private or deleted" % vid)
    real_title, channel, channel_url = oe
    status, embeddable, seconds = playable(vid)
    if status and status != "OK":
        sys.exit("%s is not playable (%s)" % (vid, status))
    if embeddable is False:
        sys.exit("%s cannot be embedded - the uploader switched it off, so the player cannot show it" % vid)

    cats = data["categories"]
    if args.cat not in cats:
        sys.exit("--cat must be one of: %s" % ", ".join(cats))

    v = {
        "id": vid,
        "title": args.title or real_title,
        "url": "https://www.youtube.com/watch?v=" + vid,
        "channel": channel,
        "channelUrl": channel_url,
        "category": args.cat,
        "minAge": args.age,
        "reason": args.reason,
        "caution": args.caution or "",
        "cover": "https://i.ytimg.com/vi/%s/hqdefault.jpg" % vid,
        "duration": mmss(seconds) if seconds else "",
        "seconds": seconds or 0,
        "titleLocked": bool(args.title),
        "dead": False,
    }
    data["videos"].append(v)
    print("added: %s  (%s, %s)" % (v["title"], channel, v["duration"]))

    if args.theme:
        theme = None
        for t in data["themes"]:
            if t["id"] == args.theme:
                theme = t
        if theme is None:
            sys.exit("no theme with id '%s'. Ids are: %s" %
                     (args.theme, ", ".join(t["id"] for t in data["themes"])))
        if not args.stage or args.stage < 1 or args.stage > len(theme["stages"]):
            sys.exit("--stage must be between 1 and %d for theme '%s'" %
                     (len(theme["stages"]), args.theme))
        theme["stages"][args.stage - 1]["items"].append(
            {"id": vid, "note": args.note or ""})
        print("       put into %s, stage %d (%s)" %
              (theme["name"], args.stage, theme["stages"][args.stage - 1]["name"]))
    else:
        print("       not in a quest - it will appear under Browse only.")
        print("       add --theme <id> --stage <n> to place it in a ladder.")


# ----------------------------------------------------------------- git

def deploy():
    def run(*a):
        return subprocess.run(a, cwd=HERE, check=True)
    try:
        run("git", "add", "data.js")
        run("git", "commit", "-m", "Refresh video list " + date.today().isoformat())
        run("git", "push")
        print("pushed.")
    except subprocess.CalledProcessError as e:
        print("git step failed (%s) - commit by hand if you still want to." % e)


# ----------------------------------------------------------------- cli

def main():
    ap = argparse.ArgumentParser(description="YouPicks list maintenance", add_help=True)
    sub = ap.add_subparsers(dest="cmd")

    a = sub.add_parser("add", help="add one video")
    a.add_argument("video_id", help="the 11-character YouTube id")
    a.add_argument("--cat", required=True, help="category, must already exist in data.js")
    a.add_argument("--age", type=int, required=True, help="youngest age you would show it to")
    a.add_argument("--reason", required=True, help="why this one is on the list")
    a.add_argument("--caution", default="", help="parent warning shown in orange")
    a.add_argument("--title", default="", help="your own shorter title (locks it against refresh)")
    a.add_argument("--theme", default="", help="theme id to place it in")
    a.add_argument("--stage", type=int, default=0, help="stage number inside that theme, from 1")
    a.add_argument("--note", default="", help="one line on its role in that stage")

    ap.add_argument("--check", action="store_true", help="report only, write nothing")
    ap.add_argument("--deploy", action="store_true", help="after refreshing, git commit and push")
    ap.add_argument("--list-themes", action="store_true", help="print theme ids and stages")
    args = ap.parse_args()

    head, data = read_data()

    if args.list_themes:
        for t in data["themes"]:
            print("%s  (%s)" % (t["id"], t["name"]))
            for n, s in enumerate(t["stages"], 1):
                print("    %d. %s  [%d videos]" % (n, s["name"], len(s["items"])))
        return

    if args.cmd == "add":
        add(data, args)
        write_data(head, data)
        print("\ndata.js written.")
        return

    changed = check(data, args.check)
    if not args.check:
        write_data(head, data)
        print("data.js written.")
        if args.deploy and changed:
            deploy()


if __name__ == "__main__":
    main()
