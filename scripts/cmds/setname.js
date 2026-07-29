module.exports.config = {
  name: "setname",
  author: "Protik Shah",
  description: "নিকনেম চেঞ্জ করা"
};

module.exports.onStart = async function({ api, event, args }) {
  const name = args.join(" ");
  const mentionID = Object.keys(event.mentions)[0];
  const targetID = mentionID || event.senderID;
  const cleanName = mentionID ? name.replace(event.mentions[mentionID], "").trim() : name;

  try {
    await api.changeNickname(cleanName, event.threadID, targetID);
    return api.sendMessage("✅ নিকনেম সফলভাবে পরিবর্তন করা হয়েছে!", event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage("❌ নিকনেম চেঞ্জ করতে সমস্যা হয়েছে!", event.threadID, event.messageID);
  }
};
