/* game-sentence.js — Sentence builder: put the word tiles in the right order.
   Sentences come from each unit's "examples" list, so new units feed it automatically. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const G = I.games;
  const { esc, shuffle } = I.util;

  const strip = (w) => w.replace(/[.,!?;:«»"“”]/g, '');
  const normSentence = (arr) => arr.map((w) => strip(w).toLowerCase()).join(' ');

  /** Example sentences of 4–9 words, without dialogue dashes. */
  function pool(scope) {
    const out = [];
    for (const u of G.unitsFor(scope)) {
      (u.examples || []).forEach((e, k) => {
        const words = e.it.split(/\s+/);
        if (words.length >= 4 && words.length <= 9 && !e.it.includes('—') && !/[?.!]\s+\S/.test(e.it)) {
          out.push({ id: u.id + ':ex' + k, it: e.it, en: e.en, words });
        }
      });
    }
    return out;
  }

  const def = {
    id: 'builder',
    icon: '🧩',
    title: 'Sentence builder',
    desc: 'Rebuild the Italian sentence from shuffled word tiles.',
    howto: 'Read the English, then tap the words in the right order. Tap a word in your sentence to take it back.',
    scopeKind: 'units',
    pool,
    play(root, ctx) {
      const items = G.pick('builder', pool(ctx.scope));
      let i = 0, score = 0;

      function round() {
        const it = items[i];
        // tiles: strip punctuation; lower-case only the first word (it was capitalised for the sentence start)
        const tiles = it.words.map((w, k) => { const t = strip(w); return k === 0 ? t.charAt(0).toLowerCase() + t.slice(1) : t; });
        let order = shuffle(tiles.map((_, k) => k));
        for (let t = 0; t < 10 && order.join() === tiles.map((_, k) => k).join(); t++) order = shuffle(order);
        const ans = []; // tile indices
        let done = false;

        root.innerHTML =
          G.topbar(def, i, items.length, score) +
          '<div class="card q-card"><p class="q-instr">Build this sentence in Italian:</p><p class="q-prompt">' + esc(it.en) + '</p>' +
          '<div class="build-area" id="area" aria-label="Your sentence" aria-live="polite"></div>' +
          '<div class="word-bank" id="bank" role="group" aria-label="Words"></div>' +
          '<div class="q-actions game-actions"><button type="button" class="btn btn-ghost btn-sm" id="clear">Clear</button>' +
          '<button type="button" class="btn" id="check" disabled>Check</button>' +
          '<button type="button" class="btn" id="next" hidden>' + (i + 1 === items.length ? 'See score' : 'Next') + '</button></div>' +
          '<div class="feedback" id="fb" role="status" aria-live="polite"></div></div>';

        const $ = (s) => root.querySelector(s);
        function paint() {
          $('#area').innerHTML = ans.length
            ? ans.map((k, pos) => '<button type="button" class="wtile wtile-ans" data-pos="' + pos + '" lang="it"' + (done ? ' disabled' : '') + '>' + esc(tiles[k]) + '</button>').join('')
            : '<span class="placeholder">Tap the words below…</span>';
          $('#bank').innerHTML = order
            .map((k) => (ans.includes(k) ? '<span class="wtile wtile-used" aria-hidden="true">' + esc(tiles[k]) + '</span>' : '<button type="button" class="wtile" data-k="' + k + '" lang="it"' + (done ? ' disabled' : '') + '>' + esc(tiles[k]) + '</button>'))
            .join('');
          $('#check').disabled = done || ans.length !== tiles.length;
        }

        $('#bank').addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b && !done) { ans.push(Number(b.dataset.k)); paint(); } });
        $('#area').addEventListener('click', (e) => { const b = e.target.closest('[data-pos]'); if (b && !done) { ans.splice(Number(b.dataset.pos), 1); paint(); } });
        $('#clear').addEventListener('click', () => { ans.length = 0; paint(); });
        $('#check').addEventListener('click', () => {
          done = true;
          const ok = normSentence(ans.map((k) => tiles[k])) === normSentence(tiles);
          if (ok) score++;
          paint();
          $('#check').hidden = true; $('#clear').hidden = true;
          const fb = $('#fb');
          fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
          fb.innerHTML = '<p class="fb-title ' + (ok ? 'fb-ok' : 'fb-bad') + '">' + (ok ? '✓ Perfetto!' : 'Not quite.') + '</p>' +
            '<p>' + (ok ? '' : 'The sentence is: ') + '<strong lang="it">' + esc(it.it) + '</strong></p>' +
            (ok ? '' : '<p class="fb-explain">Check word order: subject, then verb, with little words like <em>non</em>, <em>già</em> and pronouns in their usual spots.</p>') +
            '<p>' + I.audio.button(it.it) + '</p>';
          $('#next').hidden = false;
          $('#next').focus();
        });
        $('#next').addEventListener('click', () => { i++; i < items.length ? round() : G.finish(root, def, score, items.length); });
        paint();
      }
      round();
    },
  };

  G.register(def);
})();
