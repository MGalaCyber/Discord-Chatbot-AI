module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('❓ Help Menu')
    .setColor('RANDOM')
    .addField('Setchat', `${process.env.PREFIX}setchat`, true)
    .addField('Invite', `${process.env.PREFIX}invite`, true)
	.addField('Vote bot', `${process.env.PREFIX}vote`, true)
	.addField('Check Latency', `${process.env.PREFIX}ping`, true)
	//.addField('Check Uptime bot', `${process.env.PREFIX}uptime`, true)
    .addField('Source Code', `🔗: [Click Here](https://github.com/MGalaCyber/Chatbot-AI-v1)`, true)
    .addField('Setchat', `${process.env.PREFIX}setchat`)
    .addField('Invite', `${process.env.PREFIX}invite`)
    .addField('Vote', `${process.env.PREFIX}vote`)
    .addField('Source Code', `🔗: [Click Here](https://github.com/MGalaCyber/Chatbot-AI-v1)`)
    .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(helpEmbed);
    }

    module.exports.config = {
      name: 'help',
      aliases: ['h']
    }
