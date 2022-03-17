module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);

    // fuction uptime
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    const aboutEmbed = new Discord.MessageEmbed()
    .setTitle('About Siesta chan Chatbot')
    .setColor('RANDOM')
    .setDescription(
      `_This is a Discord Chatbot for fun, easy and fast. Support custom channel_
    
      ***Application Information*** :
      > Name: \`${client.user.tag}\`
      > ID: \`${client.user.id}\`
      > Status: \`${client.user.presence.status}\`
      > Prefix: \`${process.env.PREFIX}\`
      
      ***Created At*** :
      > \`${client.user.createdAt}\`
      
      ***Guild Stats*** :
      > Total Servers: \`${client.guilds.cache.size}\`
      > Total Users: \`${client.users.cache.size}\`
      > Total Commands: \`${client.commands.size}\`

      ***System Information*** :
      > Version: \`${version}\`
      > Discord.js: \`${Discord.version}\`
      > Node.js: \`${process.version}\`
      > Platform: \`${process.platform}\`
      > Memory Usage: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`
      > Uptime: \`${days}d\`-\`${hours}h\`-\`${minutes}m\`-\`${seconds}s\`
      
      **Author:** \`${author}\``
    )
    // About Developer
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