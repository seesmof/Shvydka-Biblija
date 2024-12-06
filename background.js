chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    eBible: "https://ebible.org/study/",
    BlueLetterBible: "https://www.blueletterbible.org/",
    YouVersion: "https://www.bible.com/users/OlegOnyshchenko504/reading-plans",
    BibleHub: "https://biblehub.com/bsb/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
