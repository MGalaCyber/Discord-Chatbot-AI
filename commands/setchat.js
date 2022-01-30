module.exports.run = async(client, message, args) => {
let db = client.db
if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send(client.em("", "You don't have permissions to do this. D:"))
if(!args[0]) return message.channel.send(client.em("", "How about you mention a channel or give a channel id. :/"))
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if (!channel) return message.channel.send(client.em('', 'This is not a channel'))

db.set(`${message.guild.id}_chatchannel`, `${channel.id}`)
message.channel.send(client.em('Chat Channel', `Chat Channel of this server is set to ${channel}`))
message.channel.send(client.em('NOTICE!', `If the bot doesn't respond/reply to your chat messages, please reset the chat channel, with the command \`${process.env.PREFIX}setchat\` (#channel)`))

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