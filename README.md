# Escape the Google Cloud: participant kit

GDGoC UTCN × CodeRun. Everything you need before the contest starts.

**Read the guide first:** [Escape_the_Google_Cloud_Participant_Guide.pdf](Escape_the_Google_Cloud_Participant_Guide.pdf).
It has the story, every requirement and its points, the examples, and the exact rules
the evaluator uses.

## What to bring

- A laptop with a code editor and a modern browser.
- **Node.js 20 or newer** (needed: checkpoint 2 is JavaScript, and the local test
  runner below uses Node). Check with `node --version`.
- Optional: **Python 3.10+** or any language you like for checkpoints 1, 3 and 4, and
  `curl` or Postman for calling the API by hand.
- No Google account, API key, billing or payment card is needed. The organizers give
  you access to Firestore, Drive and Gemini.

Useful skills: reading and writing JSON, timestamps with time zones, Base64 and UTF-8,
SHA-256, calling an HTTP API with a bearer token, and basic JavaScript.

## On contest day

1. Open the **console URL** announced in the room.
2. Under **First time here?**, type your team name as you registered it and **choose
   your track**: EASY (90 points) or HARD (180 points). The track cannot be changed later.
3. You receive your **team token** (`tk_…`) once. Save it and share it only with your
   teammates; they log in with it.
4. When the organizers open the event, work through checkpoints 1 to 4, then submit
   your four fragments on the final page.

## What you will write

| Checkpoint | You submit | Language |
|---|---|---|
| 1 · Firestore | JSON answers for every case of your dataset | any (a script is the practical way) |
| 2 · Apps Script | **JavaScript source** of `validateAccess` (EASY) or `validateRequests` (HARD) | **JavaScript** (Apps Script V8: no `require`, no Node or browser APIs) |
| 3 · Gemini | at least one Gemini request (the console's **Ask Gemini** panel is enough), then JSON answers | any |
| 4 · Drive | JSON answers for every case | any |
| Final | your four fragments in order (HARD: plus the evidence trace) | – |

## Practise checkpoint 2 now

The public test fixtures from the guide's appendix are in `public_fixtures/`, and
`starter/` has empty functions plus a runner:

```bash
node starter/run-fixtures.js easy     # tests starter/validateAccess.js
node starter/run-fixtures.js hard     # tests starter/validateRequests.js
```

Make every fixture pass, then submit the whole `.js` file in the console. The organizers
also run hidden tests, so follow the rules in the guide, not just the fixtures.

## Tips

- Every dataset has a `main` case (your real data) and extra test cases. Answer **all**
  of them in one JSON object keyed by case id.
- At most one submission per checkpoint every 30 seconds, and 30 per checkpoint.
- Types are exact: `"5"` is not `5`, `"false"` is not `false`.
- Read your Firestore collection once and work from your copy.
- Gemini can be wrong or misled by the logs: check its answer against the evidence.
