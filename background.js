chrome.commands.onCommand.addListener((command) => {
  const commandsMap = {
    BlueLetterBIBLE: "https://www.blueletterbible.org/",
    gemini: "https://gemini.google.com/app",
    bolls: "https://bolls.life/",
    phind: "https://www.phind.com/agent",
  };

  if (commandsMap[command]) {
    chrome.tabs.create({ url: commandsMap[command] });
  }
});
