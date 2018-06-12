importScripts('/fluent-bootstrap/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-fluent-bootstrap",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/fluent-bootstrap/app.29a0ed14e6381206874aa27016552760.css",
    "revision": "29a0ed14e6381206874aa27016552760"
  },
  {
    "url": "/fluent-bootstrap/app.b49793b0b5a770ad47ba.js",
    "revision": "fe5fa36ce2f4eff35553fe5c65147ee9"
  },
  {
    "url": "/fluent-bootstrap/layouts/default.7d06cf5ff563e36e10f9.js",
    "revision": "c3cfdf9d8495cd3858cd10953dd808d2"
  },
  {
    "url": "/fluent-bootstrap/manifest.e1fb70ba458bd1ac79ea.js",
    "revision": "7e90bc9a6386f2261f9dc6413d622cea"
  },
  {
    "url": "/fluent-bootstrap/pages/form.fc3c5f4d4452376c3d14.js",
    "revision": "1452d984f08b28a3c140a688ec1b71ec"
  },
  {
    "url": "/fluent-bootstrap/pages/index.456e3b8f24331a82391b.js",
    "revision": "92cb528fa54b846b24e3c6b1a103759c"
  },
  {
    "url": "/fluent-bootstrap/pages/typography.0d6d7bf087fdc1e7b477.js",
    "revision": "164f1a97d4a55da50a0beca7cea77fa7"
  },
  {
    "url": "/fluent-bootstrap/vendor.fc45bba60de3f7f3934b.js",
    "revision": "101eef66c7f362912057f38c9dd94b52"
  }
])


workboxSW.router.registerRoute(new RegExp('/fluent-bootstrap/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

