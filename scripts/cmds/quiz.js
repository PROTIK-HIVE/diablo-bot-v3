module.exports.config = {
  name: "quiz",
  author: "Protik Shah",
  description: "কুইজ গেম"
};

module.exports.onStart = async function({ api, event }) {
  const quizzes = [
    "🧠 **Quiz:** ফুটবলে সবচেয়ে বেশি ব্যালনের ডি'অর ও সেরা অর্জনের খতিয়ান কার? (উত্তর দে দেখি!)",
    "🧠 **Quiz:** জাপানের জাতীয় ফুটবল টিমকে কী নামে ডাকা হয়? (Samurai Blue নাকি অন্য কিছু?)",
    "🧠 **Quiz:** Free Fire গেমটি কোন কোম্পানি রিলিজ করেছিল?"
  ];
  return api.sendMessage(quizzes[Math.floor(Math.random() * quizzes.length)], event.threadID, event.messageID);
};
