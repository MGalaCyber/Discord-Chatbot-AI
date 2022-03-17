module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    const ownerid = process.env.OWNER
    
    if (message.author.id !== ownerid) return;
    
    const devhelpEmbed = new Discord.MessageEmbed()
    .setTitle('❓ Help Menu')
    .setColor('RANDOM')
    .addField('Show all Dev commands', `\`${process.env.PREFIX}devhelp\``, true)
    .addField('Send Invite Server', `\`${process.env.PREFIX}getinvite\``, true)
    .addField('Leave bots from Server', `\`${process.env.PREFIX}leaveserver\``, true)
	.addField('Send Serverlist bots', `\`${process.env.PREFIX}serverlist\``, true)
	.addField('Reload the bots', `\`${process.env.PREFIX}reload\``, true)
    .addField('_ _', `_ _`, true)
	.setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

    message.channel.send(devhelpEmbed);
    }

    module.exports.config = {
      name: 'devhelp',
      aliases: ['deh']
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