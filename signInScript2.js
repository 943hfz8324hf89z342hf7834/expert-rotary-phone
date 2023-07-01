// ==UserScript==
// @name         sign in
// @namespace    sign in
// @version      2
// @match        https://e621.net/*
// @run-at       document-end
// ==/UserScript==

let path = window.location.pathname
  , href = window.location.href
  , lastPage = window.localStorage?.getItem('lastPage') || '/posts'
  , willinglySignedOut = window.localStorage?.getItem('willinglySignedOut') == 'true' ? true : false
  , useFallback = !window.localStorage || window.localStorage.length < 2;

//if (useFallback) {
// lastPage and willinglySignedOut stored in url
let search = window.location.search.replace('?', '')
  , stored = [];

stored = search.split(/&/g);

stored.forEach((v, i) => {
    if (v.indexOf('=') < 0) {
      stored[i] = v;
      return;
    }
  
    let entry = [v.substring(0, v.indexOf('=')), v.substring(v.indexOf('=') + 1, v.length)];
    stored[i] = entry;
    stored[entry[0]] = entry[1] || null;
    switch (entry[0]) {
        case 'lastPage':
            lastPage = unescape(unescape(entry[1]));
            break;
        case 'willinglySignedOut':
            willinglySignedOut = entry[1] == 'true' ? true : false;
            break;
        case 'url':
            lastPage = unescape(unescape(entry[1]));
            break;
    }
})
//}

window.localStorage?.setItem('lastPage', lastPage);
window.localStorage?.setItem('willinglySignedOut', willinglySignedOut);
console.log([lastPage, willinglySignedOut]);

// store current path in url
document.addEventListener('click', (e) => {
    // remember when user willingly signs out
    if (e.target.innerText == 'Sign out') {
      willinglySignedOut = true;
      window.localStorage?.setItem('willinglySignedOut', willinglySignedOut);
    }
    
    // go through all elements involved in click to see if any of them are links
    let list = [];
    list[0] = e.target;
    
    for (let i = 1; i < 100 && list[i - 1] != window.documentElement && list[i - 1] != null; i++) {
      list[i] = list[i - 1].parentElement;
      if (list[i - 1].tagName.toLowerCase() == 'a') {
        let anchorElem = list[i - 1];
        i = 101;
        if (anchorElem.href) {
          anchorElem.href = getNewUrl(anchorElem.href);
          window.localStorage?.setItem('lastPage', lastPageString);
          console.log('clicked link: \n', anchorElem, '\n', anchorElem.href);
        }
      }
    }
})

// lastPage = currentPage
function getNewUrl (href) {
    lastPage = window.location.href.replace(window.location.origin, '');

    let originalInsertString = `lastPage=${stored?.lastPage}&willinglySignedOut=${willinglySignedOut}`
      , newLastPage = lastPage;
    if (lastPage.includes(originalInsertString)) {
       newLastPage = lastPage.replace(originalInsertString, '').replace('?', '').replace('&', '?') // '/posts?' = '/posts', '/posts?&somethingelse=1&anotherthing = '/posts?somethingelse=1&anotherthing'
    }
    let insertString = `lastPage=${newLastPage.replace(/&/g, '%26')}&willinglySignedOut=${willinglySignedOut}`;
  
    if (href.includes('?')) {
        href = href.replace('?', '?' + insertString + '&');
    } else {
        href = href + '?' + insertString;
    }
  
    window.localStorage?.setItem('lastPage', newLastPage);
  
    return href;
}

// store the last visited page in local storage so you can easily return after logging in
// THIS DOESNT WORK
window.onbeforeunload = (e) => {
    if (path == '/session/new') return;
    getNewUrl(window.location.origin);
}

// check if user is signed in
function isSignedIn () {
    if (willinglySignedOut) return false;
    let signedIn;
    // main page layout is a special case
    if (path == '/') {
        // link to either account or login page
        signedIn = document.querySelectorAll('a')[1].href.includes('/users/home');
    } else {
        signedIn = document.body.dataset.userIsMember == 'true' ? true : false;
    };
    console.log('isSignedIn: ' + signedIn);
    return signedIn;
}

// use tags as filename when downloading full image
function getDataURL(img, fileExt) {
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL("image/" + fileExt);
    console.log(dataURL);
    return dataURL;
}

let downloadEl = document.querySelector('#image-download-link a');
if (downloadEl) {
    let imageCont = document.querySelector('#image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = downloadEl.href;
    //newImageEl.style.display = 'none';
    document.body.appendChild(newImageEl);
    console.log(getDataURL(newImageEl, "png"));
  
    try {
      downloadEl.download = encodeURIComponent(imageCont.dataset.tags) + '.' + imageCont.dataset.fileExt;
      downloadEl.href = getDataURL(newImageEl, imageCont.dataset.fileExt);
  
      let downloadElClone = downloadEl.cloneNode();
      downloadElClone.href = getDataURL(newImageEl, imageCont.dataset.fileExt);
      document.querySelector('#image-download-link').appendChild(downloadElClone);
    } catch (e) {
      console.error('cloned node: ')
      console.error(e)
    }
}

// add last visited page on login page
if (path == '/session/new') {
    let urlInput = document.querySelector('#url')
    , newElement = document.createElement('div');

    if (lastPage.includes('/session/new') || lastPage == '/') {
        lastPage = '/posts';
        window.localStorage?.setItem('lastPage', lastPage);
    };

    document.cookie = "gw=seen";
    document.querySelector('.guest-warning')?.remove();

    urlInput.replaceWith(newElement);
    newElement.outerHTML = `
<div class="input">
  <label for="url">Go to e621.net...</label>
  <input type="text" name="url" id="url" value="${lastPage}"></input>
</div>
`;
    document.querySelector('.simple_form').onsubmit = (e) => {
        window.localStorage?.setItem('willinglySignedOut', 'false');
    }
} else if (!isSignedIn() && !willinglySignedOut) { // go to login page if not logged in and user hasn't logged out willingly
    document.cookie = "gw=seen";
    document.querySelector('.guest-warning')?.remove();
    //console.log('not signed in yet, ' + getNewUrl('https://e621.net/session/new'));
    window.location.href = getNewUrl('https://e621.net/session/new');
}
