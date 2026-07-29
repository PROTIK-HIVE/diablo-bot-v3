module.exports.config = {
  name: "warn",
  author: "Protik Shah",
  description: "ইউজারকে ওয়ার্নিং দেওয়া"
};

module.exports.onStart = async function({ api, event }) {
  const mentionID = Object.keys(event.mentions)[0];
  if (!mentionID) return api.sendMessage("⚠️ কাকে ওয়ার্নিং দিবি ট্যাগ কর!", event.threadID, event.messageID);
  
  const name = event.mentions[mentionID].replace("@", "");
  return api.sendMessage(`⚠️ **WARNING:** ${name}-কে কড়া সতর্কবার্তা দেওয়া হলো! আরেকবার ফালতু কথা বললে কিক খাবি! 😡`, event.threadID, event.messageID);
};
