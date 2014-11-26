var menu = chrome.contextMenus.create({
	"title" : 'not a time',
	"contexts" : [ 'page' ],
	"onclick" : function(info, tab) {
	}
});

chrome.runtime.onMessage.addListener(function(message, sender, callback) {
	if (message.cmd == "updateTime") {
		chrome.contextMenus.update(menu, {
			"title" : message.title
		});
	}
});