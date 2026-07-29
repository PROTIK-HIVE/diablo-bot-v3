module.exports.config = {
  name: "truth",
  author: "Protik Shah",
  description: "ট্রুথ প্রশ্ন"
};

module.exports.onStart = async function({ api, event }) {
  const truths = [
    "🙈 **Truth:** তুই শেষ কবে নিজের পকেটের টাকায় বন্ধুদের খাইয়েছিলি?",
    "🙈 **Truth:** গ্রুপে কাকে তোর সবচেয়ে বেশি ফালতু মনে হয়? সত্যি বলবি!",
    "🙈 **Truth:** তুই কি গোপনে কারও প্রোফাইলে দিনে ৩ বার গিয়ে ছবি দেখিস?",
    "🙈 **Truth:** তোর জীবনের সবচেয়ে হাস্যকর বা লজ্জাজনক ঘটনা কী?"
  ];
  return api.sendMessage(truths[Math.floor(Math.random() * truths.length)], event.threadID, event.messageID);
};
