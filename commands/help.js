module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('Help Menu ❓')
    .setColor('RANDOM')
    .addField('Setchat', `${process.env.PREFIX}setchat`)
    .addField('Invite', `${process.env.PREFIX}invite`)
    .addField('Source Code', '🔗: [Click Here](https://github.com/MGalaCyber/Chatbot-AI-v1)')
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(helpEmbed);
    }

    module.exports.config = {
      name: 'help',
      aliases: ['h']
    }