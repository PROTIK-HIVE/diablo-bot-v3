module.exports.config = {
  name: "roll",
  author: "Protik Shah",
  description: "লুডু ডাইস রোল"
};

module.exports.onStart = async function({ api, event }) {
  const dice = Math.floor(Math.random() * 6) + 1;
  return api.sendMessage(`🎲 **Dice Roll:** তুই পেলি **${dice}**!`, event.threadID, event.messageID);
};
