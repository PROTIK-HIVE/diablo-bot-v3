module.exports.config = {
  name: "boss",
  author: "Pratik Shah",
  description: "Owner Details"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("👑 **প্রতীক শাহ (Pratik Shah)**\nঅফিসিয়াল লেখক, Free Fire Level 65 প্রো প্লেয়ার এবং Diablo-এর আলটিমেট বস! 🔥", event.threadID, event.messageID);
};
