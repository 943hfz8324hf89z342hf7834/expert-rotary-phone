// ==UserScript==
// @name         sign in
// @namespace    sign in
// @version      2
// @match        https://e621.net/*
// @run-at       document-end
// ==/UserScript==

let path = window.location.pathname
  , href = window.location.href
  , lastPage = window.localStorage.getItem('lastPage') || '/posts'
  , willinglySignedOut = window.localStorage.getItem('willinglySignedOut') == 'true' ? true : false;


// store the last visited page in local storage so you can easily return after logging in
window.onbeforeunload = (e) => {
  if (path == '/session/new') return;
  window.localStorage.setItem('lastPage', window.location.href.replace(window.location.origin, ''));
  alert(window.localStorage.getItem('lastPage'));
}

// remember when user willingly signs out
document.addEventListener('click', (e) => {
    if (e.target.innerText == 'Sign out') {
        window.localStorage.setItem('willinglySignedOut', 'true');
    }
})


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
  return signedIn;
}

// add last visited page on login page
if (path == '/session/new') {
    let urlInput = document.querySelector('#url')
      , newElement = document.createElement('div');

    console.log(window.localStorage.getItem('lastPage'), lastPage, window.localStorage.getItem('mode'), window.localStorage, window.localStorage.length);
    if (lastPage == 'session/new' || lastPage == '/') {
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
  window.location.href = "https://e621.net/session/new";
}
