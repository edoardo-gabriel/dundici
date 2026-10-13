/* flashcards.js — Leitner spaced repetition with 5 boxes.
   Box 1 = shaky, box 5 = mastered. A correct answer moves a card up one box and pushes
   its next review further away; a miss sends it straight back to box 1 (due again today). */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { esc, today, addDays, shuffle } = I.util;

  const INTERVALS = [0, 1, 3, 7, 14]; // days until next review for boxes 1..5
  const NEW_PER_SESSION = 10; // new (never-seen) cards introduced per session

  let session = null;

  /** Split cards into due (seen, due today or earlier) and fresh (never seen). */
  function split(unitId) {
    const t = today();
    const list = unitId ? I.lessons.cards(I.lessons.unit(unitId) || { vocab: [] }) : I.lessons.allCards();
    const due = [],
      fresh = [];
    for (const c of list) {
      const st = I.storage.getCard(c.id);
      if (!st) fresh.push(c);
      else if (st.due <= t) due.push(c);
    }
    return { due, fresh, total: list.length };
  }

  /** Cards available to study right now (used for the nav badge and dashboard). */
  function dueCount(unitId) {
    const s = split(unitId);
    return s.due.length + Math.min(s.fresh.length, NEW_PER_SESSION);
  }

  function boxCounts() {
    const counts = [0, 0, 0, 0, 0];
    const known = I.storage.allCards();
    const valid = new Set(I.lessons.allCards().map((c) => c.id));
    for (const id in known) if (valid.has(id)) counts[Math.min(5, Math.max(1, known[id].box)) - 1]++;
    return counts;
  }

  /* ---------- landing page ---------- */
  function renderHome(root, unitId) {
    const s = split(unitId);
    const n = dueCount(unitId);
    const counts = boxCounts();
    const max = Math.max(1, ...counts);
    const bars = counts
      .map((c, i) =>
        '<li><span class="bar-label">Box ' + (i + 1) + '</span><span class="bar"><span style="width:' + (c / max) * 100 + '%"></span></span><span class="bar-n">' + c + '</span></li>')
      .join('');
    const unitLinks = I.lessons
      .units()
      .map((u) => '<li><a class="chip" href="#/flashcards/' + u.id + '">Unit ' + u.number + ' <span class="chip-n">' + dueCount(u.id) + '</span></a></li>')
      .join('');
    const scope = unitId ? 'Unit ' + I.lessons.unit(unitId).number : 'all units';

    root.innerHTML =
      '<header class="page-head"><p class="eyebrow">Ripasso</p><h1>Flashcards</h1>' +
      '<p class="lede">Cards you miss come back sooner; cards you know come back later.</p></header>' +
      '<section class="card center" aria-labelledby="due-h"><h2 id="due-h">Due today (' + scope + ')</h2>' +
      '<p class="big-number">' + n + '</p><p class="hint">' + s.due.length + ' to review · ' + Math.min(s.fresh.length, NEW_PER_SESSION) + ' new</p>' +
      (n ? '<button type="button" class="btn" id="start-btn">Start review</button>' : '<p>🎉 All caught up! Come back tomorrow, or try a quiz.</p>') +
      (unitId ? '<p><a href="#/flashcards">Review all units instead</a></p>' : '') + '</section>' +
      '<section aria-labelledby="box-h"><h2 id="box-h">Your boxes</h2><ul class="bars card">' + bars + '</ul></section>' +
      '<section aria-labelledby="by-h"><h2 id="by-h">Study one unit</h2><ul class="chips">' + unitLinks + '</ul></section>';

    const start = root.querySelector('#start-btn');
    if (start) start.addEventListener('click', () => startSession(root, unitId));
  }

  /* ---------- review session ---------- */
  function startSession(root, unitId) {
    const s = split(unitId);
    const queue = shuffle(s.due).concat(s.fresh.slice(0, NEW_PER_SESSION));
    if (!queue.length) return renderHome(root, unitId);
    session = { unitId, queue, i: 0, got: 0, missed: 0, requeued: new Set(), flipped: false, root };
    renderCard();
  }

  /** The back links point at the hash we're already on, so no hashchange fires; re-render directly. */
  function backLink(root, unitId) {
    const link = root.querySelector('a[href^="#/flashcards"]');
    if (link) link.addEventListener('click', (e) => { e.preventDefault(); session = null; renderHome(root, unitId); window.scrollTo(0, 0); });
  }

  function renderCard() {
    const { root, queue, i } = session;
    if (i >= queue.length) return renderDone();
    const c = queue[i];
    const dir = I.storage.setting('dir') === 'en-it' ? 'en-it' : 'it-en';
    const front = dir === 'it-en' ? '<span lang="it">' + esc(c.it) + '</span>' + I.lessons.genderBadge(c.gender) : esc(c.en);
    const back = dir === 'it-en' ? esc(c.en) : '<span lang="it">' + esc(c.it) + '</span>' + I.lessons.genderBadge(c.gender);
    const pct = Math.round((i / queue.length) * 100);
    const st = I.storage.getCard(c.id);

    root.innerHTML =
      '<nav class="crumbs"><a href="#/flashcards' + (session.unitId ? '/' + session.unitId : '') + '">← End session</a></nav>' +
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + queue.length + '" aria-valuenow="' + i + '" aria-label="Session progress"><span style="width:' + pct + '%"></span></div>' +
      '<p class="eyebrow">Card ' + (i + 1) + ' of ' + queue.length + ' · ' + (st ? 'Box ' + st.box : 'New') + '</p>' +
      '<button type="button" class="fc" id="fc" aria-label="Flashcard. Tap to flip." aria-live="polite">' +
      '<span class="fc-inner">' +
      '<span class="fc-face fc-front"><span class="fc-text">' + front + '</span><span class="fc-tip">Tap to flip</span></span>' +
      '<span class="fc-face fc-back" aria-hidden="true"><span class="fc-text">' + back + '</span></span>' +
      '</span></button>' +
      '<div class="fc-tools">' + I.audio.button(c.it, c.it) + I.audio.button(c.it, c.it, true) +
      '<button type="button" class="btn btn-ghost btn-sm" id="dir-btn">' + (dir === 'it-en' ? 'Italian → English' : 'English → Italian') + ' ⇄</button></div>' +
      '<div class="fc-answers" id="answers" hidden>' +
      '<button type="button" class="btn btn-miss" id="miss-btn">✗ Missed it</button>' +
      '<button type="button" class="btn btn-got" id="got-btn">✓ Got it</button></div>';

    backLink(root, session.unitId);

    const fc = root.querySelector('#fc');
    const backFace = root.querySelector('.fc-back');
    const frontFace = root.querySelector('.fc-front');
    function flip() {
      const on = !fc.classList.contains('is-flipped');
      fc.classList.toggle('is-flipped', on);
      backFace.setAttribute('aria-hidden', !on);
      frontFace.setAttribute('aria-hidden', on);
      root.querySelector('#answers').hidden = !on;
      fc.setAttribute('aria-label', 'Flashcard, showing ' + (on ? 'answer' : 'question') + '. Tap to flip.');
    }
    fc.addEventListener('click', flip);
    root.querySelector('#dir-btn').addEventListener('click', () => {
      I.storage.setSetting('dir', dir === 'it-en' ? 'en-it' : 'it-en');
      renderCard();
      root.querySelector('#fc').focus();
    });
    root.querySelector('#got-btn').addEventListener('click', () => answer(true));
    root.querySelector('#miss-btn').addEventListener('click', () => answer(false));
    fc.focus({ preventScroll: true });
  }

  /** Apply the Leitner rules, then move to the next card. */
  function answer(correct) {
    const c = session.queue[session.i];
    const relearning = session.requeued.has(c.id);
    const st = I.storage.getCard(c.id);
    const box = st ? st.box : 1;
    if (correct) {
      session.got++;
      // A card re-shown after a miss today stays in box 1 (no promotion).
      if (!relearning) {
        const nb = Math.min(5, box + 1);
        I.storage.setCard(c.id, nb, addDays(today(), INTERVALS[nb - 1]));
      }
    } else {
      session.missed++;
      I.storage.setCard(c.id, 1, today());
      if (!relearning) {
        session.requeued.add(c.id);
        session.queue.push(c); // see it once more at the end of this session
      }
    }
    session.i++;
    renderCard();
    if (I.app) I.app.refreshBadge();
  }

  function renderDone() {
    const { root, got, missed, unitId } = session;
    root.innerHTML =
      '<header class="page-head center"><p class="eyebrow">Fatto!</p><h1>Session complete</h1></header>' +
      '<section class="card center"><p class="big-number">' + got + '</p><p>answers right</p>' +
      '<p class="hint">' + missed + ' missed — they\'ll come back soon.</p>' +
      '<div class="actions"><a class="btn" href="#/flashcards' + (unitId ? '/' + unitId : '') + '">Back to flashcards</a>' +
      '<a class="btn btn-secondary" href="#/">Home</a></div></section>';
    session = null;
    backLink(root, unitId);
    root.focus();
  }

  I.flashcards = { renderHome, dueCount, boxCounts };
})();
