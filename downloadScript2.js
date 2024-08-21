// ==UserScript==
// @name         test
// @namespace    test
// @version      1
// @match        https://thisvid.com/*
// @run-at       document-end
// ==/UserScript==

window.clickListener = document.addEventListener('click', (e) => {
  if (e.toElement.children.length > 0 && e.toElement.outerHTML.includes('ico-share')) {
    switch (e.toElement.tagName.toLowerCase()) {
      case 'i':
      case 'a':
      case 'li':
        const videoUrl = kvsplayer.kt_player.conf.video_url;
        const download = document.createElement('a');
        
        document.querySelector('.block-share textarea').value = videoUrl;
    
        document.body.appendChild(download);
        download.href = videoUrl;
        download.download = '';
        download.click();
        document.body.removeChild(download);
        break;
    }
  }
});
