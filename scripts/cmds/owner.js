module.exports.config = {
  name: "owner",
  author: "Protik Shah",
  description: "বট অনার তথ্য"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("👑 **DIABLO Owner:**\nপ্রতীক শাহ (Pratik Shah) - অফিশিয়াল লেখক এবং Diablo Bot-এর রূপকার!", event.threadID, event.messageID);
};
