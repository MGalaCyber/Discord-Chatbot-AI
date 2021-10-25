module.exports.run = async(client, message, args) => {
    let db = client.db
    // if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send(client.em("", "You don't have permissions to do this. D:"))
    // if(!args[0]) return message.channel.send(client.em("", "How about you mention a channel or give a channel id. :/"))
    // let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    // if (!channel) return message.channel.send(client.em('', 'This is not a channel'))
    
    // db.set(`${message.guild.id}_chatchannel`, `${channel.id}`)
    message.channel.send(client.em('Thanks for Invite me :)', `🔗[Invite](https://discord.com/api/oauth2/authorize?client_id=869755197046530060&permissions=515466853952&scope=bot)`))
    }
    module.exports.config = {
      name: 'invite',
      aliases: ['add']
    }