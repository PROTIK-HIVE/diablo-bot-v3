module.exports.config = {
  name: "confess",
  author: "Protik Shah",
  description: "গোপন কনফেশন"
};

module.exports.onStart = async function({ api, event, args }) {
  const text = args.join(" ");
  if (!text) return api.sendMessage("কী গোপন কথা স্বীকার করতে চাস লিখে পাঠা মামা! 🤫", event.threadID, event.messageID);
  return api.sendMessage(`💘 **Anonymous Confession:**\n"${text}"\n\n(গোপন বার্তাটি ছড়িয়ে দেওয়া হলো! 🤫)`, event.threadID, event.messageID);
};
