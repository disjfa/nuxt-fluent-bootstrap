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
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/app.4912cf688fb10a8ba2fa.js",
    "revision": "e1534b35f3d5e9bfd0bfaa14730859b4"
  },
  {
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/common.6bc6ca04799cd9cb5af8.js",
    "revision": "36b772c9c7051b28a4e27259b338b1b7"
  },
  {
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/common.c8668266d4c86592058b3a9f7219cd59.css",
    "revision": "07e3d9098838713937730bb0202ae552"
  },
  {
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/layouts/default.55344220c5814ec85504.js",
    "revision": "429dc1e726229409b7ffef57ab29040c"
  },
  {
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/manifest.5e5d5c70b0694aa8be56.js",
    "revision": "ef07865a91a31bd2f8aef9971bd7bbb1"
  },
  {
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/pages/form.ea57ac993c0bb2d20605.js",
    "revision": "0229df82fe680c32c8bedcc3190367cb"
  },
  {
    "url": "/nuxt-fluent-bootstrap/fluent-bootstrap/pages/index.3e09192243a35aa7c83f.js",
    "revision": "63ba76a94be89b96ec1179d6d199efa9"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-fluent-bootstrap_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/nuxt-fluent-bootstrap/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/nuxt-fluent-bootstrap/fluent-bootstrap/**', workboxSW.strategies.cacheFirst({}), 'GET');
