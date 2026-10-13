/* Unit 7 — Il futuro semplice */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-07',
  number: 7,
  title: 'Il futuro semplice',
  subtitle: 'Plans and predictions: "Domani partirò."',

  grammar: [
    {
      title: 'Regular forms',
      html: `
        <p>Take the infinitive, drop the final <strong>-e</strong> (and change <strong>-are → -er-</strong>), then add the same endings for every verb: <strong>-ò, -ai, -à, -emo, -ete, -anno</strong>. The stressed final vowel on <em>-ò</em> and <em>-à</em> matters!</p>
        <div class="table-scroll"><table>
          <thead><tr><th></th><th>parlare</th><th>prendere</th><th>partire</th></tr></thead>
          <tbody lang="it">
            <tr><td>io</td><td>parlerò</td><td>prenderò</td><td>partirò</td></tr>
            <tr><td>tu</td><td>parlerai</td><td>prenderai</td><td>partirai</td></tr>
            <tr><td>lui / lei</td><td>parlerà</td><td>prenderà</td><td>partirà</td></tr>
            <tr><td>noi</td><td>parleremo</td><td>prenderemo</td><td>partiremo</td></tr>
            <tr><td>voi</td><td>parlerete</td><td>prenderete</td><td>partirete</td></tr>
            <tr><td>loro</td><td>parleranno</td><td>prenderanno</td><td>partiranno</td></tr>
          </tbody></table></div>
        <p><strong>Spelling changes</strong> keep the sound of the stem:</p>
        <p lang="it">-care / -gare add <strong>h</strong>: <em>cercare → cercherò, pagare → pagherò</em><br>
          -ciare / -giare lose the <strong>i</strong>: <em>cominciare → comincerò, mangiare → mangerò</em></p>`,
    },
    {
      title: 'Irregular stems',
      html: `
        <p>Many common verbs shorten their stem, but the endings stay the same. Here is the <strong>io</strong> form:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Infinitive</th><th>io</th><th>Infinitive</th><th>io</th></tr></thead>
          <tbody lang="it">
            <tr><td>essere</td><td><strong>sarò</strong></td><td>venire</td><td><strong>verrò</strong></td></tr>
            <tr><td>avere</td><td><strong>avrò</strong></td><td>volere</td><td><strong>vorrò</strong></td></tr>
            <tr><td>andare</td><td><strong>andrò</strong></td><td>potere</td><td><strong>potrò</strong></td></tr>
            <tr><td>fare</td><td><strong>farò</strong></td><td>dovere</td><td><strong>dovrò</strong></td></tr>
            <tr><td>dare</td><td><strong>darò</strong></td><td>sapere</td><td><strong>saprò</strong></td></tr>
            <tr><td>stare</td><td><strong>starò</strong></td><td>vedere</td><td><strong>vedrò</strong></td></tr>
            <tr><td>bere</td><td><strong>berrò</strong></td><td>rimanere</td><td><strong>rimarrò</strong></td></tr>
          </tbody></table></div>
        <p class="tip">Verbs like <span lang="it">fare, dare, stare</span> keep the <em>-a-</em> (no -er-): <span lang="it">farò, darò, starò</span>.</p>`,
    },
    {
      title: 'How to use the future',
      html: `
        <ul>
          <li><strong>Plans and predictions:</strong> <span lang="it">L'anno prossimo andremo in Sicilia. Domani pioverà.</span></li>
          <li><strong>After quando</strong> (and <em>appena</em>, "as soon as") Italian uses the future where English uses the present: <span lang="it">Quando arriverò, ti chiamerò.</span> (When I arrive, I'll call you.)</li>
          <li><strong>Probability about the present:</strong> <span lang="it">Dov'è Marco? — Sarà in ufficio.</span> (He's probably at the office.) <span lang="it">Che ora sarà?</span> (I wonder what time it is.)</li>
          <li><strong>Near plans</strong> are often just the present: <span lang="it">Domani vado a Roma.</span> Both are fine; the future sounds a little more distant or formal.</li>
        </ul>
        <p>Time words: <span lang="it">domani, dopodomani, la settimana prossima, il mese prossimo, l'anno prossimo, tra un mese, tra poco, un giorno</span>.</p>`,
    },
  ],

  examples: [
    { it: 'Domani partirò per Roma.', en: "Tomorrow I'll leave for Rome." },
    { it: "L'anno prossimo andremo in Sicilia.", en: 'Next year we will go to Sicily.' },
    { it: 'Quando arriverò, ti chiamerò.', en: "When I arrive, I'll call you." },
    { it: 'Sarò a casa alle sei.', en: "I'll be home at six." },
    { it: 'Che cosa farai questo weekend?', en: 'What will you do this weekend?' },
    { it: "Domani pioverà, quindi porterò l'ombrello.", en: "It will rain tomorrow, so I'll bring an umbrella." },
    { it: 'Verrai alla festa di Giulia?', en: "Will you come to Giulia's party?" },
    { it: 'Studierò italiano ogni giorno.', en: 'I will study Italian every day.' },
    { it: "Dov'è Marco? — Sarà in ufficio.", en: "Where is Marco? — He's probably at the office." },
  ],

  vocab: [
    { id: 'domani', it: 'domani', en: 'tomorrow' },
    { id: 'dopodomani', it: 'dopodomani', en: 'the day after tomorrow' },
    { id: 'settimana-prossima', it: 'la settimana prossima', en: 'next week', gender: 'f' },
    { id: 'mese-prossimo', it: 'il mese prossimo', en: 'next month', gender: 'm' },
    { id: 'anno-prossimo', it: "l'anno prossimo", en: 'next year', gender: 'm' },
    { id: 'tra-poco', it: 'tra poco', en: 'soon / in a little while' },
    { id: 'un-giorno', it: 'un giorno', en: 'one day / someday' },
    { id: 'forse', it: 'forse', en: 'maybe' },
    { id: 'sicuramente', it: 'sicuramente', en: 'surely / definitely' },
    { id: 'programma', it: 'il programma', en: 'the plan / programme', gender: 'm' },
    { id: 'progetto', it: 'il progetto', en: 'the project', gender: 'm' },
    { id: 'weekend', it: 'il weekend', en: 'the weekend', gender: 'm' },
    { id: 'ombrello', it: "l'ombrello", en: 'the umbrella', gender: 'm' },
    { id: 'futuro', it: 'il futuro', en: 'the future', gender: 'm' },
    { id: 'previsione', it: 'la previsione', en: 'the forecast / prediction', gender: 'f' },
    { id: 'promettere', it: 'promettere', en: 'to promise' },
    { id: 'sperare', it: 'sperare', en: 'to hope' },
    { id: 'decidere', it: 'decidere', en: 'to decide' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Domani io ___ a Milano.', promptLang: 'it',
      options: ['andrò', 'andai', 'andavo', 'sono andato'], answer: 0, explain: 'Andare has an irregular future stem: andr-.' },
    { type: 'mc', prompt: 'Future of "essere", noi:',
      options: ['saremo', 'siamo', 'eravamo', 'stiamo'], answer: 0, explain: 'Essere → sarò, sarai, sarà, saremo, sarete, saranno.' },
    { type: 'mc', prompt: 'How do you write the future of "pagare", io?',
      options: ['pagherò', 'pagarò', 'pagerò', 'pagaro'], answer: 0, explain: 'Verbs in -gare add an h to keep the hard g sound: pagherò.' },
    { type: 'mc', prompt: 'Which verb has the irregular future stem "verr-"?',
      options: ['venire', 'vedere', 'vivere', 'volere'], answer: 0, explain: 'Venire → verrò. Vedere → vedrò, vivere → vivrò, volere → vorrò.' },

    { type: 'fill', prompt: 'Domani noi ___ al ristorante.', hint: 'mangiare', answer: ['mangeremo'], explain: 'Mangiare → mangerò… The i is dropped before -er-.' },
    { type: 'fill', prompt: "L'anno prossimo loro ___ in Sicilia.", hint: 'andare', answer: ['andranno'], explain: 'Andr- + -anno.' },
    { type: 'fill', prompt: 'Che cosa ___ tu questo weekend?', hint: 'fare', answer: ['farai'], explain: 'Fare keeps the a: farò, farai, farà…' },
    { type: 'fill', prompt: 'Domani io ___ a casa tutto il giorno.', hint: 'essere', answer: ['sarò'], explain: 'Essere → sarò.' },
    { type: 'fill', prompt: 'Tu ___ alla festa di Giulia?', hint: 'venire', answer: ['verrai'], explain: 'Venire → verr- + -ai.' },

    { type: 'translate', prompt: "Tomorrow I'll call you.", answer: ['domani ti chiamerò', 'ti chiamerò domani'], explain: 'Chiamare → chiamerò; the pronoun ti goes before the verb.' },
    { type: 'translate', prompt: 'Next year we will travel to Italy.',
      answer: ["l'anno prossimo viaggeremo in italia", "viaggeremo in italia l'anno prossimo"], explain: 'Viaggiare → viaggerò: the i drops.' },
    { type: 'translate', prompt: 'It will rain tomorrow.', answer: ['domani pioverà', 'pioverà domani'], explain: 'Piovere → pioverà.' },

    { type: 'listen', mode: 'choose', audio: 'Domani partirò per Roma.', en: "Tomorrow I'll leave for Rome.",
      options: ['Domani partirò per Roma.', 'Domani partiremo per Roma.', 'Ieri sono partito per Roma.', 'Domani tornerò da Roma.'], answer: 0, explain: 'Listen for the ending -irò.' },
    { type: 'listen', mode: 'type', audio: "L'anno prossimo andremo in Sicilia.", en: 'Next year we will go to Sicily.',
      answer: ["l'anno prossimo andremo in sicilia"], explain: 'Andremo = andr- + -emo.' },
  ],
});
