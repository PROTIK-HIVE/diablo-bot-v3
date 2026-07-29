module.exports.config = {
  name: "say",
  author: "Protik Shah",
  description: "বট দিয়ে কথা বলানো"
};

module.exports.onStart = async function({ api, event, args }) {
  const text = args.join(" ");
  if (!text) return api.sendMessage("⚠️ বটকে দিয়ে কী বলাতে চাস তা লেখ!", event.threadID, event.messageID);
  return api.sendMessage(`🗣️ **Diablo Says:** ${text}`, event.threadID, event.messageID);
};
