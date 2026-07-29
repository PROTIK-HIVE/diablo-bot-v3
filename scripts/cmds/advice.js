module.exports.config = {
  name: "advice",
  author: "Protik Shah",
  description: "লাইফ এডভাইস"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("💡 **Advice:** অন্যের ড্রামায় মাথা না ঘামিয়ে চিপস আর কোক খেয়ে চিল করো! 🔥", event.threadID, event.messageID);
};
