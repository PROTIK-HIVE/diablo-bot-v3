module.exports.config = {
  name: "uid",
  author: "Protik Shah",
  description: "ইউজার আইডি বের করা"
};

module.exports.onStart = async function({ api, event }) {
  const mentionID = Object.keys(event.mentions)[0];
  const targetID = mentionID || event.senderID;
  return api.sendMessage(`🆔 **User ID:**\n\`${targetID}\``, event.threadID, event.messageID);
};
