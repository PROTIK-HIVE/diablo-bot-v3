module.exports.config = {
  name: "crypto",
  author: "Pratik Shah",
  description: "ক্রিপ্টো আপডেট"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("🪙 **Crypto Alert:** বিটকয়েন আর ক্রিপ্টোর মার্কেট সবসময়ই চাঙ্গা! লস খেলে কাঁদিবি না, লাভ হলে প্রতীক বসকে ট্রিট দিবি! 🚀", event.threadID, event.messageID);
};
