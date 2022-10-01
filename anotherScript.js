// ==UserScript==
// @name         remove giant play button
// @description  remove the giant play button that every video has (i couldn't figure out how to just make the playbutton smaller)
// @version      1
// @match        https://piped.kavin.rocks/*
// @run-at       document-end
// ==/UserScript==

let playButton = document.querySelector('.shaka-play-button');
if (playButton && playButton.outerHTML) {
  playButton.outerHTML = playButton.outerHTML.replace('shaka-play-button', '');
}
