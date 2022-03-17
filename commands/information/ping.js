module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);

    // First
    const msgembed = new Discord.MessageEmbed()
    .setDescription('🏓 Pinging...')
    .setColor('YELLOW');
    const msg = await message.channel.send(msgembed)
    
    // Second
    let embed = new Discord.MessageEmbed()
    .setTitle(`Returns Latency And API Ping`)
    .addField('⌛ Websocket Latency', `\`${Math.floor(msg.createdAt - message.createdAt)}ms\``)
    .addField('📡 API Latency', `\`${Math.round(client.ws.ping)}ms\``)
    .setColor("GREEN")
    .setFooter(`Requested by: ${message.author.tag} | © ${author} - Siesta v${version}`, message.author.avatarURL())
    
    await message.channel.send(embed)
    msg.delete();
    }

    module.exports.config = {
      name: 'ping',
      aliases: ['latency']
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