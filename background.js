chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    eBible: "https://ebible.org/study/",
    TSK: "https://www.tsk-online.com/TSK/",
    InstantBible: "https://instant.bible/",
    BollsLife: "https://bolls.life/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
