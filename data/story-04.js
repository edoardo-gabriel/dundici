/* Story 4 — Al bar: il bombolone */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-04',
  title: 'Al bar: il bombolone',
  theme: 'Daily life',
  emoji: '🍩',
  level: 'A2',
  summary: 'Order a cappuccino and a bombolone, pay, and meet a friend at the bar.',
  intro: "It's eight in the morning. You walk into a bar for breakfast.",
  words: {
    dica: 'tell me / go ahead', pure: 'please (go ahead)', subito: 'right away', cappuccino: 'cappuccino', cornetti: 'croissants',
    bomboloni: 'filled doughnuts', appena: 'just / freshly', fatti: 'made', crema: 'custard', cornetto: 'croissant', vuoto: 'plain (empty)',
    ecco: 'here you are', euro: 'euros', carta: 'card', caro: 'expensive', assaggia: 'taste! (informal)', caldo: 'hot / warm',
    preferito: 'favourite', offro: 'I treat / I offer', colazione: 'breakfast', buonissimo: 'delicious', gentile: 'kind',
  },
  scenes: [
    { lines: [{ who: 'Barista', it: 'Buongiorno! Dica pure.', en: 'Good morning! What can I get you?' }],
      choices: [
        { it: 'Buongiorno! Un cappuccino, per favore.', en: 'Good morning! A cappuccino, please.', ok: true, why: 'Short and polite — perfect for a bar.' },
        { it: 'Vorrei un cappuccino e una spremuta, per favore.', en: "I'd like a cappuccino and a fresh juice, please.", ok: true, why: 'A spremuta is a freshly squeezed juice.' },
        { it: 'Dammi un cappuccino.', en: 'Give me a cappuccino.', ok: false, why: 'Too abrupt, and "dammi" is informal. Add "per favore".' },
      ] },
    { lines: [{ who: 'Barista', it: 'Subito! Vuole anche qualcosa da mangiare? Abbiamo i cornetti e i bomboloni appena fatti.', en: 'Right away! Would you like something to eat too? We have croissants and bomboloni, freshly made.' }],
      choices: [
        { it: 'Sì, un bombolone alla crema, grazie!', en: 'Yes, a custard bombolone, thank you!', ok: true, why: 'The best choice, obviously.' },
        { it: 'Un cornetto vuoto, per favore.', en: 'A plain croissant, please.', ok: true, why: '"Vuoto" means plain, with no filling.' },
        { it: 'Voglio il bombolone grande.', en: 'I want the big bombolone.', ok: false, why: '"Voglio" sounds demanding. Say "vorrei" or "prendo".' },
      ] },
    { lines: [{ who: 'Barista', it: 'Ecco a lei. Sono quattro euro e cinquanta.', en: 'Here you are. That is four euros fifty.' }],
      choices: [
        { it: 'Ecco a lei. Grazie mille!', en: 'Here you are. Thank you very much!', ok: true, why: 'Friendly and polite.' },
        { it: 'Posso pagare con la carta?', en: 'Can I pay by card?', ok: true, why: 'A useful question — small bars sometimes prefer cash.' },
        { it: 'È troppo caro!', en: "It's too expensive!", ok: false, why: 'Not helpful here, and a bit rude.' },
      ] },
    { note: 'Your friend Luca walks in.',
      lines: [{ who: 'Luca', it: 'Ciao! Anche tu qui? Che cosa mangi di buono?', en: 'Hi! You here too? What are you eating that is good?' }],
      choices: [
        { it: 'Un bombolone alla crema: è il mio dolce preferito!', en: "A custard bombolone: it's my favourite sweet!", ok: true, why: 'Great — "il mio ... preferito" = my favourite.' },
        { it: 'Assaggia! È ancora caldo.', en: "Taste it! It's still warm.", ok: true, why: '"Assaggia" is the informal command to a friend.' },
        { it: 'Niente.', en: 'Nothing.', ok: false, why: 'A conversation stopper. Tell him what you are eating!' },
      ] },
    { lines: [{ who: 'Luca', it: 'Mmm, è buonissimo! Domani offro io la colazione, va bene?', en: "Mmm, it's delicious! Tomorrow breakfast is on me, OK?" }],
      choices: [
        { it: 'Perfetto, grazie! Ci vediamo domani qui alle otto.', en: 'Perfect, thanks! See you here tomorrow at eight.', ok: true, why: 'Accepting and fixing a time — very natural.' },
        { it: 'Che gentile! Allora il caffè lo offro io.', en: "How kind! Then the coffee's on me.", ok: true, why: 'Offering something back is polite.' },
        { it: 'No.', en: 'No.', ok: false, why: 'Too short and cold. Say thank you!' },
      ] },
  ],
  phrases: [
    { it: 'Un cappuccino, per favore.', en: 'A cappuccino, please.' },
    { it: 'Un bombolone alla crema.', en: 'A custard bombolone.' },
    { it: 'Posso pagare con la carta?', en: 'Can I pay by card?' },
    { it: 'Offro io!', en: "It's on me!" },
  ],
});
