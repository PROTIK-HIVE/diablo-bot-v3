module.exports.config = {
  name: "ping",
  author: "Pratik Shah",
  description: "বট স্পিড টেস্ট"
};

module.exports.onStart = async function({ api, event }) {
  const timeStart = Date.now();
  await api.sendMessage("🏓 Pong...", event.threadID, (err, info) => {
    if (info) {
      const latency = Date.now() - timeStart;
      api.sendMessage(`⚡ **Ping:** প্রতীক বসের বট একদম সুপারফাস্ট স্পিডে রানিং! Latency: ${latency}ms 🔥`, event.threadID, info.messageID);
    }
  });
};
