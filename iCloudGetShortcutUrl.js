// ==UserScript==
// @name         get shortcut url
// @version      1
// @match        https://www.icloud.com/shortcuts/*
// @run-at       document-end
// ==/UserScript==

function getShortcutUUIDFromPath () {
  var pathComponents = window.location.pathname.split("/"),
      lastPathComponent = pathComponents.at(-1);
  if (lastPathComponent.match(/[0-9a-f]{32}/)) return lastPathComponent;
};

function parseShortcut (response) {
  var fields = response.fields,
      scName = "",
      scLongDescription = "",
      scIcon = "",
      scShortcut = "";
		
	if (fields.name) {
		scName = fields.name.value
	} 
	
	if (fields.longDescription) {
		scLongDescription = fields.longDescription.value
	}
	
	if (fields.icon) {
		scIcon = fields.icon.value.downloadURL
	}
	
	if (fields.shortcut) {
		scShortcut = fields.shortcut.value.downloadURL
	}
	
	return {
    name: scName,
    desc: scLongDescription,
    icon: scIcon,
    shortcut: scShortcut
  };
};

function loadShortcut (scUUID) {
  var req = new XMLHttpRequest;
  req.responseType = "json";
  req.onload = function() {
    if (req.status === 200) {
	    let scValues = parseShortcut(req.response);
      window.scValues = scValues;
      
      const nameEncoded = encodeURIComponent(scValues.name);
      const scUrlEncoded = encodeURIComponent(encodeURI(scValues.shortcut));
      const trueShortcutLink = `workflow://import-workflow/?name=${nameEncoded}&url=${scUrlEncoded}`
      scValues["trueShortcutLink"] = trueShortcutLink;
      window.scLink = trueShortcutLink;

      document.querySelector("#shortcutInfo").innerText += JSON.stringify(scValues, null, 2);
	  } else {
	    //window.main.showError(elIds.ErrorNotFoundID)
  	}
  };
	
  req.open("GET", "/shortcuts/api/records/" + scUUID);
  req.send();
};

const scUUID = getShortcutUUIDFromPath();

const scInfoEl = document.createElement("div");
scInfoEl.id = "shortcutInfo";
document.querySelector("#main").appendChild(scInfoEl);

loadShortcut(scUUID);

scInfoEl.innerText += "\n\nworkflow://shortcuts/" + encodeURIComponent(scUUID);
