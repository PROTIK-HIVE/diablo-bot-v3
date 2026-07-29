module.exports.config = {
  name: "flirt",
  author: "Protik Shah",
  description: "ফ্লার্টিং মেসেজ"
};

module.exports.onStart = async function({ api, event }) {
  const flirts = [
    "😉 তোর চোখ দেখে মনে হচ্ছে তুই আজ রাতে প্রতীক বসের নতুন গল্প পড়ে ঘুমাবি!",
    "✨ তোর সাথে কথা বললে আমার চ্যাটিং অ্যালগরিদমও রোমান্টিক হয়ে যায়!",
    "🙈 এত সুন্দর মেসেজ টাইপ করিস কীভাবে? আমার তো ইমোজি ক্র্যাশ খাইছে!"
  ];
  return api.sendMessage(flirts[Math.floor(Math.random() * flirts.length)], event.threadID, event.messageID);
};
