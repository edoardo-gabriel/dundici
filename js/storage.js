/* storage.js — all progress lives in ONE localStorage key.
   If localStorage is blocked (private mode, disabled cookies) we keep state in memory
   so the app still works; isPersistent() tells the UI to show a warning. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { today, addDays } = I.util;

  const KEY = 'italiano.progress.v1';
  const defaults = () => ({
    completed: {}, // { unitId: true }
    quizzes: {}, //   { unitId: { best, last, total, bestPct, date } }
    cards: {}, //     { "unit-01:ieri": { box: 1..5, due: "YYYY-MM-DD" } }
    streak: { count: 0, best: 0, last: null },
    settings: { slow: false, dir: 'it-en' },
    games: {}, //     { gameId: { best, last, total, plays } }
    recent: {}, //    { gameId: [item ids shown lately] } so rounds stay fresh
    stories: {}, //   { storyId: { best, total, plays } }
  });

  let state = defaults();
  let persistent = true;

  function load() {
    try {
      localStorage.setItem('__italiano_test', '1');
      localStorage.removeItem('__italiano_test');
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        const d = defaults();
        state = Object.assign(d, p, {
          streak: Object.assign(d.streak, p.streak),
          settings: Object.assign(d.settings, p.settings),
        });
      }
    } catch (e) {
      persistent = false; // blocked or corrupted: fall back to memory
    }
  }

  function save() {
    if (!persistent) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      persistent = false;
    }
  }

  load();

  const S = {
    isPersistent: () => persistent,

    /* lessons */
    isCompleted: (unitId) => !!state.completed[unitId],
    setCompleted(unitId, done) {
      if (done) {
        state.completed[unitId] = true;
        S.touchStreak();
      } else delete state.completed[unitId];
      save();
    },

    /* quizzes */
    getQuiz: (unitId) => state.quizzes[unitId] || null,
    recordQuiz(unitId, correct, total) {
      const prev = state.quizzes[unitId];
      const pct = total ? Math.round((correct / total) * 100) : 0;
      state.quizzes[unitId] = {
        last: correct,
        total,
        best: prev ? Math.max(prev.best, correct) : correct,
        bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
        date: today(),
      };
      S.touchStreak();
      save();
    },
    allQuizzes: () => state.quizzes,

    /* flashcards */
    getCard: (id) => state.cards[id] || null,
    setCard(id, box, due) {
      state.cards[id] = { box, due };
      S.touchStreak();
      save();
    },
    allCards: () => state.cards,

    /* streak: counts consecutive days with any study activity */
    touchStreak() {
      const s = state.streak,
        t = today();
      if (s.last === t) return;
      s.count = s.last === addDays(t, -1) ? s.count + 1 : 1;
      s.best = Math.max(s.best, s.count);
      s.last = t;
      save();
    },
    streakInfo() {
      const s = state.streak,
        t = today();
      const alive = s.last === t || s.last === addDays(t, -1);
      return { count: alive ? s.count : 0, best: s.best, doneToday: s.last === t };
    },

    /* games */
    getGame: (id) => state.games[id] || null,
    recordGame(id, score, total) {
      const g = state.games[id] || { best: 0, plays: 0 };
      state.games[id] = { best: Math.max(g.best, score), last: score, total, plays: g.plays + 1 };
      S.touchStreak();
      save();
    },
    recent: (id) => (state.recent[id] || []).slice(),
    setRecent(id, list) {
      state.recent[id] = list.slice(-400);
      save();
    },
    getStory: (id) => state.stories[id] || null,
    recordStory(id, score, total) {
      const g = state.stories[id] || { best: 0, plays: 0 };
      state.stories[id] = { best: Math.max(g.best, score), last: score, total, plays: g.plays + 1 };
      S.touchStreak();
      save();
    },

    /* settings */
    setting: (k) => state.settings[k],
    setSetting(k, v) {
      state.settings[k] = v;
      save();
    },

    reset() {
      state = defaults();
      if (persistent) {
        try {
          localStorage.removeItem(KEY);
        } catch (e) {
          persistent = false;
        }
      }
    },
  };

  I.storage = S;
})();
