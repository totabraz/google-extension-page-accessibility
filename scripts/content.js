/* global chrome */
function checkImageWithoutPropAlt() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    const alt = img.getAttribute("alt");
    if (alt === null || alt.trim() === "") {
      img.style.border = "4px solid red";
    } else {
      img.style.border = "";
    }
  });
}

function checkObserver() {
  const observer = new MutationObserver(() => {
    clearTimeout(observer.debounceTimeout);
    observer.debounceTimeout = setTimeout(checkImageWithoutPropAlt, 300);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  checkImageWithoutPropAlt();
}

chrome.storage.sync.get("active", (data) => {
  if (data.active) {
    checkObserver();
  } else {
    document.querySelectorAll("img").forEach((img) => {
      img.style.border = "";
    });
  }
});
