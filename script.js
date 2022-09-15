// ==UserScript==
// @name         script1
// @namespace    script1
// @version      1
// @match        https://sflix.to/*
// @run-at       document-start
// ==/UserScript==

const blocked = [
  'rndskittytor.com', 
  'z.moatads.com', 
  'daineely.net'
  ];

const observer = new MutationObserver(mutations => {
    mutations.forEach(({ addedNodes }) => {
        addedNodes.forEach(node => {
            // For each added script tag
            if(node.nodeType === 1 && node.tagName === 'SCRIPT') {
                const src = node.src || '';
                const type = node.type;
                // If the src is inside the blacklist
                if(needsToBeBlacklisted(src, type)) {
                    console.log('Blocked script of type ', type, ' from source ', src);
                    node.type = 'javascript/blocked';
                    //node.parentElement.removeChild(node)
                }
            }
        })
    })
})

function needsToBeBlacklisted(src, type) {
  let result = 0;
  blocked.forEach((url) => {
    result += src.includes(url);
  });
  return result;
}

// Starts the monitoring
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
})
