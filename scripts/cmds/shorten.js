module.exports.config = {
  name: "shorten",
  author: "Protik Shah",
  description: "লিংক শর্টনার"
};

module.exports.onStart = async function({ api, event, args }) {
  const url = args[0];
  if (!url) return api.sendMessage("⚠️ শর্ট করার জন্য একটা সঠিক URL লিংক দাও!", event.threadID, event.messageID);
  return api.sendMessage(`🔗 **Shortened URL:** https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`, event.threadID, event.messageID);
};
