module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    
    const sourceEmbed = new Discord.MessageEmbed()
    .setTitle('Source Code Siesta chan Chatbot')
    .setColor('RANDOM')
    .addField('Click here for Source Code!', `🔗: [Click Here](https://github.com/MGalaCyber/Chatbot-AI-v1)`, true)
    .addField('Click here for Support My Discord Server!', `🔗: [Join Discord Server](https://discord.gg/2UshYsFfCP)`, true)
    .addField('NOTICE!', `This source code is public, it is forbidden to sell and buy this code, if you want to make a video tutorial or other things using this source code, please give credit from the owner, it is forbidden to change the content of the code, remove the credit in the code! All rights reserved!`)
    .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

    message.channel.send(sourceEmbed)
    .then(msg => msg.delete({ timeout: 30000 }));
    }

    module.exports.config = {
      name: 'sourcecode',
      aliases: ['src']
    }

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