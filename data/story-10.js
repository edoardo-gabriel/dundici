/* Story 10 — Il compleanno della zia */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-10',
  title: 'Il compleanno della zia',
  theme: 'Family',
  emoji: '🎂',
  level: 'A2',
  summary: "A family birthday party: greetings, wishes, a gift, a toast and dancing.",
  intro: "It is Aunt Lucia's birthday party in the garden. Lots of relatives are there!",
  words: {
    finalmente: 'finally', arrivata: 'arrived', giardino: 'garden', sorpresa: 'surprise', venuta: 'come', auguri: 'best wishes',
    compleanno: 'birthday', regalo: 'gift', dovevi: 'you should have (needed to)', spero: 'I hope', piaccia: 'you like (subjunctive)',
    figurati: "don't mention it", piacere: 'pleasure', brindiamo: "let's toast", prosecco: 'prosecco', goccio: 'a drop', salute: 'health',
    torta: 'cake', balliamo: "let's dance", ballare: 'to dance', stanca: 'tired', subito: 'right away', zia: 'aunt',
    zio: 'uncle', festa: 'party', bella: 'beautiful',
  },
  scenes: [
    { note: 'Your cousin Marco greets you at the gate.',
      lines: [{ who: 'Marco', it: 'Ciao! Finalmente sei arrivata! La zia è in giardino.', en: 'Hi! You finally made it! Aunt is in the garden.' }],
      choices: [
        { it: 'Ciao Marco! Come stai? Che bella festa!', en: 'Hi Marco! How are you? What a lovely party!', ok: true, why: 'Friendly: greeting + compliment.' },
        { it: 'Ciao! Ho portato un regalo per la zia.', en: "Hi! I brought a gift for Aunt.", ok: true, why: 'Natural: tells him why you are there.' },
        { it: "Dov'è il cibo?", en: 'Where is the food?', ok: false, why: 'Funny among friends, but greet people first!' },
      ] },
    { lines: [{ who: 'Zia Lucia', it: 'Che sorpresa! Grazie per essere venuta!', en: 'What a surprise! Thank you for coming!' }],
      choices: [
        { it: 'Tanti auguri di buon compleanno, zia!', en: 'Many happy returns, Aunt!', ok: true, why: '"Tanti auguri" is the standard birthday wish.' },
        { it: 'Auguri! Questo regalo è per te.', en: 'Happy birthday! This gift is for you.', ok: true, why: 'Direct and warm.' },
        { it: 'Buon Natale!', en: 'Merry Christmas!', ok: false, why: 'Wrong occasion! Use "Buon compleanno".' },
      ] },
    { lines: [{ who: 'Zia Lucia', it: 'Che bel regalo! Non dovevi!', en: "What a lovely gift! You shouldn't have!" }],
      choices: [
        { it: 'Spero che ti piaccia!', en: 'I hope you like it!', ok: true, why: '"Spero che ti piaccia" is a classic phrase — it uses the subjunctive.' },
        { it: 'Figurati, è un piacere!', en: "Don't mention it, it's a pleasure!", ok: true, why: 'The usual reply to "Non dovevi!".' },
        { it: 'Costa molto.', en: 'It cost a lot.', ok: false, why: 'Never mention the price of a gift.' },
      ] },
    { note: 'Uncle Giorgio arrives with glasses and a bottle.',
      lines: [{ who: 'Zio Giorgio', it: 'Brindiamo! Cosa bevi, un po\' di prosecco?', en: "Let's toast! What will you have, a little prosecco?" }],
      choices: [
        { it: 'Sì, grazie, un goccio!', en: 'Yes, thanks, just a drop!', ok: true, why: '"Un goccio" = just a little.' },
        { it: 'Volentieri! Cin cin, alla salute della zia!', en: "Gladly! Cheers, to Aunt's health!", ok: true, why: '"Cin cin" and "alla salute" are the classic toast words.' },
        { it: 'Prosecco? Non lo so.', en: "Prosecco? I don't know.", ok: false, why: 'Awkward. Say yes or politely say no: "No, grazie, preferisco l\'acqua".' },
      ] },
    { lines: [{ who: 'Marco', it: 'Ora la torta! Poi balliamo. Vieni?', en: "Now the cake! Then we dance. Are you coming?" }],
      choices: [
        { it: 'Volentieri! Mi piace ballare.', en: 'Gladly! I like dancing.', ok: true, why: 'Accepting with enthusiasm.' },
        { it: 'Sì, arrivo subito!', en: "Yes, I'm coming right away!", ok: true, why: '"Arrivo subito" is the natural "coming!".' },
        { it: 'Sono stanca, vado a casa.', en: "I'm tired, I'm going home.", ok: false, why: 'Leaving before the cake? Stay a bit longer — it is family!' },
      ] },
  ],
  phrases: [
    { it: 'Tanti auguri di buon compleanno!', en: 'Happy birthday!' },
    { it: 'Spero che ti piaccia!', en: 'I hope you like it!' },
    { it: 'Cin cin!', en: 'Cheers!' },
    { it: 'Volentieri!', en: 'Gladly!' },
  ],
});
