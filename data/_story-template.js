/* TEMPLATE — copy to data/story-11.js, edit, then add <script src="data/story-11.js"></script>
   to index.html (before js/games.js) and the file to ASSETS in sw.js. Not loaded by the site. */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-11',            // unique
  title: 'Story title',
  theme: 'Family',           // shown as a small tag: Family, Daily life, Travel…
  emoji: '🍋',
  level: 'A2',               // A2 or B1
  summary: 'One sentence shown on the story list.',
  intro: 'Setting the scene in English (shown on the first screen).',

  /* Tappable glossary. Keys are lower-case Italian words exactly as they appear in the lines
     (punctuation ignored). "l'invito" also matches a key "invito". */
  words: { ciao: 'hi / bye' },

  /* Each scene: optional English `note`, one or more `lines`, and (usually) `choices` for her reply.
     ok: true  → natural reply, false → awkward/rude one. `why` explains in English.
     Give 3 choices (2 good, 1 not ideal) so there is always something to learn. */
  scenes: [
    { note: 'Optional narration.',
      lines: [{ who: 'Nonna', it: 'Ciao!', en: 'Hi!' }],
      choices: [
        { it: 'Ciao, nonna!', en: 'Hi, Nonna!', ok: true, why: 'Friendly.' },
        { it: 'Buongiorno, nonna!', en: 'Good morning, Nonna!', ok: true, why: 'Polite.' },
        { it: 'Chi sei?', en: 'Who are you?', ok: false, why: 'Rude to family.' },
      ] },
  ],

  /* Shown at the end with audio buttons. */
  phrases: [{ it: 'Ciao, nonna!', en: 'Hi, Nonna!' }],
});
