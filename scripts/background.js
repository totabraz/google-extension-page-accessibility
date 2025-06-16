import browser from "webextension-polyfill";

console.log("running-extension", "Hello from the background!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("running-extension", "Extension installed:", details);
});
