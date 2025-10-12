var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as requireElement, c as createElement, t as typoRuntime } from "./requiredQuerySelector.js";
const assets = { "img-arrow-left-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/arrow-left.gif"), "img-arrow-left-gif"), "img-arrow-right-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/arrow-right.gif"), "img-arrow-right-gif"), "img-arrow-small-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/arrow-small.gif"), "img-arrow-small-gif"), "img-award-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/award.gif"), "img-award-gif"), "img-challenge-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/challenge.gif"), "img-challenge-gif"), "img-chart-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/chart.gif"), "img-chart-gif"), "img-cloud-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/cloud.gif"), "img-cloud-gif"), "img-coin-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/coin.gif"), "img-coin-gif"), "img-connection-loading-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/connection-loading.gif"), "img-connection-loading-gif"), "img-connection-open-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/connection-open.gif"), "img-connection-open-gif"), "img-connection-paused-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/connection-paused.gif"), "img-connection-paused-gif"), "img-connection-secure-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/connection-secure.gif"), "img-connection-secure-gif"), "img-connection-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/connection.gif"), "img-connection-gif"), "img-crosshair-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/crosshair.gif"), "img-crosshair-gif"), "img-disabled-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/disabled.gif"), "img-disabled-gif"), "img-discord-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/discord.gif"), "img-discord-gif"), "img-dna-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/dna.gif"), "img-dna-gif"), "img-drop-pink-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/drop-pink.gif"), "img-drop-pink-gif"), "img-drop-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/drop.gif"), "img-drop-gif"), "img-enabled-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/enabled.gif"), "img-enabled-gif"), "img-floppy-drive-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/floppy-drive.gif"), "img-floppy-drive-gif"), "img-fullscreen-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/fullscreen.gif"), "img-fullscreen-gif"), "img-grid_cur-png": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/grid_cur.png"), "img-grid_cur-png"), "img-inspect-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/inspect.gif"), "img-inspect-gif"), "img-letter-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/letter.gif"), "img-letter-gif"), "img-light-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/light.gif"), "img-light-gif"), "img-line-dash-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-dash.gif"), "img-line-dash-gif"), "img-line-dot-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-dot.gif"), "img-line-dot-gif"), "img-line-grid-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-grid.gif"), "img-line-grid-gif"), "img-line-mandala-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-mandala.gif"), "img-line-mandala-gif"), "img-line-noise-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-noise.gif"), "img-line-noise-gif"), "img-line-parallel-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-parallel.gif"), "img-line-parallel-gif"), "img-line-pressure-ink-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-pressure-ink.gif"), "img-line-pressure-ink-gif"), "img-line-rainbow-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-rainbow.gif"), "img-line-rainbow-gif"), "img-line-random-color-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-random-color.gif"), "img-line-random-color-gif"), "img-line-sculpt-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-sculpt.gif"), "img-line-sculpt-gif"), "img-line-tilt-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/line-tilt.gif"), "img-line-tilt-gif"), "img-lock-restricted-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/lock-restricted.gif"), "img-lock-restricted-gif"), "img-lock-unrestricted-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/lock-unrestricted.gif"), "img-lock-unrestricted-gif"), "img-mask-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/mask.gif"), "img-mask-gif"), "img-nochallenge-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/noChallenge.gif"), "img-nochallenge-gif"), "img-palantir-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/palantir.gif"), "img-palantir-gif"), "img-palette-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/palette.gif"), "img-palette-gif"), "img-pipette_cur-png": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/pipette_cur.png"), "img-pipette_cur-png"), "img-settings-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/settings.gif"), "img-settings-gif"), "img-status-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/status.gif"), "img-status-gif"), "img-tasks-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/tasks.gif"), "img-tasks-gif"), "img-themes-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/themes.gif"), "img-themes-gif"), "img-thumbsdown-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/thumbsdown.gif"), "img-thumbsdown-gif"), "img-thumbsup-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/thumbsup.gif"), "img-thumbsup-gif"), "img-trash-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/trash.gif"), "img-trash-gif"), "img-typo-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/typo.gif"), "img-typo-gif"), "img-wand-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/wand.gif"), "img-wand-gif"), "img-wrench-gif": /* @__PURE__ */ __name(() => chrome.runtime.getURL("img/wrench.gif"), "img-wrench-gif") };
document.documentElement.dataset["typo_loading_screen_disabled"] = (window.location.pathname === "/terms" || window.location.pathname === "/credits") + "";
const loaded = new Promise((resolve) => {
  if (document.readyState === "interactive" || document.readyState === "complete" || Object.keys(window).includes("io")) resolve();
  document.addEventListener("DOMContentLoaded", () => resolve());
});
const scriptObserver = new MutationObserver((nodes) => {
  nodes.forEach((node) => {
    if (node instanceof HTMLScriptElement) {
      if (node.src.includes("game.js")) {
        node.addEventListener("beforescriptexecute", (e) => e.preventDefault(), { once: true });
        node.src = "";
        node.remove();
      }
    }
  });
});
scriptObserver.observe(document, {
  childList: true,
  subtree: true
});
const content = new Promise(async (resolve) => {
  let html = await (await fetch(window.location.href)).text();
  html = html.replaceAll("game.js", "game.jsblocked");
  const newDoc = document.createElement("html");
  newDoc.innerHTML = html;
  const body = requireElement("body", newDoc);
  body.dataset["typo_loader"] = "true";
  resolve(body);
});
loaded.then(async () => {
  const body = await content;
  document.body = body;
  scriptObserver.disconnect();
  signature();
});
const css = `
:root {
  ${Object.entries(assets).map(([key, value]) => `--file-${key}: url("${value()}");`).join("\n")}
}
`;
const style = createElement(`<style>${css}</style>`);
document.head.append(style);
const signature = /* @__PURE__ */ __name(() => {
  console.clear();
  console.log(
    `%c
        _             _   _       _       _   _                           
       | |           (_) | |     | |     | | | |     %cskribbl modded with%c
  ___  | | __  _ __   _  | |__   | |__   | | | |_   _   _   _ __     ___  
 / __| | |/ / | '__| | | | '_ \\  | '_ \\  | | | __| | | | | | '_ \\   / _ \\ 
 \\__ \\ |   <  | |    | | | |_) | | |_) | | | | |_  | |_| | | |_) | | (_) |
 |___/ |_|\\_\\ |_|    |_| |_.__/  |_.__/  |_|  \\__|  \\__, | | .__/   \\___/ 
                                                     __/ | | |            
                                                    |___/  |_|     %cby @tobeh %c

        ➜ Typo & all its backend is open source: https://github.com/toobeeh/skribbltypo
        ➜ Join the community: https://discord.com/invite/pAapmUmWAM
        ➜ Find more infos at: https://www.typo.rip/
        ➜ Support development: https://patreon.com/skribbltypo
        
        [ ${typoRuntime.getReleaseDetails().versionName} @ ${typoRuntime.getReleaseDetails().runtime} ]
                                                                    
                                                    `,
    "color: lightblue",
    "color:#2596be; font-family:'Arial'; font-weight:bold; font-style:italic; letter-spacing:2em",
    "color: lightblue",
    "color:#2596be; font-family:'Arial'; font-weight:bold; font-style:italic; letter-spacing:2em",
    "color:#f39656"
  );
}, "signature");
//# sourceMappingURL=loader.ts.js.map
