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

const commands = new Map();

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
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0 Safari/537.36"
  });

  console.log(`🔥 ${config.botName} (Writer: ${config.design.author}) is LIVE!`);

  api.listenMqtt((err, event) => {
    if (err) return;

    if (event.type === "message" || event.type === "message_reply") {
      const body = event.body ? event.body.trim() : "";
      if (!body.startsWith(config.prefix)) return;

      const args = body.slice(config.prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      if (commands.has(commandName)) {
        const cmd = commands.get(commandName);
        try {
          cmd.onStart({ api, event, args, config });
        } catch (e) {
          api.sendMessage("❌ কমান্ডটি কাজ করতেছে না মামা!", event.threadID, event.messageID);
        }
      } else {
        api.sendMessage(`অ্যাঁ? '${commandName}' নামের কোনো কমান্ড নাই! সঠিক কমান্ড জানতে ${config.prefix}help লেখ! 🥱`, event.threadID, event.messageID);
      }
    }
  });
});
