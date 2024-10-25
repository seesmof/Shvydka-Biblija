chrome.commands.onCommand.addListener((command) => {
  const commandsMap = {
    YouVersion:
      "https://www.bible.com/uk/users/OlegOnyshchenko504/reading-plans",
    BollsLife: "https://bolls.life/",
    eBible: "https://ebible.org/study/",
  };

  if (commandsMap[command]) {
    chrome.tabs.create({ url: commandsMap[command] });
  }
});
