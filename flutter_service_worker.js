'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4aa78f0c7b0a33a604db17d5f6893baa",
"index.html": "c912a33c4914fe3f1acc14a70e631577",
"/": "c912a33c4914fe3f1acc14a70e631577",
"main.dart.js": "ed518c2e4af315d41747c320503a55fe",
"favicon.png": "cec06261144dd5f33864440510a04c82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b8d1f180185c438d473dc57b6b861dc1",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic1.jpeg": "f7e0c7d62056cc3137bc0cc17f6bc57c",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic3.png": "14b61ff3fbf71e2aa236380ee44a2d85",
"assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/AssetManifest.json": "af9147aac1bd926388e11949b3e8a982",
"assets/NOTICES": "363eb69e3c47985bd71956f01a559582",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/zeerac/8.png": "4b1c3b52aa6d58078229196cea5298ab",
"assets/assets/images/zeerac/9.png": "f6a3ed96571d4ade894e231958ab92e9",
"assets/assets/images/zeerac/1c.png": "d7c10a50952c6653ca751c61e21ac31e",
"assets/assets/images/zeerac/10.png": "06156697b73c7aa89c17a19dbaf0b0c4",
"assets/assets/images/zeerac/1.svg": "e0614824265d6a694ebb3bd2d4e21729",
"assets/assets/images/zeerac/4.png": "e9157a18da66f8c49075b3ca621fe7ae",
"assets/assets/images/zeerac/5.png": "6b4368ebd1523284c4c170f8e34bc9bc",
"assets/assets/images/zeerac/7.png": "bb420b16a73d81dfb1cae99499b21021",
"assets/assets/images/zeerac/6.png": "a32cc9ae097f5c5557ea69861add9f56",
"assets/assets/images/zeerac/2.png": "71baa99a22c8ac892a4a2231be898471",
"assets/assets/images/zeerac/3.png": "79afd592d86ed6445aa83553cfb1da5f",
"assets/assets/images/zeerac/1.png": "7e88bf3b1c3574f517ec4bd5df2e29a7",
"assets/assets/images/rentwheel/rentwheel.png": "5390ccb0401834d4f61981ff5bc82e9c",
"assets/assets/images/rentwheel/8.png": "5855c56c263a42bece04546a2e14517d",
"assets/assets/images/rentwheel/9.png": "26a5dca51f334bb24361226dc397e32f",
"assets/assets/images/rentwheel/rentwheelc.png": "3eaf31c14862fbe98d3e2a095d477834",
"assets/assets/images/rentwheel/rentwheel.svg": "5a0fd2667e91a536acb30d5487473e5f",
"assets/assets/images/rentwheel/4.png": "5250db057bb36f0f17c786dfe91cdd50",
"assets/assets/images/rentwheel/5.png": "5eca114aeca7e07fcecdaf2e32f5bcf4",
"assets/assets/images/rentwheel/7.png": "dffdecd7f90e6e3f4b2578d0d82e8864",
"assets/assets/images/rentwheel/6.png": "64c8d897e9a25b99063c09061732fec6",
"assets/assets/images/rentwheel/2.png": "e5dc3c301be4b9fd97966c6b01da0015",
"assets/assets/images/rentwheel/3.png": "df09b51670ed9bb48528dffe29d65610",
"assets/assets/images/rentwheel/1.png": "8a3fea0d61e237c9e8936e99302e29b0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
