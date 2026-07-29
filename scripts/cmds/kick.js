module.exports.config = {
  name: "kick",
  author: "Pratik Shah",
  description: "মেম্বার কিক দেওয়া"
};

module.exports.onStart = async function({ api, event }) {
  const mentionID = Object.keys(event.mentions)[0];
  if (!mentionID) return api.sendMessage("⚠️ কাকে কিক মারবি ট্যাগ কর মামা!", event.threadID, event.messageID);
  
  try {
    await api.removeUserFromGroup(mentionID, event.threadID);
    return api.sendMessage("🚪 দূর হ এখান থেকে! গ্রুপ খালি করা হলো!", event.threadID);
  } catch (e) {
    return api.sendMessage("❌ কিক মারা গেল না! হয়তো বটের এডমিন পারমিশন নাই!", event.threadID, event.messageID);
  }
};
