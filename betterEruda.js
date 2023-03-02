// ==UserScript==
// @name         Use version of eruda on github instead of the one available in the app store
// @version      1
// @match        *
// @run-at       document-start
// ==/UserScript==

// safeWindow jailbreak
const frame = document.createElement('iframe');
document.body.appendChild(frame);
const realWindow = frame.contentWindow.parent;
frame.remove();

((window, safeWindow) => {
  window.safeWindow = safeWindow

  let replacedEruda = false;

  window.reqListener = function reqListener(e) {
    replacedEruda = true;
    window.removeEventListener("message", messageListenerFunct);
  
    window.oldEruda = safeWindow.eruda;

    oldEruda.hide()
    Function(e.target.responseText)();
    eruda.init();
    eruda.show();

    eruda.add(erudaDom);

    let navItems = eruda._$el.find('.eruda-nav-bar-item');
    navItems.first().before(
      navItems[navItems.length - 2]
    )

    //realWindow.eruda._entryBtn.hide()
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
    
        if (!eruda) {
          console.error("couldn't find eruda");
          return;
        }
        if (replacedEruda) return;

        replaceEruda();
    }
  }

  window.addEventListener("message", messageListenerFunct);

}).call(realWindow, realWindow, window)
