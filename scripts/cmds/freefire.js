module.exports.config = {
  name: "freefire",
  author: "Protik Shah",
  description: "ফ্রি ফায়ার আপডেট"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("🎮 **Free Fire Stats:**\nপ্রতীক বসের লেভেল: 65 (Heroic Emblem) 🔥\nতোর লেভেল: বট প্লেয়ার! আগে ভালো করে গেম খেলা শেখ!", event.threadID, event.messageID);
};
