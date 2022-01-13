module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('❓ Help Menu')
    .setColor('RANDOM')
    .addField('Setchat', `${process.env.PREFIX}setchat`, true)
    .addField('Invite', `${process.env.PREFIX}invite`, true)
	.addField('Vote bot', `${process.env.PREFIX}vote`, true)
	.addField('Check Latency', `${process.env.PREFIX}ping`, true)
	//.addField('Check Uptime bot', `${process.env.PREFIX}uptime`, true)
    .addField('Source Code', `${process.env.PREFIX}src`, true)
	.setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(helpEmbed);
    }

    module.exports.config = {
      name: 'help',
      aliases: ['h']
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