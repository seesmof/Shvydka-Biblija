chrome.commands.onCommand.addListener((command) => {
  const commandsMap = {
    BlueLetterBIBLE: "https://www.blueletterbible.org/",
    BIBLEhub: "https://biblehub.com/bsb/",
    perplexity: "https://www.perplexity.ai/",
    phind: "https://www.phind.com/agent",
  };

  if (commandsMap[command]) {
    chrome.tabs.create({ url: commandsMap[command] });
  }
});
