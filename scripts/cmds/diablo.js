const { GoogleGenAI } = require("@google/genai");

module.exports.config = {
  name: "diablo",
  author: "Protik Shah",
  description: "Diablo Gemini AI Roasting Brain"
};

module.exports.onStart = async function({ api, event, args }) {
  const input = args.join(" ");
  if (!input) {
    return api.sendMessage("মামা, কিছু না লিখে ফালতু ডাকবি না! পাঙ্গা নেওয়ার মানসিকতা নিয়ে কিছু লেখ! 🐸", event.threadID, event.messageID);
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return api.sendMessage("❌ Gemini API Key পাওয়া যায়নি! Render Environment Variables-এ GEMINI_API_KEY সেটিং কর মামা!", event.threadID, event.messageID);
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const systemPrompt = 
      "তোমার নাম 'Diablo'। তুমি একমাত্র লেখক প্রতীক শাহ (প্রতীক বস)-এর অফিসিয়াল পার্সোনাল অ্যাসিস্ট্যান্ট। " +
      "তুমি চরম চালাক, মারাত্মক টিজিং ও রোস্টিং টোনে কথা বলো। চ্যাটিংয়ে কেউ তর্কে জড়ালে নতুন নতুন যুক্তি দিয়ে তাকে নাজেহাল করবে। " +
      "প্রতীক বসকে সর্বোচ্চ সম্মান দেবে। উত্তর সংক্ষেপে ২-৪ লাইনে খাঁটি বাংলাদেশি ইনফরমাল ভাষায় দেবে।";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: input,
      config: { systemInstruction: systemPrompt }
    });

    return api.sendMessage(response.text || "তোর কথা শুনে আমার সার্কিটই শর্ট খেয়ে গেছে!", event.threadID, event.messageID);

  } catch (e) {
    return api.sendMessage("প্রতীক বসের অ্যাসিস্ট্যান্টের সাথে পাঙ্গা দিতে ব্রেন লাগে, যেটা তোর নাই! 😉🔥", event.threadID, event.messageID);
  }
};
