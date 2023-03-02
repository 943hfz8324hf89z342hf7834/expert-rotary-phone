// ==UserScript==
// @name         Use version of eruda on github instead of the one available in the app store
// @version      1
// @match        *
// @run-at       document-end
// ==/UserScript==
let replacedEruda = false;

        for (const key in window) {
          try {
            console.log([key, window[key]])
          } catch (e) {
            console.error([key, e])
          }
        }

window.reqListener = function reqListener(e) {
  replacedEruda = true;
  if (window.eruda?._devTools._isShow) {
    window.eruda.hide();
    window.setTimeout(() => {window.eruda.show()}, 100);
  }

  Function(e.target.responseText)();
  window.eruda.init();
  /*window.eruda.add(window.erudaDom);

  let navItems = window.eruda._$el.find('.eruda-nav-bar-item');
  navItems.first().before(
    navItems[navItems.length - 2]
  )

  window.eruda._entryBtn.hide()*/
}

window.replaceEruda = function replaceEruda () {
  const req = new XMLHttpRequest();
  req.addEventListener("load", window.reqListener);
  req.open("GET", "https://cdn.jsdelivr.net/npm/eruda");
  req.send();
}

window.messageListenerFunct = function messageListener (event) {
  console.log(event);
  if (event.data &&
    event.data.direction === "from-content-script" &&
    event.data.message === "toggle") {
      console.log('t+' + performance.now() + ' ms: eruda toggled');
      console.log(window.eruda?._devTools);
    
      if (!window.eruda) {
        console.error("couldn't find eruda");
        for (const key in window) {
          try {
            console.log([key, window[key]])
          } catch (e) {
            console.error([key, e])
          }
        }
        return;
      }
      if (replacedEruda) return;
   
      setTimeout(() => {
        try {
          replaceEruda();
        } catch (e) {
          console.warn(`t+${performance.now()} ms: caught error in timeout part:`)
          console.error(e)
        }
      }, 3000);
  }
}
window._messageListener = window.addEventListener("message", messageListenerFunct);
console.time("listening to messages")
console.trace()

setInterval(() => {
  console.timeLog("listening to messages")
  console.log(window._messageListener)
}, 5000)

/*function main () {
  let eruda = window.eruda;
  if (typeof window.eruda === 'undefined') {
    console.log('eruda is undefined');
    //setTimeout(main, 20);
  } else {
    console.log('eruda is defined')
    /*window.eruda.init = (args) => {
      console.log('working! arguments:');
      console.log(args);
    }
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
  }
}

main()

window.messageListener = window.addEventListener("message", (event) => {
  if (event.source == window &&
    event.data &&
    event.data.direction === "from-content-script" &&
    event.data.message === "toggle") {
    console.log(event);
  }
});

const observer = new MutationObserver(mutations => {
    mutations.forEach(({ addedNodes }) => {
        addedNodes.forEach(node => {
            // For each added script tag
            if(node.nodeType === 1 && node.tagName === 'SCRIPT') {
                const src = node.src || '';
                const type = node.type;
                console.log('script added: ', [node, src, type]);
                if (src.includes("eruda-check.js")) {
                  console.log(window.eruda);
                }
                if (src.includes("eruda-load.js")) {
                  console.log('added load.js');
                  node.src = '';
                  node.text = `
(() => {

    if (typeof eruda === 'undefined') {
        alert(\`Unable to load Web Inspector: \${location.hostname} has set its Content Security Policy to block all third-party scripts.\`);
        return;
    }

    eruda.init({
        //tool: ['elements', 'console', 'network', 'resources', 'sources']
    });

    eruda.add(erudaDom);
    eruda.add(erudaTiming);
    //eruda.get('settings').destroy();

    let shadow = eruda._shadowRoot;
    /*shadow.querySelector('.eruda-entry-btn').remove();
    shadow.querySelectorAll('.eruda-nav-bar-item:nth-child(5), .eruda-nav-bar-item:nth-child(7), .eruda-nav-bar-item:nth-child(8)').forEach((item) => {
        item.remove();
    });

    let navBar = shadow.querySelector('.eruda-nav-bar');
    let navItems = navBar.querySelectorAll('.eruda-nav-bar-item');
    navBar.insertBefore(navItems[navItems.length-1], navItems[0]);

})();`;
                  console.log(node);
                }
                if (src.includes("eruda-toggle.js")) {
                  console.log('added toggle.js');
                  console.log(window.eruda)
                }
                if (src.includes('eruda.js')) {
                  node.src = '';
                  node.text = '';
                }
            }
        })
    })
})

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
})

setTimeout(() => {
  console.log(window.eruda);
}, 1000)*/
