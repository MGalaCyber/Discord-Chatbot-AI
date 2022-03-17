module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    
    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for Invite me :)')
    .setColor('RANDOM')
    .addField('Click here for invite!', `🔗: [Invite bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=534657367281&redirect_uri=https%3A%2F%2Fsiesta-chan.vercel.app&response_type=code&scope=identify%20email%20guilds%20bot%20guilds.join)`, true)
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