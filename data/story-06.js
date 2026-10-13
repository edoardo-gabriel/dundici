/* Story 6 — Dal medico */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-06',
  title: 'Dal medico',
  theme: 'Daily life',
  emoji: '🩺',
  level: 'B1',
  summary: "Describe symptoms, understand the doctor's advice, and ask someone to repeat.",
  intro: "You don't feel well and you have an appointment with the doctor.",
  words: {
    dica: 'tell me', non: 'not', va: 'goes', mal: 'ache', testa: 'head', febbre: 'fever', gola: 'throat', male: 'pain / badly',
    tempo: 'time', sintomi: 'symptoms', ieri: 'yesterday', tosse: 'cough', raffreddore: 'cold', medicina: 'medicine',
    pastiglia: 'tablet', paracetamolo: 'paracetamol', riposare: 'to rest', bere: 'to drink', molta: 'a lot of',
    volte: 'times', giorno: 'day', ripetere: 'to repeat', lentamente: 'slowly', capisco: 'I understand', meglio: 'better',
    settimana: 'week', riguardi: 'take care of yourself', dottore: 'doctor', ringrazio: 'I thank',
  },
  scenes: [
    { lines: [{ who: 'Dottore', it: "Buongiorno, mi dica. Cosa c'è che non va?", en: "Good morning, tell me. What's wrong?" }],
      choices: [
        { it: 'Ho mal di testa e un po\' di febbre.', en: 'I have a headache and a bit of a fever.', ok: true, why: '"Ho mal di…" is the key pattern for aches.' },
        { it: 'Mi fa male la gola da due giorni.', en: "My throat has hurt for two days.", ok: true, why: '"Mi fa male…" works for any body part.' },
        { it: 'Sto male.', en: "I'm unwell.", ok: false, why: 'Too vague. Say what hurts: mal di testa, mal di gola, mal di pancia.' },
      ] },
    { lines: [{ who: 'Dottore', it: 'Da quanto tempo ha questi sintomi?', en: 'How long have you had these symptoms?' }],
      choices: [
        { it: 'Da due giorni.', en: 'For two days.', ok: true, why: '"Da" + time = how long it has been going on.' },
        { it: 'Da ieri sera.', en: 'Since last night.', ok: true, why: '"Da" also means "since".' },
        { it: 'Non lo so, sempre.', en: "I don't know, always.", ok: false, why: 'Try to give a time: "da ieri", "da due giorni".' },
      ] },
    { lines: [{ who: 'Dottore', it: 'Ha tosse o raffreddore? Ha preso qualche medicina?', en: 'Do you have a cough or a cold? Have you taken any medicine?' }],
      choices: [
        { it: 'Ho un po\' di tosse. Ho preso del paracetamolo.', en: 'I have a little cough. I took some paracetamol.', ok: true, why: '"Del" = some. Passato prossimo for what you did.' },
        { it: 'Ho preso una pastiglia ieri.', en: 'I took a tablet yesterday.', ok: true, why: 'Clear and precise.' },
        { it: 'Niente.', en: 'Nothing.', ok: false, why: 'The doctor needs a full answer: say if you have a cough and what you took.' },
      ] },
    { lines: [{ who: 'Dottore', it: 'Deve riposare, bere molta acqua e prendere questa medicina due volte al giorno.', en: 'You must rest, drink plenty of water and take this medicine twice a day.' }],
      choices: [
        { it: 'Scusi, può ripetere più lentamente, per favore?', en: 'Sorry, could you repeat more slowly, please?', ok: true, why: 'The most useful sentence for any learner. Never be shy about it!' },
        { it: 'Va bene, dottore. Per quanti giorni?', en: 'OK, doctor. For how many days?', ok: true, why: 'Asking for details is good.' },
        { it: 'Non capisco.', en: "I don't understand.", ok: false, why: 'True, but ask them to repeat or slow down so you can understand.' },
      ] },
    { lines: [{ who: 'Dottore', it: 'Torni tra una settimana se non va meglio. Si riguardi!', en: "Come back in a week if you're not better. Take care!" }],
      choices: [
        { it: 'Grazie mille, dottore. Arrivederci!', en: 'Thank you very much, doctor. Goodbye!', ok: true, why: 'Polite and complete.' },
        { it: 'La ringrazio. Buona giornata!', en: 'I thank you. Have a nice day!', ok: true, why: '"La ringrazio" is a more formal thank you.' },
        { it: 'Ok.', en: 'OK.', ok: false, why: 'Too abrupt for a doctor. Add "grazie" and "arrivederci".' },
      ] },
  ],
  phrases: [
    { it: 'Ho mal di testa.', en: 'I have a headache.' },
    { it: 'Mi fa male la gola.', en: 'My throat hurts.' },
    { it: 'Può ripetere più lentamente, per favore?', en: 'Could you repeat more slowly, please?' },
    { it: 'Da due giorni.', en: 'For two days.' },
  ],
});
