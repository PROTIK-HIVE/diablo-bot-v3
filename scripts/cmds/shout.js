module.exports.config = {
  name: "shout",
  author: "Protik Shah",
  description: "চিল্লায়ে কথা বলা"
};

module.exports.onStart = async function({ api, event, args }) {
  const text = args.join(" ");
  if (!text) return api.sendMessage("কী চিল্লাইয়া বলতে চাস লেখ!", event.threadID, event.messageID);
  return api.sendMessage(`📢 **${text.toUpperCase()} !!!** 🔊`, event.threadID, event.messageID);
};
