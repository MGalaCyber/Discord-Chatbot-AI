const Chat = require('clever-chat')
require("./inline.js");
const chatSend = async (message) => {
    const chat = new Chat({ name: "AI Chatbot", gender: "female", developer_name: "GalaXd#9165", user: message.author.id, language: "en" });
    //get more customisations at https://npmjs.com/package/clever-chat. TypeScript supported.
   
      message.channel.startTyping()
      let reply = await chat.chat(message.content).then(reply => {
          message.sendInline(reply, { allowedMentions: { repliedUser: false } }); 
          //you can set it to true!
          message.channel.stopTyping()
          
      })
console.log(reply)
}

module.exports = {
    chatSend
};

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\                  Bot Coded by GalaXd#9165                   \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */