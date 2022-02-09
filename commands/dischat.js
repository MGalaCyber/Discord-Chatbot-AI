module.exports.run = async(client, message, args) => {
  const Discord = require('discord.js');
  let db = client.db
if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send(client.em("", "You don't have permissions to do this. D:"))
if(!args[0]) return message.channel.send(client.em("", "How about you mention a channel or give a channel id. :/"))
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if (!channel) return message.channel.send(client.em('', 'This is not a channel'))

db.delete(`${message.guild.id}_chatchannel`, `${channel.id}`)

const disableEmbed = new Discord.MessageEmbed()
.setTitle('✅ | Chatbot Channel is disable!')
.setColor('RED')
//.setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())

message.channel.send(disableEmbed);
    }

    module.exports.config = {
      name: 'dischat',
      aliases: ['disable-chatbot', 'disable-chat']
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