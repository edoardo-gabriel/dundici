/* Story 2 — Conoscere i genitori */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-02',
  title: 'Conoscere i genitori',
  theme: 'Family',
  emoji: '💐',
  level: 'A2',
  summary: "Meeting your partner's parents for the first time: formal greetings and polite small talk.",
  intro: "You are meeting your partner's parents, Elena and Paolo, for the first time. First impressions matter!",
  words: {
    benvenuta: 'welcome (to a woman)', finalmente: 'finally', conosciamo: 'we know / we meet', invito: 'invitation',
    piacere: 'nice to meet you', lei: 'you (formal)', studi: 'you study', difficile: 'difficult', capisco: 'I understand',
    cibo: 'food', preparato: 'prepared', tortellini: 'small stuffed pasta', brodo: 'broth', adoro: 'I love', preferiti: 'favourites',
    sorpresa: 'surprise', progetti: 'plans', estate: 'summer', visitare: 'to visit', tornare: 'to come back',
    aspettiamo: 'we expect / we wait for', natale: 'Christmas', gentili: 'kind', trovarci: 'to visit us',
  },
  scenes: [
    { note: 'Elena opens the door and smiles.',
      lines: [{ who: 'Elena', it: 'Benvenuta! Finalmente ti conosciamo. Come stai?', en: 'Welcome! We finally meet you. How are you?' }],
      choices: [
        { it: 'Molto piacere, signora! Sto bene, grazie. E lei?', en: 'Very nice to meet you! I am well, thanks. And you?', ok: true, why: 'Using "lei" with parents shows respect at a first meeting.' },
        { it: "Piacere di conoscerla! Grazie per l'invito.", en: 'Pleased to meet you! Thanks for the invitation.', ok: true, why: 'Polite and warm.' },
        { it: 'Ciao! Tutto bene, e tu?', en: "Hi! All good, and you?", ok: false, why: 'Not wrong, but "lei" (formal) is safer until they invite you to use "tu".' },
      ] },
    { lines: [{ who: 'Paolo', it: "Dimmi, da quanto tempo studi l'italiano?", en: 'Tell me, how long have you been studying Italian?' }],
      choices: [
        { it: 'Studio italiano da un anno. È difficile, ma mi piace molto!', en: "I've studied Italian for a year. It's hard, but I like it a lot!", ok: true, why: 'Present tense + "da" = how long something has been going on.' },
        { it: "Parlo un po' d'italiano, ma capisco più di quello che dico.", en: 'I speak a little Italian, but I understand more than I say.', ok: true, why: 'Honest and charming.' },
        { it: 'Non parlo italiano.', en: "I don't speak Italian.", ok: false, why: 'Not true, and it ends the conversation! Try "Parlo un po\' d\'italiano".' },
      ] },
    { lines: [{ who: 'Elena', it: 'Ti piace il cibo italiano? Ho preparato i tortellini in brodo.', en: 'Do you like Italian food? I made tortellini in broth.' }],
      choices: [
        { it: 'Adoro i tortellini! Sono i miei preferiti.', en: 'I love tortellini! They are my favourites.', ok: true, why: 'Enthusiastic and friendly.' },
        { it: 'Che bella sorpresa, grazie mille!', en: 'What a lovely surprise, thank you so much!', ok: true, why: 'Gratitude always works.' },
        { it: 'Sono buoni, ma preferisco la pizza.', en: 'They are good, but I prefer pizza.', ok: false, why: "Comparing to another food can feel rude when someone has cooked for you." },
      ] },
    { lines: [{ who: 'Paolo', it: 'Quali sono i tuoi progetti per l\'estate?', en: 'What are your plans for the summer?' }],
      choices: [
        { it: 'Vorrei visitare la Sicilia. E voi?', en: 'I would like to visit Sicily. And you?', ok: true, why: 'Answering and asking back keeps the conversation going.' },
        { it: 'Spero di tornare in Italia e di vedere altre città.', en: 'I hope to come back to Italy and see more cities.', ok: true, why: '"Spero di" + infinitive is very useful.' },
        { it: 'Non ho progetti.', en: 'I have no plans.', ok: false, why: 'A conversation stopper. Say what you would like to do.' },
      ] },
    { note: 'The evening ends. Elena walks you to the door.',
      lines: [{ who: 'Elena', it: 'Torna a trovarci presto! Ti aspettiamo per Natale.', en: 'Come and visit us again soon! We expect you for Christmas.' }],
      choices: [
        { it: 'Grazie di tutto, siete stati molto gentili!', en: 'Thanks for everything, you were very kind!', ok: true, why: 'Heartfelt thanks leave a great last impression.' },
        { it: 'Con piacere! Arrivederci e grazie ancora.', en: 'With pleasure! Goodbye and thanks again.', ok: true, why: 'Warm and formal enough.' },
        { it: 'Va bene, ciao.', en: 'OK, bye.', ok: false, why: 'A bit curt. Add thanks and a smile.' },
      ] },
  ],
  phrases: [
    { it: 'Molto piacere!', en: 'Very nice to meet you!' },
    { it: 'Studio italiano da un anno.', en: "I've been studying Italian for a year." },
    { it: 'Spero di tornare presto.', en: 'I hope to come back soon.' },
    { it: 'Siete stati molto gentili.', en: 'You were very kind.' },
  ],
});
