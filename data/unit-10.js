/* Unit 10 — Shopping e vita sociale */
window.ITALIANO_UNITS = window.ITALIANO_UNITS || [];
window.ITALIANO_UNITS.push({
  id: 'unit-10',
  number: 10,
  title: 'Shopping e vita sociale',
  subtitle: 'Prices, sizes, comparisons, and making plans with friends.',

  grammar: [
    {
      title: 'In the shop',
      html: `
        <p>Use <strong lang="it">costa</strong> for one item and <strong lang="it">costano</strong> for several: <span lang="it">Quanto costa la giacca? Quanto costano le scarpe?</span></p>
        <p>Useful phrases:</p>
        <ul lang="it">
          <li>Sto solo guardando, grazie. (I'm just looking.)</li>
          <li>Posso provare questa giacca? / Posso <strong>provarla</strong>?</li>
          <li>Che taglia porta? — Porto la quarantadue. (shoes: Che numero porta?)</li>
          <li>Ha una taglia più grande / più piccola?</li>
          <li>Mi sta bene. / Mi stanno bene. (It fits / They fit me well.)</li>
          <li><strong>La prendo.</strong> Posso pagare con la carta?</li>
        </ul>
        <p>Notice the small pronouns <strong>lo / la / li / le</strong> ("it / them"). They replace the thing you're buying and go <em>before</em> the verb: <span lang="it">Il vestito? <strong>Lo</strong> prendo. La borsa? <strong>La</strong> prendo. Le scarpe? <strong>Le</strong> provo.</span> After an infinitive they attach to the end: <span lang="it">provarla, provarlo</span>.</p>`,
    },
    {
      title: 'Comparing things',
      html: `
        <div class="table-scroll"><table>
          <thead><tr><th>Pattern</th><th>Example</th></tr></thead>
          <tbody lang="it">
            <tr><td><strong>più … di</strong> (more … than)</td><td>Questa borsa è più cara di quella.</td></tr>
            <tr><td><strong>meno … di</strong> (less … than)</td><td>Queste scarpe sono meno comode di quelle.</td></tr>
            <tr><td><strong>(tanto) … quanto / come</strong> (as … as)</td><td>Questo vestito è bello come quello.</td></tr>
            <tr><td><strong>il / la più …</strong> (the most …)</td><td>È il negozio più economico della città.</td></tr>
          </tbody></table></div>
        <p><strong>questo</strong> = this (near you), <strong>quello</strong> = that (far). They agree in gender and number: <span lang="it">questa giacca, quella borsa, questi pantaloni, quelle scarpe</span>.</p>
        <p class="tip">Careful: when comparing two <em>nouns or phrases</em> use <span lang="it">più … di</span>. Use <span lang="it">più … che</span> only to compare two adjectives/verbs: <span lang="it">È più simpatico che bello.</span> (more nice than handsome).</p>`,
    },
    {
      title: 'Making plans with friends',
      html: `
        <p>Inviting:</p>
        <ul lang="it">
          <li><strong>Ti va di</strong> venire al cinema stasera? (Do you feel like…?)</li>
          <li><strong>Che ne dici di</strong> fare un aperitivo? (How about…?)</li>
          <li>Sei libero/a sabato? · Perché non andiamo al mare?</li>
        </ul>
        <p>Answering:</p>
        <ul lang="it">
          <li><strong>Volentieri!</strong> / Perfetto! / Che bella idea! (Gladly! / Great!)</li>
          <li><strong>Mi dispiace, non posso:</strong> ho già un impegno. (Sorry, I can't: I already have plans.)</li>
          <li>Che peccato! · Magari un'altra volta. (What a pity! · Maybe another time.)</li>
        </ul>
        <p>Arranging: <span lang="it">A che ora ci vediamo? — Ci vediamo alle otto davanti al cinema. — Offro io!</span> (My treat!)</p>`,
    },
  ],

  examples: [
    { it: 'Quanto costano queste scarpe?', en: 'How much do these shoes cost?' },
    { it: 'Posso provare questa giacca?', en: 'Can I try on this jacket?' },
    { it: 'Che taglia porta? — Porto la quarantadue.', en: 'What size do you wear? — I wear a 42.' },
    { it: 'Questa borsa è più cara di quella, ma è più bella.', en: 'This bag is more expensive than that one, but it is prettier.' },
    { it: 'Lo prendo, grazie. Posso pagare con la carta?', en: "I'll take it, thanks. Can I pay by card?" },
    { it: 'Ti va di venire al cinema stasera?', en: 'Do you feel like coming to the cinema tonight?' },
    { it: 'Volentieri! A che ora ci vediamo?', en: 'Gladly! What time shall we meet?' },
    { it: 'Mi dispiace, sabato non posso: ho già un impegno.', en: "I'm sorry, I can't on Saturday: I already have plans." },
    { it: 'Facciamo un aperitivo in centro?', en: 'Shall we have an aperitivo in the centre?' },
  ],

  vocab: [
    { id: 'taglia', it: 'la taglia', en: 'the size (clothes)', gender: 'f' },
    { id: 'numero', it: 'il numero', en: 'the size (shoes) / number', gender: 'm' },
    { id: 'giacca', it: 'la giacca', en: 'the jacket', gender: 'f' },
    { id: 'scarpe', it: 'le scarpe', en: 'the shoes', gender: 'f' },
    { id: 'borsa', it: 'la borsa', en: 'the bag', gender: 'f' },
    { id: 'vestito', it: 'il vestito', en: 'the dress / outfit', gender: 'm' },
    { id: 'saldi', it: 'i saldi', en: 'the sales', gender: 'm' },
    { id: 'sconto', it: 'lo sconto', en: 'the discount', gender: 'm' },
    { id: 'negozio', it: 'il negozio', en: 'the shop', gender: 'm' },
    { id: 'camerino', it: 'il camerino', en: 'the fitting room', gender: 'm' },
    { id: 'provare', it: 'provare', en: 'to try (on)' },
    { id: 'costare', it: 'costare', en: 'to cost' },
    { id: 'caro', it: 'caro / cara', en: 'expensive' },
    { id: 'economico', it: 'economico / economica', en: 'cheap / inexpensive' },
    { id: 'ti-va-di', it: 'Ti va di…?', en: 'Do you feel like…?' },
    { id: 'volentieri', it: 'volentieri', en: 'gladly / with pleasure' },
    { id: 'impegno', it: "l'impegno", en: 'the commitment / plans', gender: 'm' },
    { id: 'aperitivo', it: "l'aperitivo", en: 'the aperitivo (drinks and snacks)', gender: 'm' },
    { id: 'ci-vediamo', it: 'ci vediamo', en: 'see you / shall we meet' },
  ],

  exercises: [
    { type: 'mc', instruction: 'Choose the correct form.', prompt: 'Quanto ___ queste scarpe?', promptLang: 'it',
      options: ['costano', 'costa', 'costiamo', 'costate'], answer: 0, explain: 'Scarpe is plural → costano.' },
    { type: 'mc', prompt: 'How do you say "This bag is more expensive than that one"?',
      options: ['Questa borsa è più cara di quella.', 'Questa borsa è più cara che quella.', 'Questa borsa è cara più di quella.', 'Questa borsa è la più cara quella.'], answer: 0,
      explain: 'Compare two things with più … di.' },
    { type: 'mc', prompt: '"Lo prendo" in a shop means…', optionLang: 'en',
      options: ["I'll take it.", "I'm taking him.", "I'm looking at it.", "I'll leave it."], answer: 0, explain: 'Lo = "it" (masculine); prendere = to take / buy.' },
    { type: 'mc', prompt: 'A friend asks: "Ti va di venire al cinema?" Which is a natural yes?',
      options: ['Volentieri!', 'Mi dispiace.', 'Che peccato!', 'Non importa.'], answer: 0, explain: 'Volentieri = "gladly", a warm way to accept.' },

    { type: 'fill', prompt: 'Posso ___ questa giacca?', hint: 'provare', answer: ['provare'], explain: 'Posso + infinitive.' },
    { type: 'fill', prompt: 'Che ___ porta?', hint: 'size', answer: ['taglia'], explain: 'La taglia = clothing size.' },
    { type: 'fill', prompt: 'Questa borsa è più cara ___ quella.', hint: 'than', answer: ['di'], explain: 'più … di when comparing two things.' },
    { type: 'fill', prompt: 'Ti ___ di venire al cinema stasera?', hint: 'andare, "feel like"', answer: ['va'], explain: 'Ti va di… = Do you feel like…?' },
    { type: 'fill', prompt: 'Mi dispiace, sabato non ___.', hint: 'potere, io', answer: ['posso'], explain: 'Io posso → non posso.' },

    { type: 'translate', prompt: 'How much does this jacket cost?', answer: ['quanto costa questa giacca'], explain: 'Giacca is singular and feminine: questa giacca, costa.' },
    { type: 'translate', prompt: 'Can I try these shoes on?', answer: ['posso provare queste scarpe', 'posso provarle'], explain: 'Provare queste scarpe, or provarle ("try them on").' },
    { type: 'translate', prompt: 'Do you feel like having an aperitivo?',
      answer: ['ti va di fare un aperitivo', 'ti va un aperitivo', 'ti va di andare a fare un aperitivo', 'ti va di prendere un aperitivo'], explain: 'Ti va di + infinitive.' },

    { type: 'listen', mode: 'choose', audio: 'Quanto costano queste scarpe?', en: 'How much do these shoes cost?',
      options: ['Quanto costano queste scarpe?', 'Quanto costa questa scarpa?', 'Quanto costano quelle scarpe?', 'Dove sono queste scarpe?'], answer: 0, explain: 'Listen for "costano" (plural) and "queste".' },
    { type: 'listen', mode: 'type', audio: 'Ci vediamo alle otto davanti al cinema.', en: "See you at eight in front of the cinema.",
      answer: ['ci vediamo alle otto davanti al cinema'], explain: 'Ci vediamo = see you / we\'ll meet.' },
  ],
});
