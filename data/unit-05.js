/* Unit 5 — Verbi riflessivi */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-05',
  number: 5,
  title: 'Verbi riflessivi',
  subtitle: 'Daily routine and feelings: "Mi sveglio alle sette."',

  grammar: [
    {
      title: 'What is a reflexive verb?',
      html: `
        <p>A reflexive verb describes an action you do to yourself. In the dictionary it ends in <strong>-si</strong>: <span lang="it">lavarsi</span> (to wash oneself), <span lang="it">svegliarsi</span> (to wake up). Conjugate the verb normally, and put a <strong>reflexive pronoun</strong> before it.</p>
        <div class="table-scroll"><table>
          <thead><tr><th></th><th>pronoun</th><th>lavarsi</th><th>svegliarsi</th></tr></thead>
          <tbody lang="it">
            <tr><td>io</td><td>mi</td><td>mi lavo</td><td>mi sveglio</td></tr>
            <tr><td>tu</td><td>ti</td><td>ti lavi</td><td>ti svegli</td></tr>
            <tr><td>lui / lei</td><td>si</td><td>si lava</td><td>si sveglia</td></tr>
            <tr><td>noi</td><td>ci</td><td>ci laviamo</td><td>ci svegliamo</td></tr>
            <tr><td>voi</td><td>vi</td><td>vi lavate</td><td>vi svegliate</td></tr>
            <tr><td>loro</td><td>si</td><td>si lavano</td><td>si svegliano</td></tr>
          </tbody></table></div>
        <p>Negative: <span lang="it">Non mi alzo presto.</span> With an infinitive, the pronoun matches the subject and either goes before the first verb or attaches to the infinitive: <span lang="it">Mi devo alzare / Devo alzarmi alle sette.</span></p>`,
    },
    {
      title: 'Passato prossimo: always essere',
      html: `
        <p>All reflexive verbs take <strong>essere</strong> in the passato prossimo, so the participle agrees with the subject (as in Unit 2).</p>
        <div class="table-scroll"><table>
          <thead><tr><th></th><th>alzarsi</th></tr></thead>
          <tbody lang="it">
            <tr><td>io</td><td>mi sono alzato/a</td></tr>
            <tr><td>tu</td><td>ti sei alzato/a</td></tr>
            <tr><td>lui / lei</td><td>si è alzato / alzata</td></tr>
            <tr><td>noi</td><td>ci siamo alzati/e</td></tr>
            <tr><td>voi</td><td>vi siete alzati/e</td></tr>
            <tr><td>loro</td><td>si sono alzati/e</td></tr>
          </tbody></table></div>
        <p class="tip">Reciprocal use: <span lang="it">ci</span> and <span lang="it">si</span> can also mean "each other": <span lang="it">Ci vediamo domani.</span> (We'll see each other tomorrow.) <span lang="it">Si sono baciati.</span> (They kissed each other.)</p>`,
    },
    {
      title: 'Routine, body parts and "surprise" reflexives',
      html: `
        <p>With parts of the body and clothes, Italian uses the <strong>article</strong>, not "my": <span lang="it">Mi lavo le mani. Mi lavo i denti. Mi metto il cappotto.</span></p>
        <p>Many verbs are reflexive in Italian but not in English:</p>
        <p lang="it"><strong>chiamarsi</strong> (to be called) — <em>Mi chiamo Sara.</em><br>
          <strong>sentirsi</strong> (to feel) — <em>Non mi sento bene.</em><br>
          <strong>divertirsi</strong> (to have fun) — <em>Ci divertiamo molto.</em><br>
          <strong>addormentarsi</strong> (to fall asleep), <strong>riposarsi</strong> (to rest), <strong>sedersi</strong> (to sit down), <strong>vestirsi</strong> (to get dressed)</p>
        <p>A typical morning: <span lang="it">Mi sveglio, mi alzo, mi faccio la doccia, mi vesto e faccio colazione.</span></p>`,
    },
  ],

  examples: [
    { it: 'Mi sveglio alle sette ogni mattina.', en: 'I wake up at seven every morning.' },
    { it: 'Di solito mi alzo subito, ma la domenica mi alzo tardi.', en: 'I usually get up straight away, but on Sundays I get up late.' },
    { it: 'Mi lavo i denti dopo la colazione.', en: 'I brush my teeth after breakfast.' },
    { it: 'Marco si è addormentato sul divano.', en: 'Marco fell asleep on the sofa.' },
    { it: 'Ieri ci siamo divertiti molto alla festa.', en: 'Yesterday we had a lot of fun at the party.' },
    { it: 'Anna si è vestita in fretta ed è uscita.', en: 'Anna got dressed in a hurry and went out.' },
    { it: 'Come ti chiami? Mi chiamo Sara.', en: "What's your name? My name is Sara." },
    { it: 'Ti sei riposata nel weekend?', en: 'Did you rest at the weekend?' },
    { it: 'Non mi sento bene oggi.', en: "I don't feel well today." },
  ],

  vocab: [
    { id: 'svegliarsi', it: 'svegliarsi', en: 'to wake up' },
    { id: 'alzarsi', it: 'alzarsi', en: 'to get up' },
    { id: 'lavarsi', it: 'lavarsi', en: 'to wash (oneself)' },
    { id: 'vestirsi', it: 'vestirsi', en: 'to get dressed' },
    { id: 'addormentarsi', it: 'addormentarsi', en: 'to fall asleep' },
    { id: 'divertirsi', it: 'divertirsi', en: 'to have fun' },
    { id: 'sentirsi', it: 'sentirsi', en: 'to feel' },
    { id: 'riposarsi', it: 'riposarsi', en: 'to rest' },
    { id: 'chiamarsi', it: 'chiamarsi', en: 'to be called' },
    { id: 'sedersi', it: 'sedersi', en: 'to sit down' },
    { id: 'denti', it: 'i denti', en: 'the teeth', gender: 'm' },
    { id: 'doccia', it: 'la doccia', en: 'the shower', gender: 'f' },
    { id: 'colazione', it: 'la colazione', en: 'breakfast', gender: 'f' },
    { id: 'pigiama', it: 'il pigiama', en: 'the pyjamas', gender: 'm' },
    { id: 'divano', it: 'il divano', en: 'the sofa', gender: 'm' },
    { id: 'in-fretta', it: 'in fretta', en: 'in a hurry / quickly' },
    { id: 'presto', it: 'presto', en: 'early / soon' },
    { id: 'tardi', it: 'tardi', en: 'late' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Io ___ alle sette.', promptLang: 'it',
      options: ['mi alzo', 'si alza', 'ti alzi', 'ci alziamo'], answer: 0, explain: 'Io → mi.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Anna ___ alle sette.', promptLang: 'it',
      options: ['si è alzata', 'si è alzato', 'ha alzata', 'si alzata'], answer: 0, explain: 'Reflexives take essere; Anna is feminine → alzata.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Ieri sera noi (m.) ___ molto alla festa.', promptLang: 'it',
      options: ['ci siamo divertiti', 'si sono divertiti', 'abbiamo divertito', 'ci divertiamo'], answer: 0, explain: 'Noi → ci siamo + masculine plural participle.' },
    { type: 'mc', prompt: 'How do you say "My name is Sara"?',
      options: ['Mi chiamo Sara.', 'Mi chiama Sara.', 'Sono chiamo Sara.', 'Chiamo Sara.'], answer: 0, explain: 'Chiamarsi is reflexive: mi chiamo.' },

    { type: 'fill', prompt: 'Lei ___ presto ogni giorno.', hint: 'svegliarsi', answer: ['si sveglia'], explain: 'Lei → si.' },
    { type: 'fill', prompt: 'Noi ___ alle otto.', hint: 'alzarsi', answer: ['ci alziamo'], explain: 'Noi → ci + alziamo.' },
    { type: 'fill', prompt: 'Ieri sera io (f.) ___ presto.', hint: 'addormentarsi', answer: ['mi sono addormentata'], explain: 'Mi sono + addormentata (feminine).' },
    { type: 'fill', prompt: 'Ti ___ bene?', hint: 'sentirsi, tu', answer: ['senti'], explain: 'Tu → senti. The pronoun ti is already there.' },
    { type: 'fill', prompt: 'Vi ___ divertiti alla festa?', hint: 'essere, voi', answer: ['siete'], explain: 'Vi siete divertiti: reflexive passato prossimo uses essere.' },

    { type: 'translate', prompt: 'I wash my hands.', answer: ['mi lavo le mani'], explain: 'Mi lavo + le mani (Italian uses the article, not "my").' },
    { type: 'translate', prompt: 'We had a lot of fun yesterday.',
      answer: ['ieri ci siamo divertiti molto', 'ieri ci siamo divertite molto', 'ci siamo divertiti molto ieri', 'ci siamo divertite molto ieri',
        'ieri ci siamo divertiti tanto', 'ieri ci siamo divertite tanto', 'ci siamo divertiti tanto ieri', 'ci siamo divertite tanto ieri'],
      explain: 'Divertirsi → ci siamo divertiti/e.' },
    { type: 'translate', prompt: 'She got dressed quickly.',
      answer: ['si è vestita in fretta', 'si è vestita velocemente', 'si è vestita rapidamente'], explain: 'Si è vestita (feminine) + in fretta.' },

    { type: 'listen', mode: 'choose', audio: 'Mi sveglio alle sette ogni mattina.', en: 'I wake up at seven every morning.',
      options: ['Mi sveglio alle sette ogni mattina.', 'Mi alzo alle sette ogni mattina.', 'Ti svegli alle sette ogni mattina.', 'Mi sveglio alle otto ogni mattina.'], answer: 0, explain: 'Listen for "sveglio" and "sette".' },
    { type: 'listen', mode: 'type', audio: 'Ci siamo divertiti molto alla festa.', en: 'We had a lot of fun at the party.',
      answer: ['ci siamo divertiti molto alla festa', 'ci siamo divertite molto alla festa'], explain: 'Ci siamo + divertiti/e.' },
  ],
});
