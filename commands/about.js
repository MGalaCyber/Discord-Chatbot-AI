module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require('../package.json');

    // fuction uptime
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    const aboutEmbed = new Discord.MessageEmbed()
    .setTitle('About Siesta chan Chatbot')
    .setColor('RANDOM')
    .setDescription('This is a Discord Chatbot for fun, easy and fast. Support custom channel')
    // About Applications
    .addField('Name', `\`${client.user.tag}\``, true)
    .addField('ID', `\`${client.user.id}\``, true)
    .addField('Status', `\`${client.user.presence.status}\``, true)
    .addField('Prefix', `\`${process.env.PREFIX}\``)
    // Stats Bot
    .addField('Total Servers', `\`${client.guilds.cache.size}\``, true)
    .addField('Total Users', `\`${client.users.cache.size}\``, true)
    .addField('Commands', `\`${client.commands.size}\``, true)
    // About System
    .addField('Version', `\`${version}\``, true)
    .addField('Discord.js', `\`${Discord.version}\``, true)
    .addField('Node.js', `\`${process.version}\``, true)
    .addField('Platform', `\`${process.platform}\``, true)
    .addField('Memory Usage', `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\``, true)
    .addField("Uptime", `\`${days}d\`-\`${hours}h\`-\`${minutes}m\`-\`${seconds}s\``, true)
    // About Developer
    .addField('Authors', `\`${author}\``)
    .addField('Support the Developers', `This bot is completely free and open source. If you like this bot, please support the developers by donating to the bot's [Saweria](https://saweria.co/donate/Galaxy1274) | [Kofi](https://ko-fi.com/MGalaCyber1274) to keep this bot free forever!`)
    .addField('Website', `[Siesta chan](https://siesta-chan-vercel.app) | [GalaCyber](https://galacyber.vercel.app)`)
    .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
    .setThumbnail(message.client.user.avatarURL())
    .setFooter(`Requested by: ${message.author.tag} | © ${author}`, message.author.avatarURL())

    message.channel.send(aboutEmbed);
    }

    module.exports.config = {
      name: 'about',
      aliases: ['aboutbot', 'botinfo', 'info', 'infobot']
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