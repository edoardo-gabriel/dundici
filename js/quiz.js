/* quiz.js — per-unit mixed exercises with instant feedback and a score summary.
   Exercise types (see data/_template.js): mc, fill, translate, listen. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { esc, shuffle, check } = I.util;

  const TYPE_LABEL = { mc: 'Multiple choice', fill: 'Fill in the blank', translate: 'Translate into Italian', listen: 'Listening' };
  let s = null; // current session

  function start(root, unitId) {
    const unit = I.lessons.unit(unitId);
    if (!unit) return (root.innerHTML = '<header class="page-head"><h1>Quiz not found</h1></header><p class="card">That unit was not found. <a href="#/lessons">Back to lessons</a></p>');
    // Listening questions only make sense when we can actually speak Italian.
    const qs = shuffle((unit.exercises || []).filter((q) => q.type !== 'listen' || I.audio.available()));
    s = { root, unit, qs, i: 0, correct: 0, missed: [] };
    if (!qs.length) return (root.innerHTML = '<header class="page-head"><h1>No exercises yet</h1></header><p class="card">This unit has no exercises yet. <a href="#/lesson/' + unit.id + '">Back to the lesson</a></p>');
    question();
  }

  /** Text to read aloud after answering, when it makes sense. */
  function sayText(q) {
    if (q.say) return q.say;
    if (q.type === 'listen') return q.audio;
    if (q.type === 'translate') return q.answer[0];
    if (q.type === 'fill') return q.prompt.replace('___', q.answer[0]);
    if (q.type === 'mc' && q.prompt.includes('___') && q.promptLang === 'it') return q.prompt.replace('___', q.options[q.answer]);
    return null;
  }

  function promptHTML(q) {
    const lang = q.promptLang === 'it' ? ' lang="it"' : '';
    const text = esc(q.prompt).replace('___', '<span class="blank" aria-label="blank">&nbsp;</span>');
    return '<p class="q-prompt"' + lang + '>' + text + (q.hint ? ' <span class="q-hint">(' + esc(q.hint) + ')</span>' : '') + '</p>';
  }

  const ACCENTS = ['à', 'è', 'é', 'ì', 'ò', 'ù'];
  function inputHTML(placeholder) {
    return '<label class="sr-only" for="ans">Your answer in Italian</label>' +
      '<input id="ans" class="text-input" type="text" lang="it" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="' + esc(placeholder) + '">' +
      '<div class="accent-row" aria-label="Accented letters">' +
      ACCENTS.map((a) => '<button type="button" class="chip accent-btn" data-char="' + a + '" aria-label="Insert ' + a + '">' + a + '</button>').join('') + '</div>';
  }

  function question() {
    const { root, qs, i, unit } = s;
    const q = qs[i];
    let body = '';
    let optionList = null;

    if (q.type === 'mc' || (q.type === 'listen' && q.mode === 'choose')) {
      optionList = shuffle(q.options.map((t, idx) => ({ t, idx })));
      const optLang = q.type === 'listen' || q.optionLang !== 'en' ? ' lang="it"' : '';
      body = '<div class="options" role="group" aria-label="Answer choices">' +
        optionList.map((o) => '<button type="button" class="option" data-idx="' + o.idx + '"' + optLang + '>' + esc(o.t) + '</button>').join('') + '</div>';
    } else if (q.type === 'fill') {
      body = inputHTML('Type the missing word(s)');
    } else if (q.type === 'translate') {
      body = inputHTML('Type in Italian');
    } else if (q.type === 'listen') {
      body = inputHTML('Type what you hear');
    }

    const head = q.type === 'listen'
      ? '<p class="q-prompt">' + esc(q.instruction || (q.mode === 'choose' ? 'Listen, then choose what you heard.' : 'Listen, then type what you hear.')) + '</p>' +
        '<div class="listen-row">' + I.audio.button(q.audio, 'the phrase') + I.audio.button(q.audio, 'the phrase', true) + '</div>'
      : '<p class="q-instr">' + esc(q.instruction || (q.type === 'translate' ? 'Translate into Italian.' : q.type === 'fill' ? 'Fill in the blank.' : 'Choose the correct answer.')) + '</p>' + promptHTML(q);

    const typed = !optionList;
    root.innerHTML =
      '<nav class="crumbs"><a href="#/lesson/' + unit.id + '">← Leave quiz</a></nav>' +
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + qs.length + '" aria-valuenow="' + i + '" aria-label="Quiz progress"><span style="width:' + (i / qs.length) * 100 + '%"></span></div>' +
      '<p class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + ' · ' + TYPE_LABEL[q.type] + '</p>' +
      '<form class="card q-card" id="q-form" novalidate>' + head + body +
      '<div class="feedback" id="feedback" role="status" aria-live="polite"></div>' +
      '<div class="q-actions">' + (typed ? '<button type="submit" class="btn" id="check-btn">Check</button>' : '') +
      '<button type="button" class="btn" id="next-btn" hidden>' + (i + 1 === qs.length ? 'See my score' : 'Next question') + '</button></div></form>';

    const form = root.querySelector('#q-form');
    form.addEventListener('submit', (e) => e.preventDefault());
    root.querySelector('#next-btn').addEventListener('click', () => {
      s.i++;
      s.i < s.qs.length ? question() : summary();
    });

    if (optionList) {
      form.querySelectorAll('.option').forEach((b) =>
        b.addEventListener('click', () => {
          const chosen = Number(b.dataset.idx);
          const ok = chosen === q.answer;
          form.querySelectorAll('.option').forEach((o) => {
            o.disabled = true;
            if (Number(o.dataset.idx) === q.answer) o.classList.add('is-right');
          });
          if (!ok) b.classList.add('is-wrong');
          finish(q, ok, q.options[chosen], q.options[q.answer], false);
        })
      );
    } else {
      const input = form.querySelector('#ans');
      form.querySelectorAll('.accent-btn').forEach((b) =>
        b.addEventListener('click', () => {
          const p = input.selectionStart ?? input.value.length;
          input.value = input.value.slice(0, p) + b.dataset.char + input.value.slice(input.selectionEnd ?? p);
          input.focus();
          input.setSelectionRange(p + 1, p + 1);
        })
      );
      form.addEventListener('submit', () => {
        if (!input.value.trim()) return input.focus();
        const r = check(input.value, q.answer);
        input.readOnly = true;
        form.querySelector('#check-btn').hidden = true;
        form.querySelectorAll('.accent-btn').forEach((b) => (b.disabled = true));
        input.classList.add(r.ok ? 'is-right' : 'is-wrong');
        finish(q, r.ok, input.value.trim(), r.accentOnly ? r.match : q.answer[0], r.accentOnly);
      });
      input.focus({ preventScroll: true });
    }
  }

  /** Show feedback, record the result, reveal the Next button. */
  function finish(q, ok, given, correctText, accentOnly) {
    if (ok) s.correct++;
    else s.missed.push({ q, given, correctText });
    const say = sayText(q);
    let html = ok
      ? '<p class="fb-title fb-ok">✓ Correct!</p>'
      : '<p class="fb-title fb-bad">Not quite.</p><p>Correct answer: <strong lang="it">' + esc(correctText) + '</strong></p>';
    if (ok && accentOnly) html += '<p class="fb-tip">Watch the accents: it\'s written <strong lang="it">' + esc(correctText) + '</strong>.</p>';
    if (q.type === 'listen') html += '<p><span lang="it">' + esc(q.audio) + '</span>' + (q.en ? ' — ' + esc(q.en) : '') + '</p>';
    if (q.explain) html += '<p class="fb-explain">' + esc(q.explain) + '</p>';
    if (say && q.type !== 'listen') html += '<p>' + I.audio.button(say) + '</p>';
    const fb = s.root.querySelector('#feedback');
    fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = html;
    const next = s.root.querySelector('#next-btn');
    next.hidden = false;
    next.focus();
  }

  function summary() {
    const { root, unit, correct, qs, missed } = s;
    const total = qs.length;
    const pct = Math.round((correct / total) * 100);
    I.storage.recordQuiz(unit.id, correct, total);
    const msg = pct === 100 ? 'Perfetto! 🎉' : pct >= 80 ? 'Bravissima! Very well done.' : pct >= 50 ? 'Bene! A little more practice and you\'ll have it.' : 'Keep going — re-read the notes and try again.';
    const review = missed.length
      ? '<section aria-labelledby="rev-h"><h2 id="rev-h">To review</h2><ul class="review card">' +
        missed.map((m) => '<li><p class="rv-q">' + esc(m.q.type === 'listen' ? 'Listening: ' + m.q.audio : m.q.prompt) + '</p><p>Answer: <strong lang="it">' + esc(m.correctText) + '</strong></p></li>').join('') + '</ul></section>'
      : '';
    root.innerHTML =
      '<header class="page-head center"><p class="eyebrow">Risultato</p><h1>' + esc(unit.title) + '</h1></header>' +
      '<section class="card center"><p class="big-number">' + correct + ' / ' + total + '</p><p>' + pct + '% — ' + msg + '</p>' +
      '<div class="actions"><button type="button" class="btn" id="retry-btn">Try again</button>' +
      '<a class="btn btn-secondary" href="#/lesson/' + unit.id + '">Back to lesson</a>' +
      '<a class="btn btn-ghost" href="#/flashcards/' + unit.id + '">Flashcards</a></div></section>' + review;
    root.querySelector('#retry-btn').addEventListener('click', () => start(root, unit.id));
    root.focus();
    if (I.app) I.app.refreshBadge();
  }

  I.quiz = { start };
})();
