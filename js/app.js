/* app.js — hash router, home dashboard, header controls, service worker. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { esc } = I.util;
  const root = document.getElementById('app');

  /* ---------- dashboard ---------- */
  function greeting() {
    const h = new Date().getHours();
    return h < 12 ? 'Buongiorno!' : h < 18 ? 'Buon pomeriggio!' : 'Buonasera!';
  }


  function renderHome() {
    const S = I.storage;
    const units = I.lessons.units();
    const done = units.filter((u) => S.isCompleted(u.id)).length;
    const quizzes = units.map((u) => S.getQuiz(u.id)).filter(Boolean);
    const avg = quizzes.length ? Math.round(quizzes.reduce((a, q) => a + q.bestPct, 0) / quizzes.length) + '%' : '—';
    const streak = S.streakInfo();
    const due = I.flashcards.dueCount();
    const mastered = I.flashcards.boxCounts()[4];
    const next = units.find((u) => !S.isCompleted(u.id)) || units[0];
    const overall = units.length ? Math.round(units.reduce((a, u) => a + I.lessons.progress(u).percent, 0) / units.length) : 0;

    root.innerHTML =
      (S.isPersistent() ? '' : '<p class="banner warn" role="alert">Your browser is blocking saved data (private mode?). You can still study, but progress will be lost when you close this tab.</p>') +
      '<section class="hero"><p class="eyebrow" lang="it">' + greeting() + '</p><h1>Un passo alla volta.</h1>' +
      '<p class="lede">A little Italian every day. Aim for B1 — one step at a time.</p>' +
      (next ? '<p><a class="btn" href="#/lesson/' + next.id + '">' + (done ? 'Continue' : 'Start') + ': Unit ' + next.number + '</a></p>' : '') + '</section>' +
      '<section aria-labelledby="stats-h"><h2 id="stats-h">Your progress</h2><ul class="stats">' +
      '<li class="stat"><span class="stat-n">' + (streak.count ? '🔥 ' : '') + streak.count + '</span><span class="stat-l">day streak' + (streak.doneToday ? ' ✓' : '') + '</span></li>' +
      '<li class="stat"><span class="stat-n">' + done + '/' + units.length + '</span><span class="stat-l">lessons done</span></li>' +
      '<li class="stat"><span class="stat-n">' + avg + '</span><span class="stat-l">avg. quiz score</span></li>' +
      '<li class="stat"><span class="stat-n">' + mastered + '</span><span class="stat-l">cards mastered</span></li></ul>' +
      '<div class="meter big" role="img" aria-label="Overall progress ' + overall + ' percent"><span style="width:' + overall + '%"></span></div>' +
      '<p class="hint">Overall: ' + overall + '% (lesson + quiz + cards in every unit)</p></section>' +
      '<section class="card center" aria-labelledby="due-h"><h2 id="due-h">Flashcards due today</h2><p class="big-number">' + due + '</p>' +
      (due ? '<a class="btn btn-secondary" href="#/flashcards">Review now</a>' : '<p>You\'re all caught up. 🎉</p>') + '</section>' +
      '<section aria-labelledby="set-h"><h2 id="set-h">Settings</h2><div class="card"><p>Clear all lessons, scores, flashcards and your streak.</p>' +
      '<button type="button" class="btn btn-danger" id="reset-btn">Reset progress…</button></div></section>';

    root.querySelector('#reset-btn').addEventListener('click', confirmReset);
  }

  /** Reset with a confirmation dialog (falls back to confirm() on old browsers). */
  function confirmReset() {
    const dlg = document.getElementById('reset-dialog');
    const doReset = () => {
      I.storage.reset();
      syncSlow();
      route();
    };
    if (dlg && typeof dlg.showModal === 'function') {
      dlg.returnValue = '';
      dlg.onclose = () => dlg.returnValue === 'yes' && doReset();
      dlg.showModal();
    } else if (window.confirm('Reset ALL progress? This cannot be undone.')) doReset();
  }

  /* ---------- router ---------- */
  function route() {
    const parts = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    const [view, arg] = parts;
    let title = 'Home';
    let page = 'home';
    I.audio.stop();

    switch (view) {
      case 'lessons':
        I.lessons.renderIndex(root);
        title = 'Lessons';
        page = 'lessons';
        break;
      case 'lesson': {
        I.lessons.renderLesson(root, arg);
        const u = I.lessons.unit(arg);
        title = u ? 'Unit ' + u.number + ': ' + u.title : 'Lesson';
        page = 'lessons';
        break;
      }
      case 'flashcards':
        I.flashcards.renderHome(root, arg);
        title = 'Flashcards';
        page = 'cards';
        break;
      case 'games':
        I.games.render(root, arg, parts[2]);
        title = 'Games';
        page = 'games';
        break;
      case 'quiz':
        I.quiz.start(root, arg);
        title = 'Quiz';
        page = 'lessons';
        break;
      default:
        renderHome();
    }

    document.title = title + ' · Dundici';
    document.querySelectorAll('.tabbar a').forEach((a) => {
      if (a.dataset.page === page) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    refreshBadge();
    window.scrollTo(0, 0);
    root.focus({ preventScroll: true });
  }

  function refreshBadge() {
    const b = document.getElementById('due-badge');
    const n = I.flashcards.dueCount();
    b.textContent = n;
    b.hidden = !n;
    b.setAttribute('aria-label', n + ' cards due');
  }

  /* ---------- slow-speech toggle ---------- */
  function syncSlow() {
    const btn = document.getElementById('slow-toggle');
    const on = !!I.storage.setting('slow');
    btn.setAttribute('aria-pressed', on);
    btn.classList.toggle('is-on', on);
  }
  document.getElementById('slow-toggle').addEventListener('click', () => {
    I.storage.setSetting('slow', !I.storage.setting('slow'));
    syncSlow();
  });

  /* ---------- boot ---------- */
  window.addEventListener('hashchange', route);
  syncSlow();
  I.audio.refresh();
  route();
  I.app = { refreshBadge };

  // Offline support: cache the app shell after the first visit (only works over http/https).
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
