module.exports.config = {
  name: "rules",
  author: "Protik Shah",
  description: "গ্রুপের নিয়মাবলী"
};

module.exports.onStart = async function({ api, event }) {
  return api.sendMessage(`📜 **Group Rules:**
১. কোনো ফালতু ঝগড়া করা যাবে না।
২. প্রতীক শাহ বসকে কোনো প্রকার বেয়াদবি করা চলবে না।
৩. চ্যাটে এসে শুধু ইমোজি মারলে কড়া রোস্টিং খাবি!
৪. সুখে-শান্তিতে চিল কর! 🔥`, event.threadID, event.messageID);
};
