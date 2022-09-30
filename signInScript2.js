// ==UserScript==
// @name         sign in
// @namespace    sign in
// @version      2
// @match        https://e621.net/*
// @run-at       document-end
// ==/UserScript==

let path = window.location.pathname
, href = window.location.href
//, lastPage = window.localStorage.getItem('lastPage') || '/posts'
//, willinglySignedOut = window.localStorage.getItem('willinglySignedOut') == 'true' ? true : false;
;



// this is an absolute mess but it works and i'm tired
// lastPage and willinglySignedOut stored in url
let search = window.location.search.replace('?', '')
, stored = []
, lastPage = '/posts'
, willinglySignedOut = 'false';

stored = search.split(/&/g);
stored.forEach((v, i) => {
    let entry = [v.substring(0, v.indexOf('=')), v.substring(v.indexOf('=') + 1, v.length)];
    stored[i] = entry;
    stored[entry[0]] = entry[1] || null;
    switch (entry[0]) {
        case 'lastPage':
            lastPage = entry[1];
            break;
        case 'willinglySignedOut':
            willinglySignedOut = entry[1] == 'true' ? true : false;
            break;
    }
})

console.log(stored);
console.log(lastPage, willinglySignedOut);
lastPage = lastPage.replaceAll('%26', '&');

// store current path in url
document.addEventListener('click', (e) => {
    // remember when user willingly signs out
    if (e.target.innerText == 'Sign out') {
        willinglySignedOut = true;
    }

    // go through all elements involved in click to see if any of them are links
    /*e.path.forEach((v, i) => {
      if (v.localName == 'a') {
         v.href = getNewUrl(v.href);
      }
    })*/
    if (e.target.localName == 'a') {
        e.target.href = getNewUrl(e.target.href);
    }
    console.log('click event: ', e, e.target); 
})

function getNewUrl (href) {
    lastPage = window.location.href.replace(window.location.origin, '');

    let originalString = `lastPage=${stored.lastPage}&willinglySignedOut=${stored.willinglySignedOut}`
        , insertString = `lastPage=${lastPage.replace(originalString, '').replace(/&/gi, '%26')}&willinglySignedOut=${willinglySignedOut}`;
    //, oldHref = v.href
    //, insertSearch = '?' + insertString;

    if (href.includes('?')) {
        //let oldSearch = oldHref.substring(oldHref.indexOf('?') + 1, oldHref.length)
        href = href.replace('?', '?' + insertString + '&');
    } else {
        href = href + '?' + insertString + '&';
    }

    console.log('got new url: ' + href);
    return href;
}


// store the last visited page in local storage so you can easily return after logging in
window.onbeforeunload = (e) => {
    if (path == '/session/new') return;
    window.localStorage.setItem('lastPage', window.location.href.replace(window.location.origin, ''));
}

/*
// remember when user willingly signs out
document.addEventListener('click', (e) => {
    if (e.target.innerText == 'Sign out') {
        window.localStorage.setItem('willinglySignedOut', 'true');
    }
})*/


// check if user is signed in
function isSignedIn () {
    if (willinglySignedOut) return false;
    let signedIn;
    // main page layout is a special case
    if (path == '/') {
        // link to either account or login page
        signedIn = document.querySelectorAll('a')[1].href.includes('/users/home');
    } else {
        signedIn = document.body.dataset.userIsVerified == 'true' ? true : false;
    };
    console.log('isSignedIn: ' + signedIn);
    return signedIn;
}

// add last visited page on login page
if (path == '/session/new') {
    let urlInput = document.querySelector('#url')
    , newElement = document.createElement('div');

    if (lastPage.includes('/session/new') || lastPage == '/') {
        lastPage = '/posts';
    };

    document.cookie = "gw=seen";

    urlInput.replaceWith(newElement);
    newElement.outerHTML = `
<div class="input">
  <label for="url">Go to e621.net...</label>
  <input type="text" name="url" id="url" value="${lastPage}"></input>
</div>
`;
    document.querySelector('.simple_form').onsubmit = (e) => {
        window.localStorage.setItem('willinglySignedOut', 'false');
    }
} else if (!isSignedIn() && !willinglySignedOut) { // go to login page if not logged in and user hasn't logged out willingly
    document.cookie = "gw=seen";
    console.log('not signed in yet, ' + getNewUrl('https://e621.net/session/new'));
    window.location.href = getNewUrl('https://e621.net/session/new');
}
