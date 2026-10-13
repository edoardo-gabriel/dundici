/* Unit 3 — L'imperfetto */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-03',
  number: 3,
  title: "L'imperfetto",
  subtitle: 'Describe habits and scenes in the past: "Da piccola abitavo in campagna."',

  grammar: [
    {
      title: 'Forming the imperfetto',
      html: `
        <p>Drop <strong>-re</strong> from the infinitive and add the endings. The imperfetto is very regular!</p>
        <div class="table-scroll"><table>
          <thead><tr><th></th><th>parlare</th><th>avere</th><th>dormire</th></tr></thead>
          <tbody lang="it">
            <tr><td>io</td><td>parlavo</td><td>avevo</td><td>dormivo</td></tr>
            <tr><td>tu</td><td>parlavi</td><td>avevi</td><td>dormivi</td></tr>
            <tr><td>lui / lei</td><td>parlava</td><td>aveva</td><td>dormiva</td></tr>
            <tr><td>noi</td><td>parlavamo</td><td>avevamo</td><td>dormivamo</td></tr>
            <tr><td>voi</td><td>parlavate</td><td>avevate</td><td>dormivate</td></tr>
            <tr><td>loro</td><td>parlavano</td><td>avevano</td><td>dormivano</td></tr>
          </tbody></table></div>
        <p class="tip">The vowel before <em>-v-</em> tells you the verb family: <strong>-a-</strong> (-are), <strong>-e-</strong> (-ere), <strong>-i-</strong> (-ire).</p>`,
    },
    {
      title: 'A few irregular verbs',
      html: `
        <div class="table-scroll"><table>
          <thead><tr><th></th><th>essere</th><th>fare</th><th>dire</th><th>bere</th></tr></thead>
          <tbody lang="it">
            <tr><td>io</td><td>ero</td><td>facevo</td><td>dicevo</td><td>bevevo</td></tr>
            <tr><td>tu</td><td>eri</td><td>facevi</td><td>dicevi</td><td>bevevi</td></tr>
            <tr><td>lui / lei</td><td>era</td><td>faceva</td><td>diceva</td><td>beveva</td></tr>
            <tr><td>noi</td><td>eravamo</td><td>facevamo</td><td>dicevamo</td><td>bevevamo</td></tr>
            <tr><td>voi</td><td>eravate</td><td>facevate</td><td>dicevate</td><td>bevevate</td></tr>
            <tr><td>loro</td><td>erano</td><td>facevano</td><td>dicevano</td><td>bevevano</td></tr>
          </tbody></table></div>
        <p>These use the old Latin stem (<em>facere, dicere, bibere</em>). Almost everything else is regular.</p>`,
    },
    {
      title: 'When do we use it?',
      html: `
        <p>Use the imperfetto for things that were <strong>ongoing, repeated or background</strong> — not a single finished event:</p>
        <ul>
          <li><strong>Habits:</strong> <span lang="it">Ogni estate andavamo al mare.</span></li>
          <li><strong>Descriptions:</strong> <span lang="it">La casa era grande e aveva un giardino.</span></li>
          <li><strong>Age, time, weather, feelings:</strong> <span lang="it">Avevo dieci anni. Faceva caldo. Ero stanca.</span></li>
          <li><strong>Two things happening at once:</strong> <span lang="it">Mentre cucinavo, Luca guardava la TV.</span></li>
        </ul>
        <p>Signal words: <span lang="it">di solito, sempre, spesso, ogni giorno, ogni estate, da piccolo/a, una volta, mentre</span>.</p>
        <p class="tip"><span lang="it">Ieri ho mangiato la pizza.</span> (one event) vs. <span lang="it">Da piccola mangiavo la pizza ogni sabato.</span> (a habit)</p>`,
    },
  ],

  examples: [
    { it: 'Da bambina abitavo in campagna.', en: 'As a child I lived in the countryside.' },
    { it: 'Ogni estate andavamo al mare dai nonni.', en: "Every summer we used to go to the seaside at our grandparents'." },
    { it: 'Di solito mio padre leggeva il giornale la mattina.', en: 'My father usually read the paper in the morning.' },
    { it: 'Era una bella giornata e faceva caldo.', en: 'It was a lovely day and it was hot.' },
    { it: 'Quando avevo dieci anni, avevo un cane.', en: 'When I was ten, I had a dog.' },
    { it: 'Mentre cucinavo, Luca guardava la TV.', en: 'While I was cooking, Luca was watching TV.' },
    { it: 'Eravamo stanchi, ma contenti.', en: 'We were tired but happy.' },
    { it: 'Che cosa facevi da piccolo?', en: 'What did you use to do as a child?' },
  ],

  vocab: [
    { id: 'da-piccolo', it: 'da piccolo/a', en: 'as a child' },
    { id: 'di-solito', it: 'di solito', en: 'usually' },
    { id: 'spesso', it: 'spesso', en: 'often' },
    { id: 'sempre', it: 'sempre', en: 'always' },
    { id: 'ogni-giorno', it: 'ogni giorno', en: 'every day' },
    { id: 'una-volta', it: 'una volta', en: 'once / one time' },
    { id: 'mentre', it: 'mentre', en: 'while' },
    { id: 'infanzia', it: "l'infanzia", en: 'childhood', gender: 'f' },
    { id: 'campagna', it: 'la campagna', en: 'the countryside', gender: 'f' },
    { id: 'giardino', it: 'il giardino', en: 'the garden', gender: 'm' },
    { id: 'nonno', it: 'il nonno', en: 'grandfather', gender: 'm' },
    { id: 'nonna', it: 'la nonna', en: 'grandmother', gender: 'f' },
    { id: 'scuola', it: 'la scuola', en: 'school', gender: 'f' },
    { id: 'cane', it: 'il cane', en: 'the dog', gender: 'm' },
    { id: 'giornale', it: 'il giornale', en: 'the newspaper', gender: 'm' },
    { id: 'giocare', it: 'giocare', en: 'to play' },
    { id: 'abitare', it: 'abitare', en: 'to live (in a place)' },
  ],

  exercises: [
    { type: 'mc', prompt: 'Imperfetto of "parlare", io:',
      options: ['parlavo', 'parlato', 'parlevo', 'parlivo'], answer: 0,
      explain: '-are verbs: stem + -avo.' },
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Da piccoli, noi ___ sempre al parco.', promptLang: 'it',
      options: ['giocavamo', 'giocavo', 'giocavate', 'giocavano'], answer: 0,
      explain: 'Noi → -avamo.' },
    { type: 'mc', prompt: 'Imperfetto of "essere", loro:',
      options: ['erano', 'sono stati', 'eravamo', 'era'], answer: 0,
      explain: 'Essere is irregular: ero, eri, era, eravamo, eravate, erano.' },
    { type: 'mc', prompt: 'Which time word usually signals the imperfetto?',
      options: ['di solito', 'ieri', 'due giorni fa', 'ieri sera'], answer: 0, optionLang: 'it',
      explain: '"Di solito" (usually) describes a habit. The others point to one finished moment.' },
    { type: 'mc', prompt: 'Imperfetto of "fare", tu:',
      options: ['facevi', 'fatto', 'fai', 'farai'], answer: 0,
      explain: 'Fare uses the stem face-: facevo, facevi, faceva…' },

    { type: 'fill', prompt: 'Da piccola io ___ in campagna.', hint: 'abitare', answer: ['abitavo'],
      explain: 'Io + -are → abitavo.' },
    { type: 'fill', prompt: 'Mio nonno ___ il giornale ogni mattina.', hint: 'leggere', answer: ['leggeva'],
      explain: 'Lui + -ere → leggeva.' },
    { type: 'fill', prompt: 'Quando ___ piccoli, giocavamo in giardino.', hint: 'essere, noi', answer: ['eravamo'],
      explain: 'Essere (irregular): eravamo.' },
    { type: 'fill', prompt: 'Voi ___ sempre fino a tardi.', hint: 'dormire', answer: ['dormivate'],
      explain: 'Voi + -ire → dormivate.' },
    { type: 'fill', prompt: 'Di solito io ___ colazione al bar.', hint: 'fare', answer: ['facevo'],
      explain: 'Fare → facevo (irregular stem).' },

    { type: 'translate', prompt: 'As a child I always played in the garden.',
      answer: ['da piccola giocavo sempre in giardino', 'da piccolo giocavo sempre in giardino', 'da bambina giocavo sempre in giardino', 'da bambino giocavo sempre in giardino',
        'giocavo sempre in giardino da piccola', 'giocavo sempre in giardino da piccolo', 'giocavo sempre in giardino da bambina', 'giocavo sempre in giardino da bambino'],
      explain: 'An ongoing childhood habit → imperfetto: giocavo.' },
    { type: 'translate', prompt: 'We used to go to the seaside every summer.',
      answer: ['ogni estate andavamo al mare', 'andavamo al mare ogni estate'],
      explain: 'Repeated action → andavamo.' },
    { type: 'translate', prompt: 'It was hot and I was tired.',
      answer: ['faceva caldo e ero stanco', 'faceva caldo e ero stanca', 'faceva caldo ed ero stanco', 'faceva caldo ed ero stanca'],
      explain: 'Weather and feelings use the imperfetto: faceva caldo, ero stanco/a.' },

    { type: 'listen', mode: 'choose', audio: 'Da piccola abitavo in campagna.', en: 'As a child I lived in the countryside.',
      options: ['Da piccola abitavo in campagna.', 'Da piccola abitavo in città.', 'Da grande abito in campagna.', 'Da piccola andavo in campagna.'], answer: 0,
      explain: 'Listen for "abitavo" and "campagna".' },
    { type: 'listen', mode: 'type', audio: 'Mio nonno leggeva il giornale ogni mattina.', en: 'My grandfather read the newspaper every morning.',
      answer: ['mio nonno leggeva il giornale ogni mattina'], explain: 'Leggeva = imperfetto of leggere.' },
  ],
});
