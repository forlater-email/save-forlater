function saveForLater(info, tab) {
  const tabURL = tab.url
  const mailto = `mailto:save@forlater.email?&body=${tabURL}`
  chrome.tabs.update({
    url: mailto,
  })
}

chrome.action.onClicked.addListener(saveForLater)
chrome.contextMenus.create({
  'title': "Send page to forlater",
  'contexts': ['all'],
  'id': 'save forlater menu'
})
chrome.contextMenus.onClicked.addListener(saveForLater)
