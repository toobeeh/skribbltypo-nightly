var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const _TypoProfileStore = class _TypoProfileStore {
  constructor(db2, _profileListStore, _currentProfileStore, _settingsStore, _tokenStore) {
    __publicField(this, "_db");
    this._profileListStore = _profileListStore;
    this._currentProfileStore = _currentProfileStore;
    this._settingsStore = _settingsStore;
    this._tokenStore = _tokenStore;
    this._db = this.init(db2);
  }
  async init(db2) {
    const profile = await (await db2).get(this._currentProfileStore, "current_profile");
    if (profile === void 0) {
      await (await db2).put(this._currentProfileStore, "Default", "current_profile");
    }
    const profiles = await (await db2).getAllKeys(this._profileListStore);
    if (profiles.length === 0) {
      await (await db2).put(this._profileListStore, {}, "Default");
    }
    return db2;
  }
  async getProfiles() {
    return (await (await this._db).getAllKeys(this._profileListStore)).map((key) => key.toString());
  }
  async getCurrentProfile() {
    return await (await this._db).get(this._currentProfileStore, "current_profile");
  }
  async createAndActivateProfile(profile) {
    const currentProfile = await this.getCurrentProfile();
    const currentProfileData = await this.exportCurrentProfile();
    await this.setSavedProfile(currentProfile, currentProfileData);
    await (await this._db).put(this._currentProfileStore, profile, "current_profile");
    await this.setSavedProfile(profile, { token: null, settings: [] });
    await this.loadProfile({ token: null, settings: [] });
  }
  async switchToProfile(profile) {
    const currentProfile = await this.getCurrentProfile();
    const currentProfileData = await this.exportCurrentProfile();
    await this.setSavedProfile(currentProfile, currentProfileData);
    await this.loadProfile(await this.getSavedProfile(profile));
    await (await this._db).put(this._currentProfileStore, profile, "current_profile");
  }
  async deleteProfile(profile) {
    const currentProfile = await this.getCurrentProfile();
    if (currentProfile === profile) {
      throw new Error("Cannot delete current profile");
    }
    await (await this._db).delete(this._profileListStore, profile);
  }
  async getSavedProfile(profile) {
    const result = await (await this._db).get(this._profileListStore, profile);
    return result ?? { token: null, settings: {} };
  }
  async setSavedProfile(profile, savedProfile) {
    await (await this._db).put(this._profileListStore, savedProfile, profile);
  }
  async exportCurrentProfile() {
    const settingKeys = await (await this._db).getAllKeys(this._settingsStore);
    const settings = /* @__PURE__ */ new Map();
    for (const key of settingKeys.map((k) => k.toString())) {
      const value = await (await this._db).get(this._settingsStore, key);
      settings.set(key, value);
    }
    return {
      token: await (await this._db).get(this._tokenStore, "token"),
      settings: Array.from(settings.entries())
    };
  }
  async loadProfile(savedProfile) {
    await (await this._db).clear(this._settingsStore);
    await (await this._db).put(this._tokenStore, savedProfile.token, "token");
    for (const [key, value] of savedProfile.settings) {
      await (await this._db).put(this._settingsStore, value, key);
    }
  }
};
__name(_TypoProfileStore, "TypoProfileStore");
let TypoProfileStore = _TypoProfileStore;
const instanceOfAny = /* @__PURE__ */ __name((object, constructors) => constructors.some((c) => object instanceof c), "instanceOfAny");
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
__name(getIdbProxyableTypes, "getIdbProxyableTypes");
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
__name(getCursorAdvanceMethods, "getCursorAdvanceMethods");
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = /* @__PURE__ */ __name(() => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    }, "unlisten");
    const success = /* @__PURE__ */ __name(() => {
      resolve(wrap(request.result));
      unlisten();
    }, "success");
    const error = /* @__PURE__ */ __name(() => {
      reject(request.error);
      unlisten();
    }, "error");
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
__name(promisifyRequest, "promisifyRequest");
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = /* @__PURE__ */ __name(() => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    }, "unlisten");
    const complete = /* @__PURE__ */ __name(() => {
      resolve();
      unlisten();
    }, "complete");
    const error = /* @__PURE__ */ __name(() => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    }, "error");
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
__name(cacheDonePromiseForTransaction, "cacheDonePromiseForTransaction");
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
__name(replaceTraps, "replaceTraps");
function wrapFunction(func) {
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(this.request);
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
__name(wrapFunction, "wrapFunction");
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
__name(transformCachableValue, "transformCachableValue");
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
__name(wrap, "wrap");
const unwrap = /* @__PURE__ */ __name((value) => reverseTransformCache.get(value), "unwrap");
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db2) => {
    if (terminated)
      db2.addEventListener("close", () => terminated());
    if (blocking) {
      db2.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
__name(openDB, "openDB");
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = /* @__PURE__ */ __name(async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  }, "method");
  cachedMethods.set(prop, method);
  return method;
}
__name(getMethod, "getMethod");
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: /* @__PURE__ */ __name((target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver), "get"),
  has: /* @__PURE__ */ __name((target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop), "has")
}));
const advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
const methodMap = {};
const advanceResults = /* @__PURE__ */ new WeakMap();
const ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
const cursorIteratorTraps = {
  get(target, prop) {
    if (!advanceMethodProps.includes(prop))
      return target[prop];
    let cachedFunc = methodMap[prop];
    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function(...args) {
        advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
      };
    }
    return cachedFunc;
  }
};
async function* iterate(...args) {
  let cursor = this;
  if (!(cursor instanceof IDBCursor)) {
    cursor = await cursor.openCursor(...args);
  }
  if (!cursor)
    return;
  cursor = cursor;
  const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
  ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
  reverseTransformCache.set(proxiedCursor, unwrap(cursor));
  while (cursor) {
    yield proxiedCursor;
    cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
    advanceResults.delete(proxiedCursor);
  }
}
__name(iterate, "iterate");
function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
__name(isIteratorProp, "isIteratorProp");
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get(target, prop, receiver) {
    if (isIteratorProp(target, prop))
      return iterate;
    return oldTraps.get(target, prop, receiver);
  },
  has(target, prop) {
    return isIteratorProp(target, prop) || oldTraps.has(target, prop);
  }
}));
const db = openDB("skribbl_typo", 1, {
  upgrade: /* @__PURE__ */ __name((database) => {
    database.createObjectStore("settings");
    database.createObjectStore("token");
    database.createObjectStore("current_profile");
    database.createObjectStore("profiles");
  }, "upgrade")
});
const profileStore = new TypoProfileStore(db, "profiles", "current_profile", "settings", "token");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "get token") {
    (async () => {
      const data = await (await db).get("token", "token");
      const token = data ?? null;
      sendResponse(token);
    })();
    return true;
  } else if (request.type === "set token") {
    (async () => {
      await (await db).put("token", request.token ?? null, "token");
    })();
  } else if (request.type === "get setting") {
    (async () => {
      const data = await (await db).get("settings", request.key);
      sendResponse(data);
    })();
    return true;
  } else if (request.type === "set setting") {
    (async () => {
      await (await db).put("settings", request.value, request.key);
    })();
  }
  if (request.type === "get profiles") {
    (async () => {
      const profiles = await profileStore.getProfiles();
      sendResponse(profiles);
    })();
    return true;
  }
  if (request.type === "delete profile") {
    (async () => {
      await profileStore.deleteProfile(request.profile);
      sendResponse(void 0);
    })();
    return true;
  }
  if (request.type === "get profile") {
    (async () => {
      const key = await profileStore.getCurrentProfile();
      sendResponse(key);
    })();
    return true;
  }
  if (request.type === "switch profile") {
    (async () => {
      await profileStore.switchToProfile(request.profile);
      sendResponse(void 0);
    })();
    return true;
  }
  if (request.type === "create profile") {
    (async () => {
      await profileStore.createAndActivateProfile(request.profile);
      sendResponse(void 0);
    })();
    return true;
  }
  if (request.type === "reset") {
    (async () => {
      await (await db).clear("settings");
      await (await db).clear("token");
      await (await db).clear("current_profile");
      await (await db).clear("profiles");
      sendResponse(void 0);
    })();
    return true;
  }
});
//# sourceMappingURL=background.ts.js.map
