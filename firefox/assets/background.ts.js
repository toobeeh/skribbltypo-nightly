console.log("background is running");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "get token") {
    (async () => {
      const data = await chrome.storage.local.get("token");
      const token = data["token"] ?? null;
      sendResponse(token);
    })();
    return true;
  } else if (request.type === "set token") {
    chrome.storage.local.set({ token: request.token });
  } else if (request.type === "get setting") {
    (async () => {
      const data = await chrome.storage.local.get(request.key);
      let item = data[request.key] ?? null;
      if (item === "_undefined_") item = void 0;
      sendResponse(item);
    })();
    return true;
  } else if (request.type === "set setting") {
    if (request.value === void 0) request.value = "_undefined_";
    chrome.storage.local.set({ [request.key]: request.value });
  }
});
//# sourceMappingURL=background.ts.js.map
