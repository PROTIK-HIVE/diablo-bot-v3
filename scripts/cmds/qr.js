module.exports.config = {
  name: "qr",
  author: "Protik Shah",
  description: "কাস্টম কিউআর কোড জেনারেটর"
};

module.exports.onStart = async function({ api, event, args }) {
  const text = args.join(" ");
  if (!text) return api.sendMessage("⚠️ কীসের QR কোড বানাবি টেক্সট বা লিংক লেখ!", event.threadID, event.messageID);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
  return api.sendMessage(`📱 **Your QR Code:**\n${qrUrl}`, event.threadID, event.messageID);
};
