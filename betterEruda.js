// ==UserScript==
// @name         Use version of eruda on github instead of the one available in the app store
// @version      2.0
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
  
    const oldEruda = eruda;
    window.oldEruda = oldEruda;

    oldEruda.hide()
    Function(e.target.responseText)();
    eruda.init();
    eruda.show();

    eruda.add(erudaDom);

    let navItems = eruda._$el.find('.eruda-nav-bar-item');
    navItems.first().before(
      navItems[navItems.length - 2]
    )

    eruda._entryBtn.hide()
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
      (event.data.direction === "from-content-script" && // only happens after already having clicked on the web inspector button
      event.data.message === "toggle") ||
      (event.data.direction === "from-page-script" && // happens the first time you click the web inspector button, eruda is not loaded yet here
      event.data.loaded === "false")) {
        console.log('t+' + performance.now() + ' ms: eruda toggled');
    
        if (replacedEruda) return;

        let checkingForEruda = setInterval(() => {
          if (!window.eruda) {return};
          clearInterval(checkingForEruda);
          replaceEruda();
        }, 200)
    }
  }

  window.addEventListener("message", messageListenerFunct);

}).call(realWindow, realWindow, window)
