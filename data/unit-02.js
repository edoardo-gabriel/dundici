/* Unit 2 — Passato prossimo con essere */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-02',
  number: 2,
  title: 'Passato prossimo con essere',
  subtitle: 'Verbs of movement and change: "Sono andata a Roma."',

  grammar: [
    {
      title: 'When to use essere',
      html: `
        <p>Some verbs form the passato prossimo with <strong>essere</strong> instead of avere. They are mostly verbs of <strong>movement</strong>, <strong>change</strong> and <strong>state</strong>:</p>
        <p class="formula" lang="it">andare, venire, arrivare, partire, uscire, entrare, tornare, restare / rimanere, stare, essere, nascere, diventare</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Subject</th><th>essere</th></tr></thead>
          <tbody>
            <tr><td>io</td><td lang="it">sono</td></tr><tr><td>tu</td><td lang="it">sei</td></tr>
            <tr><td>lui / lei</td><td lang="it">è</td></tr><tr><td>noi</td><td lang="it">siamo</td></tr>
            <tr><td>voi</td><td lang="it">siete</td></tr><tr><td>loro</td><td lang="it">sono</td></tr>
          </tbody></table></div>`,
    },
    {
      title: 'The participle agrees with the subject',
      html: `
        <p>With <strong>essere</strong> the participle behaves like an adjective: it changes ending to match the subject.</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Subject</th><th>Ending</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>masculine singular</td><td>-o</td><td lang="it">Marco è andato</td></tr>
            <tr><td>feminine singular</td><td>-a</td><td lang="it">Maria è andata</td></tr>
            <tr><td>masculine plural</td><td>-i</td><td lang="it">Marco e Luca sono andati</td></tr>
            <tr><td>feminine plural</td><td>-e</td><td lang="it">Anna e Giulia sono andate</td></tr>
          </tbody></table></div>
        <p class="tip">A mixed group (even 1 man and 20 women) uses the masculine plural: <span lang="it">Siamo usciti.</span> When speaking about yourself, match your own gender: <span lang="it">Sono stata</span> (woman) / <span lang="it">Sono stato</span> (man).</p>`,
    },
    {
      title: 'Irregular participles and avere vs. essere',
      html: `
        <p>Irregular participles of essere-verbs:</p>
        <p lang="it"><strong>essere / stare → stato</strong> · <strong>venire → venuto</strong> · <strong>rimanere → rimasto</strong> · <strong>scendere → sceso</strong> · <strong>nascere → nato</strong> · <strong>morire → morto</strong></p>
        <p>Careful! Some verbs that feel like "movement" still take <strong>avere</strong>, because you do not arrive anywhere: <span lang="it">Ho camminato</span>, <span lang="it">ho viaggiato</span>, <span lang="it">ho nuotato</span>, <span lang="it">ho dormito</span>, <span lang="it">ho lavorato</span>.</p>
        <p>Compare: <span lang="it">Ho viaggiato molto.</span> (I travelled a lot) vs. <span lang="it">Sono andata a Parigi.</span> (I went to Paris).</p>`,
    },
  ],

  examples: [
    { it: 'Sono andata a Roma con mia sorella.', en: 'I went to Rome with my sister.' },
    { it: 'Marco è arrivato in ritardo.', en: 'Marco arrived late.' },
    { it: 'Siamo usciti dal cinema alle undici.', en: 'We left the cinema at eleven.' },
    { it: 'Anna e Giulia sono partite ieri mattina.', en: 'Anna and Giulia left yesterday morning.' },
    { it: 'A che ora sei tornato a casa?', en: 'What time did you get home?' },
    { it: "Siete stati in Sicilia l'anno scorso?", en: 'Were you in Sicily last year?' },
    { it: 'Mia nonna è nata nel 1950.', en: 'My grandmother was born in 1950.' },
    { it: 'Non sono ancora arrivati.', en: "They haven't arrived yet." },
  ],

  vocab: [
    { id: 'andare', it: 'andare', en: 'to go' },
    { id: 'venire', it: 'venire', en: 'to come' },
    { id: 'arrivare', it: 'arrivare', en: 'to arrive' },
    { id: 'partire', it: 'partire', en: 'to leave / depart' },
    { id: 'uscire', it: 'uscire', en: 'to go out' },
    { id: 'entrare', it: 'entrare', en: 'to enter' },
    { id: 'tornare', it: 'tornare', en: 'to come back' },
    { id: 'restare', it: 'restare', en: 'to stay' },
    { id: 'nascere', it: 'nascere', en: 'to be born' },
    { id: 'sono-stato', it: 'sono stato/a', en: 'I was / I have been' },
    { id: 'stazione', it: 'la stazione', en: 'the station', gender: 'f' },
    { id: 'aeroporto', it: "l'aeroporto", en: 'the airport', gender: 'm' },
    { id: 'viaggio', it: 'il viaggio', en: 'the trip', gender: 'm' },
    { id: 'valigia', it: 'la valigia', en: 'the suitcase', gender: 'f' },
    { id: 'vacanza', it: 'la vacanza', en: 'the holiday', gender: 'f' },
    { id: 'in-ritardo', it: 'in ritardo', en: 'late' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct helper verb.', prompt: 'Maria ___ andata al mercato.', promptLang: 'it',
      options: ['è', 'ha', 'sono', 'hanno'], answer: 0,
      explain: 'Andare takes essere. Maria → è.' },
    { type: 'mc', instruction: 'Choose the correct helper verb.', prompt: 'Loro ___ arrivati ieri.', promptLang: 'it',
      options: ['sono', 'hanno', 'è', 'siamo'], answer: 0,
      explain: 'Arrivare takes essere. Loro → sono.' },
    { type: 'mc', prompt: 'What is the past participle of "venire"?',
      options: ['venuto', 'venito', 'venato', 'vento'], answer: 0,
      explain: 'Venire → venuto (irregular).' },
    { type: 'mc', instruction: 'Choose the correct participle.', prompt: 'Anna e Chiara sono ___.', promptLang: 'it',
      options: ['partito', 'partita', 'partiti', 'partite'], answer: 3,
      explain: 'Two women = feminine plural, so -e: partite.' },
    { type: 'mc', prompt: 'Which sentence is correct?',
      options: ['Ho dormito otto ore.', 'Sono dormito otto ore.', 'Ho andato a Roma.', 'Sono mangiato la pizza.'], answer: 0,
      explain: 'Dormire takes avere; andare takes essere.' },

    { type: 'fill', prompt: 'Io (f.) ___ al cinema ieri sera.', hint: 'andare', answer: ['sono andata'],
      explain: 'A woman speaking: sono + andata (feminine).' },
    { type: 'fill', prompt: 'Marco ___ a casa tardi.', hint: 'tornare', answer: ['è tornato'],
      explain: 'Marco → è tornato (masculine -o).' },
    { type: 'fill', prompt: 'Noi (m.) ___ alle otto.', hint: 'uscire', answer: ['siamo usciti'],
      explain: 'Noi (all men) → siamo usciti (masculine plural -i).' },
    { type: 'fill', prompt: 'Sei mai ___ in Italia? (tu, f.)', hint: 'essere', answer: ['stata'],
      explain: 'Essere → stato, feminine: stata.' },
    { type: 'fill', prompt: 'Mia nonna ___ a Napoli.', hint: 'nascere', answer: ['è nata'],
      explain: 'Nascere → nato; for a grandmother: è nata.' },

    { type: 'translate', prompt: 'I (f.) arrived at the station.', answer: ['sono arrivata alla stazione'],
      explain: 'Sono arrivata (feminine) + alla stazione.' },
    { type: 'translate', prompt: 'They (m.) left yesterday.', answer: ['sono partiti ieri', 'ieri sono partiti'],
      explain: 'Loro (m.) → sono partiti.' },
    { type: 'translate', prompt: 'We (f.) stayed at home.', answer: ['siamo rimaste a casa', 'siamo restate a casa'],
      explain: 'Rimanere → rimasto (irregular); restare → restato. Feminine plural: -e.' },

    { type: 'listen', mode: 'choose', audio: 'Sono arrivata alla stazione alle sei.', en: 'I arrived at the station at six.',
      options: ['Sono arrivata alla stazione alle sei.', 'Sono partita dalla stazione alle sei.', 'Sono arrivata alla stazione alle sette.', 'Siamo arrivate alla stazione alle sei.'], answer: 0,
      explain: 'Listen for "arrivata", "stazione" and "sei" (six).' },
    { type: 'listen', mode: 'type', audio: 'Siamo andati al mare in estate.', en: 'We went to the seaside in summer.',
      answer: ['siamo andati al mare in estate', 'siamo andate al mare in estate'],
      explain: 'Siamo + andati/andate (agrees with who "we" are).' },
  ],
});
