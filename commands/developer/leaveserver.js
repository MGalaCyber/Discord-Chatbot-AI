module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    const ownerid = process.env.OWNER

    if (message.author.id == ownerid) {
		
        const guildId = args[0];

if (!guildId) {
  return message.channel.send(new Discord.MessageEmbed()
  .setTitle("<:no:939788713632874496> Error Occured!")
  .setDescription(`Please Provide A Valid Server ID`)
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`© ${author} - Siesta v${version}`)
  .setColor("RANDOM")
  .setTimestamp()
  );
}

const guild = client.guilds.cache.find((g) => g.id === guildId);

if (!guild) {
  message.react("<:no:939788713632874496>")
  return message.channel.send(new Discord.MessageEmbed()
  .setTitle("<:no:939788713632874496> Error Occured!")
  .setDescription(`I Am Not In Server`)
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`© ${author} - Siesta v${version}`)
  .setColor("RANDOM")
  .setTimestamp()
  );
}

try {
  await guild.leave();
  message.react("<:leave:939787996704669696>")
  return message.channel.send(new Discord.MessageEmbed()
  .setThumbnail(guild.iconURL({ dynamic: true }) || null)
  .setTitle("<:yes:939789175467683850> Successfully ")
  .setDescription(`<:Arrow:939789759805550622> Successfully Left Guild - **${guild.name}**`)
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`© ${author} - Siesta v${version}`)
  .setColor("RANDOM")
  .setTimestamp()
  );
} catch (e) {
  console.error(e);
  return message.channel.send("An error occurred leaving that guild");
}
}
    }

    module.exports.config = {
      name: 'leaveserver',
      aliases: ['lever']
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