module.exports.config = {
  name: "mathgame",
  author: "Protik Shah",
  description: "সহজ ম্যাথ গেম"
};

module.exports.onStart = async function({ api, event }) {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  return api.sendMessage(`🧮 **Math Game:** বলতো দেখি, ${num1} + ${num2} = কত?\n(ঝটপট উত্তর দে মামা!)`, event.threadID, event.messageID);
};
