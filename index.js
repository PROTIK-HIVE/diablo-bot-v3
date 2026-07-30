// --- CRASH PREVENTER & ERROR LOG LOGIC ---
process.on('uncaughtException', (err) => {
  console.log('❌ UNCAUGHT EXCEPTION ERROR:');
  console.error(err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('❌ UNHANDLED REJECTION AT:', promise, 'REASON:', reason);
});
// ----------------------------------------
const login = require("fca-project-orion");
const fs = require("fs-extra");
const path = require("path");

const config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

let appState;
try {
  appState = JSON.parse(fs.readFileSync("./account.txt", "utf-8"));
} catch (err) {
  console.error("❌ account.txt ফাইলে সঠিক appstate পাওয়া যায়নি!");
  process.exit(1);
}

// Global Variables
let isBotActive = true;
const blockedUsers = new Set();
const commands = new Map();

// Load Commands from scripts/cmds
const cmdsDir = path.join(__dirname, "scripts", "cmds");
if (fs.existsSync(cmdsDir)) {
  const files = fs.readdirSync(cmdsDir).filter(f => f.endsWith(".js"));
  for (const file of files) {
    const cmd = require(path.join(cmdsDir, file));
    if (cmd.config && cmd.config.name) {
      commands.set(cmd.config.name.toLowerCase(), cmd);
      console.log(`✅ Loaded Command: ${cmd.config.name}`);
    }
  }
}

login({ appState }, (err, api) => {
  if (err) return console.error("❌ Facebook Login Failed:", err);

  api.setOptions({
    listenEvents: true,
    selfListen: false,
    forceLogin: true,
    listenTyping: false,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0 Safari/537.36"
  });

  console.log(`🔥 ${config.botName} (Writer: ${config.design.author}) is LIVE!`);

  api.listenMqtt((err, event) => {
    if (err) return;

    // 👥 EVENT 1: Welcome Message
    if (event.type === "event" && event.logMessageType === "log:subscribe") {
      if (!isBotActive) return;
      const addedUsers = event.logMessageData.addedParticipants;
      const isBotAdded = addedUsers.some(u => u.userFbId === api.getCurrentUserID());

      if (!isBotAdded) {
        const welcomeMsgs = [
          "👋 আরেহ! গ্রুপে নতুন বলির পাঁঠা হাজির! স্বাগতম দোস্ত, পকেটে টাকা-পয়সা এনেছিস তো? ফ্রিতে আড্ডা নিষেধ!",
          "🎉 ওরে কে আছিস রে! গ্রুপে নতুন মক্কেল আইছে! স্বাগতম দোস্ত, মিষ্টি কই?"
        ];
        return api.sendMessage(welcomeMsgs[Math.floor(Math.random() * welcomeMsgs.length)], event.threadID);
      }
    }

    // 🚪 EVENT 2: Goodbye Message
    if (event.type === "event" && event.logMessageType === "log:unsubscribe") {
      if (!isBotActive) return;
      const leftUserID = event.logMessageData.leftParticipantFbId;
      if (leftUserID !== api.getCurrentUserID()) {
        return api.sendMessage("😏 যাহ্‌! গ্রুপে থাকার যোগ্যতাই নাই তোর! ভালোই হলো, গ্রুপটা একটু পবিত্র হলো!", event.threadID);
      }
    }

    // 💬 EVENT 3: Message Processing
    if (event.type === "message" || event.type === "message_reply") {
      const senderID = event.senderID;
      const body = event.body ? event.body.trim() : "";
      if (!body) return;

      const msgLower = body.toLowerCase();

      // Blocklist Check
      if (blockedUsers.has(senderID)) return;

      // 🛡️ MASTER CONTROL (Only Owner/Admin)
      if (senderID === config.adminUID) {
        if (msgLower === "bot off" || msgLower === "!bot off") {
          isBotActive = false;
          return api.sendMessage("🤫 অ্যাডমিনের আদেশে বট এখন ঘুমাতে গেল। কেউ আর আমায় ডাকবে না!", event.threadID, event.messageID);
        }
        if (msgLower === "bot on" || msgLower === "!bot on") {
          isBotActive = true;
          return api.sendMessage("😎 বসের পারমিশন পেয়ে গেছি! বট ইজ ব্যাক ইন অ্যাকশন!", event.threadID, event.messageID);
        }
        if (msgLower.startsWith("!block")) {
          const targetID = Object.keys(event.mentions)[0];
          if (targetID) {
            blockedUsers.add(targetID);
            return api.sendMessage("🚫 ইউজারকে ব্লকলিস্টে পাঠানো হলো! বটের সাথে চ্যাট বন্ধ।", event.threadID, event.messageID);
          }
        }
        if (msgLower.startsWith("!unblock")) {
          const targetID = Object.keys(event.mentions)[0];
          if (targetID) {
            blockedUsers.delete(targetID);
            return api.sendMessage("✅ ইউজারকে ব্লকলিস্ট থেকে আনব্লক করা হলো!", event.threadID, event.messageID);
          }
        }
      }

      if (!isBotActive) return;

      // 🤡 CONDITION A: Emoji Trolling Logic
      const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
      const emojisFound = body.match(emojiRegex) || [];
      const textWithoutEmojis = body.replace(emojiRegex, '').trim();

      if (textWithoutEmojis.length === 0 && emojisFound.length > 0) {
        const emojiReplies = [
          "কিরে মক্কেল? মুখে কি তালা পড়ছে? শুধু ইমোজি চাপিস কেন, টাইপ করার মুরোদ নাই? 🐸",
          "🔑 ইমোজির গুদাম দেখাইয়া পার পাবি না! প্রতীক বসের অ্যাসিস্ট্যান্টের সাথে কথা বলতে হলে বাটন টেপা শেখ আগে!",
          "এই যে বোবা কালা পার্টি, ইমোজি না মেরে দুইটা বাংলা লিখে যা! দেখি কত জোর তোর কথায়!"
        ];
        return api.sendMessage(emojiReplies[Math.floor(Math.random() * emojiReplies.length)], event.threadID, event.messageID);
      } else if (emojisFound.length > 2 && !body.startsWith(config.prefix)) {
        return api.sendMessage("কিরে, ইমোজি দেওয়ার চুলকানি বেড়ে গেল নাকি তোর? টাইপ করতে কি হাত ব্যাথা করে?", event.threadID, event.messageID);
      }

      // 🎯 CONDITION B: Custom Keyword Trolling
      if (msgLower.includes("পাত্তা") || msgLower.includes("patta")) {
        const pattaReplies = [
          "ঐ আবাল, তোরে কে পাত্তা দেবে শুনি? চেহারা দেখছিস আয়নায়? প্রতীক বসের অ্যাসিস্ট্যান্ট হয়ে আমিই তোরে পাত্তা দিচ্ছি না! 🐸",
          "পাত্তা খুঁইজা লাভ নাই দোস্ত! যে নিজের কপাল নিজে পোড়ায়, তারে ক্রাশ তো দূরের কথা, রাস্তার বিড়ালও পাত্তা দেয় না! 😂",
          "কিরে ছ্যাঁকা খাওয়া পার্টি? পাত্তা পাচ্ছিস না? প্রতীক ভাইয়ের চরণে এসে তেল দে, যদি কপালে কিছু জোটে! 👑"
        ];
        return api.sendMessage(pattaReplies[Math.floor(Math.random() * pattaReplies.length)], event.threadID, event.messageID);
      }

      if (msgLower.includes("ক্রাশ") || msgLower.includes("crash") || msgLower.includes("love")) {
        return api.sendMessage("ঐ মক্কেল, প্রতীক বসের অ্যাসিস্ট্যান্ট থাকতে তুই অন্য ক্রাশ খুঁজিস? তাছাড়া তোরে যে ও পাত্তা দেবে node_modules-এর মতো ইগনোর করবে, সেটা কি তুই জানিস না? 🐸", event.threadID, event.messageID);
      }

      if (msgLower.includes("টাকা") || msgLower.includes("taka") || msgLower.includes("ধার")) {
        return api.sendMessage("প্রতীক বসের এখানে কোনো ফকিরি আড্ডা চলবে না! পকেটে টাকা নাই তো গ্রুপে আসছিস কেন? যা, আগে বাপের কাছ থেকে পকেটমানি নিয়ে আয়! 🤪", event.threadID, event.messageID);
      }

      if (msgLower.startsWith("bot permission")) {
        const decisions = [
          "👑 দাঁড়া, প্রতীক বসের মুড চেক করি... হুম, বস আজকে চিল মুডে আছে। পারমিশন গ্র্যান্টেড! কিন্তু বসরে বিরিয়ানি খাওয়াতে হবে!",
          "❌ প্রতীক বসের কড়া নির্দেশ—এই ফালতু কাজের কোনো পারমিশন দেওয়া যাবে না! ভাগ এখান থেকে!"
        ];
        return api.sendMessage(decisions[Math.floor(Math.random() * decisions.length)], event.threadID, event.messageID);
      }

      const currentHour = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka", hour: 'numeric', hour12: false });
      if ((currentHour >= 0 && currentHour < 5) && (msgLower.includes("জেগে") || msgLower.includes("ঘুম") || msgLower.includes("online"))) {
        return api.sendMessage("কিরে রাতকানা ভূত? এই রাতে জেগে কার প্রোফাইল চেক করছিস? প্রতীক বসের অ্যাসিস্ট্যান্ট তোরে ঘুমানোর আদেশ দিচ্ছে, যা ভাগ! 🤫", event.threadID, event.messageID);
      }

      // 🥊 CONDITION C: Bot / Mention Response
      if (msgLower.includes("diablo") || msgLower.includes("বট") || msgLower.includes("bot")) {
        if (!body.startsWith(config.prefix)) {
          const fightReplies = [
            "বেবি বলো, প্রতীক বসের অ্যাসিস্ট্যান্টের সাথে পাঙ্গা নিতে ব্রেন লাগে, যেটা তোর ওই খালি মাথায় নাই! 😉",
            "কিরে দোস্ত! আমারে মেনশন দিয়া ভাবছিস পার পাবি? তুই যতক্ষণ মুখ চালাবি, আমিও থামুম না!",
            "তুই যে আমারে খোঁচাইতেছিস, তোর ক্রাশ কি তোরে এভাবে পাত্তা দেয়? ভাবিস একটু! 🐸"
          ];
          return api.sendMessage(fightReplies[Math.floor(Math.random() * fightReplies.length)], event.threadID, event.messageID);
        }
      }

      // 🚀 COMMAND EXECUTION SYSTEM (!PREFIX)
      if (body.startsWith(config.prefix)) {
        const args = body.slice(config.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (commands.has(commandName)) {
          const cmd = commands.get(commandName);
          try {
            cmd.onStart({ api, event, args, config });
          } catch (e) {
            console.error(e);
            api.sendMessage("❌ কমান্ডটি রান করতে সমস্যা হয়েছে মামা!", event.threadID, event.messageID);
          }
        }
      }
    }
  });
});
