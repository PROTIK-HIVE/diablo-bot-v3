module.exports.config = {
  name: "help",
  author: "Pratik Shah",
  description: "হেল্প কমান্ড"
};

module.exports.onStart = async function({ api, event, config }) {
  const msg = `🔥 ${config.botName} 🔥\n\nউপলব্ধ কমান্ড:\n👉 ${config.prefix}roast\n👉 ${config.prefix}help\n\nতোর বাকি রোস্টিং কমান্ডও এড করা যাবে মামা! 😎`;
  return api.sendMessage(msg, event.threadID, event.messageID);
};
