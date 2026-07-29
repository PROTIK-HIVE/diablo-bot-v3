module.exports.config = {
  name: "uptime",
  author: "Protik Shah",
  description: "বট কতক্ষণ ধরে রানিং"
};

module.exports.onStart = async function({ api, event }) {
  const time = process.uptime();
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return api.sendMessage(`⏰ **DIABLO Uptime:**\nবটটি অবিরাম চলছে: ${hours} ঘণ্টা, ${minutes} মিনিট, ${seconds} সেকেন্ড ধরে! 🔥`, event.threadID, event.messageID);
};
