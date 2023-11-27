'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "031a49eedaa33b8fceaa6c9f7882ee81",
"index.html": "4e01783a28b9c252b6f26d22a5b3ada3",
"/": "4e01783a28b9c252b6f26d22a5b3ada3",
"main.dart.js": "26b3b2b5245fd191b235ccaddbd9652c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1c173ca877a175f68442c20f337aa4e7",
"assets/AssetManifest.json": "acc29e44914695f536a70c4f122c526a",
"assets/NOTICES": "76b09f57a96ee8a4fe6b6962334ce676",
"assets/FontManifest.json": "1bea77f908e728900842c1f2b421df54",
"assets/AssetManifest.bin.json": "aab99e1b48a84b8023cd31e8517011f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "80dc388a2c80b3a4557149b6ab709c61",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ae1bda3aa052140c0dff2f5707cfb69c",
"assets/fonts/MaterialIcons-Regular.otf": "d1195eeb1aadfc6a3ec74a1782537731",
"assets/assets/mainpics/8.jpg": "5ad0b54741274ea1de5f959b047fcc47",
"assets/assets/mainpics/muzik.jpeg": "0d5ff3ad741c99acdf66fdb7c5c319a4",
"assets/assets/mainpics/9.jpg": "66d9c3f7e693a95b9cd94213bd2af983",
"assets/assets/mainpics/11.jpg": "82ae8e47162afbefe300afc4cf22c486",
"assets/assets/mainpics/painting.jpg": "a09e280695a918041f3b44697e75b581",
"assets/assets/mainpics/10.jpg": "b432d7f7905b48e372424a12c526a103",
"assets/assets/mainpics/ht.png": "ffb40c73af98515c80947ca149035f73",
"assets/assets/mainpics/ile-a-vache_16-16.jpg": "e544a6f27c5767150d1db4b3fa2ebe57",
"assets/assets/mainpics/sa-vie-est-un-roman.jpg": "080ae0f6ed2bc5176073546f104a0cd0",
"assets/assets/mainpics/4.jpg": "f18945abc247f5f310c4322ea8d44097",
"assets/assets/mainpics/barbancourt.webp": "669458cb5a8b57311dfc79da0783f6d3",
"assets/assets/mainpics/5.jpg": "7c1a51db78b0f13fb7a6f59b897172ff",
"assets/assets/mainpics/7.jpg": "59df0599cf9bfe6c4db8c8abcc8940ef",
"assets/assets/mainpics/6.jpg": "bda3267fc0402019a7104dbd1b5d654e",
"assets/assets/mainpics/2.jpg": "c844f9158c809e28d5fb0b951eabfeec",
"assets/assets/mainpics/1.png": "2e42a6098e99f697da070f0d11e43ca8",
"assets/assets/mainpics/haitianmenu.webp": "be124869230ae91ddc78fe2ebdb886e9",
"assets/assets/images/image_2.png": "9c6e1dd3b90ba659fb539a6b827ff92b",
"assets/assets/images/ht.png": "ffb40c73af98515c80947ca149035f73",
"assets/assets/images/image_3.png": "78c7c6fb0e5f4adf73f53d4f4c3a5d2c",
"assets/assets/images/image_1.png": "cf9cf6e15979d3e0dee7d1a71acde2b7",
"assets/assets/images/image_4.png": "2cb8850df2881158574641fcc5427145",
"assets/assets/images/haiti.png": "d2c86f57cc9119c563c48b69a484beda",
"assets/assets/images/image_5.png": "8b7f2e5baffa8bf63dde31984e7b93ce",
"assets/assets/images/image_7.png": "e9a695e12358840f3464af3d56ef49de",
"assets/assets/images/image_6.png": "8a277981f813fa5df3c61127e888ee4e",
"assets/assets/articlepictures/Kidsforest/1.jpeg": "d07ed2a6e470609978e62a6b1246edee",
"assets/assets/articlepictures/Kidsforest/2.jpeg": "19a994d37141fb0ded998ed6d4ecebf8",
"assets/assets/articlepictures/Kidsforest/3.jpeg": "b9daf9f26adfb79c983545dd610d3a65",
"assets/assets/articlepictures/franco/10.jpeg": "3f27cc8b5021eab6e568f1a1c7c8e7cc",
"assets/assets/articlepictures/franco/1.jpeg": "933697f0e28d886a9af71de3ab00b3c4",
"assets/assets/articlepictures/franco/11.jpeg": "401aabeba2389497c802c02d16105341",
"assets/assets/articlepictures/franco/16.jpeg": "ec083dec48c9743a97fe02701ceb6985",
"assets/assets/articlepictures/franco/6.jpeg": "f9876e845e60c6686cc940b1b4b67e0c",
"assets/assets/articlepictures/franco/7.jpeg": "48ed35535c17c629977e048b5b636661",
"assets/assets/articlepictures/franco/17.jpeg": "cac53f0c7d7e69ccab2b08e5c34a0448",
"assets/assets/articlepictures/franco/8.jpeg": "0bf2108c85bf6a3c8ec1a8d5197f6477",
"assets/assets/articlepictures/franco/4.jpeg": "89b9c9b6557293a6e42c05c39370f9ec",
"assets/assets/articlepictures/franco/14.jpeg": "58ceba7ba4af73ab207786ef33159e9f",
"assets/assets/articlepictures/franco/15.jpeg": "7a3b94624817156db77e82e53d476a1f",
"assets/assets/articlepictures/franco/5.jpeg": "2dd41993fcba18522f898fb8905e949c",
"assets/assets/articlepictures/franco/9.jpeg": "71e69cef5323ec28a2216664324cb203",
"assets/assets/articlepictures/franco/2.jpeg": "0ca3e3102c14a71400ec2fb70e286094",
"assets/assets/articlepictures/franco/12.jpeg": "23ea39483826742126d5fc94986fab16",
"assets/assets/articlepictures/franco/13.jpeg": "6200fcbb4daf9022b0ad5a5e13ca27a0",
"assets/assets/articlepictures/franco/3.jpeg": "80d77e0c6492f8802dbfe78ec8d303f2",
"assets/assets/articlepictures/grulac2/1.jpeg": "b1c8a857eccd6503312977f001ef6391",
"assets/assets/articlepictures/grulac2/2.jpeg": "b9a998df87a6b057dd24ee511347e1b8",
"assets/assets/articlepictures/mikaben/maxresdefault.jpg": "4a80f51d2f7ccf717acfbfaebcf27766",
"assets/assets/articlepictures/mikaben/mika.jpeg": "ee22e4f0181df195e6ceb5edbdbf711c",
"assets/assets/articlepictures/mikaben/4.jpeg": "e6474269aa33cec99398bdb912569796",
"assets/assets/articlepictures/mikaben/5.jpeg": "9a6535b348e206c25f5956a09ab64c5d",
"assets/assets/articlepictures/mikaben/2.jpeg": "c8d28fd4c24a1f418a2b13e015903fec",
"assets/assets/articlepictures/mikaben/3.jpeg": "a67adf59ff4852b364191b8a9edc4645",
"assets/assets/articlepictures/octobre22/4.jpg": "d1905679f4da22ec515b00ed3294d023",
"assets/assets/articlepictures/octobre22/5.jpg": "4f8803cfec1ccb991f3faf8a2ce99869",
"assets/assets/articlepictures/octobre22/7.jpg": "d3707d9462caf00f0fec26c52b3eff35",
"assets/assets/articlepictures/octobre22/6.jpg": "caea283c4e7dc48bb9ee0b59b5aa1f5a",
"assets/assets/articlepictures/octobre22/2.jpg": "be10a17e759cdd0681ca0175bafabdae",
"assets/assets/articlepictures/octobre22/3.jpg": "29f6dbb605b1333d4244ad18fd7c077d",
"assets/assets/articlepictures/octobre22/1.jpg": "f05c59920ba423a25801f5b767ea363c",
"assets/assets/other/consula.jpeg": "8e8c6f9bd596087bdb351039e763862a",
"assets/assets/other/ccc.jpeg": "328418688687c6bfec0acb49ac91dfa9",
"assets/assets/japanflag.png": "8a5217940d342720e64c5b7038e71533",
"assets/assets/flaghaiti.png": "181fb77b4472fe699a68d3f922eb41e4",
"assets/assets/mobilepicturehomepage/m2.png": "e9a695e12358840f3464af3d56ef49de",
"assets/assets/mobilepicturehomepage/floagcoree.png": "4bc0cc32b528118624599edd802e51e4",
"assets/assets/mobilepicturehomepage/flaguk.png": "6f2615108e535385d395b8ca3c36963d",
"assets/assets/mobilepicturehomepage/japanflag.png": "8a5217940d342720e64c5b7038e71533",
"assets/assets/mobilepicturehomepage/flaghaiti.png": "181fb77b4472fe699a68d3f922eb41e4",
"assets/assets/mobilepicturehomepage/franceflag.png": "922addcbb687b18b6cffc6ab1a4e094f",
"assets/assets/mobilepicturehomepage/flagchine.png": "424cb0f07ee3fdd949962ab7c6a364d2",
"assets/assets/announcement/Annoncepublic.jpeg": "3e45ece96e4c74448cf717765210ebe0",
"assets/assets/announcement/annonce2.jpeg": "f8cf6a1c808670fdf0095c4dce60e7d4",
"assets/assets/slogocolor.png": "26b0a58429b1ec5e3ee922d63e4e3f91",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
