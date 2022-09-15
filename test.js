// ==UserScript==
// @name         testscript
// @namespace    testscript
// @version      1
// @match        https://github.com/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

setTimeout(() => {alert('working')}, 1000);
