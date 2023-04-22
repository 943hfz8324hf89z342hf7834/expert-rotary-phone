// ==UserScript==
// @name         piped custom style
// @description  resize the giant play button that every video has (+ some other style upgrades)
// @version      3.0
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

// overengineered solution to finding the stylesheet for shaka player
const SHAKA_STYLESHEET_NAMES = [
  "/WatchVideo",
  "/controls."
 ];
const STYLESHEET_NAMES_REGEXP = new RegExp(SHAKA_STYLESHEET_NAMES.join("|").replaceAll(".", "\\."), "g");
const TEST_SELECTOR = ".shaka-play-button";

// stylesheets that could potentially be for shaka player
const allStylesheets = [...document.styleSheets];
const potentialShakaStylesheets = allStylesheets
    .filter(styleSheet => {
      if (!styleSheet.href) return false;
      return STYLESHEET_NAMES_REGEXP.test(styleSheet.href)
    });

let shakaStylesheetRules = [];
let foundShakaStylesheet = false;

// test potential shaka stylesheet rules with a test selector until the test is successful
for (let i = 0; i < potentialShakaStylesheets.length && !foundShakaStylesheet; i++) {
  shakaStylesheetRules = [...potentialShakaStylesheets[i].rules];
  if (potentialShakaStylesheets.length == 1) {foundShakaStylesheet = true}
  else if (shakaStylesheetRules.some(cssRule => cssRule.selectorText == TEST_SELECTOR)) foundShakaStylesheet = true;
}

function logAdditionalInfo () {
  let additionalInfo = {
    "allStylesheets": allStylesheets,
    "potentialShakaStylesheets": potentialShakaStylesheets,
    "shakaStylesheetRules": shakaStylesheetRules
  }
  
  shakaStylesheetRules?.forEach(cssRule, i => {
    additionalInfo["cssRule#" + i] = cssRule;
  });
    
  console.warn("<Additional Info>");
  console.dir(additionalInfo);
  console.warn("</Additional Info>")
}


// actually change the cssrules now

if (!foundShakaStylesheet) {
  console.error("Couldn't find Shaka Player stylesheet :( \n(That means the userscript couldn't make changes to the style of Piped)")
  logAdditionalInfo()
} else {

  // get a css rule using its selector
  function getRuleFromSelector (selectorText) {
    return shakaStylesheetRules
      .find(cssRule => cssRule.selectorText == selectorText);
  }

  try {
    // play button should be smaller
    const shakaPlayButton = getRuleFromSelector(".shaka-play-button");
    shakaPlayButton.style.padding = "2%";

    // spinner around play button should also be smaller
    const shakaSpinner = getRuleFromSelector(".shaka-spinner");
    shakaSpinner.style.padding = "2.2%";

    // while being shown, play button should have a lower opacity
    const shakaPlayButtonShown = getRuleFromSelector('.shaka-controls-container[casting="true"] .shaka-play-button, .shaka-controls-container[shown="true"] .shaka-play-button');
    shakaPlayButtonShown.style.opacity = "0.75";
  } catch (e) {
    console.error(e);
    logAdditionalInfo();
  }
}

// funnily enough you can resize the playbutton using a single line:
// [...[...document.styleSheets].find(styleSheet => styleSheet.href?.includes("WatchVideo"))?.rules].find(cssRule => cssRule.selectorText == ".shaka-play-button").style.padding = "2%";
