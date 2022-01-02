module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for Invite me :)')
    .setColor('RANDOM')
    .addField('Click here for invite!', `🔗: [Invite bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=515466853952&scope=bot)`, true)
    .addField('Click here for Support My Discord Server!', `🔗: [Join Discord Server](https://discord.gg/invite/VzGNhtmmfB)`, true)
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(inviteEmbed);
    }

    module.exports.config = {
      name: 'invite',
      aliases: ['add']
    }
