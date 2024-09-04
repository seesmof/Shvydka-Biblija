chrome.commands.onCommand.addListener((command) => {
  const commandsMap = {
    BlueLetterBIBLE: "https://www.blueletterbible.org/",
    BIBLEhub: "https://biblehub.com/bsb/",
    bolls: "https://bolls.life/",
    phind: "https://www.phind.com/agent",
  };

  if (commandsMap[command]) {
    chrome.tabs.create({ url: commandsMap[command] });
  }
});
