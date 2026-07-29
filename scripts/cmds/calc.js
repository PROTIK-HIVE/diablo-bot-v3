module.exports.config = {
  name: "calc",
  author: "Pratik Shah",
  description: "নিরাপদ ক্যালকুলেটর"
};

module.exports.onStart = async function({ api, event, args }) {
  try {
    const expr = args.join(" ");
    if (!expr) return api.sendMessage("⚠️ কিছু একটা গাণিতিক ইনপুট দাও! যেমন: !calc 5+5", event.threadID, event.messageID);
    
    // নিরাপত্তা ফিল্টার (শুধু গাণিতিক অক্ষর অনুমোদন করে)
    if (!/^[0-9+\-*/.() ]+$/.test(expr)) {
      return api.sendMessage("⚠️ শুধু গাণিতিক সংখ্যা এবং চিহ্ন (+, -, *, /) ব্যবহার করো!", event.threadID, event.messageID);
    }

    const result = Function(`'use strict'; return (${expr})`)();
    return api.sendMessage(`🧮 **Result:** ${expr} = ${result}`, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage("⚠️ সঠিক গণিত সমীকরণ লেখো!", event.threadID, event.messageID);
  }
};
