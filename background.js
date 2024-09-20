chrome.commands.onCommand.addListener((command) => {
  const commandsMap = {
    BlueLetterBIBLE: "https://www.blueletterbible.org/study/hta/hta.cfm#s=1",
    bolls: "https://bolls.life/",
  };

  if (commandsMap[command]) {
    chrome.tabs.create({ url: commandsMap[command] });
  }
});
