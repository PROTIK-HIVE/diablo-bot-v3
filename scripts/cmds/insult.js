module.exports.config = {
  name: "insult",
  author: "Pratik Shah",
  description: "খোঁচা মারার কমান্ড"
};

module.exports.onStart = async function({ api, event }) {
  const insults = [
    "তোর সাথে কথা বলা আর দেওয়ালের সাথে মাথা কোটা একই কথা! 🐸",
    "তোর ব্রেন কিন্তু সেকেন্ড-হ্যান্ড মার্কেটেও বিক্রি হবে না, কারণ কেউ কিনবেই না! 😂",
    "তোর ভাব দেখে মনে হয় তুই দুনিয়ার সব জানিস, কিন্তু কাজের বেলায় জিরো! 🗿"
  ];
  return api.sendMessage(insults[Math.floor(Math.random() * insults.length)], event.threadID, event.messageID);
};
