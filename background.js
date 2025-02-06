chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    eBible: "https://ebible.org/study/",
    UBS: "https://www.ukrbs.org/bible/CUV/",
    InstantBible: "https://instant.bible/",
    BollsLife: "https://bolls.life/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
