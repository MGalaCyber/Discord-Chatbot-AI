module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require('../package.json');
    
    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for Invite me :)')
    .setColor('RANDOM')
    .addField('Click here for invite!', `🔗: [Invite bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=534928424176&redirect_uri=https%3A%2F%2Fmgalacyber.github.io%2Finvite.html&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20bot%20applications.commands)`, true)
    .addField('Click here for Support My Discord Server!', `🔗: [Join Discord Server](https://discord.gg/2UshYsFfCP)`, true)
    .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

    message.channel.send(inviteEmbed);
    }

    module.exports.config = {
      name: 'invite',
      aliases: ['add']
    }

/**
////////////////////////////////////////////////////////////////////
////                                                            ////
\\\\                  Bot Coded by GalaXd#9165                  \\\\
////                                                            ////
\\\\  Work for MGalaCyber Development | https://mgalacyber.xyz  \\\\
////                                                            ////
\\\\                    All Right Reserved!                     \\\\
////                                                            ////
////////////////////////////////////////////////////////////////////
 */