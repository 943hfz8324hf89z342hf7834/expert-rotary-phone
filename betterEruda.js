// ==UserScript==
// @name         Use version of eruda on github instead of the one available in the app store
// @version      1
// @match        *
// @run-at       document-end
// ==/UserScript==

// safeWindow jailbreak
const frame = document.createElement('iframe');
document.body.appendChild(frame);
const realWindow = frame.contentWindow.parent;
frame.remove();


let replacedEruda = false;
let toggleCount = 0;

for (const key in realWindow) {
  try {
    console.log([key, realWindow[key]])
  } catch (e) {
    console.error([key, e])
  }
}

window.reqListener = function reqListener(e) {
  replacedEruda = true;
  /*if (eruda?._devTools._isShow) {
    eruda.hide();
  }*/
  
  realWindow.oldEruda = eruda;

  eruda.hide()
  Function(e.target.responseText)();
  realWindow.eruda.init();
  realWindow.eruda.show();

  realWindow.eruda.add(window.erudaDom);

  let navItems = realWindow.eruda._$el.find('.eruda-nav-bar-item');
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
      ++toggleCount;
      console.log('t+' + performance.now() + ' ms: eruda toggled');
    
      //if (toggleCount < 2) return; // quick fix for testing
      if (!eruda) {
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
        replaceEruda();
      }, 3000);
  }
}
window.messageListener = window.addEventListener("message", messageListenerFunct);
