module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const voteEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for Voted me :)')
    .setColor('RANDOM')
    .addField('Top.gg', `🔗: [Click here!](https://top.gg/bot/869755197046530060/vote)`, true)
    .addField('Discordbotlist.com', `🔗: [Click here!](https://discordbotlist.com/bots/siesta-chan/upvote)`, true)
    .addField('Discord.boats', `🔗: [Click here!](https://discord.boats/bot/869755197046530060/vote)`, true)
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(voteEmbed);
    }

    module.exports.config = {
      name: 'vote',
      aliases: ['voted']
    }
