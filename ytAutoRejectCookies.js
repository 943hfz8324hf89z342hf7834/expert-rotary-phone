// ==UserScript==
// @name         auto reject youtube cookies
// @version      1
// @match        https://consent.youtube.com/*
// @run-at       document-start
// ==/UserScript==

const keepTrying = setInterval(() => {
  document.querySelectorAll("button").forEach(el => {
    if (el.innerText?.includes("Reject all")) {
      clearInterval(keepTrying);
      el.click();
    }
  })
}, 250)
