/* Unit 4 — Passato prossimo o imperfetto? */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-04',
  number: 4,
  title: 'Passato prossimo o imperfetto?',
  subtitle: 'Choosing between a finished event and a background scene.',

  grammar: [
    {
      title: 'Think of a film: scene vs. action',
      html: `
        <p>When you tell a story in Italian, you switch constantly between two tenses:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Imperfetto = the <em>scenery</em></th><th>Passato prossimo = the <em>action</em></th></tr></thead>
          <tbody>
            <tr><td>what things were like (weather, age, feelings)</td><td>what happened (a completed event)</td></tr>
            <tr><td>habits and repeated actions</td><td>a single event, or a precise number of times</td></tr>
            <tr><td>an action in progress</td><td>an action that starts, ends or interrupts</td></tr>
          </tbody></table></div>
        <p class="tip"><span lang="it">Pioveva</span> (it was raining — the scene) → <span lang="it">sono rimasto a casa</span> (I stayed home — what happened).</p>`,
    },
    {
      title: 'Interrupted actions: mentre and quando',
      html: `
        <p>The classic pattern is a long action in the imperfetto, interrupted by a short event in the passato prossimo:</p>
        <p class="formula" lang="it">Mentre mangiavo, è arrivato Luca.</p>
        <ul>
          <li><strong lang="it">mentre</strong> + imperfetto: the action in progress.</li>
          <li><strong lang="it">quando</strong> + passato prossimo: the moment something happened. <span lang="it">Quando sono arrivata, pioveva.</span></li>
          <li>Two actions happening in parallel are both in the imperfetto: <span lang="it">Mentre io cucinavo, Luca guardava la TV.</span></li>
          <li>A chain of events, one after the other, is all in the passato prossimo: <span lang="it">Mi sono alzato, ho fatto colazione e sono uscito.</span></li>
        </ul>`,
    },
    {
      title: 'Signal words and verbs that change meaning',
      html: `
        <p><strong>Signal words.</strong> Imperfetto: <span lang="it">di solito, sempre, spesso, ogni giorno, mentre, da piccolo</span>. Passato prossimo: <span lang="it">ieri, un giorno, all'improvviso, poi, dopo, due volte</span>.</p>
        <p><strong>Some verbs change meaning</strong> depending on the tense:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Verb</th><th>Imperfetto (state)</th><th>Passato prossimo (event)</th></tr></thead>
          <tbody>
            <tr><td lang="it">sapere</td><td><span lang="it">sapevo</span> — I knew</td><td><span lang="it">ho saputo</span> — I found out</td></tr>
            <tr><td lang="it">conoscere</td><td><span lang="it">conoscevo</span> — I knew (a person)</td><td><span lang="it">ho conosciuto</span> — I met</td></tr>
          </tbody></table></div>`,
    },
  ],

  examples: [
    { it: 'Mentre mangiavo, è arrivato Luca.', en: 'While I was eating, Luca arrived.' },
    { it: 'Pioveva, quindi sono rimasto a casa.', en: 'It was raining, so I stayed at home.' },
    { it: 'Quando ero piccola, mi sono rotta un braccio.', en: 'When I was little, I broke an arm.' },
    { it: 'Ieri ho incontrato Marta mentre andavo al lavoro.', en: 'Yesterday I ran into Marta while I was going to work.' },
    { it: 'Faceva freddo, così ho messo il cappotto.', en: 'It was cold, so I put on my coat.' },
    { it: 'Di solito mangiavo a casa, ma ieri ho mangiato al ristorante.', en: 'I usually ate at home, but yesterday I ate at a restaurant.' },
    { it: 'Non sapevo niente, poi ho saputo la verità.', en: "I knew nothing, then I found out the truth." },
    { it: 'Non conoscevo nessuno alla festa, ma ho conosciuto Paolo.', en: "I didn't know anyone at the party, but I met Paolo." },
    { it: "All'improvviso ha cominciato a piovere.", en: 'Suddenly it started to rain.' },
  ],

  vocab: [
    { id: 'allimprovviso', it: "all'improvviso", en: 'suddenly' },
    { id: 'quando', it: 'quando', en: 'when' },
    { id: 'poi', it: 'poi', en: 'then' },
    { id: 'prima', it: 'prima', en: 'before / first' },
    { id: 'dopo', it: 'dopo', en: 'after / afterwards' },
    { id: 'cosi', it: 'così', en: 'so / like this' },
    { id: 'quindi', it: 'quindi', en: 'therefore / so' },
    { id: 'piovere', it: 'piovere', en: 'to rain' },
    { id: 'incontrare', it: 'incontrare', en: 'to meet / run into' },
    { id: 'conoscere', it: 'conoscere', en: 'to know (a person) / to meet' },
    { id: 'sapere', it: 'sapere', en: 'to know (a fact)' },
    { id: 'cappotto', it: 'il cappotto', en: 'the coat', gender: 'm' },
    { id: 'lavoro', it: 'il lavoro', en: 'work / job', gender: 'm' },
    { id: 'notizia', it: 'la notizia', en: 'the news', gender: 'f' },
    { id: 'storia', it: 'la storia', en: 'the story / history', gender: 'f' },
    { id: 'verita', it: 'la verità', en: 'the truth', gender: 'f' },
    { id: 'telefono', it: 'il telefono', en: 'the phone', gender: 'm' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Mentre io ___ la TV, è suonato il telefono.', promptLang: 'it',
      options: ['guardavo', 'ho guardato', 'guardo', 'guarderò'], answer: 0, explain: 'The ongoing background action takes the imperfetto.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: "All'improvviso ___ a piovere.", promptLang: 'it',
      options: ['ha cominciato', 'cominciava', 'comincerà', 'cominciare'], answer: 0, explain: '"All\'improvviso" signals one sudden event → passato prossimo.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Quando ero piccola, ___ sempre in campagna.', promptLang: 'it',
      options: ['andavo', 'sono andata', 'andrò', 'vado'], answer: 0, explain: '"Sempre" + childhood = a repeated habit → imperfetto.' },
    { type: 'mc', prompt: 'What does "Ho conosciuto Paolo" mean?', optionLang: 'en',
      options: ['I met Paolo (for the first time).', 'I used to know Paolo.', 'I will meet Paolo.', 'I know Paolo well.'], answer: 0,
      explain: 'Conoscere in the passato prossimo means "to meet"; in the imperfetto (conoscevo) it means "I knew".' },

    { type: 'fill', prompt: 'Ieri ___ al cinema.', hint: 'andare, io', answer: ['sono andato', 'sono andata'], explain: 'A single finished event → passato prossimo with essere.' },
    { type: 'fill', prompt: 'Mentre ___ la cena, Luca guardava la TV.', hint: 'preparare, io', answer: ['preparavo'], explain: 'Two parallel actions are both in the imperfetto.' },
    { type: 'fill', prompt: 'Faceva freddo, così ___ il cappotto.', hint: 'mettere, io', answer: ['ho messo'], explain: 'The cold is the scene; putting on the coat is the action. Mettere → messo.' },
    { type: 'fill', prompt: 'Non ___ nessuno alla festa.', hint: 'conoscere, io', answer: ['conoscevo'], explain: 'A state ("I knew no one") → imperfetto.' },
    { type: 'fill', prompt: 'Ieri ___ Marta mentre andavo al lavoro.', hint: 'incontrare', answer: ['ho incontrato'], explain: 'The meeting is the event; "andavo" is the background.' },

    { type: 'translate', prompt: 'While I was cooking, the phone rang.',
      answer: ['mentre cucinavo, è suonato il telefono', 'mentre cucinavo, ha suonato il telefono', 'mentre cucinavo, è squillato il telefono', 'mentre cucinavo, ha squillato il telefono'],
      explain: 'Cucinavo (background) + è suonato / ha squillato (event).' },
    { type: 'translate', prompt: 'It was raining, so I stayed at home.',
      answer: ['pioveva, quindi sono rimasto a casa', 'pioveva, quindi sono rimasta a casa', 'pioveva, così sono rimasto a casa', 'pioveva, così sono rimasta a casa',
        'sono rimasto a casa perché pioveva', 'sono rimasta a casa perché pioveva'],
      explain: 'Pioveva (scene) + sono rimasto/a (what happened).' },
    { type: 'translate', prompt: 'Suddenly it started to rain.',
      answer: ["all'improvviso ha cominciato a piovere", "all'improvviso ha iniziato a piovere", 'improvvisamente ha cominciato a piovere', 'improvvisamente ha iniziato a piovere'],
      explain: 'One sudden event → passato prossimo.' },

    { type: 'listen', mode: 'choose', audio: 'Mentre dormivo, è arrivato un messaggio.', en: 'While I was sleeping, a message arrived.',
      options: ['Mentre dormivo, è arrivato un messaggio.', 'Mentre mangiavo, è arrivato un messaggio.', 'Mentre dormivo, è arrivata una lettera.', 'Mentre dormiva, è arrivato un messaggio.'], answer: 0, explain: 'Listen for "dormivo".' },
    { type: 'listen', mode: 'type', audio: 'Pioveva, così sono rimasta a casa.', en: 'It was raining, so I stayed at home.',
      answer: ['pioveva così sono rimasta a casa', 'pioveva così sono rimasto a casa'], explain: 'Pioveva (imperfetto) + sono rimasta (passato prossimo).' },
  ],
});
