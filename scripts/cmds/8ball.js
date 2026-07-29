module.exports.config = {
  name: "8ball",
  author: "Protik Shah",
  description: "Magic 8-Ball"
};

module.exports.onStart = async function({ api, event, args }) {
  const answers = ["হ্যাঁ, অবশ্যই!", "ভুলে যাও!", "সম্ভাবনা কম।", "হতেও পারে!", "নিশ্চিতভাবে বলা যাচ্ছে না।"];
  const ans = answers[Math.floor(Math.random() * answers.length)];
  return api.sendMessage(`🎱 **Magic 8-Ball:** ${ans}`, event.threadID, event.messageID);
};
