module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    
    const voteEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for Voted me :)')
    .setColor('RANDOM')
    .addField('Top.gg', `🔗: [Click here!](https://top.gg/bot/869755197046530060/vote)`, true)
    .addField('Discordbotlist.com', `🔗: [Click here!](https://discordbotlist.com/bots/siesta-chan/upvote)`, true)
    .addField('Discord.boats', `🔗: [Click here!](https://discord.boats/bot/869755197046530060/vote)`, true)
    .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

    message.channel.send(voteEmbed);
    }

    module.exports.config = {
      name: 'vote',
      aliases: ['voted', 'upvote']
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