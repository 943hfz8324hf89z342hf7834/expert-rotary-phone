// ==UserScript==
// @name         uhhhh
// @namespace    uhhhh
// @version      1
// @match        https://zootube1.com/*
// @run-at       document-end
// ==/UserScript==

window.clickListener = document.addEventListener('click', (e) => {
  if (e.toElement.children.length > 0 && e.toElement.outerHTML.includes('share')) {
    var download = document.createElement('a');
    document.body.appendChild(download);
    download.href = flashvars.video_url;
    download.download = '';
    download.click();
    document.body.removeChild(download);
  }
});
