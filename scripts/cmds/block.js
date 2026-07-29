module.exports.config = {
  name: "block",
  author: "Protik Shah",
  description: "ইউজার ব্লক করা"
};

module.exports.onStart = async function({ api, event, args }) {
  if (!args[0]) return api.sendMessage("⚠️ কাকে ব্লক করতে চাও তা উল্লেখ করো!", event.threadID, event.messageID);
  return api.sendMessage(`🚫 ${args.join(" ")} কে সফলভাবে ব্লক করা হয়েছে!`, event.threadID, event.messageID);
};
