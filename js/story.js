/* story.js — Story mode: short interactive dialogues about everyday life and family.
   Read each line (tap a dotted word for its meaning), then choose what to say.
   Content lives in data/story-XX.js (see data/_story-template.js). */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const G = I.games;
  const { esc, shuffle } = I.util;

  const stories = () => window.ITALIANO_STORIES || [];

  /* ---------- list ---------- */
  function renderList(root) {
    const cards = stories()
      .map((s) => {
        const st = I.storage.getStory(s.id);
        return (
          '<li><a class="game-card" href="#/games/story/' + s.id + '">' +
          '<span class="game-icon" aria-hidden="true">' + s.emoji + '</span>' +
          '<span class="game-body"><span class="game-title">' + esc(s.title) + ' <span class="tag">' + esc(s.theme) + '</span></span>' +
          '<span class="game-desc">' + esc(s.summary) + '</span>' +
          '<span class="game-best">' + (st ? '✓ Best: ' + st.best + '/' + st.total + ' good replies' : 'New') + ' · ' + esc(s.level) + '</span></span></a></li>'
        );
      })
      .join('');
    root.innerHTML =
      '<nav class="crumbs"><a href="#/games">← All games</a></nav>' +
      '<header class="page-head"><p class="eyebrow">📖 Storie</p><h1>Story mode</h1>' +
      '<p class="lede">Real-life conversations: family, food, travel and daily life. Choose what to say and see how natural it sounds.</p></header>' +
      '<ul class="game-list">' + cards + '</ul>';
  }

  /* ---------- helpers ---------- */
  /** Render Italian text with dotted, tappable words wherever the story glossary has a translation. */
  function glossHTML(text, words) {
    return text
      .split(/(\s+)/)
      .map((tok) => {
        if (/^\s*$/.test(tok)) return tok;
        const key = tok.toLowerCase().replace(/[.,!?;:«»"“”()…]/g, '');
        const alt = key.replace(/^\w+'/, '');
        const hit = words[key] ? key : words[alt] ? alt : null;
        return hit ? '<button type="button" class="gloss" data-w="' + esc(hit) + '">' + esc(tok) + '</button>' : esc(tok);
      })
      .join('');
  }

  /* ---------- play ---------- */
  function play(root, story) {
    let idx = 0, good = 0, total = 0;
    const totalChoices = story.scenes.filter((s) => s.choices && s.choices.length).length;
    let showEn = false;

    function scene() {
      const sc = story.scenes[idx];
      const lines = sc.lines
        .map((l, k) =>
          '<li class="line ' + (l.who === 'Tu' ? 'line-me' : '') + '"><div class="line-head"><span class="who">' + esc(l.who) + '</span>' + I.audio.button(l.it) + '</div>' +
          '<p class="line-it" lang="it">' + glossHTML(l.it, story.words || {}) + '</p>' +
          '<p class="line-en" ' + (showEn ? '' : 'hidden') + '>' + esc(l.en) + '</p></li>')
        .join('');

      root.innerHTML =
        '<nav class="crumbs"><a href="#/games/story">← Stories</a></nav>' +
        '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + story.scenes.length + '" aria-valuenow="' + idx + '" aria-label="Story progress"><span style="width:' + (idx / story.scenes.length) * 100 + '%"></span></div>' +
        '<p class="eyebrow">' + story.emoji + ' ' + esc(story.title) + ' · ' + (idx + 1) + ' of ' + story.scenes.length + '</p>' +
        '<div class="card story-card">' +
        (idx === 0 && story.intro ? '<p class="narration">' + esc(story.intro) + '</p>' : '') +
        (sc.note ? '<p class="narration">' + esc(sc.note) + '</p>' : '') +
        '<ul class="lines">' + lines + '</ul>' +
        '<div class="gloss-pop" id="pop" role="status" aria-live="polite"></div>' +
        '<div class="toggle-row"><label class="toggle"><input type="checkbox" id="en-toggle"' + (showEn ? ' checked' : '') + '> Show English</label>' +
        '<span class="hint">Tap the dotted words for their meaning.</span></div>' +
        '<div id="choices"></div><div class="feedback" id="fb" role="status" aria-live="polite"></div>' +
        '<div class="q-actions"><button type="button" class="btn" id="next" hidden></button></div></div>';

      const $ = (s) => root.querySelector(s);
      const next = $('#next');
      const last = idx === story.scenes.length - 1;
      next.textContent = last ? 'Finish story' : 'Continue';
      next.addEventListener('click', () => { if (last) summary(); else { idx++; scene(); } });

      $('#en-toggle').addEventListener('change', (e) => {
        showEn = e.target.checked;
        root.querySelectorAll('.line-en, .choice-en').forEach((el) => (el.hidden = !showEn));
      });
      root.querySelectorAll('.gloss').forEach((b) =>
        b.addEventListener('click', () => {
          const w = b.dataset.w;
          $('#pop').innerHTML = '<strong lang="it">' + esc(w) + '</strong> — ' + esc(story.words[w]) + ' ' + I.audio.button(w);
          I.audio.speak(w);
        })
      );

      if (sc.choices && sc.choices.length) {
        total++;
        $('#choices').innerHTML =
          '<p class="q-instr">What do you say?</p><div class="options" role="group" aria-label="Your reply">' +
          shuffle(sc.choices.map((c, k) => ({ c, k })))
            .map(({ c, k }) => '<button type="button" class="option reply" data-k="' + k + '"><span lang="it">' + esc(c.it) + '</span><span class="choice-en" ' + (showEn ? '' : 'hidden') + '>' + esc(c.en) + '</span></button>')
            .join('') + '</div>';
        root.querySelectorAll('.reply').forEach((b) =>
          b.addEventListener('click', () => {
            const c = sc.choices[Number(b.dataset.k)];
            root.querySelectorAll('.reply').forEach((x) => {
              x.disabled = true;
              if (sc.choices[Number(x.dataset.k)].ok) x.classList.add('is-right');
              else if (x === b) x.classList.add('is-wrong');
            });
            if (c.ok) good++;
            const fb = $('#fb');
            fb.className = 'feedback show ' + (c.ok ? 'ok' : 'bad');
            fb.innerHTML = '<p class="fb-title ' + (c.ok ? 'fb-ok' : 'fb-bad') + '">' + (c.ok ? '✓ Natural!' : 'Hmm, not ideal.') + '</p>' +
              '<p lang="it"><strong>' + esc(c.it) + '</strong></p><p class="hint">' + esc(c.en) + '</p><p class="fb-explain">' + esc(c.why) + '</p>';
            next.hidden = false;
            next.focus();
          })
        );
      } else {
        next.hidden = false;
      }
    }

    function summary() {
      I.storage.recordStory(story.id, good, totalChoices);
      if (I.app) I.app.refreshBadge();
      const phrases = (story.phrases || [])
        .map((p) => '<li class="example">' + I.audio.button(p.it) + '<div><p class="it" lang="it">' + esc(p.it) + '</p><p class="en">' + esc(p.en) + '</p></div></li>')
        .join('');
      const pct = totalChoices ? good / totalChoices : 1;
      root.innerHTML =
        '<header class="page-head center"><p class="eyebrow">Fine della storia</p><h1>' + esc(story.title) + '</h1></header>' +
        '<section class="card center"><p class="big-number">' + good + ' / ' + totalChoices + '</p><p>natural replies — ' + (pct === 1 ? 'Perfetto! 🎉' : pct >= 0.6 ? 'Bravissima!' : 'Try again to find the most natural answers.') + '</p>' +
        '<div class="actions"><button type="button" class="btn" id="again">Play again</button><a class="btn btn-secondary" href="#/games/story">More stories</a></div></section>' +
        (phrases ? '<section aria-labelledby="ph-h"><h2 id="ph-h">Phrases to remember</h2><ul class="examples card">' + phrases + '</ul></section>' : '');
      root.querySelector('#again').addEventListener('click', () => play(root, story));
      root.focus();
    }

    scene();
  }

  const def = {
    id: 'story',
    icon: '📖',
    title: 'Story mode',
    desc: 'Interactive dialogues: family, food, travel and daily life.',
    route(root, storyId) {
      const s = stories().find((x) => x.id === storyId);
      if (s) return play(root, s);
      renderList(root);
    },
  };
  G.register(def);
})();
