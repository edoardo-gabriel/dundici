/* Story 7 — In stazione */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-07',
  title: 'In stazione',
  theme: 'Travel',
  emoji: '🚆',
  level: 'A2',
  summary: 'Buy a train ticket, find your platform and ask about delays.',
  intro: "You're at the ticket office of the train station. You want to go to Florence.",
  words: {
    dica: 'tell me', biglietto: 'ticket', andata: 'one-way', ritorno: 'return', quando: 'when', treno: 'train',
    costa: 'it costs', binario: 'platform', parte: 'it leaves', ritardo: 'delay', minuti: 'minutes', attenzione: 'attention / careful',
    convalidare: 'to validate', macchinetta: 'little machine', gialla: 'yellow', vicino: 'near', aspettare: 'to wait',
    giusto: 'fair / right', peccato: 'pity', viaggio: 'journey', lavoro: 'work', domani: 'tomorrow', mattina: 'morning',
    pomeriggio: 'afternoon', oggi: 'today', arriva: 'it arrives',
  },
  scenes: [
    { lines: [{ who: 'Bigliettaia', it: 'Buongiorno, dica.', en: 'Good morning, go ahead.' }],
      choices: [
        { it: 'Buongiorno! Un biglietto per Firenze, per favore.', en: 'Good morning! A ticket to Florence, please.', ok: true, why: 'Short, clear and polite.' },
        { it: 'Vorrei un biglietto per Firenze, per favore.', en: "I'd like a ticket to Florence, please.", ok: true, why: '"Vorrei" is always safe.' },
        { it: 'Firenze.', en: 'Florence.', ok: false, why: 'One word is too curt. Say "un biglietto per Firenze, per favore".' },
      ] },
    { lines: [{ who: 'Bigliettaia', it: 'Andata o andata e ritorno? E per quando?', en: 'One-way or return? And for when?' }],
      choices: [
        { it: 'Andata e ritorno, per domani mattina.', en: 'Return, for tomorrow morning.', ok: true, why: 'Both questions answered.' },
        { it: 'Solo andata, per oggi pomeriggio.', en: 'One-way, for this afternoon.', ok: true, why: '"Solo andata" = one-way only.' },
        { it: 'Sì.', en: 'Yes.', ok: false, why: 'It was an "or" question — answer with one of the options.' },
      ] },
    { lines: [{ who: 'Bigliettaia', it: "C'è un treno alle nove e dieci. Costa trentacinque euro.", en: 'There is a train at 9:10. It costs 35 euros.' }],
      choices: [
        { it: 'Va bene. Da che binario parte?', en: 'Fine. Which platform does it leave from?', ok: true, why: 'Always ask for the platform.' },
        { it: 'A che ora arriva a Firenze?', en: 'What time does it arrive in Florence?', ok: true, why: 'Useful if someone is meeting you.' },
        { it: 'Troppo caro! Niente.', en: 'Too expensive! Nothing.', ok: false, why: 'Rude. If it is too much, ask if there is a cheaper train.' },
      ] },
    { lines: [{ who: 'Bigliettaia', it: 'Parte dal binario sei. Ma attenzione: il treno ha dieci minuti di ritardo.', en: "It leaves from platform six. But careful: the train is ten minutes late." }],
      choices: [
        { it: 'Grazie! Devo convalidare il biglietto?', en: 'Thanks! Do I need to validate the ticket?', ok: true, why: 'Good to check: unvalidated paper tickets can mean a fine.' },
        { it: 'Che peccato! Dove posso aspettare?', en: 'What a pity! Where can I wait?', ok: true, why: '"Che peccato" = what a shame.' },
        { it: 'Non è giusto!', en: "It's not fair!", ok: false, why: 'Delays happen. Stay calm and ask where to wait.' },
      ] },
    { lines: [{ who: 'Bigliettaia', it: 'Sì, lo convalidi alla macchinetta gialla vicino al binario. Buon viaggio!', en: 'Yes, validate it at the yellow machine near the platform. Have a good trip!' }],
      choices: [
        { it: 'Grazie mille, buon lavoro!', en: 'Thank you so much, good work!', ok: true, why: '"Buon lavoro" is a friendly wish to someone at work.' },
        { it: 'Grazie! Arrivederci!', en: 'Thanks! Goodbye!', ok: true, why: 'Simple and polite.' },
        { it: 'Ciao.', en: 'Bye.', ok: false, why: 'Too casual for a stranger at a ticket desk.' },
      ] },
  ],
  phrases: [
    { it: 'Un biglietto di andata e ritorno per Firenze.', en: 'A return ticket to Florence.' },
    { it: 'Da che binario parte?', en: 'Which platform does it leave from?' },
    { it: 'Devo convalidare il biglietto?', en: 'Do I need to validate the ticket?' },
    { it: 'Il treno è in ritardo.', en: 'The train is late.' },
  ],
});
