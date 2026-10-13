/* Story 5 — Al mercato */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-05',
  title: 'Al mercato',
  theme: 'Daily life',
  emoji: '🍅',
  level: 'A2',
  summary: 'Buy fruit and vegetables at the market: quantities, prices, change.',
  intro: 'Saturday morning at the local market. You stop at a fruit and vegetable stall.',
  words: {
    cosa: 'what', chilo: 'kilo', pomodori: 'tomatoes', freschissimi: 'very fresh', altro: 'anything else', mezzo: 'half',
    zucchine: 'courgettes', pesche: 'peaches', costano: 'they cost', ne: 'of them / some', prendo: "I'll take", sconto: 'discount',
    caro: 'expensive', ecco: 'here you are', fanno: 'that makes (total)', sacchetto: 'bag',
    resto: 'change (money back)', arrivederci: 'goodbye', giornata: 'day', buona: 'good', presto: 'soon',
  },
  scenes: [
    { lines: [{ who: 'Venditore', it: 'Buongiorno, signorina! Cosa le do?', en: 'Good morning, miss! What can I get you?' }],
      choices: [
        { it: 'Buongiorno! Vorrei un chilo di pomodori, per favore.', en: "Good morning! I'd like a kilo of tomatoes, please.", ok: true, why: '"Un chilo di" + noun is the standard way to order by weight.' },
        { it: 'Mi dà un chilo di pomodori, per favore?', en: 'Could you give me a kilo of tomatoes, please?', ok: true, why: '"Mi dà…?" is what shoppers really say.' },
        { it: 'Pomodori.', en: 'Tomatoes.', ok: false, why: 'Too curt. Add a greeting, the quantity and "per favore".' },
      ] },
    { lines: [{ who: 'Venditore', it: 'Sono freschissimi, di oggi! Altro?', en: "They're very fresh, from today! Anything else?" }],
      choices: [
        { it: 'Sì, anche mezzo chilo di zucchine.', en: 'Yes, also half a kilo of courgettes.', ok: true, why: '"Mezzo chilo" = half a kilo.' },
        { it: 'Quanto costano le pesche?', en: 'How much are the peaches?', ok: true, why: 'Ask the price before you buy.' },
        { it: 'No.', en: 'No.', ok: false, why: 'Say "No, grazie" at least!' },
      ] },
    { lines: [{ who: 'Venditore', it: 'Le pesche costano tre euro al chilo.', en: 'The peaches are three euros a kilo.' }],
      choices: [
        { it: 'Ne prendo un chilo, grazie.', en: "I'll take a kilo of them, thanks.", ok: true, why: '"Ne" replaces "di pesche" — very natural.' },
        { it: 'È un po\' caro! Può farmi uno sconto?', en: "It's a bit pricey! Can you give me a discount?", ok: true, why: 'Gentle haggling is fine at some markets, if you smile.' },
        { it: 'Troppo caro, non le compro.', en: "Too expensive, I won't buy them.", ok: false, why: 'A bit rude. Be softer or just thank them.' },
      ] },
    { lines: [{ who: 'Venditore', it: 'Ecco: pomodori, zucchine e pesche. Fanno otto euro e cinquanta.', en: "Here you go: tomatoes, courgettes and peaches. That's eight euros fifty." }],
      choices: [
        { it: 'Ecco dieci euro.', en: 'Here is ten euros.', ok: true, why: 'Simple and clear.' },
        { it: 'Può darmi un sacchetto, per favore?', en: 'Could you give me a bag, please?', ok: true, why: 'Handy phrase at any stall.' },
        { it: 'Quanto?', en: 'How much?', ok: false, why: 'He just told you! Listen for "fanno" + the amount.' },
      ] },
    { lines: [{ who: 'Venditore', it: 'Ecco il resto: un euro e cinquanta. Arrivederci e buona giornata!', en: "Here's your change: one euro fifty. Goodbye and have a nice day!" }],
      choices: [
        { it: 'Grazie, arrivederci! Buona giornata anche a lei!', en: 'Thanks, goodbye! Have a nice day too!', ok: true, why: '"Anche a lei" = to you too (formal).' },
        { it: 'Grazie mille, a presto!', en: 'Thank you so much, see you soon!', ok: true, why: 'Friendly — marks you as a regular customer.' },
        { it: 'Ciao.', en: 'Bye.', ok: false, why: 'Too casual for a shopkeeper you have just met.' },
      ] },
  ],
  phrases: [
    { it: 'Vorrei un chilo di pomodori.', en: "I'd like a kilo of tomatoes." },
    { it: 'Mezzo chilo di zucchine.', en: 'Half a kilo of courgettes.' },
    { it: 'Quanto costano le pesche?', en: 'How much are the peaches?' },
    { it: 'Ecco il resto.', en: "Here's the change." },
  ],
});
