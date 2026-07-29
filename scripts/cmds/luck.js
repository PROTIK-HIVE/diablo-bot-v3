module.exports.config = {
  name: "luck",
  author: "Pratik Shah",
  description: "ভাগ্যের শতাংশ জানা"
};

module.exports.onStart = async function({ api, event }) {
  const percentage = Math.floor(Math.random() * 101);
  return api.sendMessage(`🍀 **Luck Percentage:** তোর আজকের ভাগ্য **${percentage}%** ভালো!`, event.threadID, event.messageID);
};
