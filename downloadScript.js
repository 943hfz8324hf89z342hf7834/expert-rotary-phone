// ==UserScript==
// @name         uhhhh
// @namespace    uhhhh
// @version      1
// @match        https://z*e1.com/*
// @run-at       document-end
// ==/UserScript==

window.clickListener = document.addEventListener('click', (e) => {
  if (e.toElement.children.length > 0 && e.toElement.outerHTML.includes('share')) {
    switch (e.toElement.tagName) {
      case 'I':
      case 'A':
      case 'SPAN':
        document.querySelector('#share-input').value = flashvars.video_url;
    
        var download = document.createElement('a');
        document.body.appendChild(download);
        download.href = flashvars.video_url;
        download.download = '';
        download.click();
        document.body.removeChild(download);
        break;
    }
  }
});
