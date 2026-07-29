module.exports.config = {
  name: "bot",
  author: "Protik Shah",
  description: "বট সম্পর্কিত তথ্য"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("🤖 আমি DIABLO BOT! প্রতীক শাহ বসের তৈরি সার্ভিস বট। কীভাবে সাহায্য করতে পারি?", event.threadID, event.messageID);
};
