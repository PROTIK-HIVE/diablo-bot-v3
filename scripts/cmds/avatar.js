module.exports.config = {
  name: "avatar",
  author: "Pratik Shah",
  description: "প্রোফাইল পিকচার লিংক"
};

module.exports.onStart = async function({ api, event }) {
  const targetID = Object.keys(event.mentions)[0] || event.senderID;
  return api.sendMessage(`🖼️ **Avatar Link:** https://graph.facebook.com/${targetID}/picture?height=720&width=720`, event.threadID, event.messageID);
};
