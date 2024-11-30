chrome.commands.onCommand.addListener((commandName) => {
  const commandNameToUrl = {
    Bolls: "https://bolls.life/",
    eBible: "https://ebible.org/study/",
    DailyVerse: "https://dailyverses.net/random-bible-verse/kjv",
  };
  chrome.tabs.create({ url: commandNameToUrl?.[commandName] });
});
