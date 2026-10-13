/* lessons.js — reads unit data and renders the lesson index + individual lesson pages. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { esc, it } = I.util;

  /* ---------- data access ---------- */
  function units() {
    return (window.ITALIANO_UNITS || []).slice().sort((a, b) => a.number - b.number);
  }
  function unit(id) {
    return units().find((u) => u.id === id) || null;
  }
  /** Flashcards are generated from each unit's vocab list. */
  function cards(u) {
    return (u.vocab || []).map((v, i) => ({
      id: u.id + ':' + (v.id || i),
      unitId: u.id,
      it: v.it,
      en: v.en,
      gender: v.gender || null,
    }));
  }
  function allCards() {
    return units().flatMap(cards);
  }

  /** 0–100 progress for a unit: a third each for lesson, quiz (≥80% = full), and cards (box ≥3). */
  function progress(u) {
    const S = I.storage;
    const lesson = S.isCompleted(u.id) ? 1 : 0;
    const q = S.getQuiz(u.id);
    const quiz = q ? Math.min(1, q.bestPct / 80) : 0;
    const cs = cards(u);
    const known = cs.filter((c) => (S.getCard(c.id) || { box: 0 }).box >= 3).length;
    const cardPart = cs.length ? known / cs.length : 0;
    return { percent: Math.round(((lesson + quiz + cardPart) / 3) * 100), lesson: !!lesson, quiz: q, known, total: cs.length };
  }

  /* ---------- small view helpers ---------- */
  function genderBadge(g) {
    if (!g) return '';
    const word = g === 'm' ? 'masculine' : 'feminine';
    return '<span class="badge badge-' + g + '" title="' + word + '"><span aria-hidden="true">' + g + '</span><span class="sr-only">' + word + '</span></span>';
  }

  function render(root, html) {
    root.innerHTML = html;
  }

  /* ---------- lesson index ---------- */
  function renderIndex(root) {
    const list = units()
      .map((u) => {
        const p = progress(u);
        const q = p.quiz ? 'Quiz best: ' + p.quiz.best + '/' + p.quiz.total : 'Quiz not taken';
        return (
          '<li><a class="unit-card" href="#/lesson/' + u.id + '">' +
          '<span class="unit-num" aria-hidden="true">' + u.number + '</span>' +
          '<span class="unit-body">' +
          '<span class="unit-title">' + esc(u.title) + (u.scaffold ? ' <span class="tag">draft</span>' : '') + '</span>' +
          '<span class="unit-sub">' + esc(u.subtitle) + '</span>' +
          '<span class="meter" role="img" aria-label="' + p.percent + ' percent complete"><span style="width:' + p.percent + '%"></span></span>' +
          '<span class="unit-meta">' + (p.lesson ? '✓ Lesson read' : 'Lesson not read') + ' · ' + q + ' · ' + p.known + '/' + p.total + ' cards known</span>' +
          '</span></a></li>'
        );
      })
      .join('');
    render(root,
      '<header class="page-head"><p class="eyebrow">Il tuo percorso</p><h1>Lessons</h1>' +
      '<p class="lede">From A2 towards B1: past tenses, reflexive verbs, prepositions, the future, and real-life situations.</p></header>' +
      '<ol class="unit-list">' + list + '</ol>');
  }

  /* ---------- single lesson ---------- */
  function renderLesson(root, id) {
    const u = unit(id);
    if (!u) return render(root, '<header class="page-head"><h1>Lesson not found</h1></header><p class="card">That lesson was not found. <a href="#/lessons">Back to lessons</a></p>');
    const all = units();
    const idx = all.indexOf(u);
    const prev = all[idx - 1],
      next = all[idx + 1];

    const grammar = (u.grammar || [])
      .map((g) => '<div class="card prose"><h3>' + esc(g.title) + '</h3>' + g.html + '</div>')
      .join('');

    const examples = (u.examples || [])
      .map((e) =>
        '<li class="example">' + I.audio.button(e.it) +
        '<div><p class="it" lang="it">' + esc(e.it) + '</p><p class="en">' + esc(e.en) + '</p></div></li>')
      .join('');

    const vocab = (u.vocab || [])
      .map((v) =>
        '<li class="vocab-item">' + I.audio.button(v.say || v.it, v.it) +
        '<span class="v-it" lang="it">' + esc(v.it) + '</span>' + genderBadge(v.gender) +
        '<span class="v-en">' + esc(v.en) + '</span></li>')
      .join('');

    render(root,
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/lessons">← All lessons</a></nav>' +
      '<header class="page-head"><p class="eyebrow">Unit ' + u.number + '</p><h1>' + esc(u.title) + '</h1><p class="lede">' + esc(u.subtitle) + '</p></header>' +
      (u.scaffold ? '<p class="banner">This unit is a short starter outline. Full content is coming soon — the structure and exercises already work.</p>' : '') +
      '<section aria-labelledby="h-grammar"><h2 id="h-grammar">Grammar notes</h2>' + grammar + '</section>' +
      '<section aria-labelledby="h-ex"><h2 id="h-ex">Examples</h2><ul class="examples card">' + examples + '</ul></section>' +
      '<section aria-labelledby="h-vocab"><h2 id="h-vocab">Vocabulary</h2><p class="hint">' +
      '<abbr title="masculine">m</abbr> / <abbr title="feminine">f</abbr> show the gender of each noun.</p>' +
      '<ul class="vocab card">' + vocab + '</ul></section>' +
      '<section class="actions" aria-label="Next steps">' +
      '<a class="btn" href="#/quiz/' + u.id + '">Take the quiz</a>' +
      '<a class="btn btn-secondary" href="#/flashcards/' + u.id + '">Practise flashcards</a>' +
      '<button type="button" class="btn btn-ghost" id="complete-btn" aria-pressed="false"></button></section>' +
      '<nav class="pager" aria-label="Lesson navigation">' +
      (prev ? '<a href="#/lesson/' + prev.id + '">← Unit ' + prev.number + '</a>' : '<span></span>') +
      (next ? '<a href="#/lesson/' + next.id + '">Unit ' + next.number + ' →</a>' : '<span></span>') + '</nav>');

    // Mark-as-complete toggle
    const btn = root.querySelector('#complete-btn');
    function paint() {
      const done = I.storage.isCompleted(u.id);
      btn.setAttribute('aria-pressed', done);
      btn.textContent = done ? '✓ Lesson completed (tap to undo)' : 'Mark lesson as complete';
    }
    btn.addEventListener('click', () => {
      I.storage.setCompleted(u.id, !I.storage.isCompleted(u.id));
      paint();
    });
    paint();
  }

  I.lessons = { units, unit, cards, allCards, progress, genderBadge, renderIndex, renderLesson };
})();
