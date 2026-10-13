/* game-words.js — three single-word games built from the lesson vocab:
   Word scramble, Hangman (Impiccato) and the Gender sorter. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const G = I.games;
  const { esc, shuffle } = I.util;

  const ARTICLE = /^(?:(?:il|lo|la|i|gli|le)\s+|l')/i;
  const baseLetter = (c) => c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  /** Single words (no spaces, no apostrophes) from the vocab, article removed. */
  function wordPool(scope) {
    const out = [];
    for (const u of G.unitsFor(scope)) {
      for (const v of u.vocab || []) {
        const word = v.it.replace(ARTICLE, '');
        if (/^[a-zàèéìòù]{4,}$/i.test(word)) out.push({ id: u.id + ':' + (v.id || v.it), word: word.toLowerCase(), full: v.it, en: v.en, gender: v.gender || null });
      }
    }
    return out;
  }

  /** Nouns with a gender (and a single word) for the sorter. */
  function nounPool(scope) {
    return wordPool(scope).filter((w) => w.gender);
  }

  /* ======================= WORD SCRAMBLE ======================= */
  const scramble = {
    id: 'scramble',
    icon: '🔤',
    title: 'Word scramble',
    desc: 'Tap the letters in the right order to spell the Italian word.',
    howto: 'You see the English meaning. Tap letters to build the word, or type on your keyboard.',
    scopeKind: 'units',
    pool: wordPool,
    play(root, ctx) {
      const items = G.pick('scramble', wordPool(ctx.scope));
      let i = 0, score = 0;

      function round() {
        const it = items[i];
        let letters = it.word.split('');
        for (let tries = 0; tries < 10 && letters.join('') === it.word; tries++) letters = shuffle(letters);
        const ans = []; // indices into `letters`
        let done = false;

        root.innerHTML =
          G.topbar(scramble, i, items.length, score) +
          '<div class="card q-card"><p class="q-instr">Spell the Italian word for:</p>' +
          '<p class="q-prompt">' + esc(it.en) + (it.gender ? ' <span class="q-hint">(' + (it.gender === 'm' ? 'masculine' : 'feminine') + ')</span>' : '') + '</p>' +
          '<div class="slots" id="slots" aria-label="Your answer" aria-live="polite"></div>' +
          '<div class="tiles" id="bank" role="group" aria-label="Letters"></div>' +
          '<div class="q-actions game-actions"><button type="button" class="btn btn-ghost btn-sm" id="clear">Clear</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" id="skip">Skip</button>' +
          '<button type="button" class="btn" id="check" disabled>Check</button>' +
          '<button type="button" class="btn" id="next" hidden>' + (i + 1 === items.length ? 'See score' : 'Next') + '</button></div>' +
          '<div class="feedback" id="fb" role="status" aria-live="polite"></div></div>';

        const $ = (s) => root.querySelector(s);
        function paint() {
          $('#slots').innerHTML = letters
            .map((_, k) => {
              const idx = ans[k];
              return idx === undefined
                ? '<span class="slot" aria-hidden="true"></span>'
                : '<button type="button" class="tile tile-ans" data-pos="' + k + '" lang="it"' + (done ? ' disabled' : '') + '>' + esc(letters[idx]) + '</button>';
            })
            .join('');
          $('#bank').innerHTML = letters
            .map((ch, k) => (ans.includes(k) ? '<span class="tile tile-used" aria-hidden="true"></span>' : '<button type="button" class="tile" data-idx="' + k + '" lang="it"' + (done ? ' disabled' : '') + '>' + esc(ch) + '</button>'))
            .join('');
          $('#check').disabled = done || ans.length !== letters.length;
        }
        const add = (k) => { if (!done && !ans.includes(k)) { ans.push(k); paint(); } };
        const undo = () => { if (!done) { ans.pop(); paint(); } };

        function finishRound(ok, skipped) {
          done = true;
          if (ok) score++;
          paint();
          $('#check').hidden = true; $('#skip').hidden = true; $('#clear').hidden = true;
          const fb = $('#fb');
          fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
          fb.innerHTML = '<p class="fb-title ' + (ok ? 'fb-ok' : 'fb-bad') + '">' + (ok ? '✓ Esatto!' : skipped ? 'Skipped' : 'Not quite.') + '</p>' +
            '<p><strong lang="it">' + esc(it.full) + '</strong> — ' + esc(it.en) + '</p><p>' + I.audio.button(it.full) + '</p>';
          $('#next').hidden = false;
          $('#next').focus();
        }

        $('#bank').addEventListener('click', (e) => { const b = e.target.closest('[data-idx]'); if (b) add(Number(b.dataset.idx)); });
        $('#slots').addEventListener('click', (e) => {
          const b = e.target.closest('[data-pos]');
          if (b && !done) { ans.splice(Number(b.dataset.pos)); paint(); } // remove this letter and the ones after it
        });
        $('#clear').addEventListener('click', () => { ans.length = 0; paint(); });
        $('#skip').addEventListener('click', () => finishRound(false, true));
        $('#check').addEventListener('click', () => finishRound(ans.map((k) => letters[k]).join('') === it.word));
        $('#next').addEventListener('click', () => { i++; i < items.length ? round() : G.finish(root, scramble, score, items.length); });
        paint();

        // physical keyboard support
        G.runCleanups();
        G.keys((e) => {
          if (e.ctrlKey || e.metaKey || e.altKey) return;
          if (e.key === 'Backspace') return undo();
          if (e.key === 'Enter') {
            if (e.target.closest('button')) return; // let the focused button handle it
            if (done) $('#next').click();
            else if (!$('#check').disabled) $('#check').click();
            return;
          }
          if (done || e.key.length !== 1 || e.target.closest('button')) return;
          const want = baseLetter(e.key);
          const k = letters.findIndex((ch, idx) => !ans.includes(idx) && baseLetter(ch) === want);
          if (k >= 0) add(k);
        });
      }
      round();
    },
  };

  /* ======================= HANGMAN ======================= */
  const MAX_WRONG = 6;
  const GALLOWS =
    '<svg viewBox="0 0 120 130" class="gallows" role="img" aria-label="Hangman drawing" focusable="false"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">' +
    '<path d="M10 122h70M30 122V10h60v18"/>' +
    '<circle data-part="1" cx="90" cy="40" r="12"/><path data-part="2" d="M90 52v34"/><path data-part="3" d="M90 60l-16 14"/>' +
    '<path data-part="4" d="M90 60l16 14"/><path data-part="5" d="M90 86l-14 22"/><path data-part="6" d="M90 86l14 22"/></g></svg>';

  const hangman = {
    id: 'hangman',
    icon: '🪢',
    title: 'Hangman',
    desc: 'Guess the Italian word one letter at a time before the drawing is finished.',
    howto: 'You get the English meaning as a clue. You can make 6 mistakes. Accents are filled in for you.',
    scopeKind: 'units',
    pool: wordPool,
    play(root, ctx) {
      const items = G.pick('hangman', wordPool(ctx.scope));
      let i = 0, score = 0;
      const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

      function round() {
        const it = items[i];
        const guessed = new Set();
        let wrong = 0, over = false;

        root.innerHTML =
          G.topbar(hangman, i, items.length, score) +
          '<div class="card q-card"><p class="q-instr">Clue (English):</p><p class="q-prompt">' + esc(it.en) + '</p>' +
          '<div class="hang-wrap">' + GALLOWS + '<p class="lives" id="lives" aria-live="polite"></p></div>' +
          '<p class="hang-word" id="word" lang="it" aria-live="polite"></p>' +
          '<div class="keyboard" id="kb" role="group" aria-label="Letters">' +
          ALPHABET.map((c) => '<button type="button" class="key" data-k="' + c + '">' + c + '</button>').join('') + '</div>' +
          '<div class="feedback" id="fb" role="status" aria-live="polite"></div>' +
          '<div class="q-actions"><button type="button" class="btn" id="next" hidden>' + (i + 1 === items.length ? 'See score' : 'Next word') + '</button></div></div>';

        const $ = (s) => root.querySelector(s);
        function paint() {
          $('#word').innerHTML = it.word
            .split('')
            .map((ch) => '<span class="hw-letter">' + (over || guessed.has(baseLetter(ch)) ? esc(ch) : '&nbsp;') + '</span>')
            .join('');
          $('#word').setAttribute('aria-label', it.word.split('').map((ch) => (over || guessed.has(baseLetter(ch)) ? ch : 'blank')).join(' '));
          root.querySelectorAll('.gallows [data-part]').forEach((p) => (p.style.display = Number(p.dataset.part) <= wrong ? '' : 'none'));
          $('#lives').textContent = 'Mistakes: ' + wrong + ' / ' + MAX_WRONG;
          root.querySelectorAll('.key').forEach((b) => {
            const c = b.dataset.k;
            b.disabled = over || guessed.has(c);
            b.classList.toggle('key-hit', guessed.has(c) && it.word.split('').some((ch) => baseLetter(ch) === c));
            b.classList.toggle('key-miss', guessed.has(c) && !it.word.split('').some((ch) => baseLetter(ch) === c));
          });
        }
        function guess(c) {
          if (over || guessed.has(c)) return;
          guessed.add(c);
          if (!it.word.split('').some((ch) => baseLetter(ch) === c)) wrong++;
          const won = it.word.split('').every((ch) => guessed.has(baseLetter(ch)));
          if (won || wrong >= MAX_WRONG) {
            over = true;
            if (won) score++;
            const fb = $('#fb');
            fb.className = 'feedback show ' + (won ? 'ok' : 'bad');
            fb.innerHTML = '<p class="fb-title ' + (won ? 'fb-ok' : 'fb-bad') + '">' + (won ? '✓ Bravissima!' : 'Out of tries.') + '</p>' +
              '<p><strong lang="it">' + esc(it.full) + '</strong> — ' + esc(it.en) + '</p><p>' + I.audio.button(it.full) + '</p>';
            $('#next').hidden = false;
            paint();
            $('#next').focus();
            return;
          }
          paint();
        }
        $('#kb').addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b) guess(b.dataset.k); });
        $('#next').addEventListener('click', () => { i++; i < items.length ? round() : G.finish(root, hangman, score, items.length); });
        paint();

        G.runCleanups();
        G.keys((e) => {
          if (e.ctrlKey || e.metaKey || e.altKey) return;
          if (over) { if (e.key === 'Enter' && e.target.id !== 'next') $('#next').click(); return; }
          const c = baseLetter(e.key);
          if (e.key.length === 1 && /[a-z]/.test(c)) guess(c);
        });
      }
      round();
    },
  };

  /* ======================= GENDER SORTER ======================= */
  function genderTip(n) {
    const w = n.word, last = w.slice(-1);
    const plural = /^(i|gli|le)\s/i.test(n.full);
    if (plural) return 'This word is plural — here it is ' + (n.gender === 'm' ? 'masculine (i / gli)' : 'feminine (le)') + '.';
    if (last === 'o' && n.gender === 'm') return 'Most nouns ending in -o are masculine.';
    if (last === 'a' && n.gender === 'f') return 'Most nouns ending in -a are feminine.';
    if (last === 'o') return 'Exception! It ends in -o but it is feminine.';
    if (last === 'a') return 'Exception! It ends in -a but it is masculine.';
    if (last === 'e') return 'Nouns ending in -e can be either gender — learn them with their article.';
    if (last === 'à') return 'Nouns ending in -à are almost always feminine.';
    return 'Learn this one together with its article.';
  }

  const gender = {
    id: 'gender',
    icon: '⚖️',
    title: 'Gender sorter',
    desc: 'Is it il (masculine) or la (feminine)? Sort each noun quickly.',
    howto: 'Tap the button for the right gender. After each answer you get a quick tip.',
    scopeKind: 'units',
    pool: nounPool,
    play(root, ctx) {
      const items = G.pick('gender', nounPool(ctx.scope));
      let i = 0, score = 0;

      function round() {
        const n = items[i];
        root.innerHTML =
          G.topbar(gender, i, items.length, score) +
          '<div class="card q-card center"><p class="q-instr">Which gender?</p>' +
          '<p class="sort-word" lang="it">' + esc(n.word) + '</p><p class="hint">' + esc(n.en) + '</p>' +
          '<p>' + I.audio.button(n.word, n.word) + '</p>' +
          '<div class="sort-btns" role="group" aria-label="Choose the gender">' +
          '<button type="button" class="btn sort-m" data-g="m"><span lang="it">il / lo / l\'</span><small>masculine</small></button>' +
          '<button type="button" class="btn sort-f" data-g="f"><span lang="it">la / l\'</span><small>feminine</small></button></div>' +
          '<div class="feedback" id="fb" role="status" aria-live="polite"></div>' +
          '<div class="q-actions"><button type="button" class="btn" id="next" hidden>' + (i + 1 === items.length ? 'See score' : 'Next') + '</button></div></div>';
        const $ = (s) => root.querySelector(s);
        let done = false;
        root.querySelectorAll('[data-g]').forEach((b) =>
          b.addEventListener('click', () => {
            if (done) return;
            done = true;
            const ok = b.dataset.g === n.gender;
            if (ok) score++;
            root.querySelectorAll('[data-g]').forEach((x) => {
              x.disabled = true;
              if (x.dataset.g === n.gender) x.classList.add('is-right');
              else if (x === b) x.classList.add('is-wrong');
            });
            const fb = $('#fb');
            fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
            fb.innerHTML = '<p class="fb-title ' + (ok ? 'fb-ok' : 'fb-bad') + '">' + (ok ? '✓ Giusto!' : 'Not quite.') + '</p>' +
              '<p><strong lang="it">' + esc(n.full) + '</strong></p><p class="fb-explain">' + esc(genderTip(n)) + '</p><p>' + I.audio.button(n.full) + '</p>';
            $('#next').hidden = false;
            $('#next').focus();
          })
        );
        $('#next').addEventListener('click', () => { i++; i < items.length ? round() : G.finish(root, gender, score, items.length); });

        G.runCleanups();
        G.keys((e) => {
          if (e.ctrlKey || e.metaKey || e.altKey) return;
          const k = e.key.toLowerCase();
          if (!done && (k === 'm' || k === 'f')) root.querySelector('[data-g="' + k + '"]').click();
          else if (done && e.key === 'Enter' && e.target.id !== 'next') $('#next').click();
        });
      }
      round();
    },
  };

  G.register(scramble);
  G.register(hangman);
  G.register(gender);
})();
