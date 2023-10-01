chrome.commands.onCommand.addListener(function (command) {
  if (command === "open-chat-gpt") {
    chrome.tabs.create({ url: "https://chat.openai.com/" });
  }
  if (command === "open-bing-chat") {
    chrome.tabs.create({
      url: "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx&wlexpsignin=1",
    });
  }
});
