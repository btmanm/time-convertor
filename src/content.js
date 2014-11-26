document.addEventListener('contextmenu', function(e) {
	var dt = new Date(document.elementFromPoint(e.x, e.y).innerText.trim());
	chrome.runtime.sendMessage({
		"cmd" : "updateTime",
		"title" : isNaN(dt) ? 'not a time' : dt.toLocaleString()
	});
}, false);