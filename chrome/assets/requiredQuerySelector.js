var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const _ExtensionRuntime = class _ExtensionRuntime {
  getSetting(key) {
    return chrome.runtime.sendMessage({ type: "get setting", key });
  }
  async writeSetting(key, value) {
    await chrome.runtime.sendMessage({ type: "set setting", key, value });
  }
  getToken() {
    return chrome.runtime.sendMessage({ type: "get token" });
  }
  async setToken(token) {
    await chrome.runtime.sendMessage({ type: "set token", token });
  }
  getReleaseDetails() {
    const manifest = chrome.runtime.getManifest();
    return {
      version: manifest.version,
      versionName: manifest.version_name ?? manifest.version,
      runtime: "extension"
    };
  }
  getPatchUrl() {
    return chrome.runtime.getURL("gamePatch.js");
  }
  async createAndSwitchToProfile(profile) {
    await chrome.runtime.sendMessage({ type: "create profile", profile });
  }
  async currentProfile() {
    return await chrome.runtime.sendMessage({ type: "get profile" });
  }
  async deleteProfile(profile) {
    await chrome.runtime.sendMessage({ type: "delete profile", profile });
  }
  async getProfiles() {
    return await chrome.runtime.sendMessage({ type: "get profiles" });
  }
  async switchToProfile(profile) {
    await chrome.runtime.sendMessage({ type: "switch profile", profile });
  }
  async resetTypo() {
    await chrome.runtime.sendMessage({ type: "reset" });
  }
};
__name(_ExtensionRuntime, "ExtensionRuntime");
let ExtensionRuntime = _ExtensionRuntime;
const typoRuntime = new ExtensionRuntime();
const appendElement = /* @__PURE__ */ __name((sourceElement, position, parentElement) => {
  parentElement.insertAdjacentElement(position, sourceElement);
  return sourceElement;
}, "appendElement");
const createElement = /* @__PURE__ */ __name((htmlString) => {
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content.firstChild;
}, "createElement");
const requireElement = /* @__PURE__ */ __name((selector, root = void 0) => {
  const element2 = (root ?? document).querySelector(selector);
  if (!element2) {
    throw new Error(`Required element not found for selector: ${selector}`);
  }
  return element2;
}, "requireElement");
const requireElements = /* @__PURE__ */ __name((selector, root = void 0) => {
  const elements2 = Array.from((root ?? document).querySelectorAll(selector));
  if (elements2.length === 0) {
    throw new Error(`Required elements not found for selector: ${selector}`);
  }
  return elements2;
}, "requireElements");
const element = /* @__PURE__ */ __name((selector, root = void 0) => {
  return (root ?? document).querySelector(selector);
}, "element");
const elements = /* @__PURE__ */ __name((selector, root = void 0) => {
  return Array.from((root ?? document).querySelectorAll(selector));
}, "elements");
export {
  appendElement as a,
  requireElements as b,
  createElement as c,
  elements as d,
  element as e,
  requireElement as r,
  typoRuntime as t
};
//# sourceMappingURL=requiredQuerySelector.js.map
