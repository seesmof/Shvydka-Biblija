chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    eBible: "https://ebible.org/study/",
    BlueLetterBible: "https://www.blueletterbible.org/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
