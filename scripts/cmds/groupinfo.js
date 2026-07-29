module.exports.config = {
  name: "groupinfo",
  author: "Pratik Shah",
  description: "গ্রুপের তথ্য"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage(`📊 **Group Info:**\n Thread ID: ${event.threadID}\n Status: প্রতীক বসের চিলিং জোন! 🔥`, event.threadID, event.messageID);
};
