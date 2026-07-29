module.exports.config = {
  name: "rps",
  author: "Protik Shah",
  description: "রক পেপার সিজার গেম"
};

module.exports.onStart = async function({ api, event, args }) {
  const userChoice = (args[0] || "").toLowerCase();
  if (!["rock", "paper", "scissors"].includes(userChoice)) {
    return api.sendMessage("⚠️ লিখতে হবে: !rps rock, !rps paper অথবা !rps scissors", event.threadID, event.messageID);
  }
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];
  
  let result = "";
  if (userChoice === botChoice) result = "টাই হয়েছে! 🤝";
  else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) result = "তুই জিতে গেছিস মামা! 🎉";
  else result = "প্রতীক বসের বট জিতেছে! তুই হেরে গেছিস! 😜";

  return api.sendMessage(`🎮 **RPS Game:**\nতুই দিলি: ${userChoice}\nবট দিল: ${botChoice}\n👉 **ফলাফল:** ${result}`, event.threadID, event.messageID);
};
