/* Unit 1 — Passato prossimo con avere */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-01',
  number: 1,
  title: 'Passato prossimo con avere',
  subtitle: 'Talk about what you did: "Ieri ho mangiato la pizza."',

  grammar: [
    {
      title: 'Building the passato prossimo',
      html: `
        <p>The <strong>passato prossimo</strong> is the everyday way to talk about finished actions in the past. It has two parts:</p>
        <p class="formula">avere (present) + past participle</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Subject</th><th>avere</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>io</td><td lang="it">ho</td><td lang="it">ho mangiato</td></tr>
            <tr><td>tu</td><td lang="it">hai</td><td lang="it">hai mangiato</td></tr>
            <tr><td>lui / lei</td><td lang="it">ha</td><td lang="it">ha mangiato</td></tr>
            <tr><td>noi</td><td lang="it">abbiamo</td><td lang="it">abbiamo mangiato</td></tr>
            <tr><td>voi</td><td lang="it">avete</td><td lang="it">avete mangiato</td></tr>
            <tr><td>loro</td><td lang="it">hanno</td><td lang="it">hanno mangiato</td></tr>
          </tbody></table></div>
        <p>To make a regular participle, drop the ending and add:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Infinitive</th><th>Participle</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>-are</td><td>-ato</td><td lang="it">parlare → parlato</td></tr>
            <tr><td>-ere</td><td>-uto</td><td lang="it">vendere → venduto</td></tr>
            <tr><td>-ire</td><td>-ito</td><td lang="it">dormire → dormito</td></tr>
          </tbody></table></div>
        <p class="tip">With <strong lang="it">avere</strong> the participle does not change for the subject: <span lang="it">Maria ha mangiato</span>, <span lang="it">i bambini hanno mangiato</span>.</p>`,
    },
    {
      title: 'Irregular participles to memorise',
      html: `
        <p>Many very common verbs have irregular participles. Learn these first:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>Infinitive</th><th>Participle</th><th>English</th></tr></thead>
          <tbody>
            <tr><td lang="it">fare</td><td lang="it"><strong>fatto</strong></td><td>done / made</td></tr>
            <tr><td lang="it">vedere</td><td lang="it"><strong>visto</strong></td><td>seen</td></tr>
            <tr><td lang="it">prendere</td><td lang="it"><strong>preso</strong></td><td>taken</td></tr>
            <tr><td lang="it">scrivere</td><td lang="it"><strong>scritto</strong></td><td>written</td></tr>
            <tr><td lang="it">leggere</td><td lang="it"><strong>letto</strong></td><td>read</td></tr>
            <tr><td lang="it">aprire</td><td lang="it"><strong>aperto</strong></td><td>opened</td></tr>
            <tr><td lang="it">dire</td><td lang="it"><strong>detto</strong></td><td>said</td></tr>
            <tr><td lang="it">mettere</td><td lang="it"><strong>messo</strong></td><td>put</td></tr>
            <tr><td lang="it">bere</td><td lang="it"><strong>bevuto</strong></td><td>drunk</td></tr>
          </tbody></table></div>`,
    },
    {
      title: 'Negatives, "already", "not yet" and time words',
      html: `
        <p>Put <strong lang="it">non</strong> before <strong lang="it">avere</strong>: <span lang="it">Non ho mangiato.</span> (I didn't eat.)</p>
        <p>Short adverbs go <em>between</em> the helper and the participle:</p>
        <ul>
          <li><span lang="it">Ho <strong>già</strong> mangiato.</span> — I've already eaten.</li>
          <li><span lang="it">Non ho <strong>ancora</strong> mangiato.</span> — I haven't eaten yet.</li>
          <li><span lang="it">Hai <strong>mai</strong> visto questo film?</span> — Have you ever seen this film?</li>
        </ul>
        <p>Useful time expressions: <span lang="it">ieri, ieri sera, stamattina, la settimana scorsa, l'anno scorso, due giorni fa</span>.</p>`,
    },
  ],

  examples: [
    { it: 'Ieri sera ho mangiato la pizza con Marco.', en: 'Last night I ate pizza with Marco.' },
    { it: 'Hai già visto il nuovo film?', en: 'Have you already seen the new film?' },
    { it: 'Maria ha comprato un vestito rosso.', en: 'Maria bought a red dress.' },
    { it: 'Abbiamo preso il treno delle otto.', en: 'We took the eight o\'clock train.' },
    { it: 'Non ho ancora letto il libro.', en: 'I haven\'t read the book yet.' },
    { it: 'Che cosa avete fatto sabato scorso?', en: 'What did you do last Saturday?' },
    { it: 'I miei amici hanno bevuto un caffè al bar.', en: 'My friends had a coffee at the café.' },
  ],

  vocab: [
    { id: 'ieri', it: 'ieri', en: 'yesterday' },
    { id: 'ieri-sera', it: 'ieri sera', en: 'last night' },
    { id: 'settimana-scorsa', it: 'la settimana scorsa', en: 'last week', gender: 'f' },
    { id: 'gia', it: 'già', en: 'already' },
    { id: 'non-ancora', it: 'non ancora', en: 'not yet' },
    { id: 'ho-mangiato', it: 'ho mangiato', en: 'I ate / I have eaten' },
    { id: 'ho-bevuto', it: 'ho bevuto', en: 'I drank / I have drunk' },
    { id: 'ho-comprato', it: 'ho comprato', en: 'I bought' },
    { id: 'ho-visto', it: 'ho visto', en: 'I saw' },
    { id: 'ho-fatto', it: 'ho fatto', en: 'I did / I made' },
    { id: 'ho-preso', it: 'ho preso', en: 'I took' },
    { id: 'ho-scritto', it: 'ho scritto', en: 'I wrote' },
    { id: 'ho-letto', it: 'ho letto', en: 'I read' },
    { id: 'ho-aperto', it: 'ho aperto', en: 'I opened' },
    { id: 'biglietto', it: 'il biglietto', en: 'the ticket', gender: 'm' },
    { id: 'cena', it: 'la cena', en: 'dinner', gender: 'f' },
    { id: 'regalo', it: 'il regalo', en: 'the gift', gender: 'm' },
    { id: 'festa', it: 'la festa', en: 'the party', gender: 'f' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Ieri io ___ la pizza.', promptLang: 'it',
      options: ['ho mangiato', 'ho mangiare', 'ha mangiato', 'mangio'], answer: 0,
      explain: 'Io → ho, and mangiare (-are) becomes mangiato.' },
    { type: 'mc', prompt: 'What is the past participle of "vedere"?',
      options: ['visto', 'vedito', 'vedato', 'vesto'], answer: 0,
      explain: 'Vedere has an irregular participle: visto.' },
    { type: 'mc', prompt: 'Which sentence means "We took the train"?',
      options: ['Abbiamo preso il treno.', 'Siamo preso il treno.', 'Ho preso il treno.', 'Abbiamo prenduto il treno.'], answer: 0,
      explain: 'Noi → abbiamo, and prendere → preso (irregular).' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Loro ___ un caffè al bar.', promptLang: 'it',
      options: ['hanno bevuto', 'hai bevuto', 'ha bevuto', 'abbiamo bevuto'], answer: 0,
      explain: 'Loro → hanno. Bere → bevuto.' },

    { type: 'fill', prompt: 'Marco ___ un regalo per Anna.', hint: 'comprare', answer: ['ha comprato'],
      explain: 'Lui/lei → ha, and comprare → comprato.' },
    { type: 'fill', prompt: 'Noi ___ i compiti ieri.', hint: 'fare', answer: ['abbiamo fatto'],
      explain: 'Fare has an irregular participle: fatto.' },
    { type: 'fill', prompt: 'Hai già ___ il messaggio?', hint: 'leggere', answer: ['letto'],
      explain: 'Leggere → letto. The "già" sits between hai and the participle.' },
    { type: 'fill', prompt: 'Non ho ancora ___ l\'email.', hint: 'scrivere', answer: ['scritto'],
      explain: 'Scrivere → scritto (irregular).' },
    { type: 'fill', prompt: 'Voi ___ la finestra?', hint: 'aprire', answer: ['avete aperto'],
      explain: 'Voi → avete, and aprire → aperto (irregular).' },

    { type: 'translate', prompt: 'I bought a ticket.', answer: ['ho comprato un biglietto'],
      explain: 'Ho + comprato. You can leave out "io".' },
    { type: 'translate', prompt: 'She saw the film yesterday.', answer: ['ha visto il film ieri', 'ieri ha visto il film'],
      explain: 'Lei → ha, vedere → visto. Time words can come first or last.' },
    { type: 'translate', prompt: 'We haven\'t read the book yet.', answer: ['non abbiamo ancora letto il libro'],
      explain: 'Non + abbiamo + ancora + letto.' },

    { type: 'listen', mode: 'choose', audio: 'Ieri sera ho mangiato la pizza.', en: 'Last night I ate pizza.',
      options: ['Ieri sera ho mangiato la pizza.', 'Ieri sera ho comprato la pizza.', 'Ieri mattina ho mangiato la pizza.', 'Ieri sera abbiamo mangiato la pizza.'], answer: 0,
      explain: 'Listen for "ieri sera" and "ho mangiato".' },
    { type: 'listen', mode: 'type', audio: 'Abbiamo visto un bel film.', en: 'We saw a nice film.',
      answer: ['abbiamo visto un bel film'], explain: 'Abbiamo + visto (irregular participle of vedere).' },
  ],
});
