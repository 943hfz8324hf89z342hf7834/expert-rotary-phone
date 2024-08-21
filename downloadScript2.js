// ==UserScript==
// @name         test
// @namespace    test
// @version      1
// @match        https://thisvid.com/*
// @run-at       document-end
// ==/UserScript==

window.clickListener = document.addEventListener('click', (e) => {
  console.log('download script: registered click event');
  if (e.toElement.outerHTML.includes('class="title')) {
    switch (e.toElement.tagName.toLowerCase()) {
      case 'span':
      case 'li':
        console.log('download script: creating download link')
        const videoUrl = kvsplayer.kt_player.conf.video_url;
        const download = document.createElement('a');
        window.downloadLink = download;
    
        document.body.appendChild(download);
        download.href = videoUrl;
        download.download = '';
        download.target = '_blank';
        download.filename = document.querySelector('.headline').innerText;
        setTimeout(() => {
          console.log('download script: download initiated');
          downloadLink.click();
        }, 0);
        document.body.removeChild(download);
        break;
    }
  }
});