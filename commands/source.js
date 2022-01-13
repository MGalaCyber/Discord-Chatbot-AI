module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const sourceEmbed = new Discord.MessageEmbed()
    .setTitle('Source Code Siesta chan Chatbot')
    .setColor('RANDOM')
	.addField('Click here for Source Code!', `🔗: [Click Here](https://github.com/MGalaCyber/Chatbot-AI-v1)`, true)
	.addField('Click here for Support My Discord Server!', `🔗: [Join Discord Server](https://discord.gg/2UshYsFfCP)`, true)
	.addField('NOTICE!', `This source code is public, it is forbidden to sell this code, if you want to make a video tutorial or other things using this source code, please give credit from the owner, it is forbidden to change the content of the code, remove the credit in the code! All Rights Reserved!`)
	.setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(sourceEmbed);
    }

    module.exports.config = {
      name: 'sourcecode',
      aliases: ['src']
    }

/**
////////////////////////////////////////////////////////////////////
///																 ///
/// 			     Bot Coded by GalaXd#9165					 ///
///																 ///
///   Work for MGalaCyber Development | https://mgalacyber.xyz   ///
///																 ///
/// 			    	All Right Reserved!						 ///
///																 ///
////////////////////////////////////////////////////////////////////
 */
