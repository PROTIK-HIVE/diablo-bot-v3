module.exports.config = {
  name: "tid",
  author: "Protik Shah",
  description: "গ্রুপের থ্রেড আইডি"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage(`🆔 **Thread ID (Group ID):**\n\`${event.threadID}\``, event.threadID, event.messageID);
};
