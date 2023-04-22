// ==UserScript==
// @name         piped custom style
// @description  resize the giant play button that every video has (+ some other style upgrades)
// @version      2.1.1
// @match        https://piped.video/*
// @match        https://piped.kavin.rocks/*
// @match        https://efy.piped.pages.dev/*
// @match        https://pipedapi.kavin.rocks/*
// @match        https://pipedapi.tokhmi.xyz/*
// @match        https://pipedapi.moomoo.me/*
// @match        https://pipedapi.syncpundit.io/*
// @match        https://api-piped.mha.fi/*
// @match        https://watchapi.whatever.social/*
// @match        https://piped-api.garudalinux.org/*
// @match        https://pipedapi.rivo.lol/*
// @match        https://pipedapi.aeong.one/*
// @match        https://pipedapi.leptons.xyz/*
// @match        https://piped-api.lunar.icu/*
// @match        https://ytapi.dc09.ru/*
// @match        https://pipedapi.pfcd.me/*
// @match        https://pipedapi-libre.kavin.rocks/*
// @match        https://api.yt.777.tf/*
// @match        https://pa.mint.lgbt/*
// @match        https://pa.il.ax/*
// @match        https://piped-api.privacy.com.de/*
// @match        https://pipedapi.esmailelbob.xyz/*
// @match        https://api.piped.projectsegfau.lt/*
// @match        https://pipedapi.in.projectsegfau.lt/*
// @match        https://pipedapi.us.projectsegfau.lt/*
// @match        https://api.piped.privacydev.net/*
// @match        https://pipedapi.palveluntarjoaja.eu/*
// @match        https://p.plibre.com/*
// @match        https://pipedapi.smnz.de/*
// @match        https://pipedapi.adminforge.de/*
// @match        https://pipedapi.qdi.fi/*
// @match        https://piped-api.hostux.net/*
// @match        https://pdapi.vern.cc/*
// @match        https://pipedapi.chauvet.pro/*
// @match        https://pipedapi.berryez.xyz/*
// @match        https://pipedapi.jotoma.de/*
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
