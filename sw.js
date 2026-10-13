/* Service worker: makes the site work offline after the first visit.
   Strategy: network-first (so edits show up), falling back to the cache when offline.
   Bump CACHE if you ever need to force-clear old files. */
const CACHE = 'italiano-v2';
const ASSETS = [
  './', 'index.html', 'css/styles.css',
  'js/util.js', 'js/storage.js', 'js/audio.js', 'js/lessons.js', 'js/flashcards.js', 'js/quiz.js', 'js/games.js', 'js/game-words.js', 'js/game-sentence.js', 'js/game-duel.js', 'js/story.js', 'js/app.js',
  'data/conjugations.js', 'data/story-01.js', 'data/story-02.js', 'data/story-03.js', 'data/story-04.js', 'data/story-05.js', 'data/story-06.js', 'data/story-07.js', 'data/story-08.js', 'data/story-09.js', 'data/story-10.js',
  'data/unit-01.js', 'data/unit-02.js', 'data/unit-03.js', 'data/unit-04.js', 'data/unit-05.js',
  'data/unit-06.js', 'data/unit-07.js', 'data/unit-08.js', 'data/unit-09.js', 'data/unit-10.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // also keep Google Fonts and any other successful response for offline use
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('index.html')))
  );
});
