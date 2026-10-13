/* Story 9 — Cena al ristorante con la famiglia */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-09',
  title: 'Cena al ristorante',
  theme: 'Family',
  emoji: '🍝',
  level: 'A2',
  summary: "A family dinner out: you give the booking, order drinks and food, and say it was great.",
  intro: "You are having dinner at a restaurant with your partner's family — six people. The waiter greets you.",
  words: {
    prenotato: 'booked', nome: 'name', persone: 'people', prego: 'please / go ahead', parte: 'side', bere: 'to drink', bottiglia: 'bottle',
    frizzante: 'sparkling', naturale: 'still', rosso: 'red', consiglio: 'I recommend', antipasti: 'starters', casa: 'house',
    dividere: 'to share', primo: 'first course', spaghetti: 'spaghetti', vongole: 'clams', tortellini: 'tortellini',
    gradimento: 'satisfaction', delizioso: 'delicious', complimenti: 'compliments', chef: 'chef', conto: 'bill', ottimo: 'excellent',
    iniziare: 'to begin', consiglia: 'recommends', per: 'for', me: 'me',
  },
  scenes: [
    { lines: [{ who: 'Cameriere', it: 'Buonasera! Avete prenotato?', en: 'Good evening! Have you booked?' }],
      choices: [
        { it: 'Sì, a nome di Rossi, per sei persone.', en: 'Yes, under the name Rossi, for six people.', ok: true, why: 'Name + number of people is what the waiter needs.' },
        { it: 'Buonasera! Sì, abbiamo prenotato per le otto.', en: 'Good evening! Yes, we booked for eight.', ok: true, why: 'Polite, and you give the time.' },
        { it: 'No, ma abbiamo fame.', en: "No, but we're hungry.", ok: false, why: 'Hunger is not a reservation! Ask "Avete un tavolo per sei?".' },
      ] },
    { lines: [{ who: 'Cameriere', it: 'Prego, da questa parte. Da bere cosa prendete?', en: 'Please, this way. What would you like to drink?' }],
      choices: [
        { it: "Una bottiglia d'acqua frizzante e una di vino rosso, per favore.", en: 'A bottle of sparkling water and one of red wine, please.', ok: true, why: 'Clear and polite.' },
        { it: "Per me un'acqua naturale, grazie.", en: 'For me a still water, thanks.', ok: true, why: '"Per me…" is how you order for yourself.' },
        { it: 'Vino.', en: 'Wine.', ok: false, why: 'A single word is too abrupt. Say "Vorrei…" or "Per me…".' },
      ] },
    { lines: [{ who: 'Cameriere', it: 'Per iniziare, vi consiglio gli antipasti della casa.', en: 'To start, I recommend the house starters.' }],
      choices: [
        { it: 'Ottima idea! Che cosa ci consiglia?', en: 'Great idea! What do you recommend?', ok: true, why: '"Ci" = us. The waiter will love being asked.' },
        { it: 'Prendiamo un antipasto da dividere.', en: "Let's have one starter to share.", ok: true, why: 'Common and sensible.' },
        { it: 'No, solo pasta.', en: 'No, just pasta.', ok: false, why: 'Perfectly fine to skip, but say it politely: "No, grazie, passiamo direttamente al primo".' },
      ] },
    { lines: [{ who: 'Cameriere', it: 'E come primo? Oggi abbiamo i tortellini e gli spaghetti alle vongole.', en: 'And for the first course? Today we have tortellini and spaghetti with clams.' }],
      choices: [
        { it: 'Per me gli spaghetti alle vongole, grazie.', en: 'For me the spaghetti with clams, thanks.', ok: true, why: 'Good ordering pattern: "Per me" + dish.' },
        { it: 'Io prendo i tortellini, per favore.', en: "I'll have the tortellini, please.", ok: true, why: '"Io prendo" is natural.' },
        { it: 'Non mi piace niente.', en: "I don't like anything.", ok: false, why: 'Very rude to the staff. Ask for a different dish instead.' },
      ] },
    { note: 'The meal is over. The waiter returns.',
      lines: [{ who: 'Cameriere', it: 'Era tutto di vostro gradimento?', en: 'Was everything to your liking?' }],
      choices: [
        { it: 'Tutto delizioso, complimenti allo chef!', en: 'Everything was delicious, compliments to the chef!', ok: true, why: 'A lovely thing to say.' },
        { it: 'Era tutto ottimo. Possiamo avere il conto?', en: 'It was all excellent. Could we have the bill?', ok: true, why: 'Compliment + request.' },
        { it: 'Era così così.', en: 'It was so-so.', ok: false, why: 'Fine among friends, but not what the family wants to hear after the invitation.' },
      ] },
  ],
  phrases: [
    { it: 'Abbiamo prenotato a nome di Rossi.', en: 'We booked under the name Rossi.' },
    { it: 'Che cosa ci consiglia?', en: 'What do you recommend?' },
    { it: 'Per me gli spaghetti, grazie.', en: 'For me the spaghetti, thanks.' },
    { it: 'Possiamo avere il conto?', en: 'Could we have the bill?' },
  ],
});
