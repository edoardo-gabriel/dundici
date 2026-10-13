/* Unit 8 — Al ristorante */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-08',
  number: 8,
  title: 'Al ristorante',
  subtitle: 'Book a table, order, and ask for the bill.',

  grammar: [
    {
      title: 'Polite requests: vorrei and friends',
      html: `
        <p><strong lang="it">Vorrei</strong> ("I would like") is the polite way to ask for something. It comes from <em>volere</em> in the conditional:</p>
        <div class="table-scroll"><table>
          <thead><tr><th>io</th><th>tu</th><th>lui / lei</th><th>noi</th><th>voi</th><th>loro</th></tr></thead>
          <tbody lang="it"><tr><td>vorrei</td><td>vorresti</td><td>vorrebbe</td><td>vorremmo</td><td>vorreste</td><td>vorrebbero</td></tr></tbody></table></div>
        <p>Other polite ways to order:</p>
        <ul lang="it">
          <li><strong>Prendo</strong> la pasta. / Per me il pesce, grazie. (I'll have…)</li>
          <li><strong>Posso avere</strong> il menu? (May I have…?)</li>
          <li><strong>Mi porta</strong> il conto, per favore? (Could you bring me…?)</li>
        </ul>
        <p class="tip">Avoid <span lang="it">Voglio…</span> ("I want…") with waiters: it sounds blunt. Use <span lang="it">Vorrei…</span> instead.</p>`,
    },
    {
      title: 'The Italian meal and useful restaurant phrases',
      html: `
        <p>A traditional meal has courses:</p>
        <p lang="it"><strong>antipasto</strong> (starter) → <strong>primo</strong> (pasta, rice or soup) → <strong>secondo</strong> (meat or fish) + <strong>contorno</strong> (side dish) → <strong>dolce</strong> (dessert) → <strong>caffè</strong>.</p>
        <p>You don't have to order every course! Many people just take a primo or a secondo.</p>
        <ul lang="it">
          <li>Avete un tavolo per due? / Siamo in quattro.</li>
          <li>Ho prenotato a nome di Rossi.</li>
          <li>Che cosa ci consiglia? / Cosa c'è di buono?</li>
          <li>Un'acqua naturale / frizzante, per favore.</li>
          <li>Era tutto buonissimo! / Il conto, per favore.</li>
          <li>Posso pagare con la carta? / Il servizio è incluso?</li>
        </ul>`,
    },
    {
      title: 'Dietary needs and "some"',
      html: `
        <p>Say what you can't eat with <strong lang="it">sono</strong> + adjective or <strong lang="it">senza</strong> ("without"):</p>
        <ul lang="it">
          <li>Sono vegetariano/a. · Sono allergico/a alle noci.</li>
          <li>C'è qualcosa senza carne? · Un piatto senza glutine, per favore.</li>
        </ul>
        <p>To say "some" (a partitive), use <strong>di + article</strong> (Unit 6): <span lang="it">Vorrei del pane. Vorrei dell'acqua. Vorrei un po' di vino.</span> The <em>un po' di</em> version ("a little") is always safe.</p>`,
    },
  ],

  examples: [
    { it: 'Buonasera, avete un tavolo per due?', en: 'Good evening, do you have a table for two?' },
    { it: 'Ho prenotato a nome di Rossi.', en: 'I booked under the name Rossi.' },
    { it: "Vorrei una bottiglia d'acqua frizzante, per favore.", en: "I'd like a bottle of sparkling water, please." },
    { it: 'Come primo prendo la pasta al pomodoro.', en: "For my first course I'll have pasta with tomato sauce." },
    { it: 'Che cosa ci consiglia?', en: 'What do you recommend?' },
    { it: 'Per me il pesce alla griglia, grazie.', en: "I'll have the grilled fish, thanks." },
    { it: 'Siamo vegetariani: c\'è qualcosa senza carne?', en: "We're vegetarians: is there anything without meat?" },
    { it: 'Il conto, per favore. Posso pagare con la carta?', en: 'The bill, please. Can I pay by card?' },
    { it: 'Era tutto buonissimo!', en: 'Everything was delicious!' },
  ],

  vocab: [
    { id: 'cameriere', it: 'il cameriere', en: 'the waiter', gender: 'm' },
    { id: 'cameriera', it: 'la cameriera', en: 'the waitress', gender: 'f' },
    { id: 'menu', it: 'il menu', en: 'the menu', gender: 'm' },
    { id: 'conto', it: 'il conto', en: 'the bill', gender: 'm' },
    { id: 'antipasto', it: "l'antipasto", en: 'the starter', gender: 'm' },
    { id: 'primo', it: 'il primo', en: 'first course (pasta, rice, soup)', gender: 'm' },
    { id: 'secondo', it: 'il secondo', en: 'main course (meat or fish)', gender: 'm' },
    { id: 'contorno', it: 'il contorno', en: 'side dish', gender: 'm' },
    { id: 'dolce', it: 'il dolce', en: 'dessert', gender: 'm' },
    { id: 'acqua', it: "l'acqua", en: 'water', gender: 'f' },
    { id: 'vino', it: 'il vino', en: 'wine', gender: 'm' },
    { id: 'bottiglia', it: 'la bottiglia', en: 'the bottle', gender: 'f' },
    { id: 'carne', it: 'la carne', en: 'meat', gender: 'f' },
    { id: 'pesce', it: 'il pesce', en: 'fish', gender: 'm' },
    { id: 'carta', it: 'la carta', en: 'the card / paper', gender: 'f' },
    { id: 'mancia', it: 'la mancia', en: 'the tip', gender: 'f' },
    { id: 'prenotare', it: 'prenotare', en: 'to book' },
    { id: 'consigliare', it: 'consigliare', en: 'to recommend' },
    { id: 'frizzante', it: 'frizzante', en: 'sparkling' },
    { id: 'naturale', it: 'naturale', en: 'still (water)' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the polite form.', prompt: '___ un caffè, per favore.', promptLang: 'it',
      options: ['Vorrei', 'Voglio', 'Volevo', 'Vorranno'], answer: 0, explain: '"Vorrei" is the polite way to ask for something.' },
    { type: 'mc', prompt: 'Which is the most polite way to ask for the bill?',
      options: ['Mi porta il conto, per favore?', 'Dammi il conto.', 'Conto!', 'Voglio il conto.'], answer: 0, explain: '"Mi porta…?" with "per favore" is polite and natural.' },
    { type: 'mc', prompt: '"Il secondo" is usually…', optionLang: 'en',
      options: ['the main course (meat or fish)', 'the dessert', 'the starter', 'the second glass of wine'], answer: 0, explain: 'Primo = pasta/rice/soup, secondo = meat or fish.' },
    { type: 'mc', prompt: 'What does "Siamo in quattro" mean?', optionLang: 'en',
      options: ['There are four of us.', 'We are in room four.', 'We arrived at four.', 'We want four tables.'], answer: 0, explain: 'Siamo in quattro = "we are four (people)".' },

    { type: 'fill', prompt: '___ un tavolo per due, per favore.', hint: 'I would like', answer: ['vorrei'], explain: 'Vorrei = I would like.' },
    { type: 'fill', prompt: 'Ho ___ a nome di Rossi.', hint: 'prenotare', answer: ['prenotato'], explain: 'Prenotare → prenotato (regular -are).' },
    { type: 'fill', prompt: 'Che cosa ci ___?', hint: 'consigliare, lei (formal)', answer: ['consiglia'], explain: 'Formal "you" uses the lui/lei form: consiglia.' },
    { type: 'fill', prompt: 'Per me ___ pesce alla griglia, grazie.', hint: 'the', answer: ['il'], explain: 'Il pesce — masculine singular.' },
    { type: 'fill', prompt: 'Posso pagare ___ la carta?', hint: 'with', answer: ['con'], explain: 'Pagare con la carta = to pay by card.' },

    { type: 'translate', prompt: 'The bill, please.',
      answer: ['il conto, per favore', 'il conto per favore', 'vorrei il conto, per favore', 'vorrei il conto per favore'], explain: 'Il conto, per favore.' },
    { type: 'translate', prompt: 'Do you have a table for four?',
      answer: ['avete un tavolo per quattro', 'avete un tavolo per quattro persone', "c'è un tavolo per quattro", "c'è un tavolo per quattro persone", 'ha un tavolo per quattro', 'ha un tavolo per quattro persone'],
      explain: 'Avete un tavolo per…? (Use "ha" if speaking to one person formally.)' },
    { type: 'translate', prompt: "I'd like a bottle of sparkling water.",
      answer: ["vorrei una bottiglia d'acqua frizzante", 'vorrei una bottiglia di acqua frizzante', "vorrei una bottiglia d'acqua gassata", 'vorrei una bottiglia di acqua gassata'],
      explain: 'Vorrei + una bottiglia d\'acqua frizzante.' },

    { type: 'listen', mode: 'choose', audio: 'Vorrei un tavolo per due persone.', en: "I'd like a table for two people.",
      options: ['Vorrei un tavolo per due persone.', 'Vorrei un tavolo per tre persone.', 'Vorrei un caffè per due persone.', 'Voglio un tavolo per due persone.'], answer: 0, explain: 'Listen for "tavolo" and "due".' },
    { type: 'listen', mode: 'type', audio: 'Che cosa ci consiglia?', en: 'What do you recommend?',
      answer: ['che cosa ci consiglia', 'cosa ci consiglia'], explain: 'Consiglia = lui/lei form of consigliare.' },
  ],
});
