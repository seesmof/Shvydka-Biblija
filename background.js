chrome.commands.onCommand.addListener(function (command) {
  if (command === "open-website") {
    chrome.tabs.create({ url: "https://chat.openai.com/" });
  }
});
