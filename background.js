chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    eBible: "https://ebible.org/study/",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
