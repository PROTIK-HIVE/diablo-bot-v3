module.exports.config = {
  name: "dict",
  author: "Protik Shah",
  description: "ডিকশনারি সার্চ"
};

module.exports.onStart = async function({ api, event, args }) {
  const word = args.join(" ");
  if (!word) return api.sendMessage("কোন শব্দের অর্থ খুঁজতে চাস? লিখে জানা!", event.threadID, event.messageID);
  return api.sendMessage(`📖 **Dictionary:** '${word}' শব্দের অর্থ হলো—ফালতু প্রশ্ন না করে মনোযোগ দিয়ে পড়াশোনা কর! 😂`, event.threadID, event.messageID);
};
