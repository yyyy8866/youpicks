# YouPicks

A hand-picked YouTube player for one child. No recommendation feed, no up-next into
the wild, no search box into the rest of YouTube, no comments. It plays the videos on
the list, in the order someone chose, and stops at the end of it.

It is the same idea as [BiliPicks](https://github.com/limin112/bilipicks), rebuilt for
YouTube and in English, with one addition: instead of a single learning path there are
**seven themed quests**. Each one is a ladder of stages with a stated goal and a
hands-on task, and finishing one unlocks the next, so a child keeps moving from theme
to theme rather than running out of road.

**61 videos, 29 channels.** Every video id was checked against YouTube before it went
in: still public, still playable, still allowed to be embedded.

---

## The quests

| # | Quest | From | Stages |
|---|-------|------|--------|
| 1 | How Things Work | age 7 | locks, pens, engines, lifts, bikes, touchscreens |
| 2 | Try It Yourself | age 8 | predict-then-check, kitchen experiments, who to believe |
| 3 | Planet & Space | age 8 | gravity, scale, getting to orbit, "what if" |
| 4 | Build Something That Moves | age 9 | motors, breadboards, micro:bit, Arduino, sensors, soldering |
| 5 | The Shape of Numbers | age 9 | number tricks, riddles, Fibonacci, infinity, proof |
| 6 | Inside Computers | age 9 | binary, logic gates, history, transistors to a CPU |
| 7 | How Machines Learn | age 10 | what learning means, vision, neural networks, train one yourself |

Quest 7 ends where 3Blue1Brown's deep-learning series begins, which is the point of
the whole ladder.

---

## Files

Four files, no build step, no server, no dependencies.

| File | What it is |
|------|------------|
| `index.html` | The app: quests, one-video-per-screen player, browse, channel ranking |
| `tv.html` | The TV version: remote-control grid, arrow keys and OK |
| `data.js` | All the content — videos, quests, stages, tasks, channel ranking |
| `update.py` | Maintenance: check links, refresh durations, add videos (standard library only) |
| `webos/` | Optional LG TV app wrapper (see below) |

Open `index.html` by double-clicking it and it works. Progress is saved in the
browser's local storage; nothing is uploaded anywhere.

---

## Getting it onto the LG TV

**The short version: host the files, then open `tv.html` in the TV's own browser.**
That is the setup that survives a Tuesday evening — nothing to re-enable, nothing
that expires, and it works from any device in the house.

### 1. Put the files somewhere with an address (required)

YouTube's embedded player refuses to run on a `file://` page. That rules out opening
the files from a USB stick or bundling them inside a TV app. They need to be served
over `http` or `https`.

Free and permanent:

- **GitHub Pages** — push this folder to a repo, Settings → Pages → deploy from the
  root. You get `https://you.github.io/youpicks/`.
- **Cloudflare Pages / Netlify** — drag the folder onto the dashboard. Same result.

On your own machine instead, if you would rather nothing was public:

```bash
cd youpicks
python3 -m http.server 8080
```

Then the TV opens `http://192.168.x.x:8080/tv.html`, where `192.168.x.x` is the PC's
address on your wifi. It only works while the PC is on and awake, which is the trade.

### 2. Open it on the TV

On the LG remote: **Home → Web Browser → address bar →** your URL ending in
`/tv.html`, then add it to the browser's favourites. The browser also reopens the last
page, so after the first time it is usually two clicks.

Drive it with the arrow keys and OK. `BACK` steps out of a video.

### 3. Optional: a real app icon on the TV home row

`webos/` holds a small webOS wrapper so YouPicks gets its own tile instead of living
inside the browser. It is a shell: it opens your hosted `tv.html` full-screen, which
is what keeps the YouTube player working.

```bash
# edit webos/index.html first and set URL_TV to your own address
npm install -g @webos-tools/cli
ares-package webos
ares-setup-device                      # add the TV, see LG's Developer Mode guide
ares-install com.youpicks.tv_1.0.0_all.ipk
```

**Know what you are signing up for.** Sideloading needs the Developer Mode app from
LG's store and an LG developer account, the TV reboots when you enable it, and the
session is time-limited — you extend it from the Developer Mode app, and if it ever
lapses, *apps installed this way are uninstalled*. For a child's daily use that is
worse than a bookmark. Do this only if the tile matters to you.

### What about Plex?

Plex serves files you own; it cannot play a YouTube stream, so it is not a route for
this. If the TV can reach the internet or your PC over wifi, the browser route above
is simpler anyway.

### What about Apple TV?

Not possible, and not a packaging problem. tvOS ships no web view at all — Apple's
`WKWebView` lists iOS, iPadOS, macOS, Mac Catalyst and visionOS, and not tvOS — so an
app cannot host YouTube's embedded player, and there is no official YouTube player SDK
for tvOS either. The realistic Apple route is to open `index.html` on an iPhone or iPad
(Share → Add to Home Screen gives it an icon) and AirPlay it to the Apple TV.

---

## Keeping the list healthy

```bash
python3 update.py            # check every video, refresh durations and covers
python3 update.py --check    # report only, change nothing
python3 update.py --deploy   # refresh, then git commit and push
```

For each video it asks YouTube's public oEmbed endpoint whether it is still there, and
reads the watch page for `playabilityStatus`, `playableInEmbed` and the length. Anything
that has gone private, been deleted, or had embedding switched off is marked
`"dead": true` and the player hides it. If it comes back, the next run clears the flag.

Run it once a month. Roughly one video in twenty disappears from YouTube in a year.

Adding one:

```bash
python3 update.py add dQw4w9WgXcQ \
  --cat Maths --age 9 --reason "why this one is worth the time" \
  --theme shape-of-numbers --stage 3 --note "what it does in this stage" \
  --caution "optional parent warning"

python3 update.py --list-themes      # theme ids and stage numbers
```

Title, channel, duration and cover art are read from YouTube. `--title` overrides the
title with your own shorter one and locks it, so later refreshes report upstream title
changes instead of overwriting your wording.

---

## Editing the content

`data.js` is a single `const DATA = { ... };` with pretty-printed JSON inside. Edit it
by hand freely — `update.py` reads and rewrites the same shape.

- `site` — curator name, audience, `strictOrder` (quests unlock in order), `childAge`
- `categories` — the chips on the Browse page
- `themes[]` — `id`, `order`, `icon`, `name`, `tagline`, `minAge`, `intro`, `tips[]`,
  `stages[]`, `next[]`
  - `stages[]` — `icon`, `name`, `age`, `goal`, `items[]` (`{id, note}`),
    `mission` (`{text, url, label}`)
- `videos[]` — `id`, `title`, `channel`, `channelUrl`, `category`, `minAge`, `reason`,
  `caution`, `cover`, `duration`, `seconds`, `titleLocked`, `dead`
- `tiers[]` — the channel ranking: `tier` (S–D), `label`, `items[]` with
  `kid`: `go` | `interest` | `pick` | `later`

Set `"strictOrder": false` to open every quest from the start. Delete `tiers` and the
Channels page empties out.

A video id has to exist in `videos[]` before a stage can list it — `update.py add`
with `--theme` does both at once.

---

## Making it yours

The curation is one parent's judgement and it shows: the ages, the reasons, the tier
list, the warnings. Fork it and disagree. The structure is the reusable part.

The prompt behind this build, if you want to grow your own list instead of editing
this one:

> I am a parent. Build a static site that plays only YouTube videos I have chosen —
> no recommendations, no up-next, no search. Organise it as several themed quests, each
> a ladder of stages with a stated goal and one hands-on task per stage, where finishing
> a quest unlocks the next. Verify every video id against YouTube's public endpoints
> before including it — confirm it is public, playable and embeddable, and never invent
> an id. Prefer official channels of established educational creators; exclude anything
> optimised for watch time, staged experiments, and reaction content. Record why each
> video is on the list so a parent can audit the choices. Use YouTube's own embedded
> player; do not touch video streams. Add a remote-control interface for a TV that
> shares progress with the web version.

---

## Honest notes

- Playback is YouTube's own embedded player (`youtube-nocookie.com`). Streams are not
  downloaded, copied or re-hosted, and every view counts for the creator as normal.
- Ads can still appear — this is YouTube's player, and that is the deal that pays the
  creators on this list.
- Age numbers are judgement, not a rating system. Read the note before pressing play.
- Progress is per browser. The TV and the laptop keep separate progress unless you use
  the same browser profile.
- Some uploaders switch embedding off. `update.py` catches this and hides the video
  rather than leaving a dead tile.
- Not affiliated with YouTube or Google. Every video belongs to the channel that made it.

## Licence

MIT for the code. The list itself — the choices, the reasons, the quest structure — is
free to copy and argue with; a credit is appreciated.
