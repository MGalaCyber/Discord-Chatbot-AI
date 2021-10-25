module.exports.run = async(client, message, args) => {
    let db = client.db
    
    message.channel.send(client.em('Thanks for Invite me :)', `🔗: [Invite bot](https://discord.com/api/oauth2/authorize?client_id=869755197046530060&permissions=515466853952&scope=bot) Click here for invite!`, `🔗: [Join Discord Server](https://discord.gg/invite/VzGNhtmmfB) Click here for Join to My Discord Server!`))
    }
    module.exports.config = {
      name: 'invite',
      aliases: ['add']
    }