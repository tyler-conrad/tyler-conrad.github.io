'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/refs/heads/main": "731000de68b3af1762cf39da25f985f3",
".git/refs/remotes/origin/main": "731000de68b3af1762cf39da25f985f3",
".git/COMMIT_EDITMSG": "acd9ca64cccee319fa5e6084d5f4a868",
".git/logs/refs/heads/main": "d4c60fcd3a75ad05972169b9aaa2edf0",
".git/logs/refs/remotes/origin/main": "c94b103d84c6a836de8420ebeec401de",
".git/logs/HEAD": "be02dcf3a448f13201dd056c8bea85e8",
".git/config": "0d8cb2cd6f28d23cfb37eb08b3e7c03c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/8d9be711205b54af6b8e1f3d44ef39b9a8a7bb": "86d69820952ae0b8aea163249ab0d04f",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/d2/2ff9cb27d2ab0e58bec35f44f532356027f51e": "c9979451e3349a1facaaa8a4edb6348b",
".git/objects/18/b2172bea9dc9dc71b2a419d809b1398c75ef79": "d1d86280fc720b0265874cc7ace1baa8",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/4e/d341be65d4b93d352428c1d9ee9f1e11081f9f": "9cd42197081ce38db66c8e81af4f7112",
".git/objects/b9/cb95975c61670b973f0f23c1bc94d654c915b7": "6a5a983902bbc581a77cce93f152e6c5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/6d/92a890676458f834e247cba4ee24f7e576e121": "a9be474108f90209e3f2132385eb2293",
".git/objects/28/bd56b334d2e4a37dc2a5f5ecd269aec2332b63": "d0c27467d060cadb873dd8a42bdd1b72",
".git/objects/fd/e2d9272390b0222f8a7b1f73aa240d5edd625c": "9b5bd3a5ebf8a8ccefb581a08f793e1d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/44/297aad45de87d350d5015030935d966ea9da6e": "e99a8227079f87cd7d2d2a8ee5cb1cbe",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/6b/cb709a3962d90b25f13079fb8d9b466a9dc534": "0310ab0dba9e6410a9447f7d32216287",
".git/objects/5e/fac0677dcec42c4ad2a4b3870936c722000835": "7496eb071f586626a3ab3e558a9af731",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/e0/3d8dd8bcf0d851fe1eb89f93a39de843e5c69c": "6216122eee4a4d46bddaa8509c304f9a",
".git/objects/be/da53cf2d89cea1eb105197c7b186895aedfc34": "17d6de9e8966a8ab6a1b2254e11c0330",
".git/objects/f8/18849606c4eb711c539447c4e298ad75e281bb": "da663675c6aa894a83c8b45a79de67e0",
".git/objects/ab/60fac2ac41d25966ff2a4ce5f35d9eb28e3e15": "fba7e4a1babc2d230c28f76eb74a7e23",
".git/objects/f5/3089ba84609143c41fff2d948b36a992f8cf3f": "efec898fa0eca117f3f72ddd2a612124",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/45/7392936fdc543b325e0173e9fa1acb3946efc4": "f2018faac3e87a2c9df3b48b2fa7df9d",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/23/711383aaca5a2395111905710fc2604e18153d": "a69c8a13d307b2361620ee7364a66fbc",
".git/objects/d8/68daf6173fbf3d010cd3eb207ae592e720e54c": "8a758c0ce0997af9c3d34410c48a0cfd",
".git/objects/c2/82762e8db4fdf781e79a71dfe8da50cf02b7d9": "e9e751c19f57ab71a6ad1baceb8c2fa1",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/93/7e01f7c59a88565b0abcabcca2a68e55de8cc1": "232477654ae972c17ae9cc2fec868c0a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/3f/56b91e0724eb57c4a6c2c888be68e4b1de7e6c": "3b6208ab5b15773a64193c369ed09e8c",
".git/objects/24/86f173eefc8aa28733fc3041654b803417f143": "38872b192868ba2d9ebe1b9481f96bbc",
".git/objects/9b/54f4aac525c34c5e3094672e5e6b754617655d": "c6ab87b693710a09e1f2641813fedc42",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/ff/6d68e15d024c2bf0d93d6f8427399e51f35d5d": "b30ab74b652617d05dd49db7139dc953",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "699fa838957ec1d5737b7c5452cac900",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"tyler-conrad-resume.pdf": "373fb373cb20071b07106a383fbff539",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"main.dart.js": "9120f3e78f1112c57592248f46f76baf",
"version.json": "5fc10240b73452c6a64964c44206397c",
"favicon.xcf": "179ffef4f701e9d779c75e1c0089d6ba",
"index.html": "2a4d22cb1b336a631cb585ff6410ed24",
"/": "2a4d22cb1b336a631cb585ff6410ed24",
"manifest.json": "2e80b11771bfece860bf33f24e3b47ca",
"assets/FontManifest.json": "66f78d275b18f6535e615f3276fe262a",
"assets/NOTICES": "c8d01569c4290662ae5e5925e30405f4",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/font_filled.otf": "f662e6e0de419fe0903e635002fa6788",
"assets/assets/font_outlined.otf": "678745b74c4231a77664ef4f19c1a1fb",
"assets/assets/github.png": "cefc20232703e5e3c24efd5f50d75e26",
"assets/assets/moog.png": "229083c9ffb877c62e42c4be806e1a0f",
"assets/AssetManifest.json": "9b2380a2aaa274138c794d6d1e1ed243",
"favicon.png": "079b5ff4247cee6194c181e38296bf03"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
