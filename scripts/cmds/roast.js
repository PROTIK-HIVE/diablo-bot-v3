module.exports.config = {
  name: "roast",
  author: "Protik Shah",
  description: "আইকনিক রোস্টিং কমান্ড"
};

const roasts = [
  "তোর মতো আবালরে রোস্ট করতে গিয়া আমার আইকিউ লেভেল ১০ গুণ কইমা যাইবো! 🥱",
  "তোর মাথায় যে বুদ্ধিসুদ্ধি নাই, এইটা কি তুই জন্ম থেকেই জানস নাকি ইদানীং আবিষ্কার করছস? 🗿",
  "আমারে খোঁচা দিতে আসিস না মামা, Diablo Bot-এর রোস্টিং সহ্য করার ক্ষমতা তোর ডাটা প্যাকের নাই! 🔥"
];

module.exports.onStart = async function({ api, event }) {
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  return api.sendMessage(randomRoast, event.threadID, event.messageID);
};
