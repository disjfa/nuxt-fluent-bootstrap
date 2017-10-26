importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/fluent-bootstrap/app.7e1a644ce69178933807.js",
    "revision": "5cc139cd709ab9529ccfa1f7a720691a"
  },
  {
    "url": "/fluent-bootstrap/common.0e875edb4aa7efd9fbce.js",
    "revision": "9fa141ea85bde073996d653a54292d67"
  },
  {
    "url": "/fluent-bootstrap/common.9218d25edb424b2358e6b7ae2b397012.css",
    "revision": "a6f06affa8fb4c2296f62dfa77e42c5e"
  },
  {
    "url": "/fluent-bootstrap/layouts/default.1ed7185d288179851b2f.js",
    "revision": "31d108fcd00c999be98c492ff01bc7c9"
  },
  {
    "url": "/fluent-bootstrap/manifest.3f6c65a9b371dcb404b8.js",
    "revision": "2bad8b591a1508eac478c85c560c10c3"
  },
  {
    "url": "/fluent-bootstrap/pages/form.083120407e494903d5db.js",
    "revision": "f98809813bbf09896a65e78c0fe0d39b"
  },
  {
    "url": "/fluent-bootstrap/pages/index.a22130ccde683f79d7ca.js",
    "revision": "13aa4663fd6907a60914b65c040936be"
  },
  {
    "url": "/fluent-bootstrap/pages/typography.ea4d2f2373acedb29230.js",
    "revision": "be70498ea9621f303a4fc51644e4d1a0"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-fluent-bootstrap_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/fluent-bootstrap/**', workboxSW.strategies.cacheFirst({}), 'GET');
