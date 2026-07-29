module.exports.config = {
  name: "translate",
  author: "Protik Shah",
  description: "সহজ অনুবাদ"
};

module.exports.onStart = async function({ api, event, args }) {
  const text = args.join(" ");
  if (!text) return api.sendMessage("⚠️ কী অনুবাদ করতে চাস টেক্সট লেখ!", event.threadID, event.messageID);
  return api.sendMessage(`🌐 **Translation:**\nInput: ${text}\n(প্রতীক বসের রোস্টিং ল্যাঙ্গুয়েজ সব ভাষায় এক! 🔥)`, event.threadID, event.messageID);
};
