/* games.js — the Games section: menu, shared setup screen, fresh-round picking, results.
   Each game lives in its own file and registers itself with I.games.register({...}):
     id, icon, title, desc, scopeKind ('units' | 'custom'), pool(scope) -> items, play(root, ctx)
   A round is always ROUND items. Items are picked at random, skipping ones seen recently,
   so a round is different every time until most of the pool has been used. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { esc, shuffle } = I.util;

  const ROUND = 10;
  const defs = [];
  let cleanups = [];

  /** Run (and clear) things a game needs to undo when we leave it: timers, key handlers. */
  function runCleanups() {
    const c = cleanups;
    cleanups = [];
    c.forEach((fn) => {
      try { fn(); } catch (e) { /* ignore */ }
    });
  }
  function onLeave(fn) {
    cleanups.push(fn);
  }
  window.addEventListener('hashchange', runCleanups);

  /** Install one document-level keydown handler for the current game. */
  function keys(handler) {
    document.addEventListener('keydown', handler);
    onLeave(() => document.removeEventListener('keydown', handler));
  }

  /**
   * Pick up to n items for a round, avoiding recently seen ones.
   * items: [{ id, ... }]. The "recent" list keeps all but one round's worth of the pool,
   * so there are always enough fresh items left.
   */
  function pick(gameId, items, n) {
    n = Math.min(n || ROUND, items.length);
    const inPool = new Set(items.map((x) => x.id));
    const all = I.storage.recent(gameId);
    const others = all.filter((id) => !inPool.has(id)); // history from other scopes: keep as is
    let mine = all.filter((id) => inPool.has(id));
    let seen = new Set(mine);
    let fresh = items.filter((x) => !seen.has(x.id));
    if (fresh.length < n) {
      mine = [];
      fresh = items;
    }
    const chosen = shuffle(fresh).slice(0, n);
    const keep = Math.max(0, items.length - n);
    mine = mine.concat(chosen.map((x) => x.id));
    mine = keep ? mine.slice(-keep) : [];
    I.storage.setRecent(gameId, others.concat(mine));
    return chosen;
  }

  function register(def) {
    defs.push(def);
  }
  const get = (id) => defs.find((d) => d.id === id);

  /* ---------- menu ---------- */
  function renderMenu(root) {
    const cards = defs
      .map((d) => {
        const g = d.id === 'story' ? null : I.storage.getGame(d.id);
        const best = g ? 'Best: ' + g.best + '/' + g.total : d.id === 'story' ? storySummary() : 'Not played yet';
        return (
          '<li><a class="game-card" href="#/games/' + d.id + '">' +
          '<span class="game-icon" aria-hidden="true">' + d.icon + '</span>' +
          '<span class="game-body"><span class="game-title">' + esc(d.title) + '</span>' +
          '<span class="game-desc">' + esc(d.desc) + '</span>' +
          '<span class="game-best">' + esc(best) + '</span></span></a></li>'
        );
      })
      .join('');
    root.innerHTML =
      '<header class="page-head"><p class="eyebrow">Giochiamo!</p><h1>Games</h1>' +
      '<p class="lede">Rounds of ' + ROUND + ' — every round is different. Use them to practise what you\'ve learned in the lessons.</p></header>' +
      '<ul class="game-list">' + cards + '</ul>';
  }

  function storySummary() {
    const list = window.ITALIANO_STORIES || [];
    const done = list.filter((s) => I.storage.getStory(s.id)).length;
    return done + ' of ' + list.length + ' stories played';
  }

  /* ---------- setup screen ---------- */
  function renderSetup(root, def) {
    let scope = '';
    if (def.scopeKind === 'custom') {
      scope = def.scopeHTML();
    } else {
      const opts = ['<option value="all">All units (' + def.pool('all').length + ')</option>']
        .concat(
          I.lessons.units().map((u) => {
            const n = def.pool(u.id).length;
            return '<option value="' + u.id + '"' + (n < 3 ? ' disabled' : '') + '>Unit ' + u.number + ': ' + esc(u.title) + ' (' + n + ')</option>';
          })
        )
        .join('');
      scope =
        '<label class="field-label" for="scope">Practise words from</label>' +
        '<select id="scope" class="select">' + opts + '</select>';
    }
    const g = I.storage.getGame(def.id);
    root.innerHTML =
      '<nav class="crumbs"><a href="#/games">← All games</a></nav>' +
      '<header class="page-head"><p class="eyebrow">' + def.icon + ' Gioco</p><h1>' + esc(def.title) + '</h1><p class="lede">' + esc(def.desc) + '</p></header>' +
      '<section class="card">' + (def.howto ? '<p class="hint">' + esc(def.howto) + '</p>' : '') + scope +
      '<p class="hint">' + (g ? 'Your best: ' + g.best + '/' + g.total + ' · played ' + g.plays + '×' : 'First time? Have fun!') + '</p>' +
      '<button type="button" class="btn" id="go-btn">Start a round</button></section>';
    root.querySelector('#go-btn').addEventListener('click', () => {
      const ctx = def.scopeKind === 'custom' ? def.readScope(root) : { scope: root.querySelector('#scope').value };
      def.play(root, ctx);
    });
  }

  /* ---------- shared pieces for games ---------- */
  function topbar(def, i, n, score) {
    return (
      '<nav class="crumbs"><a href="#/games">← Quit</a></nav>' +
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + i + '" aria-label="Round progress"><span style="width:' + (i / n) * 100 + '%"></span></div>' +
      '<p class="eyebrow">' + def.icon + ' ' + esc(def.title) + ' · ' + (i + 1) + ' of ' + n + ' · Score ' + score + '</p>'
    );
  }

  /** End-of-round screen. Records the score, offers another round. */
  function finish(root, def, score, total, extra) {
    I.storage.recordGame(def.id, score, total);
    runCleanups();
    const pct = total ? score / total : 0;
    const msg = pct === 1 ? 'Perfetto! 🎉' : pct >= 0.8 ? 'Bravissima!' : pct >= 0.5 ? 'Bene! Keep practising.' : 'Good try — play again to improve!';
    const g = I.storage.getGame(def.id);
    root.innerHTML =
      '<header class="page-head center"><p class="eyebrow">Fine del round</p><h1>' + esc(def.title) + '</h1></header>' +
      '<section class="card center"><p class="big-number">' + score + ' / ' + total + '</p><p>' + msg + '</p>' +
      (extra || '') + '<p class="hint">Best: ' + g.best + '/' + g.total + '</p>' +
      '<div class="actions"><button type="button" class="btn" id="again-btn">Play again</button>' +
      '<a class="btn btn-secondary" href="#/games">All games</a></div></section>';
    root.querySelector('#again-btn').addEventListener('click', () => renderSetup(root, def));
    root.focus();
    if (I.app) I.app.refreshBadge();
  }

  /** Units-scope helper: vocab entries across one unit or all of them. */
  function unitsFor(scope) {
    return scope === 'all' ? I.lessons.units() : [I.lessons.unit(scope)].filter(Boolean);
  }

  /* ---------- router entry ---------- */
  function render(root, id, extra) {
    runCleanups();
    if (!id) return renderMenu(root);
    const def = get(id);
    if (!def) return renderMenu(root);
    if (def.route) return def.route(root, extra); // games with their own sub-pages (stories)
    renderSetup(root, def);
  }

  I.games = { ROUND, register, render, pick, finish, topbar, keys, onLeave, runCleanups, unitsFor, get };
})();
