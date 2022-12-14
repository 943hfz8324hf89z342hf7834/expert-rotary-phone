// ==UserScript==
// @name         script1
// @namespace    script1
// @version      1
// @match        https://sflix.to/*
// @run-at       document-start
// ==/UserScript==

console.log('working ',[document, document.scripts]);

const blocked = [
  'rndskittytor.com', 
  'z.moatads.com', 
  'daineely.net',
  'caimoasy.net'
  ];
  
const checked = [];

//i just want to know where all these errors i'm getting are coming from ;-;
/*const realError = console.error;
console.error = function(...args) {
  console.log('tried to call error with args: ', args, ' caller: ', console.error.caller);
  return realError.call(...args);
};*/

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
                // If the src is inside the blacklist
                if(needsToBeBlacklisted(src, type)) {
                    //console.log('Blocked script from source ', src, ', scripts checked so far: ', checked);
                    node.type = 'javascript/blocked';
                    //node.parentElement.removeChild(node)
                }
            }
        })
    })
})

/*const scriptsAtStart = [...document.scripts];

function testScript(script) {
  let src = script.src || '';
  let type = script.type;
  
  if (needsToBeBlacklisted(src, type)) {
    script.type = 'javascript/blocked';
  }
}*/

// Finds out if the source of a script is in the BlockList
function needsToBeBlacklisted(src, type) {
  if (!src) return !1;
  let result = 0;
  blocked.forEach((url) => {
    result += src.includes(url);
  });
  checked.push([src, type, result]);
console.warn('checked script: ', src, type, result);
  if (result) {
console.log('Blocked script from source ', src, ', scripts checked so far: ', checked)};
  return result;
}

const createElementBackup = document.createElement
document.createElement = function(...args) {
    // If this is not a script tag, bypass
    if(args[0].toLowerCase() !== 'script') {
        // Binding to document is essential
        return createElementBackup.bind(document)(...args) }

    const scriptElt = createElementBackup.bind(document)(...args)
   
console.log('Create Element: ', [scriptElt, args]);
    
    // Backup the original setAttribute function
    const originalSetAttribute = scriptElt.setAttribute.bind(scriptElt);

    // Define getters / setters to ensure that the script type is properly set
    Object.defineProperties(scriptElt, {
      'src': {
         get() {
             return scriptElt.getAttribute('src')
         },
         set(value) {
              if(needsToBeBlacklisted(value, scriptElt.type)) {
                 originalSetAttribute('type', 'javascript/blocked')
             }
             originalSetAttribute('src', value)
              return true
          }
      },
     'type': {
          set(value) {
              const typeValue =
                  needsToBeBlacklisted(scriptElt.src, scriptElt.type) ?
                     'javascript/blocked' :
                  value
             originalSetAttribute('type', typeValue)
             return true
          }
      }
  })

  // Monkey patch the setAttribute function so that the setter is called instead.
  // Otherwise, setAttribute('type', 'whatever') will bypass our custom descriptors!
  scriptElt.setAttribute = function(name, value) {
      if(name === 'type' || name === 'src')
          scriptElt[name] = value
     else
          HTMLScriptElement.protytope.setAttribute.call(scriptElt, name, value)
  }
                           
  return scriptElt
}

// Starts the monitoring
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
})

// Goes through all scripts present at document start
/*scriptsAtStart.forEach(testScript(script));*/

console.log(checked);
