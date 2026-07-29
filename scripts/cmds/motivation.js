module.exports.config = {
  name: "motivation",
  author: "Protik Shah",
  description: "মোটিভেশনাল স্পিচ"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage("🚀 **Motivation:** তুইও একদিন ইতিহাস গড়বি... যদি সারাদিন ফেসবুকে ফালতু চ্যাটিং আর আড্ডা বন্ধ করিস! 🥱", event.threadID, event.messageID);
};
