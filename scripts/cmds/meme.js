module.exports.config = {
  name: "meme",
  author: "Protik Shah",
  description: "মিম মেসেজ"
};

module.exports.onStart = async function({ api, event }) {
  const memes = [
    "🐸 যখন তুই ভাবছিলি তুই গ্রুপের প্রো, ঠিক তখনই প্রতীক বস চ্যাটে ঢুকলো!",
    "🗿 তুই যখন কাউকে বিশাল রচনা লিখে মেসেজ দিবি আর সে উত্তর দেবে 'হ'!",
    "😂 পরীক্ষা শেষ হওয়ার পর যখন মনে হয় ভালো হইছে, কিন্তু রেজাল্টের দিন কপাল পোড়ে!"
  ];
  return api.sendMessage(memes[Math.floor(Math.random() * memes.length)], event.threadID, event.messageID);
};
