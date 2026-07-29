module.exports.config = {
  name: "quote",
  author: "Protik Shah",
  description: "অনুপপ্রেরণামূলক উক্তি"
};

module.exports.onStart = async function({ api, event }) {
  const quotes = [
    "💬 'সাফল্য একদিনে আসে না, তবে প্রতিদিনের পরিশ্রমে একদিন ঠিকই আসে।' — প্রতীক শাহ",
    "💬 'তোমার জীবনের গল্পের লেখক তুমি নিজেই, তাই চরিত্রগুলো শক্ত করে গড়ে তোলো।'",
    "💬 'কঠিন বাস্তবতার মুখোমুখি হওয়াটাই জীবন সংগ্রামের আসল সৌন্দর্য।'"
  ];
  return api.sendMessage(quotes[Math.floor(Math.random() * quotes.length)], event.threadID, event.messageID);
};
