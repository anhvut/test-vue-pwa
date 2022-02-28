if (!self.define) {
  let e,
    s = {};
  const r = (r, i) => (
    (r = new URL(r + ".js", i).href),
    s[r] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = s), document.head.appendChild(e);
        } else (e = r), importScripts(r), s();
      }).then(() => {
        let e = s[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[o]) return;
    let t = {};
    const l = (e) => r(e, o),
      c = { module: { uri: o }, exports: t, require: l };
    s[o] = Promise.all(i.map((e) => c[e] || l(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-d402acc9"], function (e) {
  "use strict";
  e.setCacheNameDetails({ prefix: "test-vue-pwa" }),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.precacheAndRoute(
      [
        { url: "./css/app.7cfe7fd8.css", revision: null },
        { url: "./index.html", revision: "8df688ea07f38b792832edbb68f2fd50" },
        { url: "./js/app.94f082a2.js", revision: null },
        { url: "./js/chunk-vendors.825eb97a.js", revision: null },
        { url: "./manifest.json", revision: "22580c8f7f993fd404575b11211eda77" },
        { url: "./robots.txt", revision: "b6216d61c03e6ce0c9aea6ca7808f7ca" },
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map
