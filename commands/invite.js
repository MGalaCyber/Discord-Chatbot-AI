module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for Invite me :)')
    .setColor('RANDOM')
    .addField('Click here for invite!', `🔗: [Invite bot](https://discord.com/api/oauth2/authorize?client_id=869755197046530060&amp;permissions=534928424176&amp;redirect_uri=https%3A%2F%2Fmgalacyber.github.io%2Finvite.html&amp;response_type=code&amp;scope=identify%20email%20connections%20guilds%20guilds.join%20bot%20applications.commands)`)
    .addField('Click here for Join to My Discord Server!', '🔗: [Join Discord Server](https://discord.gg/invite/VzGNhtmmfB)')
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(inviteEmbed);
    }

    module.exports.config = {
      name: 'invite',
      aliases: ['add']
    }
