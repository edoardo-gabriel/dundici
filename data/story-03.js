/* Story 3 — Una telefonata in famiglia */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-03',
  title: 'Una telefonata in famiglia',
  theme: 'Family',
  emoji: '📞',
  level: 'A2',
  summary: "Elena phones to plan Sunday lunch: arranging a time, offering to bring something.",
  intro: "Your phone rings. It's Elena, your partner's mother.",
  words: {
    pronto: 'hello (on the phone)', pranziamo: 'we have lunch', insieme: 'together', mangiare: 'to eat', qualsiasi: 'any',
    portare: 'to bring', dolce: 'dessert', lasagne: 'lasagne', piacerebbe: 'would like', provare: 'to try', dodici: 'twelve',
    presto: 'early / soon', possibile: 'possible', niente: 'nothing', almeno: 'at least', preferisci: 'you prefer',
    domenica: 'Sunday', abbraccio: 'hug', tutti: 'everyone', interessa: 'it interests', troppo: 'too (much)', bacio: 'kiss',
  },
  scenes: [
    { lines: [{ who: 'Elena', it: 'Pronto? Sono Elena. Come stai?', en: "Hello? It's Elena. How are you?" }],
      choices: [
        { it: 'Ciao Elena! Sto bene, grazie! E tu?', en: 'Hi Elena! I am well, thanks! And you?', ok: true, why: 'She may now ask you to use "tu" — that is a friendly sign.' },
        { it: 'Buongiorno, Elena! Tutto bene, grazie!', en: 'Good morning, Elena! All good, thanks!', ok: true, why: 'Polite and warm.' },
        { it: 'Chi parla?', en: "Who's speaking?", ok: false, why: 'She already said who she is. Greet her instead.' },
      ] },
    { lines: [{ who: 'Elena', it: 'Domenica pranziamo insieme? Cosa ti va di mangiare?', en: 'Shall we have lunch together on Sunday? What do you feel like eating?' }],
      choices: [
        { it: 'Mi va qualsiasi cosa! Posso portare il dolce.', en: 'Anything is fine! I can bring dessert.', ok: true, why: 'Easy-going and generous.' },
        { it: 'Mi piacerebbe provare le tue lasagne!', en: "I'd love to try your lasagne!", ok: true, why: '"Mi piacerebbe" = I would like. Lovely and polite.' },
        { it: 'Non mi interessa.', en: "I'm not interested.", ok: false, why: 'Rude here. It means "I don\'t care about it".' },
      ] },
    { lines: [{ who: 'Elena', it: 'A che ora vuoi venire? Alle dodici va bene?', en: 'What time do you want to come? Is twelve OK?' }],
      choices: [
        { it: 'Sì, alle dodici va benissimo!', en: 'Yes, twelve is perfect!', ok: true, why: 'Clear and positive.' },
        { it: "Preferisco venire all'una, se possibile.", en: 'I prefer to come at one, if possible.', ok: true, why: 'A polite way to suggest a different time.' },
        { it: 'Dodici? No! Troppo presto!', en: 'Twelve? No! Too early!', ok: false, why: 'Too blunt. Soften it: "se possibile".' },
      ] },
    { lines: [{ who: 'Elena', it: 'Non portare niente, abbiamo già tutto!', en: "Don't bring anything, we already have everything!" }],
      choices: [
        { it: 'Almeno un dolce! Cosa preferisci?', en: 'At least a dessert! What do you prefer?', ok: true, why: 'Italians usually insist on bringing something small.' },
        { it: 'Allora porto un vino, va bene?', en: "Then I'll bring a wine, OK?", ok: true, why: 'Offering again is polite.' },
        { it: 'Perfetto, non porto niente.', en: "Perfect, I won't bring anything.", ok: false, why: 'Grammatically fine, but arriving empty-handed is not the custom.' },
      ] },
    { lines: [{ who: 'Elena', it: 'Perfetto! Allora a domenica. Un bacio!', en: 'Perfect! See you on Sunday then. A kiss!' }],
      choices: [
        { it: 'A domenica! Un abbraccio a tutti!', en: 'See you on Sunday! A hug to everyone!', ok: true, why: 'A warm family-style goodbye.' },
        { it: 'A domenica, ciao ciao!', en: 'See you Sunday, bye bye!', ok: true, why: 'Friendly and casual.' },
        { it: 'Ciao.', en: 'Bye.', ok: false, why: 'Too short for a warm goodbye.' },
      ] },
  ],
  phrases: [
    { it: 'Pronto?', en: 'Hello? (on the phone)' },
    { it: 'Posso portare il dolce.', en: 'I can bring dessert.' },
    { it: 'A domenica!', en: 'See you on Sunday!' },
    { it: 'Un abbraccio a tutti!', en: 'A hug to everyone!' },
  ],
});
