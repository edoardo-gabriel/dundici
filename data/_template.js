/* ============================================================================
   TEMPLATE — copy this file to data/unit-11.js (etc.), edit it, then add
   <script src="data/unit-11.js"></script> to index.html (before js/lessons.js)
   and "data/unit-11.js" to the ASSETS list in sw.js.
   This file itself is NOT loaded by the site.
   ============================================================================ */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-11',            // unique, no spaces
  number: 11,               // order in the lesson list
  title: 'Title in Italian',
  subtitle: 'One-line summary shown on the lesson list.',
  // scaffold: true,        // optional: shows a "draft" tag. Delete when the unit is finished.

  /* Grammar notes. `html` is a template string; you can use <p>, <ul>, <table>, <strong>.
     Wrap Italian text in lang="it". Handy classes: formula, tip, table-scroll. */
  grammar: [
    { title: 'Section heading', html: `<p>Explanation with <span lang="it">Italian</span> inside.</p>` },
  ],

  /* Example sentences — each gets a speaker button. */
  examples: [{ it: 'Una frase di esempio.', en: 'An example sentence.' }],

  /* Vocabulary — each item becomes a flashcard automatically.
     id: unique within the unit (keep it stable once she has progress!)
     gender: 'm' | 'f' (nouns only; include the article in `it`)
     say: optional text to speak if it differs from `it`. */
  vocab: [{ id: 'esempio', it: "l'esempio", en: 'the example', gender: 'm' }],

  /* Exercises — mix and match any of these four types. */
  exercises: [
    // Multiple choice. `answer` = index of the correct option.
    // promptLang: 'it' if the prompt is Italian; optionLang: 'en' if the options are English.
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Io ___ a casa.', promptLang: 'it',
      options: ['sono', 'ho', 'è'], answer: 0, explain: 'Short explanation shown after answering.' },

    // Fill in the blank. Use ___ in the prompt. `answer` = list of accepted answers.
    // Accents are optional when she types ("e" is accepted for "è" with a gentle reminder).
    { type: 'fill', prompt: 'Noi ___ al cinema.', hint: 'andare', answer: ['andiamo'], explain: '…' },

    // Translation English → Italian. List every acceptable variant (subject pronouns are optional).
    { type: 'translate', prompt: 'I am at home.', answer: ['sono a casa'], explain: '…' },

    // Listening. mode 'choose' → options + answer index; mode 'type' → answer list.
    // These are skipped automatically when no Italian voice is available.
    { type: 'listen', mode: 'choose', audio: 'Sono a casa.', en: 'I am at home.',
      options: ['Sono a casa.', 'Sono in casa.', 'Sei a casa.'], answer: 0, explain: '…' },
    { type: 'listen', mode: 'type', audio: 'Sono a casa.', en: 'I am at home.', answer: ['sono a casa'] },
  ],
});
