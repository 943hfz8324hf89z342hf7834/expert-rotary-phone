// ==UserScript==
// @name         sign in
// @namespace    sign in
// @version      1
// @match        https://e621.net/*
// @run-at       document-end
// ==/UserScript==

let signedInCheck, signedIn;
// spaghetti code :/
// main page layout is a special case
if (window.location.pathname == '/') {
    signedInCheck = document.querySelectorAll('a')[1];
    if (!signedInCheck) {
        signedIn = 'unknown';
    } else {
        signedIn = (signedInCheck.href == '/users/home') ? true : false;
    }
    console.log('on main page', signedInCheck, signedIn);
} else {
    signedInCheck = document.body.attributes.getNamedItem('data-user-is-verified');
    if (!signedInCheck) {
        signedIn = 'unknown';
    } else {
        signedIn = (signedInCheck.value == 'true') ? true : false;
    }
    console.log('not on main page', signedInCheck, signedIn);
};

if (!signedIn) {
    let form = document.createElement('form');
    document.body.appendChild(form);
    form.outerHTML = `
<form class="simple_form" action="/session" method="post" hidden="true" rel="noopener">
    <input name="authenticity_token" value="G8Y5devgxjvIMImOJozeRiAs5uYvV8_c05-MD63kdcz9mrriw9KeDzmZsZalindI1dFrTdfkTaG-ndQeUZcHHQ">

    <input name="name" value="I-a_b-">

    <input name="password" value=";zYgV,%mn">

    <input id="submit_button" type="submit">
</form>`;
    document.querySelector('#submit_button').click();
} else if (signedIn == 'unknown') {
    document.cookie = 'gw=seen';
    console.log('something went wrong');
}
