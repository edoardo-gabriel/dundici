/* Unit 9 — In viaggio */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-09',
  number: 9,
  title: 'In viaggio',
  subtitle: 'Trains, tickets, hotels and asking for directions.',

  grammar: [
    {
      title: 'At the station and airport',
      html: `
        <p>Travel questions follow a few simple patterns:</p>
        <ul lang="it">
          <li><strong>A che ora</strong> parte / arriva il treno per Firenze?</li>
          <li><strong>Da che binario</strong> parte il treno?</li>
          <li><strong>Quanto costa</strong> un biglietto per Venezia?</li>
          <li><strong>Dov'è</strong> la biglietteria? / Dove posso ritirare i bagagli?</li>
        </ul>
        <p>Tickets: <span lang="it">un biglietto di <strong>sola andata</strong></span> (one-way) or <span lang="it">di <strong>andata e ritorno</strong></span> (return). On trains, remember to <span lang="it">convalidare il biglietto</span> (validate it) before boarding!</p>
        <p>Delays: <span lang="it">Il treno è <strong>in ritardo</strong> / <strong>in orario</strong> / <strong>cancellato</strong>. Ho perso la coincidenza.</span></p>`,
    },
    {
      title: 'Asking for and understanding directions',
      html: `
        <p>Start politely with <span lang="it">Scusi,</span> (formal) and ask: <span lang="it">Dov'è la stazione? Come posso arrivare in centro? È lontano?</span></p>
        <p>Directions are usually given with the <strong>formal imperative</strong> (the "lei" command). You can recognise the answers even before learning the full pattern:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Italian</th><th>English</th></tr></thead>
          <tbody lang="it">
            <tr><td><strong>Vada</strong> dritto.</td><td>Go straight on.</td></tr>
            <tr><td><strong>Giri</strong> a destra / a sinistra.</td><td>Turn right / left.</td></tr>
            <tr><td><strong>Prenda</strong> la prima a sinistra.</td><td>Take the first on the left.</td></tr>
            <tr><td><strong>Attraversi</strong> la piazza.</td><td>Cross the square.</td></tr>
            <tr><td>È di fronte / accanto a / vicino a…</td><td>It's opposite / next to / near…</td></tr>
          </tbody></table></div>
        <p>To say how long it takes, use <strong>ci vuole</strong> (one thing) or <strong>ci vogliono</strong> (plural): <span lang="it">Ci vuole un'ora in treno. Ci vogliono dieci minuti a piedi.</span></p>`,
    },
    {
      title: 'Hotels and booking',
      html: `
        <ul lang="it">
          <li>Ho prenotato una camera doppia / singola per tre notti.</li>
          <li>La colazione è inclusa nel prezzo?</li>
          <li>A che ora è il check-out? · C'è il wi-fi?</li>
          <li>Posso lasciare i bagagli in deposito?</li>
        </ul>
        <p>Nights are introduced with <em>per</em>: <span lang="it">per due notti</span>. Room types: <span lang="it">camera singola</span> (single), <span lang="it">camera matrimoniale</span> (double bed), <span lang="it">camera doppia</span> (room for two, often with twin beds).</p>
        <p class="tip">At borders and hotels you may be asked for your <span lang="it">passaporto</span> or <span lang="it">documento d'identità</span>.</p>`,
    },
  ],

  examples: [
    { it: 'A che ora parte il prossimo treno per Firenze?', en: 'What time does the next train to Florence leave?' },
    { it: 'Un biglietto di andata e ritorno per Venezia, per favore.', en: 'A return ticket to Venice, please.' },
    { it: 'Il treno è in ritardo di venti minuti.', en: 'The train is twenty minutes late.' },
    { it: "Scusi, dov'è la fermata dell'autobus?", en: 'Excuse me, where is the bus stop?' },
    { it: 'Vada dritto e poi giri a sinistra.', en: 'Go straight on and then turn left.' },
    { it: 'Da qui ci vogliono dieci minuti a piedi.', en: "It's ten minutes on foot from here." },
    { it: 'Ho prenotato una camera doppia per tre notti.', en: 'I booked a double room for three nights.' },
    { it: 'La colazione è inclusa nel prezzo?', en: 'Is breakfast included in the price?' },
    { it: 'Dove posso ritirare i bagagli?', en: 'Where can I collect my luggage?' },
  ],

  vocab: [
    { id: 'treno', it: 'il treno', en: 'the train', gender: 'm' },
    { id: 'binario', it: 'il binario', en: 'the platform / track', gender: 'm' },
    { id: 'sola-andata', it: 'di sola andata', en: 'one-way' },
    { id: 'andata-ritorno', it: 'di andata e ritorno', en: 'return (round trip)' },
    { id: 'coincidenza', it: 'la coincidenza', en: 'the connection', gender: 'f' },
    { id: 'orario', it: "l'orario", en: 'the timetable', gender: 'm' },
    { id: 'fermata', it: 'la fermata', en: 'the (bus) stop', gender: 'f' },
    { id: 'autobus', it: "l'autobus", en: 'the bus', gender: 'm' },
    { id: 'camera', it: 'la camera', en: 'the room', gender: 'f' },
    { id: 'notte', it: 'la notte', en: 'the night', gender: 'f' },
    { id: 'bagaglio', it: 'il bagaglio', en: 'the luggage', gender: 'm' },
    { id: 'passaporto', it: 'il passaporto', en: 'the passport', gender: 'm' },
    { id: 'prenotazione', it: 'la prenotazione', en: 'the booking', gender: 'f' },
    { id: 'mappa', it: 'la mappa', en: 'the map', gender: 'f' },
    { id: 'destra', it: 'a destra', en: 'to the right' },
    { id: 'sinistra', it: 'a sinistra', en: 'to the left' },
    { id: 'dritto', it: 'dritto', en: 'straight on' },
    { id: 'ci-vuole', it: 'ci vuole / ci vogliono', en: 'it takes' },
    { id: 'in-ritardo', it: 'in ritardo', en: 'late / delayed' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the missing word.', prompt: 'Da che ___ parte il treno?', promptLang: 'it',
      options: ['binario', 'biglietto', 'valigia', 'stazione'], answer: 0, explain: 'Da che binario = from which platform.' },
    { type: 'mc', prompt: 'Which means "a return ticket"?',
      options: ['un biglietto di andata e ritorno', 'un biglietto di sola andata', 'un biglietto in ritardo', 'una prenotazione doppia'], answer: 0, explain: 'Andata e ritorno = going and returning.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Scusi, per la stazione? — ___ dritto e giri a destra.', promptLang: 'it',
      options: ['Vada', 'Va', 'Andare', 'Andando'], answer: 0, explain: 'The formal command of andare is "vada".' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Da qui ___ dieci minuti a piedi.', promptLang: 'it',
      options: ['ci vogliono', 'ci vuole', 'si vuole', "c'è"], answer: 0, explain: 'Dieci minuti is plural → ci vogliono.' },

    { type: 'fill', prompt: 'Un ___ di sola andata per Roma, per favore.', hint: 'ticket', answer: ['biglietto'], explain: 'Il biglietto = the ticket.' },
    { type: 'fill', prompt: 'Il treno è ___ di venti minuti.', hint: 'late', answer: ['in ritardo'], explain: 'In ritardo = late / delayed.' },
    { type: 'fill', prompt: 'Giri a ___ al semaforo.', hint: 'left', answer: ['sinistra'], explain: 'A sinistra = to the left; a destra = to the right.' },
    { type: 'fill', prompt: 'Ho prenotato una ___ doppia per due notti.', hint: 'room', answer: ['camera'], explain: 'La camera = the room.' },
    { type: 'fill', prompt: "Da qui ___ un'ora in macchina.", hint: 'it takes', answer: ['ci vuole'], explain: "Un'ora is singular → ci vuole." },

    { type: 'translate', prompt: 'When does the train leave?', answer: ['quando parte il treno', 'a che ora parte il treno'], explain: 'Quando / a che ora + parte il treno.' },
    { type: 'translate', prompt: 'Where is the bus stop?',
      answer: ["dov'è la fermata dell'autobus", "dove è la fermata dell'autobus", "dove si trova la fermata dell'autobus", "dov'è la fermata del bus"], explain: "Dov'è = dove + è; della/dell' = di + l'." },
    { type: 'translate', prompt: 'I booked a room for three nights.', answer: ['ho prenotato una camera per tre notti'], explain: 'Prenotare → prenotato; per tre notti.' },

    { type: 'listen', mode: 'choose', audio: 'Il treno per Firenze parte dal binario cinque.', en: 'The train to Florence leaves from platform five.',
      options: ['Il treno per Firenze parte dal binario cinque.', 'Il treno per Firenze parte dal binario sei.', 'Il treno per Venezia parte dal binario cinque.', 'Il treno da Firenze arriva al binario cinque.'], answer: 0, explain: 'Listen for "Firenze" and "cinque".' },
    { type: 'listen', mode: 'type', audio: 'Vada dritto e poi giri a sinistra.', en: 'Go straight on and then turn left.',
      answer: ['vada dritto e poi giri a sinistra'], explain: 'Vada and giri are formal commands.' },
  ],
});
