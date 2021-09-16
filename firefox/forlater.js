function saveForLater(tab) {
  const tabURL = tab.url
  const mailto = `mailto:save@forlater.email?&body=${tabURL}`
  browser.tabs.update({
    url: mailto,
  })
}

browser.browserAction.onClicked.addListener(saveForLater)
browser.contextMenus.create({
  'title': "Send page to forlater",
  'contexts': ['all'],
  'onclick': function(info, tab) {
    saveForLater(tab);
  }
});
