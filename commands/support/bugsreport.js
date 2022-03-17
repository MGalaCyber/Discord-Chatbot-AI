module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    const BugsChannel = process.env.BugsChannel;

    // First
    if(!args[0]) return message.reply("Please add a reason to bugs! '-'").then(msg => msg.delete({ timeout: 6000 }));

    // Second
    message.reply(`📨 | ${message.author.username} Thanks for the bugs report \:)!`).then(msg => msg.delete({ timeout: 10000 }));


    const feedbackEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} | ${message.author.id}`)
    .setColor('GREEN')
    .setDescription('This message was sent by someone to tell you something about your bots app.')
    // About Author Accounts 
    .addField('Account Create at:', `\`${message.author.createdAt}\``, false)
    .addField('Join to Server:', `\`${message.member.joinedAt}\``, false)
    // ==========================================================
    .addField('Server Created at:', `\`${message.guild.createdAt}\``, false)
    // About Servers
    .addField('Server Name:', `\`${message.guild.name}\``, true)
    .addField('Server ID:', `\`${message.guild.id}\``, true)
    .addField('Server Owner:', `\`${message.guild.owner.user.tag}\``, true)
    .addField('Server Owner ID:', `\`${message.guild.owner.user.id}\``, true)
    .addField('Server Member Count:', `\`${message.guild.memberCount}\``, true)
    .addField('Server Verification Level:', `\`${message.guild.verificationLevel}\``, true)
    .addField('From Channel Name:', `\`${message.channel.name}\``, true)
    .addField('Channel ID:', `\`${message.channel.id}\``, true)
    .addField('Channel Topic:', `\`${message.channel.topic}\``, true)
    // Reason Bugs Report
    .addField('Bugs Report:', `\`${args.join(' ')}\``)
    // Images
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(`Bugs Report | © ${author} - Siesta v${version}`, message.guild.iconURL())

    client.channels.cache.get(BugsChannel).send(feedbackEmbed)
    }

    module.exports.config = {
      name: 'bugsreport',
      aliases: ['bug', 'bgr', 'bugreport']
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