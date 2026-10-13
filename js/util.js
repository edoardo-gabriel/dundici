/* util.js — small shared helpers (escaping, dates, shuffling, answer checking). */
(function () {
  const I = (window.Italiano = window.Italiano || {});

  /** Escape text for safe use in HTML (also inside attributes). */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /** Wrap Italian text in a lang="it" span so screen readers pronounce it correctly. */
  function it(s) {
    return '<span lang="it">' + esc(s) + '</span>';
  }

  /** Fisher–Yates shuffle (returns a new array). */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---- Dates: stored as local "YYYY-MM-DD" strings so they compare lexicographically ---- */
  function fmt(d) {
    const p = (n) => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function today() {
    return fmt(new Date());
  }
  function addDays(dateStr, n) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return fmt(new Date(y, m - 1, d + n)); // Date handles month/DST rollover
  }

  /* ---- Answer checking (accent- and punctuation-tolerant) ---- */
  const SUBJECTS = new Set(['io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro']);

  /** Lowercase, drop punctuation, collapse spaces, drop optional subject pronouns. */
  function norm(s) {
    return String(s)
      .toLowerCase()
      .replace(/[’‘`]/g, "'")
      .replace(/[.,!?;:"“”«»()¿¡]/g, ' ')
      .split(/\s+/)
      .filter((w) => w && !SUBJECTS.has(w))
      .join(' ')
      .trim();
  }
  function stripAccents(s) {
    return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  /**
   * Compare a typed answer with a list of accepted answers.
   * Returns { ok, accentOnly, match } — accentOnly is true when it was right except for accents.
   */
  function check(input, accepted) {
    const n = norm(input);
    if (!n) return { ok: false, accentOnly: false, match: null };
    const list = Array.isArray(accepted) ? accepted : [accepted];
    let loose = null;
    for (const a of list) {
      const na = norm(a);
      if (n === na) return { ok: true, accentOnly: false, match: a };
      if (!loose && stripAccents(n) === stripAccents(na)) loose = a;
    }
    return { ok: !!loose, accentOnly: !!loose, match: loose };
  }

  I.util = { esc, it, shuffle, today, addDays, check };
})();
