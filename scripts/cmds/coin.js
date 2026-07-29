module.exports.config = {
  name: "coin",
  author: "Protik Shah",
  description: "টস করা"
};

module.exports.onStart = async function({ api, event }) {
  const res = Math.random() > 0.5 ? "HEADS 🪙" : "TAILS 🪙";
  return api.sendMessage(`🪙 **Coin Toss:** ফলাফল হলো **${res}**!`, event.threadID, event.messageID);
};
