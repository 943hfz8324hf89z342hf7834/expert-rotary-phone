// ==UserScript==
// @name         resize giant play button
// @description  resize the giant play button that every video has
// @version      2.0
// @match        https://piped.kavin.rocks/*
// @match        https://piped.video/*
// @run-at       document-end
// ==/UserScript==

const shakaStylesheet = [...document.styleSheets]
  .find(styleSheet => styleSheet.href?.includes("WatchVideo"));

const shakaPlayButtonClass = [...shakaStylesheet.rules]
  .find(cssRule => cssRule.selectorText == ".shaka-play-button");

shakaPlayButtonClass.style.padding = "2%";

// funnily enough you could do all of this in a single line:
// [...[...document.styleSheets].find(styleSheet => styleSheet.href?.includes("WatchVideo"))?.rules].find(cssRule => cssRule.selectorText == ".shaka-play-button").style.padding = "2%";
