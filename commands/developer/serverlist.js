module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    const ownerid = process.env.OWNER
    
    if (message.author.id == ownerid) {
      
        let i0 = 0;
        let i1 = 10;
        let page = 1;
  
        // Embed Description
        let description =
          `Total Servers - ${client.guilds.cache.size}\n\n` +
          client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
            .slice(0, 10)
            .join("\n\n");
  
        // Embed send to channel
        let embed = new Discord.MessageEmbed()
          .setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic : true}))
          
          .setColor("00FFFF")
          .setFooter(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
          .setDescription(description)
          .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
          .setFooter(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
  
        let msg = await message.channel.send(embed);
  
        await msg.react("⬅");
        await msg.react("➡");
        await msg.react("❌");
  
        let collector = msg.createReactionCollector(
          (reaction, user) => user.id === message.author.id
        );
  
        collector.on("collect", async (reaction, user) => {
          if (reaction._emoji.name === "⬅") {
            // Updates variables
            i0 = i0 - 10;
            i1 = i1 - 10;
            page = page - 1;
  
            // if there is no guild to display, delete the message
            if (i0 + 1 < 0) {
              console.log(i0)
              return msg.delete();
            }
            if (!i0 || !i1) {
              return msg.delete();
            }
  
            description =
              `Total Servers - ${client.guilds.cache.size}\n\n` +
              client.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map(
                  (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
                .slice(i0, i1)
                .join("\n\n");
  
            // Update the embed with new informations
            embed
              .setFooter(
                `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
              )
              .setDescription(description);
  
            // Edit the message
            msg.edit(embed);
          }
  
          if (reaction._emoji.name === "➡") {
            // Updates variables
            i0 = i0 + 10;
            i1 = i1 + 10;
            page = page + 1;
  
            // if there is no guild to display, delete the message
            if (i1 > client.guilds.cache.size + 10) {
              return msg.delete();
            }
            if (!i0 || !i1) {
              return msg.delete();
            }
  
            description =
              `Total Servers - ${client.guilds.cache.size}\n\n` +
              client.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map(
                  (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
                .slice(i0, i1)
                .join("\n\n");
  
            // Update the embed with new informations
            embed
              .setFooter(
                `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
              )
              .setDescription(description);
  
            // Edit the message
            msg.edit(embed);
          }
  
          if (reaction._emoji.name === "❌") {
            return msg.delete();
          }
  
          // Remove the reaction when the user react to the message
          await reaction.users.remove(message.author.id);
        });
      } else {
        return;
      }
    }

    module.exports.config = {
      name: 'serverlist',
      aliases: ['svrlist']
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