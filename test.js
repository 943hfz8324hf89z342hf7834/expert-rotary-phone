// ==UserScript==
// @name         testscript
// @namespace    testscript
// @version      1
// @match        https://gelbooru.com/*
// @run-at       document-start
// ==/UserScript==

if (location.search.includes("page=favorites")) {
  document.body.style = "background-color: rgb(63, 63, 63)"
}
