module.exports.config = {
  name: "football",
  author: "Protik Shah",
  description: "ফুটবল ট্রাইভিয়া"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("⚽ **Football Hub:**\nCR7 ইজ দ্য গোট (GOAT)! আর জাপান জাতীয় টিমের ইতিহাস নিয়ে বেশি তর্ক করবি না! 🏆", event.threadID, event.messageID);
};
