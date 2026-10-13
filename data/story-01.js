/* Story 1 — Pranzo dalla nonna */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-01',
  title: 'Pranzo dalla nonna',
  theme: 'Family',
  emoji: '👵',
  level: 'A2',
  summary: "Sunday lunch at Nonna's house: compliments, politeness and saying no to more food.",
  intro: "It's Sunday. You and your partner arrive at Nonna Rosa's house for lunch.",
  words: {
    tesoro: 'sweetheart / darling', entra: 'come in', pranzo: 'lunch', quasi: 'almost', pronto: 'ready',
    siediti: 'sit down', preferisci: 'do you prefer', acqua: 'water', vino: 'wine', ecco: 'here is / here are',
    stamattina: 'this morning', piacciono: 'you like (them)', magra: 'thin', basta: 'enough', dolce: 'dessert / sweet',
    trovarmi: 'to visit me', profumo: 'smell / scent', invito: 'invitation', ricetta: 'recipe', piena: 'full',
  },
  scenes: [
    { note: 'Nonna opens the door with a big smile.',
      lines: [{ who: 'Nonna Rosa', it: 'Ciao, tesoro! Entra, entra! Il pranzo è quasi pronto.', en: 'Hi, sweetheart! Come in, come in! Lunch is almost ready.' }],
      choices: [
        { it: 'Buongiorno, nonna! Che buon profumo!', en: 'Hello, Nonna! What a good smell!', ok: true, why: 'Warm and natural — complimenting the cooking always works.' },
        { it: "Grazie per l'invito, nonna!", en: 'Thanks for the invitation, Nonna!', ok: true, why: 'Polite and friendly.' },
        { it: 'Ciao. Ho fame.', en: "Hi. I'm hungry.", ok: false, why: 'True, but a bit blunt. Start with a greeting and a compliment.' },
      ] },
    { lines: [{ who: 'Nonna Rosa', it: 'Siediti qui. Vuoi un po\' di vino o preferisci l\'acqua?', en: 'Sit here. Would you like a little wine, or do you prefer water?' }],
      choices: [
        { it: "Un po' d'acqua, grazie.", en: 'A little water, thank you.', ok: true, why: 'Simple and polite.' },
        { it: 'Vorrei un bicchiere di vino, grazie.', en: "I'd like a glass of wine, thank you.", ok: true, why: '"Vorrei" is the polite way to ask.' },
        { it: 'Dammi il vino.', en: 'Give me the wine.', ok: false, why: 'Too direct. Use "vorrei" or "posso avere" and add "per favore".' },
      ] },
    { lines: [{ who: 'Nonna Rosa', it: 'Ecco le lasagne! Le ho fatte stamattina. Ti piacciono?', en: 'Here are the lasagne! I made them this morning. Do you like them?' }],
      choices: [
        { it: 'Sono buonissime! Posso avere la ricetta?', en: 'They are delicious! Can I have the recipe?', ok: true, why: 'Asking for a recipe is the best compliment a nonna can get.' },
        { it: 'Sì, grazie, sono molto buone.', en: 'Yes, thank you, they are very good.', ok: true, why: 'Kind and simple.' },
        { it: 'Non mi piacciono molto.', en: "I don't like them very much.", ok: false, why: 'Honest, but ouch! Soften it or just say something positive.' },
      ] },
    { lines: [{ who: 'Nonna Rosa', it: "Mangia ancora un po', sei troppo magra!", en: "Eat a little more, you're too thin!" }],
      choices: [
        { it: 'No, grazie, sono piena. Era tutto delizioso!', en: "No thanks, I'm full. Everything was delicious!", ok: true, why: 'A polite refusal with a compliment.' },
        { it: 'Sì, ancora un po\', grazie!', en: 'Yes, a little more, thanks!', ok: true, why: 'Nonna will be delighted.' },
        { it: 'Basta! Non voglio altro.', en: "Enough! I don't want anything else.", ok: false, why: 'Too abrupt. Say "sono piena" and thank her.' },
      ] },
    { lines: [{ who: 'Nonna Rosa', it: 'Ora il dolce! E poi un caffè. Quando torni a trovarmi?', en: 'Now dessert! And then a coffee. When are you coming back to see me?' }],
      choices: [
        { it: 'Presto, nonna! Domenica prossima, se vuoi.', en: 'Soon, Nonna! Next Sunday, if you like.', ok: true, why: 'A concrete plan makes her very happy.' },
        { it: 'Con piacere! Grazie di tutto, nonna.', en: 'With pleasure! Thanks for everything, Nonna.', ok: true, why: 'Warm and grateful.' },
        { it: 'Non lo so.', en: "I don't know.", ok: false, why: 'A bit cold. Try "presto" or "con piacere".' },
      ] },
  ],
  phrases: [
    { it: 'Che buon profumo!', en: 'What a good smell!' },
    { it: 'Sono piena.', en: "I'm full." },
    { it: 'Era tutto delizioso!', en: 'Everything was delicious!' },
    { it: "Grazie per l'invito.", en: 'Thanks for the invitation.' },
  ],
});
