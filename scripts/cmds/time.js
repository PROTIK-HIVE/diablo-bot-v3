module.exports.config = {
  name: "time",
  author: "Protik Shah",
  description: "বর্তমান সময় ও তারিখ"
};

module.exports.onStart = async function({ api, event }) {
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  return api.sendMessage(`🕒 **Current Time (BD):**\n${now}`, event.threadID, event.messageID);
};
