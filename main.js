browser.menus.create({
  id: "etymonline-firefox-addon",
  title: "Search for '%s' in etymonline",
  contexts: ["selection"]
});


browser.menus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "etymonline-firefox-addon") {
    let selection = info.selectionText;
    console.log(selection);
    browser.tabs.create({
      url: "https://www.etymonline.com/search?q=" + selection
    });
  }
});
