var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { S as SvelteComponent, e as init, d as safe_not_equal, h as element, x as text, j as space, l as attr, m as set_style, p as insert, q as append, n as noop, u as detach } from "./index.js";
(/* @__PURE__ */ __name(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  __name(getFetchOpts, "getFetchOpts");
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
  __name(processPreload, "processPreload");
}, "polyfill"))();
function create_fragment(ctx) {
  let a0;
  let div0;
  let t0;
  let t1;
  let a1;
  let div1;
  let t2;
  let t3;
  let a2;
  let div2;
  let t4;
  let t5;
  let a3;
  let div3;
  let t6;
  let t7;
  let div4;
  return {
    c() {
      a0 = element("a");
      div0 = element("div");
      t0 = text("\n  Play!");
      t1 = space();
      a1 = element("a");
      div1 = element("div");
      t2 = text("\n  Typo Website");
      t3 = space();
      a2 = element("a");
      div2 = element("div");
      t4 = text("\n  Support Typo");
      t5 = space();
      a3 = element("a");
      div3 = element("div");
      t6 = text("\n  Discord Community");
      t7 = space();
      div4 = element("div");
      div4.textContent = "skribbltypo by tobeh";
      attr(div0, "class", "icon svelte-12ionf");
      set_style(div0, "background-image", "url(" + chrome.runtime.getURL("/img/wand.gif") + ")");
      attr(a0, "href", "https://skribbl.io");
      attr(a0, "target", "_blank");
      attr(a0, "class", "icon-item play svelte-12ionf");
      attr(div1, "class", "icon svelte-12ionf");
      set_style(div1, "background-image", "url(" + chrome.runtime.getURL("/img/typo.gif") + ")");
      attr(a1, "href", "https://www.typo.rip");
      attr(a1, "target", "_blank");
      attr(a1, "class", "icon-item extra svelte-12ionf");
      attr(div2, "class", "icon svelte-12ionf");
      set_style(div2, "background-image", "url(" + chrome.runtime.getURL("/img/coin.gif") + ")");
      attr(a2, "href", "https://patreon.com/skribbltypo");
      attr(a2, "target", "_blank");
      attr(a2, "class", "icon-item extra svelte-12ionf");
      attr(div3, "class", "icon svelte-12ionf");
      set_style(div3, "background-image", "url(" + chrome.runtime.getURL("/img/discord.gif") + ")");
      attr(a3, "href", "https://discord.com/invite/pAapmUmWAM");
      attr(a3, "target", "_blank");
      attr(a3, "class", "icon-item extra svelte-12ionf");
      attr(div4, "class", "signature svelte-12ionf");
    },
    m(target, anchor) {
      insert(target, a0, anchor);
      append(a0, div0);
      append(a0, t0);
      insert(target, t1, anchor);
      insert(target, a1, anchor);
      append(a1, div1);
      append(a1, t2);
      insert(target, t3, anchor);
      insert(target, a2, anchor);
      append(a2, div2);
      append(a2, t4);
      insert(target, t5, anchor);
      insert(target, a3, anchor);
      append(a3, div3);
      append(a3, t6);
      insert(target, t7, anchor);
      insert(target, div4, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(a0);
        detach(t1);
        detach(a1);
        detach(t3);
        detach(a2);
        detach(t5);
        detach(a3);
        detach(t7);
        detach(div4);
      }
    }
  };
}
__name(create_fragment, "create_fragment");
function instance($$self, $$props, $$invalidate) {
  let { mode } = $$props;
  $$self.$$set = ($$props2) => {
    if ("mode" in $$props2) $$invalidate(0, mode = $$props2.mode);
  };
  return [mode];
}
__name(instance, "instance");
const _Popup = class _Popup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { mode: 0 });
  }
};
__name(_Popup, "Popup");
let Popup = _Popup;
const popup = new Popup({
  target: document.body,
  props: {
    mode: "external"
  }
});
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length > 0 && tabs[0].url !== void 0) {
    const url = URL.parse(tabs[0].url);
    if ((url == null ? void 0 : url.hostname) === "skribbl.io") {
      popup.$set({ mode: "skribbl" });
    }
  }
});
//# sourceMappingURL=popup.html.js.map
