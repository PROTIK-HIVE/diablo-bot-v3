module.exports.config = {
  name: "unsend",
  author: "Protik Shah",
  description: "বটের মেসেজ আনসেন্ড করা"
};

module.exports.onStart = async function({ api, event }) {
  if (event.type !== "message_reply") {
    return api.sendMessage("⚠️ বটের যে মেসেজটি আনসেন্ড করতে চাস সেটিতে রিপ্লাই দিয়ে !unsend লেখ!", event.threadID, event.messageID);
  }
  
  if (event.messageReply.senderID !== api.getCurrentUserID()) {
    return api.sendMessage("❌ আমি শুধু নিজের পাঠানো মেসেজই আনসেন্ড করতে পারবো!", event.threadID, event.messageID);
  }

  return api.unsendMessage(event.messageReply.messageID);
};
