module.exports.config = {
  name: "dare",
  author: "Protik Shah",
  description: "ড্যার চ্যালেঞ্জ"
};

module.exports.onStart = async function({ api, event }) {
  const dares = [
    "🔥 **Dare:** গ্রুপের সবাইকে একটানা ৫ বার বল: 'আমি বলদ, প্রতীক বস সেরা!'",
    "🔥 **Dare:** তোর ক্রাশকে গিয়া মেসেজ দে 'আমি তোকে মিস করতেছি!'",
    "🔥 **Dare:** ভয়েস মেসেজ পাঠায়া একটা গান গেয়ে শোনা!",
    "🔥 **Dare:** গ্রুপের সবচেয়ে রাগি মানুষটারে মেনশন দিয়া একটা কিউট ইমোজি পাঠা!"
  ];
  return api.sendMessage(dares[Math.floor(Math.random() * dares.length)], event.threadID, event.messageID);
};
