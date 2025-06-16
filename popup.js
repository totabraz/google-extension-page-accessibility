document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");

  chrome.storage.sync.get("active", (data) => {
    toggle.checked = data.active || false;
  });

  toggle.addEventListener("change", () => {
    chrome.storage.sync.set({ active: toggle.checked }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        });
      });
    });
  });
});
