module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('❓ Help Menu')
    .setColor('RANDOM')
    .addField('Set chat Channel', `\`${process.env.PREFIX}setchat\``, true)
    .addField('Disable chat Channel', `\`${process.env.PREFIX}dischat\``, true)
    .addField('Invite bots', `\`${process.env.PREFIX}invite\``, true)
	.addField('Vote bot for support', `\`${process.env.PREFIX}vote\``, true)
	.addField('Check Latency bots', `\`${process.env.PREFIX}ping\``, true)
	.addField('Check Realtime bots', `\`${process.env.PREFIX}uptime\``, true)
	.addField('About for Siesta', `\`${process.env.PREFIX}about\``, true)
	.addField('Feedback for Siesta', `\`${process.env.PREFIX}feedback\``, true)
	.addField('Bugs Report for Siesta', `\`${process.env.PREFIX}bugreport\``, true)
    .addField('Source Code', `\`${process.env.PREFIX}src\``, true)
	.setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

    message.channel.send(helpEmbed);
    }

    module.exports.config = {
      name: 'help',
      aliases: ['h']
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