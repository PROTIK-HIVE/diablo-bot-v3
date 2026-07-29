module.exports.config = {
  name: "adminlist",
  author: "Pratik Shah",
  description: "এডমিন লিস্ট"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage(`🛡️ **Group Admins:**
১. প্রতীক শাহ (Main Owner)
২. DIABLO Admin Bot`, event.threadID, event.messageID);
};
