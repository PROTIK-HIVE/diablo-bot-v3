module.exports.config = {
  name: "me",
  author: "Protik Shah",
  description: "নিজের তথ্য"
};

module.exports.onStart = async function({ api, event }) {
  const senderID = event.senderID;
  return api.sendMessage(`👤 **User Profile:**\n🆔 User ID: ${senderID}\n✨ Status: গ্রুপের একজন একটিভ মক্কেল!`, event.threadID, event.messageID);
};
