// ==UserScript==
// @name         test script
// @version      1
// @match        https://freebee.fun/*
// @run-at       document-start
// ==/UserScript==
(() => {
  let eruda = window.eruda;
  if (typeof window.eruda === 'undefined') {
    console.log('eruda is undefined');
  } else {
    /*window.eruda.init = (args) => {
      console.log('working! arguments:');
      console.log(args);
    }*/
    const oldInit = eruda.init;

    // function to call instead of eruda.init
    function newInit(args) {
      let options = arguments[0];
      // this works to detect if load.js is calling init because load.js uses tool as an option
      if (options.tool) {
        console.log('load.js tried to init eruda');
        window.alert('load.js tried to init eruda');
        setTimeout(() => {
          // load.js with some parts removed
          try {
            oldInit({
              useShadowDom: true
            })
            if (!erudaDom || !erudaTiming) {
              console.log('missing erudaDom or erudaTiming');
            } else {
              eruda.add(erudaDom);
              eruda.add(erudaTiming);
            }

            let shadow = eruda._shadowRoot;

            let navBar = shadow.querySelector('.eruda-nav-bar');
            let navItems = navBar.querySelectorAll('.eruda-nav-bar-item');
            navBar.insertBefore(navItems[4], navItems[0]);

            console.log('intercepted init()');
          } catch (e) {
            console.error('error while intercepting load.js: ');
            console.error(e);
            window.alert('error while intercepting load.js: \n\n', e);
          }
        }, 100);
        throw new Error();
      } else if (!options.tool) {
        console.log('normal init()', arguments[0]);
        oldInit(arguments[0]);
      }
    }

    window.eruda.init = newInit;
})();

window.addEventListener("message", (event) => {
  if (event.source == window &&
    event.data &&
    event.data.direction === "from-content-script" &&
    event.data.message === "toggle") {
    console.log(event);
  }
});
