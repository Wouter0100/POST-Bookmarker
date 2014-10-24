var payloads = {};

var createProperties = {};
createProperties.type = 'normal';
createProperties.title = 'Bookmark this';
createProperties.contexts = ['page', 'frame'];
createProperties.onclick = function(info, tab) {
    var bookmark = {};
    bookmark.title = tab.title;

    if (typeof payloads[tab.id] != 'undefined') {
        bookmark.url = 'https://wouter0100.nl/redirect?url=' + decodeURI(tab.url) + '&payload=' + payloads[tab.id];
    } else {
        bookmark.url = tab.url;
    }

    chrome.bookmarks.create(bookmark);
};

chrome.contextMenus.create(createProperties);

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    if (details.method != 'POST') {
        delete payloads[details.tabId];
        return;
    }

    var payload = {};

    $.each(details.requestBody.formData, function(name, value) {
        payload[name] = value[0];
    });

    payloads[details.tabId] = JSON.stringify(payload);

}, { urls: [ '<all_urls>' ], types: [ 'main_frame' ] }, [ 'requestBody' ]);