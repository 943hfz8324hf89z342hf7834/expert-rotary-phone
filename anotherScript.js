// ==UserScript==
// @name         piped custom style
// @description  resize the giant play button that every video has (+ some other style upgrades)
// @version      2.1.1
// @match        https://piped.*/*
// @match        https://efy.piped.*/*
// @run-at       document-end
// ==/UserScript==

// stylesheet of the video player piped uses
const shakaStylesheet = [...document.styleSheets]
  .find(styleSheet => styleSheet.href?.includes("WatchVideo"));
const shakaStylesheetRules = [...shakaStylesheet.rules];

// get a css rule using its selector
function getRuleFromSelector (selectorText) {
  return shakaStylesheetRules
    .find(cssRule => cssRule.selectorText == selectorText);
}

// play button should be smaller
const shakaPlayButton = getRuleFromSelector(".shaka-play-button");
shakaPlayButton.style.padding = "2%";

// spinner around play button should also be smaller
const shakaSpinner = getRuleFromSelector(".shaka-spinner");
shakaSpinner.style.padding = "2.2%";

// while being shown, play button should have a lower opacity
const shakaPlayButtonShown = getRuleFromSelector('.shaka-controls-container[casting="true"] .shaka-play-button, .shaka-controls-container[shown="true"] .shaka-play-button');
shakaPlayButtonShown.style.opacity = "0.75";

// funnily enough you could resize the playbutton using a single line:
// [...[...document.styleSheets].find(styleSheet => styleSheet.href?.includes("WatchVideo"))?.rules].find(cssRule => cssRule.selectorText == ".shaka-play-button").style.padding = "2%";
