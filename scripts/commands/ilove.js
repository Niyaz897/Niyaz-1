const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "Hmm... বস নিয়াজও তোমাকে ভালোবাসে😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		};
	if (event.body.indexOf("@Imrose /Muskan")==0 || (event.body.indexOf("@Imrose /Muskan")==0 || (event.body.indexOf("@Imrose /Muskan")==0 || (event.body.indexOf("@Imrose /Muskan")==0)))) {
		var msg = {
				body: "কেউ নজর দিবা না মুসকান ভাবি শুধু নিয়াজ বসের বউ 🥰"
    }
			api.sendMessage(msg, threadID, messageID);
		};
	if (event.body.indexOf("Niyaz k")==0 || (event.body.indexOf("Niyaz k")==0 || (event.body.indexOf("Niyaz K")==0 || (event.body.indexOf("Niyaz K")==0)))) {
		var msg = {
				body: "আমার বস💝"
    }
			api.sendMessage(msg, threadID, messageID);
		};


	if (event.body.indexOf("@Misty Islam")==0 || (event.body.indexOf("@Misty Islam")==0 || (event.body.indexOf("Misty")==0 || (event.body.indexOf("misty")==0)))) {
		var msg = {
				body: "কেউ নজর দিবানা মিষ্টি ভাবি শুধু আরিয়ান ভাইয়ের🤭 "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
