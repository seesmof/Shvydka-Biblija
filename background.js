chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    eBible: "https://ebible.org/study/",
    BlueLetterBible: "https://www.blueletterbible.org/",
    InstantBible: "https://instant.bible/",
    BollsLife: "https://bolls.life/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
