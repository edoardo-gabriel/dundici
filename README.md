# Dundici

A small, static website for learning Italian from A2 towards B1: lessons, spaced-repetition flashcards, quizzes, audio pronunciation and progress tracking. Plain HTML, CSS and vanilla JavaScript. There's no framework, build step or backend.

## Run it locally

**Quickest:** double-click `index.html`. It works straight from disk.

**Recommended** (needed to test offline mode / the service worker). From this folder run either:

```bash
python -m http.server 8000      # then open http://localhost:8000
# or
npx serve .
```

Audio uses the browser's built-in voices. Chrome, Edge and Safari have Italian voices. If none is found, the speaker buttons and listening exercises hide themselves and a small note appears.

## Folder structure

```
index.html          page shell + <script> tags (also lists the unit files)
css/styles.css      all styling (palette is in :root)
js/util.js          helpers: escaping, dates, accent-tolerant answer checking
js/storage.js       localStorage wrapper (falls back to memory if blocked)
js/audio.js         Web Speech API: voice picking, speaker buttons, slow mode
js/lessons.js       lesson index + lesson pages + per-unit progress
js/flashcards.js    Leitner 5-box spaced repetition
js/quiz.js          quiz engine (multiple choice, fill-in, translation, listening)
js/app.js           router, home dashboard, reset dialog
data/unit-XX.js     content: one file per unit
data/_template.js   annotated template for new units (not loaded)
js/games.js         Games section: menu, setup screen, fresh-round picking, results
js/game-words.js    Word scramble, Hangman, Gender sorter
js/game-sentence.js Sentence builder
js/game-duel.js     Conjugation duel
js/story.js         Story mode
data/conjugations.js  verbs for the Conjugation duel
data/story-XX.js    one file per story
data/_story-template.js  annotated template for new stories (not loaded)
sw.js               service worker for offline use
```

Scripts are plain `<script>` files sharing one `window.Italiano` namespace, not ES modules. That's why it works when opened from disk (browsers block ES modules on `file://`).

## Add a new unit

1. Copy `data/_template.js` to `data/unit-11.js`.
2. Change `id` (e.g. `'unit-11'`) and `number`, then fill in `grammar`, `examples`, `vocab` and `exercises`. The template comments explain every field.
3. Add `<script src="data/unit-11.js"></script>` to `index.html`, next to the other unit scripts.
4. Add `'data/unit-11.js'` to the `ASSETS` list in `sw.js` and bump `CACHE` (e.g. `italiano-v2`) so offline copies update.

To finish one of the draft units (4–10), edit its file and delete the line `scaffold: true`.

Notes:
- Flashcards are generated automatically from each unit's `vocab`. Keep vocab `id`s stable once she has started, because they're the keys for her flashcard progress.
- Exercise `answer` lists should include every acceptable translation. Capitalisation, punctuation, accents and subject pronouns (io, tu…) are ignored when checking.

## Games

The **Games** tab has six games. Each round is 10 questions chosen at random from the lesson content, skipping items she saw recently, so rounds stay fresh.

- Word scramble, Hangman and the Gender sorter use the single words in each unit's `vocab`. The sorter uses nouns that have a `gender`.
- Sentence builder uses each unit's `examples` (sentences of 4–9 words).
- Conjugation duel uses `data/conjugations.js`. To add a verb, copy a line and edit it.
- Story mode uses `data/story-XX.js`. To add a story, copy `data/_story-template.js` to `data/story-11.js`, then add its `<script>` tag to `index.html` (before `js/games.js`) and its path to `ASSETS` in `sw.js`.

New units feed the first four games automatically, with no code changes.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to it (`index.html` must be at the repo root).
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, then pick `main` and `/ (root)`, and click **Save**.
4. After about a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

**Netlify:** drag the folder onto <https://app.netlify.com/drop>. No settings are needed.

## Progress & privacy

Progress (completed lessons, scores, flashcard boxes, streak) is saved in the browser's `localStorage` on each device. Nothing is sent anywhere. It is per browser and per device, and clearing site data or using a private window erases it. **Reset progress** is at the bottom of the home page.
