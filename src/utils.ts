/* global chrome */
export function checkImageWithoutPropAlt(show = false) {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    const alt = img.getAttribute("alt");
    if (show && (alt === null || alt.trim() === "")) {
      img.className = img.className + " ImgWithoutAlt ";
    } else {
      img.className = img.className.replaceAll(" ImgWithoutAlt ", "");
    }
  });
}

// function checkObserver() {
//   let debounceTimeout: ReturnType<typeof setTimeout>;
//   const observer = new MutationObserver(() => {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(checkImageWithoutPropAlt, 300);
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true,
//   });

//   checkImageWithoutPropAlt();
// }

// chrome.storage.sync.get("shouldCheckImagesWithoutAlt", (data) => {
//   if (data.active) {
//     checkObserver();
//   } else {
//     document.querySelectorAll("img").forEach((img) => {
//       img.style.border = "";
//     });
//   }
// });
