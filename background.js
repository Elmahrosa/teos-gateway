// TEOS Gateway - Ayman.Teos - W4 Sovereign Browser
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    try {
      let url = new URL(changeInfo.url);
      if (url.hostname.endsWith('.teos')) {
        let name = url.hostname.replace('.teos','').split('.').pop();
        let newUrl = `https://web4.elmahrosa.org/${name}${url.pathname}${url.search}`;
        if (url.hostname === 'ayman.teos' || name.toLowerCase() === 'ayman') {
          newUrl = `https://web4.elmahrosa.org/ayman${url.pathname}${url.search}`;
        }
        chrome.tabs.update(tabId, { url: newUrl });
      }
    } catch(e){}
  }
});

// Also intercept navigation
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId === 0) {
    try {
      let url = new URL(details.url);
      if (url.hostname.endsWith('.teos')) {
        let name = url.hostname.replace('.teos','').split('.').pop();
        let newUrl = `https://web4.elmahrosa.org/${name}`;
        if (name.toLowerCase() === 'ayman') newUrl = `https://web4.elmahrosa.org/ayman`;
        chrome.tabs.update(details.tabId, { url: newUrl });
      }
    } catch(e){}
  }
});

console.log("👑 Ayman.Teos Gateway Active - W4 Sovereign");
