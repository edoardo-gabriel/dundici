/* audio.js — pronunciation via the browser's built-in Web Speech API (no audio files).
   Buttons carry class "speak-btn"; CSS hides them unless <html> has class "has-audio",
   which we set only once an Italian voice has been found. */
(function () {
  const I = (window.Italiano = window.Italiano || {});
  const { esc } = I.util;

  const supported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  const SLOW_RATE = 0.7;
  const NORMAL_RATE = 0.95;

  let voice = null;
  let settled = false; // true once we've given voices time to load
  let activeBtn = null;
  let timer = null;

  /** Score Italian voices: exact it-IT, "natural/neural" quality hints, then any it-*. */
  function pickVoice() {
    if (!supported) return null;
    const cands = speechSynthesis
      .getVoices()
      .filter((v) => (v.lang || '').toLowerCase().replace('_', '-').startsWith('it'));
    let best = null,
      bestScore = -1;
    for (const v of cands) {
      let s = 1;
      if ((v.lang || '').toLowerCase().replace('_', '-') === 'it-it') s += 3;
      if (/natural|neural|premium|enhanced|google/i.test(v.name)) s += 2;
      if (v.localService) s += 1;
      if (s > bestScore) (best = v), (bestScore = s);
    }
    return best;
  }

  function refresh() {
    voice = pickVoice();
    document.documentElement.classList.toggle('has-audio', !!voice);
    const note = document.getElementById('audio-note');
    if (note) note.hidden = !(settled && !voice);
  }

  if (supported) {
    refresh();
    // Voices load asynchronously in most browsers.
    speechSynthesis.addEventListener('voiceschanged', refresh);
    setTimeout(() => {
      settled = true;
      refresh();
    }, 2000);
  } else {
    settled = true;
    document.addEventListener('DOMContentLoaded', refresh);
  }

  /** Strip things that sound odd when read aloud, e.g. "andato/a" -> "andato". */
  function clean(text) {
    return String(text).replace(/\s\/\s/g, ', ').replace(/\/\w+/g, '').replace(/\.\.\.|…/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function stop() {
    clearTimeout(timer);
    if (supported) speechSynthesis.cancel();
    if (activeBtn) activeBtn.classList.remove('is-speaking');
    activeBtn = null;
  }

  /** Speak Italian text. Always cancels whatever is playing first. */
  function speak(text, opts) {
    opts = opts || {};
    if (!supported || !voice || !text) return;
    stop();
    const u = new SpeechSynthesisUtterance(clean(text));
    u.lang = 'it-IT';
    u.voice = voice;
    u.rate = opts.slow || I.storage.setting('slow') ? SLOW_RATE : NORMAL_RATE;
    const btn = opts.btn || null;
    if (btn) {
      activeBtn = btn;
      btn.classList.add('is-speaking');
      const done = () => {
        btn.classList.remove('is-speaking');
        if (activeBtn === btn) activeBtn = null;
      };
      u.onend = done;
      u.onerror = done;
    }
    // A tiny delay after cancel() avoids a Chrome bug where the new utterance is dropped.
    timer = setTimeout(() => speechSynthesis.speak(u), 40);
  }

  const ICON =
    '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';

  /** HTML for a speaker button. `label` is what the screen reader announces. */
  function button(text, label, slow) {
    const l = label || text;
    return (
      '<button type="button" class="speak-btn icon-btn' +
      (slow ? ' speak-slow' : '') +
      '" data-speak="' + esc(text) + '"' +
      (slow ? ' data-slow="1"' : '') +
      ' aria-label="' + (slow ? 'Listen slowly: ' : 'Listen: ') + esc(clean(l)) + '">' +
      (slow ? '<span aria-hidden="true">🐢</span>' : ICON) +
      '</button>'
    );
  }

  // One delegated handler for every speaker button on every page.
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-speak]');
    if (!b) return;
    e.preventDefault();
    speak(b.getAttribute('data-speak'), { btn: b, slow: b.hasAttribute('data-slow') });
  });

  window.addEventListener('hashchange', stop);

  I.audio = {
    speak,
    stop,
    button,
    clean,
    /** True when we can actually speak Italian right now. */
    available: () => !!voice,
    refresh,
  };
})();
