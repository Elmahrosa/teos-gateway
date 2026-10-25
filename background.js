chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return;
  try {
    const url = new URL(details.url);
    if (url.hostname.endsWith(".teos")) {
      const name = url.hostname.replace(".teos","").split(".")[0];
      if(name) {
        chrome.tabs.update(details.tabId, { url: `https://web4.elmahrosa.org/${name}${url.pathname}${url.search}` });
      }
    }
  } catch(e){}
}, { url: [{ hostSuffix: ".teos" }] });
console.log("TEOS Gateway WEB4 Active");
