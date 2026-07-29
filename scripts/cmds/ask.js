module.exports.config = {
  name: "ask",
  author: "Protik Shah",
  description: "প্রশ্ন জিজ্ঞাসা করা"
};

module.exports.onStart = async function({ api, event, args }) {
  const question = args.join(" ");
  if (!question) return api.sendMessage("❓ প্রশ্নটি লেখো!", event.threadID, event.messageID);
  return api.sendMessage("💭 ভেবে দেখছি... উত্তর হলো: ১০০% সত্যি!", event.threadID, event.messageID);
};
