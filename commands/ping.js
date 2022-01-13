module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
	let m = await message.reply("Sending request to websocket...")
    
    const pingEmbed = new Discord.MessageEmbed()
    .setTitle("Client's Ping")
    .setColor('RANDOM')
    .addField("⌛ Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("🤖 API Latency", `${Math.round(client.ws.ping)}ms`, true)
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())
	.setTimestamp()

    message.channel.send(pingEmbed);
    }

    module.exports.config = {
      name: 'ping',
      aliases: ['latency']
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