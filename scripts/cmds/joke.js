module.exports.config = {
  name: "joke",
  author: "Protik Shah",
  description: "মজার জোকস"
};

module.exports.onStart = async function({ api, event }) {
  const jokes = [
    "😂 এক বলদ আরেক বলদকে বলছে: দোস্ত, তুই এত গাধা কেন? - উত্তর: প্রতীক বস এখনো আমার ওপর কোনো গল্প লেখে নাই তাই!",
    "🤣 শিক্ষক: বলতো পৃথিবীর সবচেয়ে হালকা জিনিস কী?\nছাত্র: ফেসবুক লাইক! সামান্য বাতাস আসলেও উড়ে যায়!",
    "🤪 বলদ ১: দোস্ত, তোরে তো খুব চিন্তিত মনে হচ্ছে?\nবলদ ২: আর বলিস না, পাসওয়ার্ড ভুলে গেছি!\nবলদ ১: লিখে রাখিস নাই?\nবলদ ২: রাখছিলাম, কিন্তু পাসওয়ার্ড ডায়েরি খোলার চাবিটাও হারায় ফেলছি!"
  ];
  return api.sendMessage(jokes[Math.floor(Math.random() * jokes.length)], event.threadID, event.messageID);
};
