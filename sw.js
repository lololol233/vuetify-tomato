if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const a=e=>n(e,o),l={module:{uri:o},exports:r,require:a};i[o]=Promise.all(s.map((e=>l[e]||a(e)))).then((e=>(c(...e),r)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.6d699619.js",revision:null},{url:"assets/index.9b7cd237.css",revision:null},{url:"assets/ListView.16d57f67.css",revision:null},{url:"assets/ListView.4759126a.js",revision:null},{url:"assets/materialdesignicons-webfont.48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont.861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont.bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont.e52d60f6.woff2",revision:null},{url:"assets/SettingsView.4c87ef34.js",revision:null},{url:"assets/SettingsView.8b736ac7.css",revision:null},{url:"assets/VTable.3a4f66f5.js",revision:null},{url:"assets/VTable.41a8559d.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"2437b8f3acc535e2e95db73b1c2a7881"},{url:"favicon-32x32.png",revision:"afe030f8817edf74fd963ce69793b85c"},{url:"favicon.ico",revision:"1b3c23b6905640f692b8d67529e486f3"},{url:"img/icons/android-chrome-192x192.png",revision:"069f65e1cab672d5cedc42783404cd19"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"069f65e1cab672d5cedc42783404cd19"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"d8c5f477e0af7d45be6f2123c1eddc09"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"c028ce46280cb0a681674e96f4472b86"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"9a87beef3c8b2b47ceebae52dc2394c7"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"166912b4ede07cd631912fbf624b1e54"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"3c1e47624e3e1038a75aae62fd40e844"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"dc74c0619bc3bd93a7485c944289537e"},{url:"img/icons/apple-touch-icon.png",revision:"166912b4ede07cd631912fbf624b1e54"},{url:"img/icons/msapplication-icon-144x144.png",revision:"aded9600b5a9274afa005f386e2712cf"},{url:"img/icons/mstile-150x150.png",revision:"72bdc25ac326ac6bdea38bd1efe9a117"},{url:"img/icons/safari-pinned-tab.svg",revision:"e9d86ab0d0e1fe28334dd2d4f9f073ad"},{url:"index.html",revision:"7dbc9600b4e500dbd8fb0bf93dace6cb"},{url:"tomato.png",revision:"dea9842b1b34def05c94e10c636cddbb"},{url:"./img/icons/android-chrome-192x192.png",revision:"069f65e1cab672d5cedc42783404cd19"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"069f65e1cab672d5cedc42783404cd19"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"d8c5f477e0af7d45be6f2123c1eddc09"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"3c1e47624e3e1038a75aae62fd40e844"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"dc74c0619bc3bd93a7485c944289537e"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"c028ce46280cb0a681674e96f4472b86"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"9a87beef3c8b2b47ceebae52dc2394c7"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"166912b4ede07cd631912fbf624b1e54"},{url:"./img/icons/apple-touch-icon.png",revision:"166912b4ede07cd631912fbf624b1e54"},{url:"./favicon-16x16.png",revision:"2437b8f3acc535e2e95db73b1c2a7881"},{url:"./favicon-32x32.png",revision:"afe030f8817edf74fd963ce69793b85c"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"aded9600b5a9274afa005f386e2712cf"},{url:"./img/icons/mstile-150x150.png",revision:"72bdc25ac326ac6bdea38bd1efe9a117"},{url:"manifest.webmanifest",revision:"abbee9bbfb676fb652cc59380e8a89ca"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
