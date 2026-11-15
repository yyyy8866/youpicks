// YouPicks content file. Everything the player shows lives here.
//
// Edit by hand, or let the maintenance script do it:
//   python3 update.py                 check links, refresh durations and covers
//   python3 update.py --check         report only, change nothing
//   python3 update.py add <VIDEO_ID> --cat Maths --age 9 --reason "why"
//
// A video that goes private or gets deleted is marked "dead": true and the
// player hides it. If it comes back, the next run un-marks it.

const DATA =
{
 "site": {
  "name": "YouPicks",
  "tagline": "A hand-picked YouTube player. No recommendations, no next-up, nothing but the list.",
  "curator": "Eet",
  "curatorHandle": "",
  "curatorUrl": "",
  "audience": "Primary 3 and up",
  "timezone": "Asia/Singapore",
  "strictOrder": true,
  "childAge": 9
 },
 "categories": [
  "Machines",
  "Experiments",
  "Space & Earth",
  "Making",
  "Maths",
  "Computers",
  "AI"
 ],
 "themes": [
  {
   "id": "how-things-work",
   "icon": "&#9881;",
   "name": "How Things Work",
   "tagline": "Open up the everyday machines",
   "minAge": 7,
   "intro": "Start with objects already in the house. Every video here answers a question a child could ask at the dinner table, and most of them end with something to take apart.",
   "tips": [
    "Pause before the reveal and ask for a guess.",
    "Keep a dead pen, an old lock and a broken zip in a box for afterwards."
   ],
   "stages": [
    {
     "icon": "&#128273;",
     "name": "Tiny machines",
     "age": 7,
     "goal": "Discover that small objects hide mechanisms",
     "items": [
      {
       "id": "smIdInCQ-kU",
       "note": "The first 'oh!' - pins lining up"
      },
      {
       "id": "Zv5Qa2kGL04",
       "note": "A ratchet in a pencil case"
      }
     ],
     "mission": {
      "text": "Take an old clicky pen apart on a plate. Lay out every part and draw it.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128663;",
     "name": "Big machines",
     "age": 8,
     "goal": "Follow a cycle of motion from start to end",
     "items": [
      {
       "id": "ZQvfHyfgBtA",
       "note": "Four strokes, clearly"
      },
      {
       "id": "L24Wf0VlTE0",
       "note": "Same idea, more air"
      },
      {
       "id": "rKp4pe92ljg",
       "note": "Why a cut cable does not drop the lift"
      }
     ],
     "mission": {
      "text": "Walk around the flat and count the machines with moving parts. Pick one, guess how it works, then find out.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128690;",
     "name": "Things that look simple",
     "age": 9,
     "goal": "Learn that 'we use it' is not 'we understand it'",
     "items": [
      {
       "id": "9cNmUNHSBac",
       "note": "Still an open problem"
      },
      {
       "id": "9szhjhO9epA",
       "note": "Make it huge and it becomes obvious"
      }
     ],
     "mission": {
      "text": "Find three zips in the house. Open one very slowly and work out what the slider is doing.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128241;",
     "name": "Things that feel like magic",
     "age": 9,
     "goal": "Replace 'magic' with a mechanism",
     "items": [
      {
       "id": "cFvh7qM6LdA",
       "note": "Why your finger and not a pencil"
      }
     ],
     "mission": {
      "text": "Test what your screen responds to: finger, knuckle, pencil, spoon, wet finger, gloved finger. Write the results down.",
      "url": "",
      "label": ""
     }
    }
   ],
   "order": 1,
   "next": [
    "try-it-yourself"
   ]
  },
  {
   "id": "try-it-yourself",
   "icon": "&#128300;",
   "name": "Try It Yourself",
   "tagline": "Guess first, then find out",
   "minAge": 8,
   "intro": "This theme has one rule: a prediction said out loud before the answer video. Being wrong on purpose is the whole point, and it is the habit everything else is built on.",
   "tips": [
    "Do not let the answer video go first. Hide it if you have to.",
    "Write predictions on paper. It makes being wrong feel like data instead of failure."
   ],
   "stages": [
    {
     "icon": "&#129300;",
     "name": "Predict first",
     "age": 8,
     "goal": "Commit to an answer before you know it",
     "items": [
      {
       "id": "wGIZKETKKdw",
       "note": "One minute - then STOP"
      },
      {
       "id": "eCMmmEEyOO0",
       "note": "Only after a prediction is made"
      }
     ],
     "mission": {
      "text": "Write your prediction on paper before playing the answer. Keep the paper.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#127919;",
     "name": "Predict again, harder",
     "age": 9,
     "goal": "Notice that intuition keeps being wrong",
     "items": [
      {
       "id": "vWVZ6APXM4w",
       "note": "Argue about it before continuing"
      },
      {
       "id": "N8HrMZB6_dU",
       "note": "Watch how he measured it"
      }
     ],
     "mission": {
      "text": "Same game: prediction on paper first. Then explain why your first guess felt right.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128167;",
     "name": "Wet hands",
     "age": 7,
     "goal": "Do a real experiment with no shopping",
     "items": [
      {
       "id": "WsksFbFZeeU",
       "note": "All doable at the sink"
      },
      {
       "id": "_dQJBBklpQQ",
       "note": "36 seconds of impossible"
      }
     ],
     "mission": {
      "text": "Do two of the surface tension tricks at the kitchen sink. Then try to break them on purpose.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#127744;",
     "name": "Matter that misbehaves",
     "age": 9,
     "goal": "Meet a material that breaks the rules",
     "items": [
      {
       "id": "J_vXK9uvRf4",
       "note": "The proper explanation"
      }
     ],
     "mission": {
      "text": "Mix cornflour and water until it is just pourable. Push slowly, then punch it. Explain the difference.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#127755;",
     "name": "Experiments at silly scale",
     "age": 8,
     "goal": "See iteration beat a single attempt",
     "items": [
      {
       "id": "Kou7ur5xt_4",
       "note": "A classroom demo with a crane"
      },
      {
       "id": "hFZFjoX2cGg",
       "note": "He rebuilds it when the squirrels win"
      }
     ],
     "mission": {
      "text": "Build an obstacle course for a toy car or a pet. When it fails, change one thing and try again. Count your attempts.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128203;",
     "name": "Who should you believe?",
     "age": 10,
     "goal": "Judge a claim by its method",
     "items": [
      {
       "id": "GUpd2HJHUt8",
       "note": "Sample size and cherry-picking"
      },
      {
       "id": "isrHUfFiNTg",
       "note": "A real answer, not a slogan"
      },
      {
       "id": "1Q_4HXewiS0",
       "note": "For a rainy afternoon"
      }
     ],
     "mission": {
      "text": "Find a surprising claim online. Work out who measured it, how many they measured, and who paid.",
      "url": "",
      "label": ""
     }
    }
   ],
   "order": 2,
   "next": [
    "planet-and-space"
   ]
  },
  {
   "id": "planet-and-space",
   "icon": "&#127757;",
   "name": "Planet & Space",
   "tagline": "Our rock, and the ones out there",
   "minAge": 8,
   "intro": "Big numbers mean nothing until you can picture them, so this theme leans on comparisons and real footage rather than statistics. Two of the videos end badly for Earth - kids usually love that, but check the notes.",
   "tips": [
    "This is the best theme to watch on the TV. The Kurzgesagt animation deserves the big screen.",
    "Ask for a prediction at each stage of the 'what if' videos before it is shown."
   ],
   "stages": [
    {
     "icon": "&#129714;",
     "name": "Gravity, properly",
     "age": 7,
     "goal": "See that air was the complication all along",
     "items": [
      {
       "id": "E43-CfukEgs",
       "note": "The best four minutes in physics"
      }
     ],
     "mission": {
      "text": "Drop a flat sheet of paper and a crumpled one. Explain the difference, then crumple both and try again.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128167;",
     "name": "Where our water came from",
     "age": 8,
     "goal": "Accept an honest 'we are not sure yet'",
     "items": [
      {
       "id": "RwtO04EXgUE",
       "note": "Ends on an open question"
      }
     ],
     "mission": {
      "text": "Ask three adults where Earth's water came from. Compare their answers to the video.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#11088;",
     "name": "Sizes you cannot picture",
     "age": 8,
     "goal": "Build a sense of scale",
     "items": [
      {
       "id": "3mnSDifDSxQ",
       "note": "Watch this one on the TV"
      },
      {
       "id": "R451yqCHoc0",
       "note": "The method, not the number"
      }
     ],
     "mission": {
      "text": "Make a scale solar system down the corridor. If Earth is a peppercorn, where does Neptune go?",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128640;",
     "name": "Actually getting there",
     "age": 9,
     "goal": "Understand orbit as sideways speed",
     "items": [
      {
       "id": "4czjS9h4Fpg",
       "note": "Real cameras, no narration"
      },
      {
       "id": "qFjw6Lc6J2g",
       "note": "Orbital mechanics, counter-intuitive"
      }
     ],
     "mission": {
      "text": "Build a package that lets a raw egg survive a drop from standing height. Two attempts allowed.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#127773;",
     "name": "What if?",
     "age": 9,
     "goal": "Reason carefully about an imaginary change",
     "items": [
      {
       "id": "lheapd7bgLA",
       "note": "Predict each stage first"
      },
      {
       "id": "gLZJlf5rHVs",
       "note": "Same game, different variable"
      }
     ],
     "mission": {
      "text": "Write your own 'what if' about Earth and work out the first three consequences, in order.",
      "url": "",
      "label": ""
     }
    }
   ],
   "order": 3,
   "next": [
    "build-something"
   ]
  },
  {
   "id": "build-something",
   "icon": "&#128295;",
   "name": "Build Something That Moves",
   "tagline": "From a battery to a robot",
   "minAge": 9,
   "intro": "The hands-on theme, and the one that pairs with a real build. It goes motor, circuit, code, sensor - in that order - so that by the end everything a simple robot needs has been covered.",
   "tips": [
    "Have the parts on the table before the video starts. Watching without building wastes the theme.",
    "The soldering video is the one place an adult has to be present."
   ],
   "stages": [
    {
     "icon": "&#10024;",
     "name": "Why make things at all",
     "age": 8,
     "goal": "Get permission to build badly",
     "items": [
      {
       "id": "c0bsKc4tiuY",
       "note": "The permission slip for this theme"
      }
     ],
     "mission": {
      "text": "Build something deliberately useless out of cardboard in 30 minutes. It only has to move.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128260;",
     "name": "What makes it spin",
     "age": 8,
     "goal": "Know how electricity becomes motion",
     "items": [
      {
       "id": "CWulQ1ZSE3c",
       "note": "Clear enough to copy"
      }
     ],
     "mission": {
      "text": "Make a simple motor with a battery, a magnet and coiled wire. Expect it to fail twice.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128268;",
     "name": "Your first circuit",
     "age": 9,
     "goal": "Wire something up without a diagram",
     "items": [
      {
       "id": "W6mixXsn-Vc",
       "note": "Watch with the board in hand"
      }
     ],
     "mission": {
      "text": "Light one LED from a breadboard. Then light two, one bright and one dim, and explain why.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#129302;",
     "name": "Teach the board",
     "age": 9,
     "goal": "Make hardware follow your instructions",
     "items": [
      {
       "id": "ZIW_6rxYNBg",
       "note": "The right first board for P3"
      },
      {
       "id": "fJWR7dBuc18",
       "note": "The real course starts here"
      }
     ],
     "mission": {
      "text": "Make the board blink a pattern that nobody else in the room can guess the rule of.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128225;",
     "name": "Give it senses",
     "age": 10,
     "goal": "Close the loop between sensing and acting",
     "items": [
      {
       "id": "KGwtit2bFyo",
       "note": "Where a light becomes a robot"
      }
     ],
     "mission": {
      "text": "Build something that reacts when a hand gets close. Decide the distance yourself and measure it.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128293;",
     "name": "Join wires properly",
     "age": 10,
     "goal": "Learn the grown-up tool safely",
     "items": [
      {
       "id": "rK38rpUy568",
       "note": "Watch before the iron is plugged in"
      }
     ],
     "mission": {
      "text": "With an adult: solder two wires together, then tug them. If they come apart, do it again.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#127919;",
     "name": "Engineer something clever",
     "age": 8,
     "goal": "See where all of it is heading",
     "items": [
      {
       "id": "MHTizZ_XcUM",
       "note": "Tracking, motors and maths in one object"
      },
      {
       "id": "f94CnlQ0eq4",
       "note": "Motion controlled by code"
      }
     ],
     "mission": {
      "text": "Design, on paper, a machine that cheats at a game you own. Label every moving part.",
      "url": "",
      "label": ""
     }
    }
   ],
   "order": 4,
   "next": [
    "shape-of-numbers"
   ]
  },
  {
   "id": "shape-of-numbers",
   "icon": "&#128290;",
   "name": "The Shape of Numbers",
   "tagline": "Maths you can see",
   "minAge": 9,
   "intro": "Nothing here looks like homework. The riddles come first because they can be won, then patterns in nature, then the two ideas that change how numbers feel: infinity, and proof.",
   "tips": [
    "Pause every riddle at the countdown. The video is useless without a real attempt.",
    "Pencil and paper on the table, always."
   ],
   "stages": [
    {
     "icon": "&#127913;",
     "name": "Number tricks",
     "age": 8,
     "goal": "Perform something that looks like magic",
     "items": [
      {
       "id": "aQxCnmhqZko",
       "note": "Performable today"
      }
     ],
     "mission": {
      "text": "Perform the magic square trick on a family member without notes.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128056;",
     "name": "Think it through",
     "age": 9,
     "goal": "Solve before being told",
     "items": [
      {
       "id": "cpwSGsb-rTs",
       "note": "Probability that feels wrong"
      },
      {
       "id": "7yDmGnA8Hw0",
       "note": "Write the schedule down"
      }
     ],
     "mission": {
      "text": "Solve the bridge riddle on paper before the answer. Time yourself.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#127803;",
     "name": "Patterns in living things",
     "age": 8,
     "goal": "Find a sequence outside of maths",
     "items": [
      {
       "id": "DRjFV_DETKQ",
       "note": "Then go and count a real flower"
      }
     ],
     "mission": {
      "text": "Count the spirals on a real pinecone or sunflower, both directions. Check them against the sequence.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#8734;",
     "name": "Infinity",
     "age": 10,
     "goal": "Reason about something endless",
     "items": [
      {
       "id": "Uj3_KqkI9Zo",
       "note": "Infinity you can argue with"
      },
      {
       "id": "UPA3bwVVzGI",
       "note": "Some infinities are bigger"
      }
     ],
     "mission": {
      "text": "Explain to a parent how a full infinite hotel takes one more guest. They have to understand it.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128208;",
     "name": "Proof",
     "age": 10,
     "goal": "See the difference between a pattern and a proof",
     "items": [
      {
       "id": "PGuRmqpr6Oo",
       "note": "Recursion without the word"
      },
      {
       "id": "1gBwexpG0IY",
       "note": "A proof too big to read"
      },
      {
       "id": "GNcFjFmqEc8",
       "note": "The hardest one here - optional"
      }
     ],
     "mission": {
      "text": "Build the Tower of Hanoi with coins. Find the formula for the number of moves, then prove it works for five.",
      "url": "",
      "label": ""
     }
    }
   ],
   "order": 5,
   "next": [
    "inside-computers"
   ]
  },
  {
   "id": "inside-computers",
   "icon": "&#128187;",
   "name": "Inside Computers",
   "tagline": "Two symbols, all the way up",
   "minAge": 9,
   "intro": "The ladder from a single switch to a working computer. It is deliberately slow: binary, then logic, then history, then the climb from transistors to a CPU. Finish this and the AI theme stops being mysterious.",
   "tips": [
    "Two switches and a bulb make the logic gates real. Worth the ten minutes.",
    "Sebastian Lague's video is the one that makes it click. Do not skip it."
   ],
   "stages": [
    {
     "icon": "&#128290;",
     "name": "Only two symbols",
     "age": 9,
     "goal": "Count and write in binary",
     "items": [
      {
       "id": "wgbV6DLVezo",
       "note": "Then write a name in it"
      },
      {
       "id": "thrx3SBEpL8",
       "note": "Why two and not ten"
      }
     ],
     "mission": {
      "text": "Write your age, then today's date, in binary. Then count to 31 on one hand using fingers as bits.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128256;",
     "name": "Logic",
     "age": 10,
     "goal": "Build a decision out of switches",
     "items": [
      {
       "id": "gI-qXk7XojA",
       "note": "AND, OR, NOT, XOR"
      }
     ],
     "mission": {
      "text": "Wire two switches and a bulb as AND, then as OR. Draw the truth table for each.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#8987;",
     "name": "Where it came from",
     "age": 10,
     "goal": "Place computers in history",
     "items": [
      {
       "id": "O5nskjZ_GoI",
       "note": "Looms, punch cards, war"
      }
     ],
     "mission": {
      "text": "Find out what year the first computer your family owned was made, and what it could not do.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128297;",
     "name": "From a switch to a computer",
     "age": 11,
     "goal": "Climb the whole abstraction ladder once",
     "items": [
      {
       "id": "QZwneRb-zqA",
       "note": "The 'it all clicks' video"
      },
      {
       "id": "_Pqfjer8-O4",
       "note": "Deep dive, only if hungry"
      }
     ],
     "mission": {
      "text": "In a logic simulator, build an adder that adds two 2-bit numbers. Test all sixteen combinations.",
      "url": "https://sebastian.itch.io/digital-logic-sim",
      "label": "Digital Logic Sim"
     }
    }
   ],
   "order": 6,
   "next": [
    "how-machines-learn"
   ]
  },
  {
   "id": "how-machines-learn",
   "icon": "&#129302;",
   "name": "How Machines Learn",
   "tagline": "What is really going on inside AI",
   "minAge": 10,
   "intro": "The last ladder, and the reason for all the others. It goes from what learning means, to seeing, to the actual mathematics of a neural network, and ends with training one yourself.",
   "tips": [
    "The CGP Grey video is the most useful thing here for a kid who already uses chatbots. Watch it twice.",
    "Watch the last video together - it is about risk, and it is better discussed than absorbed alone."
   ],
   "stages": [
    {
     "icon": "&#128161;",
     "name": "What 'learning' means",
     "age": 9,
     "goal": "Separate learning from knowing",
     "items": [
      {
       "id": "0yCJMt9Mx9c",
       "note": "The gentlest honest start"
      },
      {
       "id": "R9OHn5ZF4Uo",
       "note": "The most important one here"
      }
     ],
     "mission": {
      "text": "Ask a chatbot something you already know the answer to, then something you can check. Write down where it was wrong.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128269;",
     "name": "Teach a computer to see",
     "age": 10,
     "goal": "Understand why seeing is hard",
     "items": [
      {
       "id": "i8D90DkCLhI",
       "note": "Starts from a real problem"
      },
      {
       "id": "z-EtmaFJieY",
       "note": "The vocabulary, tied together"
      }
     ],
     "mission": {
      "text": "Write instructions a robot could follow to tell a cat from a dog. Test them on ten photos.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128279;",
     "name": "Inside the network",
     "age": 11,
     "goal": "Know what a neuron, a layer and a weight are",
     "items": [
      {
       "id": "aircAruvnKk",
       "note": "The destination of the whole ladder"
      },
      {
       "id": "CqOfi41LfDw",
       "note": "The same ideas, second voice"
      }
     ],
     "mission": {
      "text": "Draw a network with 4 inputs, 3 hidden neurons and 2 outputs. Count the weights. Check your number.",
      "url": "",
      "label": ""
     }
    },
    {
     "icon": "&#128201;",
     "name": "How it gets better",
     "age": 11,
     "goal": "See learning as rolling downhill",
     "items": [
      {
       "id": "IHZwWFHWa-w",
       "note": "The idea behind every model"
      }
     ],
     "mission": {
      "text": "In the TensorFlow Playground, make the spiral dataset work. Note which settings helped.",
      "url": "https://playground.tensorflow.org/",
      "label": "TensorFlow Playground"
     }
    },
    {
     "icon": "&#128296;",
     "name": "Make one yourself",
     "age": 11,
     "goal": "Train a model and break it on purpose",
     "items": [
      {
       "id": "jmznx0Q1fP0",
       "note": "Stop watching, start building"
      }
     ],
     "mission": {
      "text": "Train an image classifier with Teachable Machine. Then find three images that fool it and explain why.",
      "url": "https://teachablemachine.withgoogle.com/",
      "label": "Teachable Machine"
     }
    },
    {
     "icon": "&#128172;",
     "name": "Talk about it",
     "age": 11,
     "goal": "Form an opinion out loud",
     "items": [
      {
       "id": "fa8k8IQ1_X0",
       "note": "Watch this one together"
      }
     ],
     "mission": {
      "text": "Tell a parent one thing about AI you think is good and one you think is risky, and why.",
      "url": "",
      "label": ""
     }
    }
   ],
   "order": 7,
   "next": []
  }
 ],
 "videos": [
  {
   "id": "smIdInCQ-kU",
   "title": "How a door lock works",
   "url": "https://www.youtube.com/watch?v=smIdInCQ-kU",
   "channel": "Jared Owen",
   "channelUrl": "https://www.youtube.com/@JaredOwen",
   "category": "Machines",
   "minAge": 7,
   "reason": "Three minutes, perfect animation. The moment the pins line up is the first 'oh!' of the whole list.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/smIdInCQ-kU/hqdefault.jpg",
   "duration": "3:05",
   "seconds": 185,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "Zv5Qa2kGL04",
   "title": "What happens inside a clicky pen",
   "url": "https://www.youtube.com/watch?v=Zv5Qa2kGL04",
   "channel": "Jared Owen",
   "channelUrl": "https://www.youtube.com/@JaredOwen",
   "category": "Machines",
   "minAge": 7,
   "reason": "Something in every pencil case turns out to have a tiny ratchet in it. Cheap to take apart afterwards.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/Zv5Qa2kGL04/hqdefault.jpg",
   "duration": "3:16",
   "seconds": 196,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "ZQvfHyfgBtA",
   "title": "How a car engine works",
   "url": "https://www.youtube.com/watch?v=ZQvfHyfgBtA",
   "channel": "Animagraffs",
   "channelUrl": "https://www.youtube.com/@animagraffs",
   "category": "Machines",
   "minAge": 8,
   "reason": "The clearest engine animation on YouTube. Watch the four strokes, then listen to a real car idling.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/ZQvfHyfgBtA/hqdefault.jpg",
   "duration": "7:55",
   "seconds": 475,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "L24Wf0VlTE0",
   "title": "How a jet engine works",
   "url": "https://www.youtube.com/watch?v=L24Wf0VlTE0",
   "channel": "Animagraffs",
   "channelUrl": "https://www.youtube.com/@animagraffs",
   "category": "Machines",
   "minAge": 8,
   "reason": "Same studio, bigger machine. Suck, squeeze, bang, blow - and you can see each stage.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/L24Wf0VlTE0/hqdefault.jpg",
   "duration": "5:01",
   "seconds": 301,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "rKp4pe92ljg",
   "title": "How a lift works",
   "url": "https://www.youtube.com/watch?v=rKp4pe92ljg",
   "channel": "Jared Owen",
   "channelUrl": "https://www.youtube.com/@JaredOwen",
   "category": "Machines",
   "minAge": 8,
   "reason": "Counterweights, safety brakes, and why a snapped cable does not mean you fall. Good for lift-anxious kids.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/rKp4pe92ljg/hqdefault.jpg",
   "duration": "11:32",
   "seconds": 692,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "9cNmUNHSBac",
   "title": "Nobody really knows how bikes work",
   "url": "https://www.youtube.com/watch?v=9cNmUNHSBac",
   "channel": "Veritasium",
   "channelUrl": "https://www.youtube.com/@veritasium",
   "category": "Machines",
   "minAge": 9,
   "reason": "Something a child can already do turns out to be unsolved. Great lesson that 'we use it' is not 'we understand it'.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/9cNmUNHSBac/hqdefault.jpg",
   "duration": "11:21",
   "seconds": 681,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "9szhjhO9epA",
   "title": "A giant zipper, to explain zippers",
   "url": "https://www.youtube.com/watch?v=9szhjhO9epA",
   "channel": "Veritasium",
   "channelUrl": "https://www.youtube.com/@veritasium",
   "category": "Machines",
   "minAge": 9,
   "reason": "Long, but the build is the point: make it big enough and the mechanism becomes obvious.",
   "caution": "20 minutes - good for a weekend, not a school night.",
   "cover": "https://i.ytimg.com/vi/9szhjhO9epA/hqdefault.jpg",
   "duration": "20:44",
   "seconds": 1244,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "cFvh7qM6LdA",
   "title": "Why a screen knows your finger",
   "url": "https://www.youtube.com/watch?v=cFvh7qM6LdA",
   "channel": "Branch Education",
   "channelUrl": "https://www.youtube.com/@BranchEducation",
   "category": "Machines",
   "minAge": 9,
   "reason": "Explains capacitance without hand-waving. Leads straight into the computer themes later.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/cFvh7qM6LdA/hqdefault.jpg",
   "duration": "8:36",
   "seconds": 516,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "wGIZKETKKdw",
   "title": "The slinky drop - what will happen?",
   "url": "https://www.youtube.com/watch?v=wGIZKETKKdw",
   "channel": "Veritasium",
   "channelUrl": "https://www.youtube.com/@veritasium",
   "category": "Experiments",
   "minAge": 8,
   "reason": "One minute. STOP here and get a prediction said out loud before the next video.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/wGIZKETKKdw/hqdefault.jpg",
   "duration": "0:57",
   "seconds": 57,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "eCMmmEEyOO0",
   "title": "The slinky drop - the answer",
   "url": "https://www.youtube.com/watch?v=eCMmmEEyOO0",
   "channel": "Veritasium",
   "channelUrl": "https://www.youtube.com/@veritasium",
   "category": "Experiments",
   "minAge": 8,
   "reason": "Only watch after the prediction is made. Being wrong here is the most useful thing in the whole list.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/eCMmmEEyOO0/hqdefault.jpg",
   "duration": "3:30",
   "seconds": 210,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "vWVZ6APXM4w",
   "title": "The bullet block puzzle",
   "url": "https://www.youtube.com/watch?v=vWVZ6APXM4w",
   "channel": "Veritasium",
   "channelUrl": "https://www.youtube.com/@veritasium",
   "category": "Experiments",
   "minAge": 9,
   "reason": "Same trick, harder physics. Two minutes, then pause and argue about it.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/vWVZ6APXM4w/hqdefault.jpg",
   "duration": "1:52",
   "seconds": 112,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "N8HrMZB6_dU",
   "title": "The bullet block result",
   "url": "https://www.youtube.com/watch?v=N8HrMZB6_dU",
   "channel": "Veritasium",
   "channelUrl": "https://www.youtube.com/@veritasium",
   "category": "Experiments",
   "minAge": 9,
   "reason": "The payoff, plus how he measured it. Notice he shows the method, not just the answer.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/N8HrMZB6_dU/hqdefault.jpg",
   "duration": "2:56",
   "seconds": 176,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "WsksFbFZeeU",
   "title": "Seven tricks with surface tension",
   "url": "https://www.youtube.com/watch?v=WsksFbFZeeU",
   "channel": "Physics Girl",
   "channelUrl": "https://www.youtube.com/@physicsgirl",
   "category": "Experiments",
   "minAge": 7,
   "reason": "Everything here can be done at the kitchen sink in ten minutes with no shopping.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/WsksFbFZeeU/hqdefault.jpg",
   "duration": "3:28",
   "seconds": 208,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "_dQJBBklpQQ",
   "title": "The chain fountain",
   "url": "https://www.youtube.com/watch?v=_dQJBBklpQQ",
   "channel": "Steve Mould",
   "channelUrl": "https://www.youtube.com/@SteveMould",
   "category": "Experiments",
   "minAge": 7,
   "reason": "36 seconds of something that looks impossible. He found it, then got a paper written about it.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/_dQJBBklpQQ/hqdefault.jpg",
   "duration": "0:36",
   "seconds": 36,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "J_vXK9uvRf4",
   "title": "Cornflour and water is not a liquid",
   "url": "https://www.youtube.com/watch?v=J_vXK9uvRf4",
   "channel": "Steve Mould",
   "channelUrl": "https://www.youtube.com/@SteveMould",
   "category": "Experiments",
   "minAge": 9,
   "reason": "The proper explanation of non-Newtonian fluids, after you have made a mess with the real thing.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/J_vXK9uvRf4/hqdefault.jpg",
   "duration": "17:20",
   "seconds": 1040,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "Kou7ur5xt_4",
   "title": "World's largest elephant toothpaste",
   "url": "https://www.youtube.com/watch?v=Kou7ur5xt_4",
   "channel": "Mark Rober",
   "channelUrl": "https://www.youtube.com/@MarkRober",
   "category": "Experiments",
   "minAge": 8,
   "reason": "Scaling up a classroom demo until it needs a crane. Pure joy, real chemistry.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/Kou7ur5xt_4/hqdefault.jpg",
   "duration": "10:33",
   "seconds": 633,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "hFZFjoX2cGg",
   "title": "Backyard squirrel obstacle course",
   "url": "https://www.youtube.com/watch?v=hFZFjoX2cGg",
   "channel": "Mark Rober",
   "channelUrl": "https://www.youtube.com/@MarkRober",
   "category": "Experiments",
   "minAge": 8,
   "reason": "Engineering as patient iteration - he rebuilds it when the squirrels beat it. The best model of persistence here.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/hFZFjoX2cGg/hqdefault.jpg",
   "duration": "20:20",
   "seconds": 1220,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "GUpd2HJHUt8",
   "title": "Not every study is worth believing",
   "url": "https://www.youtube.com/watch?v=GUpd2HJHUt8",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Experiments",
   "minAge": 10,
   "reason": "Teaches sample size and cherry-picking. The antidote to the rest of the internet.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/GUpd2HJHUt8/hqdefault.jpg",
   "duration": "4:26",
   "seconds": 266,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "isrHUfFiNTg",
   "title": "Why is the sky any colour at all?",
   "url": "https://www.youtube.com/watch?v=isrHUfFiNTg",
   "channel": "Be Smart",
   "channelUrl": "https://www.youtube.com/@besmart",
   "category": "Experiments",
   "minAge": 8,
   "reason": "Answers the question properly instead of saying 'because of the atmosphere'.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/isrHUfFiNTg/hqdefault.jpg",
   "duration": "2:54",
   "seconds": 174,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "1Q_4HXewiS0",
   "title": "Four experiments to do today",
   "url": "https://www.youtube.com/watch?v=1Q_4HXewiS0",
   "channel": "SciShow Kids",
   "channelUrl": "https://www.youtube.com/@SciShowKids",
   "category": "Experiments",
   "minAge": 6,
   "reason": "Aimed younger than the rest. Use it on a rainy afternoon when the mood is to do, not watch.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/1Q_4HXewiS0/hqdefault.jpg",
   "duration": "17:09",
   "seconds": 1029,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "E43-CfukEgs",
   "title": "A bowling ball and a feather, in a vacuum",
   "url": "https://www.youtube.com/watch?v=E43-CfukEgs",
   "channel": "BBC",
   "channelUrl": "https://www.youtube.com/@BBC",
   "category": "Space & Earth",
   "minAge": 7,
   "reason": "The best four minutes in physics. The reaction of the crew is half the lesson.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/E43-CfukEgs/hqdefault.jpg",
   "duration": "4:41",
   "seconds": 281,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "RwtO04EXgUE",
   "title": "Where did Earth's water come from?",
   "url": "https://www.youtube.com/watch?v=RwtO04EXgUE",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Space & Earth",
   "minAge": 8,
   "reason": "Short, and it ends on an honest 'we are not sure yet', which is the right note.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/RwtO04EXgUE/hqdefault.jpg",
   "duration": "3:53",
   "seconds": 233,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "3mnSDifDSxQ",
   "title": "The largest star in the universe",
   "url": "https://www.youtube.com/watch?v=3mnSDifDSxQ",
   "channel": "Kurzgesagt - In a Nutshell",
   "channelUrl": "https://www.youtube.com/@kurzgesagt",
   "category": "Space & Earth",
   "minAge": 8,
   "reason": "Size comparison done so well it is almost uncomfortable. Beautiful to watch on the TV.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/3mnSDifDSxQ/hqdefault.jpg",
   "duration": "11:59",
   "seconds": 719,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "R451yqCHoc0",
   "title": "How do we measure the universe?",
   "url": "https://www.youtube.com/watch?v=R451yqCHoc0",
   "channel": "Be Smart",
   "channelUrl": "https://www.youtube.com/@besmart",
   "category": "Space & Earth",
   "minAge": 10,
   "reason": "The method, not the number: parallax, standard candles, redshift. This is how you know you know.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/R451yqCHoc0/hqdefault.jpg",
   "duration": "11:13",
   "seconds": 673,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "4czjS9h4Fpg",
   "title": "Landing on Mars, real footage",
   "url": "https://www.youtube.com/watch?v=4czjS9h4Fpg",
   "channel": "NASA",
   "channelUrl": "https://www.youtube.com/@NASA",
   "category": "Space & Earth",
   "minAge": 7,
   "reason": "Actual cameras on actual Perseverance. No narration needed.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/4czjS9h4Fpg/hqdefault.jpg",
   "duration": "3:25",
   "seconds": 205,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "qFjw6Lc6J2g",
   "title": "How to fly a spaceship to the ISS",
   "url": "https://www.youtube.com/watch?v=qFjw6Lc6J2g",
   "channel": "SmarterEveryDay",
   "channelUrl": "https://www.youtube.com/@smartereveryday",
   "category": "Space & Earth",
   "minAge": 9,
   "reason": "Orbital mechanics explained by a real engineer who keeps saying 'this is counter-intuitive'.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/qFjw6Lc6J2g/hqdefault.jpg",
   "duration": "10:06",
   "seconds": 606,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "lheapd7bgLA",
   "title": "What if the Moon crashed into Earth?",
   "url": "https://www.youtube.com/watch?v=lheapd7bgLA",
   "channel": "Kurzgesagt - In a Nutshell",
   "channelUrl": "https://www.youtube.com/@kurzgesagt",
   "category": "Space & Earth",
   "minAge": 9,
   "reason": "A 'what if' done with real physics. Kids love the destruction; the reasoning is the smuggled lesson.",
   "caution": "Ends with everything on Earth dying - fine for most, not for an anxious child at bedtime.",
   "cover": "https://i.ytimg.com/vi/lheapd7bgLA/hqdefault.jpg",
   "duration": "10:27",
   "seconds": 627,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "gLZJlf5rHVs",
   "title": "What if Earth left the Solar System?",
   "url": "https://www.youtube.com/watch?v=gLZJlf5rHVs",
   "channel": "Kurzgesagt - In a Nutshell",
   "channelUrl": "https://www.youtube.com/@kurzgesagt",
   "category": "Space & Earth",
   "minAge": 9,
   "reason": "Same game, different variable. Predict each stage before it is shown.",
   "caution": "Bleak in places.",
   "cover": "https://i.ytimg.com/vi/gLZJlf5rHVs/hqdefault.jpg",
   "duration": "10:00",
   "seconds": 600,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "c0bsKc4tiuY",
   "title": "Why you should make useless things",
   "url": "https://www.youtube.com/watch?v=c0bsKc4tiuY",
   "channel": "TED",
   "channelUrl": "https://www.youtube.com/@TED",
   "category": "Making",
   "minAge": 8,
   "reason": "Simone Giertz on building badly on purpose. The permission slip for this entire theme.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/c0bsKc4tiuY/hqdefault.jpg",
   "duration": "11:58",
   "seconds": 718,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "CWulQ1ZSE3c",
   "title": "How an electric motor works",
   "url": "https://www.youtube.com/watch?v=CWulQ1ZSE3c",
   "channel": "Jared Owen",
   "channelUrl": "https://www.youtube.com/@JaredOwen",
   "category": "Making",
   "minAge": 8,
   "reason": "Needed before anything built here can move. Clear enough to copy with a battery and some wire.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/CWulQ1ZSE3c/hqdefault.jpg",
   "duration": "9:01",
   "seconds": 541,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "W6mixXsn-Vc",
   "title": "How to use a breadboard",
   "url": "https://www.youtube.com/watch?v=W6mixXsn-Vc",
   "channel": "LeftyMaker",
   "channelUrl": "https://www.youtube.com/@LeftyMaker",
   "category": "Making",
   "minAge": 9,
   "reason": "Plain and practical. Watch it once with the breadboard already in hand.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/W6mixXsn-Vc/hqdefault.jpg",
   "duration": "4:16",
   "seconds": 256,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "ZIW_6rxYNBg",
   "title": "Getting started with micro:bit",
   "url": "https://www.youtube.com/watch?v=ZIW_6rxYNBg",
   "channel": "Shawn Hymel",
   "channelUrl": "https://www.youtube.com/@ShawnHymel",
   "category": "Making",
   "minAge": 9,
   "reason": "Gentler than Arduino, block-based first. The right first board for Primary 3.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/ZIW_6rxYNBg/hqdefault.jpg",
   "duration": "6:39",
   "seconds": 399,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "fJWR7dBuc18",
   "title": "Arduino, lesson one",
   "url": "https://www.youtube.com/watch?v=fJWR7dBuc18",
   "channel": "Paul McWhorter",
   "channelUrl": "https://www.youtube.com/@paulmcwhorter",
   "category": "Making",
   "minAge": 10,
   "reason": "Slow, thorough, and he explains why, not just what. The whole series is the real course.",
   "caution": "23 minutes and he genuinely expects you to follow along - set up the parts first.",
   "cover": "https://i.ytimg.com/vi/fJWR7dBuc18/hqdefault.jpg",
   "duration": "23:50",
   "seconds": 1430,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "KGwtit2bFyo",
   "title": "Making a board sense distance",
   "url": "https://www.youtube.com/watch?v=KGwtit2bFyo",
   "channel": "Robonyx",
   "channelUrl": "https://www.youtube.com/@Robonyx",
   "category": "Making",
   "minAge": 10,
   "reason": "Ultrasonic sensors in four minutes. This is the step where a build stops being a light and starts being a robot.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/KGwtit2bFyo/hqdefault.jpg",
   "duration": "4:08",
   "seconds": 248,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "rK38rpUy568",
   "title": "Soldering, properly, from iFixit",
   "url": "https://www.youtube.com/watch?v=rK38rpUy568",
   "channel": "iFixit",
   "channelUrl": "https://www.youtube.com/@iFixitYourself",
   "category": "Making",
   "minAge": 10,
   "reason": "The safety and technique video. Hot iron, fumes - adult at the table, no exceptions.",
   "caution": "Adult supervision required. Watch before the iron is plugged in.",
   "cover": "https://i.ytimg.com/vi/rK38rpUy568/hqdefault.jpg",
   "duration": "6:46",
   "seconds": 406,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "MHTizZ_XcUM",
   "title": "A dartboard that always hits bullseye",
   "url": "https://www.youtube.com/watch?v=MHTizZ_XcUM",
   "channel": "Mark Rober",
   "channelUrl": "https://www.youtube.com/@MarkRober",
   "category": "Making",
   "minAge": 8,
   "reason": "Motion tracking, motors and maths in one object. Shows where all of this is going.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/MHTizZ_XcUM/hqdefault.jpg",
   "duration": "5:36",
   "seconds": 336,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "f94CnlQ0eq4",
   "title": "How a 3D printer works",
   "url": "https://www.youtube.com/watch?v=f94CnlQ0eq4",
   "channel": "Jared Owen",
   "channelUrl": "https://www.youtube.com/@JaredOwen",
   "category": "Making",
   "minAge": 9,
   "reason": "Useful if you ever get access to one, and a good look at how motion is controlled by code.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/f94CnlQ0eq4/hqdefault.jpg",
   "duration": "16:35",
   "seconds": 995,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "aQxCnmhqZko",
   "title": "The magic square party trick",
   "url": "https://www.youtube.com/watch?v=aQxCnmhqZko",
   "channel": "Numberphile",
   "channelUrl": "https://www.youtube.com/@numberphile",
   "category": "Maths",
   "minAge": 8,
   "reason": "Learnable in one sitting. Learning the trick is learning the structure.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/aQxCnmhqZko/hqdefault.jpg",
   "duration": "3:58",
   "seconds": 238,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "cpwSGsb-rTs",
   "title": "Can you solve the frog riddle?",
   "url": "https://www.youtube.com/watch?v=cpwSGsb-rTs",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Maths",
   "minAge": 9,
   "reason": "Pause at the countdown. Probability that feels wrong until you draw it out.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/cpwSGsb-rTs/hqdefault.jpg",
   "duration": "4:30",
   "seconds": 270,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "7yDmGnA8Hw0",
   "title": "Can you solve the bridge riddle?",
   "url": "https://www.youtube.com/watch?v=7yDmGnA8Hw0",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Maths",
   "minAge": 9,
   "reason": "Same format, pure logic. The schedule has to be written down.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/7yDmGnA8Hw0/hqdefault.jpg",
   "duration": "3:50",
   "seconds": 230,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "DRjFV_DETKQ",
   "title": "Sunflowers and Fibonacci",
   "url": "https://www.youtube.com/watch?v=DRjFV_DETKQ",
   "channel": "Numberphile",
   "channelUrl": "https://www.youtube.com/@numberphile",
   "category": "Maths",
   "minAge": 8,
   "reason": "Then go outside and count the spirals on a real flower or pinecone. It works.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/DRjFV_DETKQ/hqdefault.jpg",
   "duration": "5:26",
   "seconds": 326,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "Uj3_KqkI9Zo",
   "title": "The infinite hotel paradox",
   "url": "https://www.youtube.com/watch?v=Uj3_KqkI9Zo",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Maths",
   "minAge": 10,
   "reason": "Infinity as something you can reason about rather than just a big number.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/Uj3_KqkI9Zo/hqdefault.jpg",
   "duration": "6:00",
   "seconds": 360,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "UPA3bwVVzGI",
   "title": "How big is infinity?",
   "url": "https://www.youtube.com/watch?v=UPA3bwVVzGI",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Maths",
   "minAge": 10,
   "reason": "The follow-up: some infinities are bigger. A genuinely mind-expanding seven minutes.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/UPA3bwVVzGI/hqdefault.jpg",
   "duration": "7:12",
   "seconds": 432,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "PGuRmqpr6Oo",
   "title": "The key to the Tower of Hanoi",
   "url": "https://www.youtube.com/watch?v=PGuRmqpr6Oo",
   "channel": "Numberphile",
   "channelUrl": "https://www.youtube.com/@numberphile",
   "category": "Maths",
   "minAge": 10,
   "reason": "Recursion without the word recursion. Build it with coins afterwards.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/PGuRmqpr6Oo/hqdefault.jpg",
   "duration": "14:07",
   "seconds": 847,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "1gBwexpG0IY",
   "title": "The problem with 7825",
   "url": "https://www.youtube.com/watch?v=1gBwexpG0IY",
   "channel": "Numberphile",
   "channelUrl": "https://www.youtube.com/@numberphile",
   "category": "Maths",
   "minAge": 11,
   "reason": "A proof so large only a computer could check it. Perfect bridge into the computer themes.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/1gBwexpG0IY/hqdefault.jpg",
   "duration": "11:22",
   "seconds": 682,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "GNcFjFmqEc8",
   "title": "Why a sphere's area is four times its shadow",
   "url": "https://www.youtube.com/watch?v=GNcFjFmqEc8",
   "channel": "3Blue1Brown",
   "channelUrl": "https://www.youtube.com/@3blue1brown",
   "category": "Maths",
   "minAge": 11,
   "reason": "The hardest thing in this theme. If it lands, the whole 3Blue1Brown catalogue is now open.",
   "caution": "Needs a bit of geometry - fine to save for later.",
   "cover": "https://i.ytimg.com/vi/GNcFjFmqEc8/hqdefault.jpg",
   "duration": "15:50",
   "seconds": 950,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "wgbV6DLVezo",
   "title": "How binary code actually works",
   "url": "https://www.youtube.com/watch?v=wgbV6DLVezo",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "Computers",
   "minAge": 9,
   "reason": "Four minutes, and writing your own name in ones and zeroes follows straight away.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/wgbV6DLVezo/hqdefault.jpg",
   "duration": "4:40",
   "seconds": 280,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "thrx3SBEpL8",
   "title": "Why do computers use binary?",
   "url": "https://www.youtube.com/watch?v=thrx3SBEpL8",
   "channel": "Computerphile",
   "channelUrl": "https://www.youtube.com/@Computerphile",
   "category": "Computers",
   "minAge": 10,
   "reason": "Answers the obvious follow-up: why only two symbols? Because voltage is noisy.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/thrx3SBEpL8/hqdefault.jpg",
   "duration": "8:29",
   "seconds": 509,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "gI-qXk7XojA",
   "title": "Logic gates",
   "url": "https://www.youtube.com/watch?v=gI-qXk7XojA",
   "channel": "CrashCourse",
   "channelUrl": "https://www.youtube.com/@crashcourse",
   "category": "Computers",
   "minAge": 10,
   "reason": "AND, OR, NOT, XOR. Build them with two switches and a bulb afterwards.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/gI-qXk7XojA/hqdefault.jpg",
   "duration": "10:07",
   "seconds": 607,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "O5nskjZ_GoI",
   "title": "Where computers came from",
   "url": "https://www.youtube.com/watch?v=O5nskjZ_GoI",
   "channel": "CrashCourse",
   "channelUrl": "https://www.youtube.com/@crashcourse",
   "category": "Computers",
   "minAge": 10,
   "reason": "Looms, punch cards, war machines. Useful context before the abstraction piles up.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/O5nskjZ_GoI/hqdefault.jpg",
   "duration": "11:53",
   "seconds": 713,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "QZwneRb-zqA",
   "title": "From a single switch to a computer",
   "url": "https://www.youtube.com/watch?v=QZwneRb-zqA",
   "channel": "Sebastian Lague",
   "channelUrl": "https://www.youtube.com/@SebastianLague",
   "category": "Computers",
   "minAge": 11,
   "reason": "He builds up from transistors in a simulator. The single best 'it all clicks' video on computing.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/QZwneRb-zqA/hqdefault.jpg",
   "duration": "18:12",
   "seconds": 1092,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "_Pqfjer8-O4",
   "title": "How transistors become a CPU",
   "url": "https://www.youtube.com/watch?v=_Pqfjer8-O4",
   "channel": "Branch Education",
   "channelUrl": "https://www.youtube.com/@BranchEducation",
   "category": "Computers",
   "minAge": 11,
   "reason": "The deep dive. Only once the appetite is there - 27 minutes and no padding.",
   "caution": "Long and dense. Optional.",
   "cover": "https://i.ytimg.com/vi/_Pqfjer8-O4/hqdefault.jpg",
   "duration": "26:45",
   "seconds": 1605,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "0yCJMt9Mx9c",
   "title": "How does AI learn?",
   "url": "https://www.youtube.com/watch?v=0yCJMt9Mx9c",
   "channel": "TED-Ed",
   "channelUrl": "https://www.youtube.com/@TEDEd",
   "category": "AI",
   "minAge": 9,
   "reason": "The gentlest honest introduction. Sets up everything that follows.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/0yCJMt9Mx9c/hqdefault.jpg",
   "duration": "4:57",
   "seconds": 297,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "R9OHn5ZF4Uo",
   "title": "AI doesn't know things, it pattern-matches",
   "url": "https://www.youtube.com/watch?v=R9OHn5ZF4Uo",
   "channel": "CGP Grey",
   "channelUrl": "https://www.youtube.com/@CGPGrey",
   "category": "AI",
   "minAge": 10,
   "reason": "The most important video in this list for a kid growing up with chatbots. Watch it twice.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/R9OHn5ZF4Uo/hqdefault.jpg",
   "duration": "8:54",
   "seconds": 534,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "i8D90DkCLhI",
   "title": "Teaching a computer to see",
   "url": "https://www.youtube.com/watch?v=i8D90DkCLhI",
   "channel": "Welch Labs",
   "channelUrl": "https://www.youtube.com/@WelchLabs",
   "category": "AI",
   "minAge": 10,
   "reason": "Starts from a real problem - telling two things apart - and shows why it is hard.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/i8D90DkCLhI/hqdefault.jpg",
   "duration": "6:21",
   "seconds": 381,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "z-EtmaFJieY",
   "title": "Machine learning, the overview",
   "url": "https://www.youtube.com/watch?v=z-EtmaFJieY",
   "channel": "CrashCourse",
   "channelUrl": "https://www.youtube.com/@crashcourse",
   "category": "AI",
   "minAge": 10,
   "reason": "Ties the vocabulary together: training data, features, models, error.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/z-EtmaFJieY/hqdefault.jpg",
   "duration": "11:51",
   "seconds": 711,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "aircAruvnKk",
   "title": "But what IS a neural network?",
   "url": "https://www.youtube.com/watch?v=aircAruvnKk",
   "channel": "3Blue1Brown",
   "channelUrl": "https://www.youtube.com/@3blue1brown",
   "category": "AI",
   "minAge": 11,
   "reason": "The destination of the whole ladder. Neurons, layers and weights, actually explained.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/aircAruvnKk/hqdefault.jpg",
   "duration": "18:40",
   "seconds": 1120,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "CqOfi41LfDw",
   "title": "Neural networks, the main ideas",
   "url": "https://www.youtube.com/watch?v=CqOfi41LfDw",
   "channel": "StatQuest with Josh Starmer",
   "channelUrl": "https://www.youtube.com/@statquest",
   "category": "AI",
   "minAge": 11,
   "reason": "A second pass at the same ideas with a different voice. Two explanations beat one.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/CqOfi41LfDw/hqdefault.jpg",
   "duration": "18:54",
   "seconds": 1134,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "IHZwWFHWa-w",
   "title": "How a network gets better: gradient descent",
   "url": "https://www.youtube.com/watch?v=IHZwWFHWa-w",
   "channel": "3Blue1Brown",
   "channelUrl": "https://www.youtube.com/@3blue1brown",
   "category": "AI",
   "minAge": 11,
   "reason": "Learning as rolling downhill. This is the idea behind every model they will ever use.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/IHZwWFHWa-w/hqdefault.jpg",
   "duration": "20:33",
   "seconds": 1233,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "jmznx0Q1fP0",
   "title": "Train your own model in a browser",
   "url": "https://www.youtube.com/watch?v=jmznx0Q1fP0",
   "channel": "The Coding Train",
   "channelUrl": "https://www.youtube.com/@TheCodingTrain",
   "category": "AI",
   "minAge": 11,
   "reason": "Stop watching, start building. Daniel Shiffman is the friendliest teacher on the platform.",
   "caution": "",
   "cover": "https://i.ytimg.com/vi/jmznx0Q1fP0/hqdefault.jpg",
   "duration": "23:18",
   "seconds": 1398,
   "titleLocked": true,
   "dead": false
  },
  {
   "id": "fa8k8IQ1_X0",
   "title": "Where is AI going?",
   "url": "https://www.youtube.com/watch?v=fa8k8IQ1_X0",
   "channel": "Kurzgesagt - In a Nutshell",
   "channelUrl": "https://www.youtube.com/@kurzgesagt",
   "category": "AI",
   "minAge": 11,
   "reason": "Worth watching together so the scary parts get discussed rather than absorbed alone.",
   "caution": "Talks about risk and job loss. Watch it together, not instead.",
   "cover": "https://i.ytimg.com/vi/fa8k8IQ1_X0/hqdefault.jpg",
   "duration": "16:43",
   "seconds": 1003,
   "titleLocked": true,
   "dead": false
  }
 ],
 "tiers": [
  {
   "tier": "S",
   "label": "Put these on without checking",
   "items": [
    {
     "name": "Jared Owen",
     "url": "https://www.youtube.com/@JaredOwen",
     "what": "3D animations of how everyday objects work",
     "like": "Short, no filler, no shouting. The best starting channel on this whole list.",
     "kid": "go"
    },
    {
     "name": "Animagraffs",
     "url": "https://www.youtube.com/@animagraffs",
     "what": "Cutaway animations of engines, aircraft, buildings",
     "like": "Same job as Jared Owen with more detail. Watch the length - some run very long.",
     "kid": "go"
    },
    {
     "name": "TED-Ed",
     "url": "https://www.youtube.com/@TEDEd",
     "what": "Four to seven minute animated lessons and riddles",
     "like": "The riddles demand thinking instead of watching. Enormous back catalogue.",
     "kid": "go"
    },
    {
     "name": "Veritasium",
     "url": "https://www.youtube.com/@veritasium",
     "what": "Physics and engineering, usually built around a wrong intuition",
     "like": "Derek asks people to predict first. That habit is worth more than the physics.",
     "kid": "go"
    },
    {
     "name": "Steve Mould",
     "url": "https://www.youtube.com/@SteveMould",
     "what": "Odd physical phenomena, demonstrated then explained",
     "like": "He is honest about what he does not know, and he shows the failed attempts.",
     "kid": "go"
    },
    {
     "name": "Mark Rober",
     "url": "https://www.youtube.com/@MarkRober",
     "what": "Big engineering builds, ex-NASA",
     "like": "Models iteration better than anyone: build, fail, measure, rebuild.",
     "kid": "go"
    },
    {
     "name": "Kurzgesagt",
     "url": "https://www.youtube.com/@kurzgesagt",
     "what": "Beautifully animated science and big-picture questions",
     "like": "Gorgeous on the TV. Some videos end darkly - check the note before pressing play.",
     "kid": "interest"
    }
   ]
  },
  {
   "tier": "A",
   "label": "Reliable, pick by topic",
   "items": [
    {
     "name": "Be Smart",
     "url": "https://www.youtube.com/@besmart",
     "what": "Biology, earth and space with Joe Hanson",
     "like": "Answers 'why' properly rather than giving a slogan.",
     "kid": "go"
    },
    {
     "name": "SmarterEveryDay",
     "url": "https://www.youtube.com/@smartereveryday",
     "what": "Destin, an engineer, going to see things in person",
     "like": "Curiosity shown as a personality trait, not a school subject.",
     "kid": "go"
    },
    {
     "name": "Numberphile",
     "url": "https://www.youtube.com/@numberphile",
     "what": "Mathematicians with brown paper and markers",
     "like": "Real mathematicians being delighted. Pick by video - the range of difficulty is huge.",
     "kid": "interest"
    },
    {
     "name": "SciShow Kids",
     "url": "https://www.youtube.com/@SciShowKids",
     "what": "Science for roughly ages 5 to 9",
     "like": "The right level when the rest of this list is too fast.",
     "kid": "go"
    },
    {
     "name": "NASA",
     "url": "https://www.youtube.com/@NASA",
     "what": "Mission footage and explainers",
     "like": "Real footage beats any animation. Some streams are extremely dull - pick carefully.",
     "kid": "go"
    },
    {
     "name": "Physics Girl",
     "url": "https://www.youtube.com/@physicsgirl",
     "what": "Hands-on physics demonstrations",
     "like": "Nearly everything can be repeated at home with no shopping.",
     "kid": "go"
    },
    {
     "name": "CrashCourse",
     "url": "https://www.youtube.com/@crashcourse",
     "what": "Structured courses, 10 to 12 minutes per episode",
     "like": "Fast and dense. Best watched as a series with pauses, not alone.",
     "kid": "interest"
    },
    {
     "name": "Branch Education",
     "url": "https://www.youtube.com/@BranchEducation",
     "what": "Extremely detailed animations of modern technology",
     "like": "The best answer to 'how does this actually work' - but often 25 minutes plus.",
     "kid": "interest"
    },
    {
     "name": "CGP Grey",
     "url": "https://www.youtube.com/@CGPGrey",
     "what": "Systems, rules and technology explained crisply",
     "like": "His AI videos are the clearest thing a child can watch on the subject.",
     "kid": "go"
    },
    {
     "name": "Sebastian Lague",
     "url": "https://www.youtube.com/@SebastianLague",
     "what": "Coding adventures, built live and visually",
     "like": "Shows the process including the bugs. The computing video is outstanding.",
     "kid": "interest"
    },
    {
     "name": "BBC",
     "url": "https://www.youtube.com/@BBC",
     "what": "Clips from BBC science documentaries",
     "like": "The Brian Cox vacuum chamber clip alone earns the slot.",
     "kid": "go"
    },
    {
     "name": "iFixit",
     "url": "https://www.youtube.com/@iFixitYourself",
     "what": "Repair guides and teardowns",
     "like": "Teaches that things are meant to be opened. Tool safety is taken seriously.",
     "kid": "pick"
    },
    {
     "name": "TED",
     "url": "https://www.youtube.com/@TED",
     "what": "Conference talks",
     "like": "Mostly aimed at adults. A handful of talks are perfect for kids - pick them yourself.",
     "kid": "pick"
    }
   ]
  },
  {
   "tier": "B",
   "label": "Good for a specific job",
   "items": [
    {
     "name": "Welch Labs",
     "url": "https://www.youtube.com/@WelchLabs",
     "what": "Short series on machine learning and maths history",
     "like": "The 'Learning to See' series is the gentlest route into why vision is hard.",
     "kid": "interest"
    },
    {
     "name": "StatQuest",
     "url": "https://www.youtube.com/@statquest",
     "what": "Statistics and machine learning, very slowly",
     "like": "Repetitive on purpose, which is exactly what a second explanation should be.",
     "kid": "later"
    },
    {
     "name": "Computerphile",
     "url": "https://www.youtube.com/@Computerphile",
     "what": "Computer science interviews, whiteboard style",
     "like": "Academics explaining their own field. Assumes some interest already exists.",
     "kid": "later"
    },
    {
     "name": "The Coding Train",
     "url": "https://www.youtube.com/@TheCodingTrain",
     "what": "Live-coded creative programming",
     "like": "Daniel Shiffman is the friendliest teacher on the platform. Long but followable.",
     "kid": "interest"
    },
    {
     "name": "3Blue1Brown",
     "url": "https://www.youtube.com/@3blue1brown",
     "what": "Visual mathematics, from geometry to neural networks",
     "like": "The best maths animation anywhere, and the end of this ladder. Needs patience.",
     "kid": "later"
    },
    {
     "name": "Shawn Hymel",
     "url": "https://www.youtube.com/@ShawnHymel",
     "what": "Embedded electronics tutorials",
     "like": "Clear micro:bit and Arduino walkthroughs from an ex-SparkFun engineer.",
     "kid": "pick"
    },
    {
     "name": "Paul McWhorter",
     "url": "https://www.youtube.com/@paulmcwhorter",
     "what": "Long-form Arduino and Python courses",
     "like": "A retired teacher who explains why, not just what. Expect real homework.",
     "kid": "pick"
    }
   ]
  },
  {
   "tier": "C",
   "label": "Fine, but choose the video yourself",
   "items": [
    {
     "name": "LeftyMaker",
     "url": "https://www.youtube.com/@LeftyMaker",
     "what": "Short practical electronics how-tos",
     "like": "Used here for one breadboard tutorial. Watch what you pick.",
     "kid": "pick"
    },
    {
     "name": "Robonyx",
     "url": "https://www.youtube.com/@Robonyx",
     "what": "Arduino and robotics tutorials",
     "like": "Practical and quick. Quality varies between videos.",
     "kid": "pick"
    }
   ]
  },
  {
   "tier": "D",
   "label": "Deliberately not on this list",
   "items": [
    {
     "name": "Algorithm-built kids' channels",
     "url": "",
     "what": "High-volume animated 'learning' content made for watch time",
     "like": "Endless, interchangeable, and designed so that stopping feels wrong.",
     "kid": "later"
    },
    {
     "name": "Fake-experiment channels",
     "url": "",
     "what": "Thumbnail-driven 'science' with staged or edited results",
     "like": "Actively teaches the opposite of this list: that the result matters more than the method.",
     "kid": "later"
    },
    {
     "name": "Reaction and unboxing",
     "url": "",
     "what": "Commentary over someone else's work",
     "like": "Nothing wrong with it. It just is not what this player is for.",
     "kid": "later"
    }
   ]
  }
 ],
 "built": "2026-11-15"
};
