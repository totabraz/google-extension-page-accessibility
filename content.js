function checkImagesWithoutAlt() {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    const alt = img.getAttribute("alt");
    if (alt === null || alt.trim() === "") {
      img.style.border = "4px solid red !important";
    } else {
      img.style.border = "";
    }
  });
}

function startObserver() {
  const observer = new MutationObserver(() => {
    clearTimeout(observer.debounceTimeout);
    observer.debounceTimeout = setTimeout(checkImagesWithoutAlt, 300);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  checkImagesWithoutAlt();
}

chrome.storage.sync.get("active", (data) => {
  if (data.active) {
    startObserver();
  } else {
    document.querySelectorAll("img").forEach((img) => {
      img.style.border = "";
    });
  }
});
