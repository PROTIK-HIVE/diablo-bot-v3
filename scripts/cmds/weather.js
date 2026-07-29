module.exports.config = {
  name: "weather",
  author: "Protik Shah",
  description: "আবহাওয়া আপডেট"
};

module.exports.onStart = async function({ api, event, args }) {
  const location = args.join(" ") || "Dhaka";
  return api.sendMessage(`🌤️ **Weather Update for ${location}:**\nআকাশ মেঘলা থাকতে পারে, সাথে হালকা শীতল বাতাস অথবা প্রতীক বসের রোস্টিং ঝড়ের সম্ভাবনা রয়েছে! ⚡`, event.threadID, event.messageID);
};
