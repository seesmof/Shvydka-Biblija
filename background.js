chrome.commands.onCommand.addListener((command) => {
  const commandsMap = {
    "open-bing-chat":
      "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx&wlexpsignin=1&showntbk=1",
    "open-phind": "https://www.phind.com/agent",
    "open-Blue-Letter-Bible": "https://www.blueletterbible.org/",
    "open-Bible-Hub": "https://biblehub.com/bsb/",
  };

  if (commandsMap[command]) {
    chrome.tabs.create({ url: commandsMap[command] });
  }
});
