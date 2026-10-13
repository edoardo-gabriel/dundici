/* game-duel.js — Conjugation duel. Questions are generated from data/conjugations.js, so the
   pool is every verb × person × tense (thousands of combinations). A cosmetic "bombolone"
   rolls along its own track while you play: try to get more answers right than it has steps! */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const G = I.games;
  const { esc, shuffle, check } = I.util;

  const PERSONS = ['io', 'tu', 'lui', 'noi', 'voi', 'loro'];
  const TENSES = {
    pres: 'Presente',
    imp: 'Imperfetto',
    fut: 'Futuro semplice',
    pp: 'Passato prossimo',
  };
  const AUX = {
    avere: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
    essere: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
  };
  const IMP_END = ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'];
  const FUT_END = ['ò', 'ai', 'à', 'emo', 'ete', 'anno'];
  const STEP_MS = 22000; // the bombolone advances one step this often

  /** All accepted forms for a verb / tense / person (person 0–5). `she` picks feminine for lei. */
  function forms(v, tense, p, she) {
    if (tense === 'pres') return [v.pres[p]];
    if (tense === 'imp') return [v.impForms ? v.impForms[p] : v.imp + IMP_END[p]];
    if (tense === 'fut') return [v.fut + FUT_END[p]];
    // passato prossimo: helper + participle (agreeing with the subject when the helper is essere)
    const aux = AUX[v.aux][p];
    if (v.aux === 'avere') return [aux + ' ' + v.pp];
    const stem = v.pp.slice(0, -1);
    if (p === 2) return [aux + ' ' + stem + (she ? 'a' : 'o')];
    if (p >= 3) return [aux + ' ' + stem + 'i', aux + ' ' + stem + 'e'];
    return [aux + ' ' + stem + 'o', aux + ' ' + stem + 'a'];
  }

  /** Build one question, avoiding combinations seen recently. */
  function makeQuestion(tenseChoice, recentSet) {
    const verbs = window.ITALIANO_VERBS || [];
    for (let tries = 0; tries < 80; tries++) {
      const v = verbs[Math.floor(Math.random() * verbs.length)];
      const tense = tenseChoice === 'mixed' ? Object.keys(TENSES)[Math.floor(Math.random() * 4)] : tenseChoice;
      const aux = tense === 'pp' && Math.random() < 0.3;
      const p = Math.floor(Math.random() * 6);
      const she = p === 2 && Math.random() < 0.5;
      const key = [v.inf, tense, aux ? 'aux' : p + (she ? 'f' : '')].join('|');
      if (recentSet.has(key) && tries < 79) continue;
      if (aux) return { id: key, kind: 'aux', v };
      return { id: key, kind: 'conj', v, tense, p, she, answers: forms(v, tense, p, she) };
    }
  }

  const def = {
    id: 'duel',
    icon: '⚔️',
    title: 'Conjugation duel',
    desc: 'Conjugate verbs against the clock — and a rolling bombolone.',
    howto: 'Type the correct verb form (accents are optional). In the passato prossimo you will sometimes be asked "avere or essere?". Beat the bombolone to the finish!',
    scopeKind: 'custom',
    pool: () => (window.ITALIANO_VERBS || []),
    scopeHTML() {
      const opts = [['mixed', 'Mixed — all four tenses']].concat(Object.entries(TENSES));
      return '<label class="field-label" for="tense">Tense</label><select id="tense" class="select">' +
        opts.map(([k, l]) => '<option value="' + k + '">' + esc(l) + '</option>').join('') + '</select>';
    },
    readScope: (root) => ({ tense: root.querySelector('#tense').value }),
    play(root, ctx) {
      const tenseChoice = ctx.tense;
      const gameKey = 'duel';
      const recent = new Set(I.storage.recent(gameKey));
      const questions = [];
      for (let k = 0; k < G.ROUND; k++) {
        const q = makeQuestion(tenseChoice, new Set(recent));
        questions.push(q);
        recent.add(q.id);
      }
      I.storage.setRecent(gameKey, Array.from(recent).slice(-300));

      let i = 0, score = 0, steps = 0;
      const timer = setInterval(() => { steps = Math.min(G.ROUND, steps + 1); paintTracks(); }, STEP_MS);
      G.onLeave(() => clearInterval(timer));

      function track(emoji, n, cls) {
        let cells = '';
        for (let k = 0; k <= G.ROUND; k++) cells += '<span class="cell' + (k === n ? ' here' : '') + '">' + (k === n ? emoji : k === G.ROUND ? '🏁' : '') + '</span>';
        return '<div class="track ' + cls + '">' + cells + '</div>';
      }
      function paintTracks() {
        const el = root.querySelector('#tracks');
        if (!el) return;
        el.innerHTML = '<p class="track-label">You ✏️</p>' + track('✏️', score, 'me') + '<p class="track-label">Bombolone 🍩</p>' + track('🍩', steps, 'bot');
      }

      function round() {
        const q = questions[i];
        let body, head;
        if (q.kind === 'aux') {
          head = '<p class="q-instr">Passato prossimo — which helper verb?</p><p class="q-prompt"><span lang="it">' + esc(q.v.inf) + '</span> <span class="q-hint">(' + esc(q.v.en) + ')</span></p>';
          body = '<div class="options" role="group" aria-label="Helper verb"><button type="button" class="option" data-a="avere" lang="it">avere</button><button type="button" class="option" data-a="essere" lang="it">essere</button></div>';
        } else {
          const who = q.p === 2 ? (q.she ? 'lei' : 'lui') : PERSONS[q.p];
          head = '<p class="q-instr">' + esc(TENSES[q.tense]) + '</p><p class="q-prompt"><span class="subject" lang="it">' + who + '</span> … <span lang="it">' + esc(q.v.inf) + '</span> <span class="q-hint">(' + esc(q.v.en) + ')</span></p>';
          body = '<label class="sr-only" for="ans">Verb form</label><input id="ans" class="text-input" type="text" lang="it" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Type the form">' +
            '<div class="accent-row">' + ['à', 'è', 'é', 'ì', 'ò', 'ù'].map((a) => '<button type="button" class="chip accent-btn" data-char="' + a + '" aria-label="Insert ' + a + '">' + a + '</button>').join('') + '</div>';
        }
        root.innerHTML =
          G.topbar(def, i, questions.length, score) +
          '<div class="card tracks" id="tracks"></div>' +
          '<form class="card q-card" id="f" novalidate>' + head + body + '<div class="feedback" id="fb" role="status" aria-live="polite"></div>' +
          '<div class="q-actions">' + (q.kind === 'conj' ? '<button type="submit" class="btn" id="check">Check</button>' : '') +
          '<button type="button" class="btn" id="next" hidden>' + (i + 1 === questions.length ? 'See result' : 'Next') + '</button></div></form>';
        paintTracks();

        const $ = (s) => root.querySelector(s);
        const form = $('#f');
        form.addEventListener('submit', (e) => e.preventDefault());
        $('#next').addEventListener('click', () => { i++; i < questions.length ? round() : end(); });

        function result(ok, correctText, note) {
          if (ok) score++;
          paintTracks();
          const fb = $('#fb');
          fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
          fb.innerHTML = '<p class="fb-title ' + (ok ? 'fb-ok' : 'fb-bad') + '">' + (ok ? '✓ Giusto!' : 'Not quite.') + '</p>' +
            (ok && !note ? '' : '<p>Correct: <strong lang="it">' + esc(correctText) + '</strong></p>') + (note ? '<p class="fb-explain">' + esc(note) + '</p>' : '') +
            '<p>' + I.audio.button(correctText) + '</p>';
          $('#next').hidden = false;
          $('#next').focus();
        }

        if (q.kind === 'aux') {
          form.querySelectorAll('[data-a]').forEach((b) =>
            b.addEventListener('click', () => {
              const ok = b.dataset.a === q.v.aux;
              form.querySelectorAll('[data-a]').forEach((x) => { x.disabled = true; if (x.dataset.a === q.v.aux) x.classList.add('is-right'); else if (x === b) x.classList.add('is-wrong'); });
              result(ok, q.v.aux + ' — ' + AUX[q.v.aux][0] + ' ' + q.v.pp, q.v.aux === 'essere'
                ? q.v.inf + ' takes essere (movement / change of state), so the participle agrees with the subject.'
                : q.v.inf + ' takes avere.');
            })
          );
        } else {
          const input = $('#ans');
          form.querySelectorAll('.accent-btn').forEach((b) => b.addEventListener('click', () => {
            const p = input.selectionStart ?? input.value.length;
            input.value = input.value.slice(0, p) + b.dataset.char + input.value.slice(input.selectionEnd ?? p);
            input.focus(); input.setSelectionRange(p + 1, p + 1);
          }));
          form.addEventListener('submit', () => {
            if (!input.value.trim()) return input.focus();
            const r = check(input.value, q.answers);
            input.readOnly = true; $('#check').hidden = true;
            form.querySelectorAll('.accent-btn').forEach((b) => (b.disabled = true));
            input.classList.add(r.ok ? 'is-right' : 'is-wrong');
            const shown = r.accentOnly ? r.match : q.answers[0];
            result(r.ok, shown + (q.answers.length > 1 && !r.ok ? ' / ' + q.answers[1] : ''), r.accentOnly ? 'Watch the accent: ' + r.match : '');
          });
          input.focus({ preventScroll: true });
        }
      }

      function end() {
        clearInterval(timer);
        const won = score >= steps;
        G.finish(root, def, score, questions.length,
          '<p class="duel-result">' + (won ? '🏆 You beat the bombolone!' : '🍩 The bombolone got there first — try again!') + '</p>');
      }
      round();
    },
  };

  G.register(def);
})();
