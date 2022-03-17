module.exports.run = async(client, message, args) => {
    const Discord = require('discord.js');
    const schema = require(`${process.cwd()}/models/user-schema`);
    const { version, author } = require(`${process.cwd()}/package.json`);
    const ownerid = process.env.OWNER
    
// ======================================== Limit code here ======================================= \\

    if (message.author.id !== ownerid) return;

    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) return message.channel.send(client.em(`❗ Please mention a user!`)).then(msg => msg.delete({ timeout: 6000 }));
    let data;
    try {
        data = await schema.findOne({
            userId: user.id
        })
        if(!data) {
            data = await schema.create({
                userId: user.id
            })
        }
    } catch (err) {
        console.log(`[ERROR] ${err}`);
    }

    data.blacklisted = true
    await data.save()

    const SuccessEmbed = new Discord.MessageEmbed()
    .setColor('#00ff00')
    .setTitle(`✅ Successfully blacklisted ${user.tag}!`)
    .setDescription(`\`\`\`js\n${JSON.stringify(data, null, 2)}\`\`\``)
    .setImage(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .addField('Date:', `<t:${parseInt(client.readyTimestamp / 1000)}:R>`)
    .setFooter(`Status Users: [ ${data.blacklisted} ] | Siesta v${version}`)

    return message.channel.send(SuccessEmbed)
    }

    module.exports.config = {
      name: 'addblacklist-user',
      aliases: ['abl-user', 'ablsuser', 'addblacklistuser'],
      usage: 'addblacklist-user <user> true/false'
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