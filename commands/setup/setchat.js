module.exports.run = async(client, message, args) => {
  const Discord = require('discord.js');
  const { version, author } = require(`${process.cwd()}/package.json`);
  let db = client.db
if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send(client.em("", "You don't have permissions to do this. D:"))
if(!args[0]) return message.channel.send(client.em("", "How about you mention a channel or give a channel id. '-'"))
let channel = message.mentions.channels.first()// || message.guild.channels.cache.get(args[0])

db.set(`${message.guild.id}_chatchannel`, `${channel.id}`)

const setchatEmbed = new Discord.MessageEmbed()
.setTitle('✅ | Successfully')
.setColor('GREEN')
.addField('Chat Channel:', `Chat Channel of this server is set to ${channel}`, false)
.addField('NOTICE!', `If the bot doesn't respond/reply to your chat messages, please reset the chat channel, with the command \`${process.env.PREFIX}setchat\` (#channel)`, false)
.setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
.setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

message.channel.send(setchatEmbed)
// message.channel.send(client.em('Chat Channel', `Chat Channel of this server is set to ${channel}`))
// message.channel.send(client.em('NOTICE!', `If the bot doesn't respond/reply to your chat messages, please reset the chat channel, with the command \`${process.env.PREFIX}setchat\` (#channel)`))

}
module.exports.config = {
  name: 'setchat',
  aliases: ['sc']
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