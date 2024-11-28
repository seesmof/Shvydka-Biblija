chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    Bolls: "https://bolls.life/",
    eBible: "https://ebible.org/study/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
