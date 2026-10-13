/* Story 8 — Perduta in città */
window.ITALIANO_STORIES = window.ITALIANO_STORIES || [];
window.ITALIANO_STORIES.push({
  id: 'story-08',
  title: 'Perduta in città',
  theme: 'Travel',
  emoji: '🗺️',
  level: 'A2',
  summary: 'Ask a stranger for directions and understand left, right and straight on.',
  intro: "You're walking around an unfamiliar Italian city and your phone has no signal.",
  words: {
    bisogno: 'need', aiuto: 'help', sembra: 'you seem', persa: 'lost', stazione: 'station', lontana: 'far', vada: 'go (formal)',
    dritto: 'straight on', giri: 'turn (formal)', sinistra: 'left', strada: 'street', ripetere: 'to repeat',
    lentamente: 'slowly', semaforo: 'traffic light', ponte: 'bridge', dopo: 'after', piedi: 'feet', circa: 'about',
    autobus: 'bus', fermata: 'stop', davanti: 'in front of', farmacia: 'pharmacy', fortuna: 'luck', gentile: 'kind',
    quanto: 'how much', vuole: 'it takes (needs)', ci: 'there', minuti: 'minutes', preferisco: 'I prefer',
  },
  scenes: [
    { note: 'You look at a map. A passer-by notices.',
      lines: [{ who: 'Passante', it: 'Scusi? Ha bisogno di aiuto? Sembra persa.', en: 'Excuse me? Do you need help? You seem lost.' }],
      choices: [
        { it: "Sì, grazie! Scusi, dov'è la stazione?", en: 'Yes, thanks! Excuse me, where is the station?', ok: true, why: '"Scusi" + "dov\'è…?" is the classic opening.' },
        { it: 'Sì, mi sono persa. Può aiutarmi?', en: "Yes, I'm lost. Can you help me?", ok: true, why: '"Mi sono persa" = I got lost (feminine).' },
        { it: 'Aiuto!', en: 'Help!', ok: false, why: '"Aiuto!" is for emergencies. Say "Può aiutarmi?".' },
      ] },
    { lines: [{ who: 'Passante', it: 'La stazione? Non è lontana. Vada dritto per questa strada, poi giri a sinistra.', en: "The station? It's not far. Go straight along this street, then turn left." }],
      choices: [
        { it: 'Può ripetere, per favore? Più lentamente?', en: 'Can you repeat, please? More slowly?', ok: true, why: 'Always ask if you need it.' },
        { it: 'Dritto e poi a sinistra. Grazie!', en: 'Straight and then left. Thanks!', ok: true, why: 'Repeating the directions back helps you remember.' },
        { it: 'Cosa?', en: 'What?', ok: false, why: 'Too blunt. Use "Scusi, può ripetere?".' },
      ] },
    { lines: [{ who: 'Passante', it: 'Certo. Sempre dritto fino al semaforo. Al semaforo giri a sinistra. La stazione è dopo il ponte.', en: 'Of course. Straight on to the traffic light. At the light turn left. The station is after the bridge.' }],
      choices: [
        { it: 'Quanto ci vuole a piedi?', en: 'How long does it take on foot?', ok: true, why: '"Quanto ci vuole?" = how long does it take?' },
        { it: 'È meglio prendere l\'autobus?', en: 'Is it better to take the bus?', ok: true, why: 'Good question.' },
        { it: 'Non voglio camminare.', en: "I don't want to walk.", ok: false, why: 'Sounds ungrateful. Ask how long it takes instead.' },
      ] },
    { lines: [{ who: 'Passante', it: "Circa dieci minuti a piedi. Ma c'è anche l'autobus numero cinque: la fermata è lì, davanti alla farmacia.", en: "About ten minutes on foot. But there's also bus number five: the stop is there, in front of the pharmacy." }],
      choices: [
        { it: 'Preferisco andare a piedi. Grazie!', en: 'I prefer to walk. Thanks!', ok: true, why: '"Preferisco" + infinitive.' },
        { it: "Prendo l'autobus. Dov'è la fermata?", en: "I'll take the bus. Where is the stop?", ok: true, why: 'Clear and practical.' },
        { it: 'Ok, ciao.', en: 'OK, bye.', ok: false, why: 'Too short — thank the person who helped you.' },
      ] },
    { lines: [{ who: 'Passante', it: 'Di niente! Buona fortuna!', en: "You're welcome! Good luck!" }],
      choices: [
        { it: 'Grazie mille, è stato molto gentile!', en: 'Thank you so much, you were very kind!', ok: true, why: 'Gratitude to a helpful stranger.' },
        { it: 'Grazie, arrivederci!', en: 'Thanks, goodbye!', ok: true, why: 'Polite and simple.' },
        { it: 'Ciao.', en: 'Bye.', ok: false, why: 'Say thank you first!' },
      ] },
  ],
  phrases: [
    { it: "Scusi, dov'è la stazione?", en: 'Excuse me, where is the station?' },
    { it: 'Può ripetere, per favore?', en: 'Can you repeat, please?' },
    { it: 'Quanto ci vuole a piedi?', en: 'How long does it take on foot?' },
    { it: 'Vada dritto, poi giri a sinistra.', en: 'Go straight, then turn left.' },
  ],
});
