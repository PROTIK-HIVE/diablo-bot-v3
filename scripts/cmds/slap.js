module.exports.config = {
  name: "slap",
  author: "Protik Shah",
  description: "কষে থাপ্পড় দেওয়া"
};

module.exports.onStart = async function({ api, event }) {
  const mentionID = Object.keys(event.mentions)[0];
  if (!mentionID) return api.sendMessage("👋 কাকে থাপ্পড় মারবি ট্যাগ কর মামা!", event.threadID, event.messageID);
  
  const name = event.mentions[mentionID].replace("@", "");
  return api.sendMessage(`👋 💥 **SLAP!** প্রতীক বসের আদেশে ${name}-কে কষে একটা গালে থাপ্পড় মারা হলো! কান গরম হয়ে গেছে নিশ্চয়ই? 😂`, event.threadID, event.messageID);
};
