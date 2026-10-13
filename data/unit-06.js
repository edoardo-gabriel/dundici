/* Unit 6 — Le preposizioni */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-06',
  number: 6,
  title: 'Le preposizioni',
  subtitle: 'a, in, di, da, su — and how they merge with the article.',

  grammar: [
    {
      title: 'The main simple prepositions',
      html: `
        <div class="table-scroll"><table>
          <thead><tr><th>Prep.</th><th>Main uses</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td lang="it"><strong>a</strong></td><td>to / at a city, a point in time, "at" a place</td><td lang="it">Vado a Roma. Sono a casa. Alle otto.</td></tr>
            <tr><td lang="it"><strong>in</strong></td><td>in / to a country, region; inside; means of transport</td><td lang="it">Vivo in Italia. Vado in treno.</td></tr>
            <tr><td lang="it"><strong>di</strong></td><td>of; origin; made of; about</td><td lang="it">Sono di Napoli. Parliamo di lavoro.</td></tr>
            <tr><td lang="it"><strong>da</strong></td><td>from; at someone's place; since / for</td><td lang="it">Vengo da Milano. Vado dal medico. Studio da due anni.</td></tr>
            <tr><td lang="it"><strong>su</strong></td><td>on; about</td><td lang="it">Il libro è sul tavolo.</td></tr>
            <tr><td lang="it"><strong>con / per</strong></td><td>with / for, in order to</td><td lang="it">Esco con Anna. Questo è per te.</td></tr>
            <tr><td lang="it"><strong>tra / fra</strong></td><td>between; "in" (future time)</td><td lang="it">Arrivo tra dieci minuti.</td></tr>
          </tbody></table></div>`,
    },
    {
      title: 'Articulated prepositions (preposizioni articolate)',
      html: `
        <p>The prepositions <strong>a, di, da, in, su</strong> merge with the definite article. (<em>con</em>, <em>per</em>, <em>tra</em> normally stay separate: <span lang="it">con il cane</span>, <span lang="it">per la mamma</span>.)</p>
        <div class="table-scroll"><table>
          <thead><tr><th></th><th>il</th><th>lo</th><th>l'</th><th>la</th><th>i</th><th>gli</th><th>le</th></tr></thead>
          <tbody lang="it">
            <tr><td><strong>a</strong></td><td>al</td><td>allo</td><td>all'</td><td>alla</td><td>ai</td><td>agli</td><td>alle</td></tr>
            <tr><td><strong>di</strong></td><td>del</td><td>dello</td><td>dell'</td><td>della</td><td>dei</td><td>degli</td><td>delle</td></tr>
            <tr><td><strong>da</strong></td><td>dal</td><td>dallo</td><td>dall'</td><td>dalla</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
            <tr><td><strong>in</strong></td><td>nel</td><td>nello</td><td>nell'</td><td>nella</td><td>nei</td><td>negli</td><td>nelle</td></tr>
            <tr><td><strong>su</strong></td><td>sul</td><td>sullo</td><td>sull'</td><td>sulla</td><td>sui</td><td>sugli</td><td>sulle</td></tr>
          </tbody></table></div>
        <p class="tip">Pick the article first (il mercato, la stazione, l'ufficio), then merge: <span lang="it">al mercato, alla stazione, all'ufficio</span>.</p>`,
    },
    {
      title: 'Places, transport and time',
      html: `
        <ul>
          <li><strong>Cities</strong> take <em>a</em>, <strong>countries and regions</strong> take <em>in</em>: <span lang="it">Vivo a Firenze, in Toscana, in Italia.</span></li>
          <li>Many everyday places use <em>a</em> or <em>in</em> <strong>without an article</strong>: <span lang="it">a casa, a scuola, a letto, in ufficio, in banca, in centro, in vacanza</span>.</li>
          <li>Others use the articulated form: <span lang="it">al mare, in montagna, al supermercato, al cinema, nel parco</span>.</li>
          <li><strong>da + person</strong> = "to / at someone's place": <span lang="it">Vado dal dentista. Sono dai nonni.</span></li>
          <li><strong>Transport:</strong> <span lang="it">in treno, in macchina, in autobus, in bicicletta, a piedi</span> (but <span lang="it">con l'autobus</span> is also fine).</li>
          <li><strong>da + time</strong> with the present = "since / for": <span lang="it">Abito qui da due anni.</span></li>
        </ul>`,
    },
  ],

  examples: [
    { it: 'Vado al mercato con mia madre.', en: "I'm going to the market with my mother." },
    { it: 'Vivo a Roma da due anni.', en: "I've lived in Rome for two years." },
    { it: 'Marco è di Napoli, ma vive in Germania.', en: 'Marco is from Naples, but lives in Germany.' },
    { it: 'Il libro è sul tavolo, vicino alla finestra.', en: 'The book is on the table, near the window.' },
    { it: 'Domani vado dal dentista.', en: "Tomorrow I'm going to the dentist's." },
    { it: 'Andiamo al mare in macchina.', en: "We're going to the seaside by car." },
    { it: 'Arrivo tra dieci minuti.', en: "I'll be there in ten minutes." },
    { it: 'Questo regalo è per te.', en: 'This gift is for you.' },
    { it: 'Cammino nel parco con il cane.', en: 'I walk in the park with the dog.' },
  ],

  vocab: [
    { id: 'mare', it: 'il mare', en: 'the sea / seaside', gender: 'm' },
    { id: 'montagna', it: 'la montagna', en: 'the mountains', gender: 'f' },
    { id: 'banca', it: 'la banca', en: 'the bank', gender: 'f' },
    { id: 'ufficio', it: "l'ufficio", en: 'the office', gender: 'm' },
    { id: 'dentista', it: 'il dentista', en: 'the dentist', gender: 'm' },
    { id: 'medico', it: 'il medico', en: 'the doctor', gender: 'm' },
    { id: 'finestra', it: 'la finestra', en: 'the window', gender: 'f' },
    { id: 'tavolo', it: 'il tavolo', en: 'the table', gender: 'm' },
    { id: 'parco', it: 'il parco', en: 'the park', gender: 'm' },
    { id: 'centro', it: 'il centro', en: 'the centre', gender: 'm' },
    { id: 'mercato', it: 'il mercato', en: 'the market', gender: 'm' },
    { id: 'vicino-a', it: 'vicino a', en: 'near' },
    { id: 'lontano-da', it: 'lontano da', en: 'far from' },
    { id: 'a-piedi', it: 'a piedi', en: 'on foot' },
    { id: 'in-macchina', it: 'in macchina', en: 'by car' },
    { id: 'in-bicicletta', it: 'in bicicletta', en: 'by bike' },
    { id: 'tra-fra', it: 'tra / fra', en: 'between / in (time)' },
    { id: 'accanto-a', it: 'accanto a', en: 'next to' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Vado ___ supermercato.', promptLang: 'it',
      options: ['al', 'in', 'nel', 'del'], answer: 0, explain: 'a + il = al.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Abito ___ Italia.', promptLang: 'it',
      options: ['in', 'a', 'al', 'da'], answer: 0, explain: 'Countries take "in" (cities take "a").' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Il gatto è ___ divano.', promptLang: 'it',
      options: ['sul', 'nel', 'al', 'dal'], answer: 0, explain: 'su + il = sul ("on the sofa").' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Domani vado ___ dentista.', promptLang: 'it',
      options: ['dal', 'al', 'nel', 'del'], answer: 0, explain: 'To someone\'s place (a person) → da: da + il = dal.' },

    { type: 'fill', prompt: 'Il libro è ___ tavolo.', hint: 'su + il', answer: ['sul'], explain: 'su + il = sul.' },
    { type: 'fill', prompt: 'Andiamo ___ mare in macchina.', hint: 'a + il', answer: ['al'], explain: 'a + il = al.' },
    { type: 'fill', prompt: 'Arrivo ___ dieci minuti.', hint: 'in (future time)', answer: ['tra', 'fra'], explain: 'For "in ten minutes" (future), Italian uses tra / fra.' },
    { type: 'fill', prompt: 'Vado a scuola ___ piedi.', hint: 'on foot', answer: ['a'], explain: '"A piedi" = on foot.' },
    { type: 'fill', prompt: 'Cammino ___ parco con il cane.', hint: 'in + il', answer: ['nel'], explain: 'in + il = nel.' },

    { type: 'translate', prompt: "I'm going to the market.", answer: ['vado al mercato', 'sto andando al mercato'], explain: 'andare a + il mercato = al mercato.' },
    { type: 'translate', prompt: 'She has lived in Milan for two years.',
      answer: ['vive a milano da due anni', 'abita a milano da due anni'], explain: 'Present tense + da + time = "has been … for".' },
    { type: 'translate', prompt: 'We go to the sea by car.',
      answer: ['andiamo al mare in macchina', 'andiamo al mare con la macchina'], explain: 'al mare, in macchina.' },

    { type: 'listen', mode: 'choose', audio: 'Vivo a Roma da due anni.', en: "I've lived in Rome for two years.",
      options: ['Vivo a Roma da due anni.', 'Vivo a Roma da tre anni.', 'Vivo in Roma da due anni.', 'Vado a Roma da due anni.'], answer: 0, explain: 'Listen for "da due anni".' },
    { type: 'listen', mode: 'type', audio: 'Il libro è sul tavolo vicino alla finestra.', en: 'The book is on the table near the window.',
      answer: ['il libro è sul tavolo vicino alla finestra'], explain: 'sul = su + il; alla = a + la.' },
  ],
});
