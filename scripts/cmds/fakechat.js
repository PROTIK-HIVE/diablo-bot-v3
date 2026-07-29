module.exports.config = {
  name: "fakechat",
  author: "Protik Shah",
  description: "ফেক চ্যাট বানান"
};

module.exports.onStart = async function({ api, event, args }) {
  const msg = args.join(" ") || "আমি একটা মস্ত বড় আবাল!";
  return api.sendMessage(`💬 " ${msg} "\n\n— বলদ অফ দ্য ডে! 🤣`, event.threadID, event.messageID);
};
