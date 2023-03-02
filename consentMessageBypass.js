// ==UserScript==
// @name         consent message bypass
// @namespace    consent message bypass
// @version      1
// @match        https://www.gutefrage.net/*
// @run-at       document-start
// ==/UserScript==

function spMessageDestroyer (mutationList) {
  console.log(`t+${performance.now()} ms: detected a DOM mutation`);
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      /*case "attributes":
        if (mutation.attributeName != "class") return;

        console.log(`t+${performance.now()} ms: Classes changed`);
        console.table(document.documentElement.classList);

        if (document.documentElement.className.includes("sp-message-open")) {
          document.documentElement.classList.remove("sp-message-open"); // make website scrollable
          ++tasksCompleted;
        }
        break;*/
      case "childList":
        if (mutation.removedNodes.length) {
          console.log(`t+${performance.now()} ms: Child list changed, removed nodes:`);
          console.table(mutation.removedNodes);
        } else if (mutation.addedNodes.length) {
          console.log(`t+${performance.now()} ms: Child list changed, added nodes:`);
          console.table(mutation.addedNodes);
        }

        mutation.addedNodes.forEach((node) => {
          if (node?.id.includes("sp_message_container")) { // remove consent message
            node.remove();
            ++tasksCompleted;
            document.documentElement.classList.remove("sp-message-open"); // try to remove class that blocks scrolling
          }
        })
        break;
    }

    if (tasksCompleted >= 1) {
      spMessageObserver.disconnect();
      console.log(`t+${performance.now()} ms: Finished destroying spMessage!`);
    }

    /*
    document.querySelector('div[id*="sp_message_container"]').remove();
    document.querySelector("html").classList.remove("sp-message-open");
    */
  })
}

const observerOptions = {
  childList: true,         // checking for the addition and removal of children
  //attributeFilter: [class] // checking for a change in the className
}

console.log(`t+${performance.now()} ms: consentMessageBypass.js working`)

let tasksCompleted = 0;
const spMessageObserver = new MutationObserver(spMessageDestroyer);
spMessageObserver.observe(document.body, observerOptions);
