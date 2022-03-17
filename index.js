// Environmental Variable | Use built-in env in repl
require("dotenv").config();
// This is express, you can ignore this if you gonna self host
const chalk = require('chalk');
const express = require('express')
const app = express()
const port = 8080
const Chat = require('clever-chat')
require(`${process.cwd()}/util/inline.js`);



app.get('/', (req, res) => {
  res.send('Server Online! Bot is ready!! | https://siesta-chan.vercel.app')
})

app.listen(port, () => {
    console.log(`${chalk.green(`Server online!`)}`)
    console.log(`${chalk.yellow(`Server Listening on port: ${port}`)}`)
})

// Code
const fs = require('fs');
const Discord = require('discord.js');
const { version, author} = require('./package.json');
const mongoose = require('mongoose');
const client = new Discord.Client({
    disableEveryone: true
});
client.brain = require(`${process.cwd()}/util/chatSend`);
client.em = require(`${process.cwd()}/util/embed`)
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Code for Schema
const userSchema = require(`${process.cwd()}/models/user-schema`);
const guildSchema = require(`${process.cwd()}/models/guild-schema`);

// Database MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(`${chalk.green(`[DATABASE 1]`)} Connected to MongoDB!`)).catch(err => console.log(err));

// MongoDB Schema
client.ticketTranscript = mongoose.model('transcripts',
  new mongoose.Schema({
    Channel: String,
    Content: Array
  })
)

// Database Quick.db
client.db = require('quick.db');
console.log('[DATABASE 2] Connected to Quick.db')
owner = process.env.OWNER // Add you Discord ID

// Discord bot status Activity
client.on('ready', () => {
  
  // Table Status
  console.table({
    "Bot Name": client.user.tag,
    "Bot Owner": owner,
    "Bot Author": author,
    "Bot Status": client.user.presence.status,
    "Bot Version": version,
    "Discord.js Version": Discord.version,
    "Node.js Version": process.version,
    "platform": process.platform,
    "Bot Prefix": process.env.PREFIX,
    "Total Commands": client.commands.size,
    "Total Guilds": client.guilds.cache.size,
    "Total Users": client.users.cache.size,
    "Total Channels": client.channels.cache.size,
    "Bot Memory Usage": `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
    "Bot Ping": `${client.ws.ping}ms`
    
  });
  console.log(`${chalk.green(`${client.user.username} is Online`)}`)
setInterval(async () => {
const statuses = [`${process.env.PREFIX}help for Information`,
                  `${client.guilds.cache.size} Servers`,
                  `${client.users.cache.size} Users`,
                  `Galaxy Universe`,
                  `Awesome Chatbot`,
                  `| Made by ${author} Teams`
                 ];
   client.user.setActivity(statuses[Math.floor(Math.random() * statuses.length)], { type: "STREAMING", url: "https://discord.gg/2UshYsFfCP"})
}, 10000)
});

// Mention Prefix
client.on('message', async message => {
  const mentionPrefix = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(mentionPrefix)) {
    return message.reply(`My prefix is \`${process.env.PREFIX}\``)
    .then(msg => msg.delete({ timeout: 6000 }));
  }
})

// Event Client New Guild Join
client.on('guildCreate', guild => {
  //const channel = guild.channels.cache.find(ch => ch.name === 'general' && ch.permissionsFor(guild.me).has('SEND_MESSAGES'));
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));
  const newGuildEmbed1 = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`${guild.name} | ${guild.id}`)
  .setDescription(`Thanks for adding me to your server!. my default prefix is: \`${process.env.PREFIX}\``)
  .addField('Show all commands', `\`${process.env.PREFIX}help\``)
  .addField('Link from Siesta chan:', `[Website](https://siesta-chan.vercel.app) | [Support Server](https://discord.gg/2UshYsFfCP)`)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`New Guild Joining | © ${author} - Siesta v${version}`)
  channel.send(newGuildEmbed1);
  console.log(`${chalk.green(`New Guild Join!: ${guild.name} | ${guild.id}`)}`)
  console.log(`${chalk.green(`Owner Join!: ${guild.owner.user.tag} | ${guild.owner.user.id}`)}`)
})

const newGuildJoin = process.env.NEW_GUILD_JOIN
client.on('guildCreate', async guild => {
  const channel = await client.channels.cache.get(newGuildJoin);
  const newGuildEmbed2 = new Discord.MessageEmbed()
  .setColor('#00FF00')
  .setTitle('📢 INFORMATION | New Guild Join!')
  .setDescription(
    `***Guild Information*** :
    > **Name**: \`${guild.name}\`
    > **ID**: \`${guild.id}\`

    **Description**:
    > \`${guild.description}\`

    ***Guild Owner Information*** :
    > **Owner**: \`${guild.owner.user.tag}\`
    > **ID**: \`${guild.owner.user.id}\`

    ***Guild OverView*** :
    **Created At**:
    > \`${guild.createdAt}\`
    **Client join At**:
    > \`${guild.me.joinedAt}\`

    > **Region**: \`${guild.region}\`
    > **Badges**: \`${guild.premiumSubscriptionCount}\`
    > **Badge Tier**: \`${guild.premiumTier}\`
    > **Badge Subscription Count**: \`${guild.premiumSubscriptionCount}\`
    > **Badge Subscription Ends**: \`${guild.premiumSubscriptionCount}\`
    > **Features**: \`${guild.features}\`
    > **Partnered**: ${guild.partnered}

    ***Members Stats*** :
    > 👥 Total: \`${guild.memberCount}\`
    > 👤 Human: \`${guild.members.cache.filter(m => !m.user.bot).size}\`
    > 🤖 Bots: \`${guild.members.cache.filter(m => m.user.bot).size}\`

    ***System Stats*** :
    > Verification Level: \`${guild.verificationLevel}\`
    > Explicit Content Filter: \`${guild.explicitContentFilter}\`
    > MFA: \`${guild.mfaLevel}\`
    > Roles: \`${guild.roles.cache.size}\`
    
    **Emojis Stats**:
    > 📄 Total: \`${guild.emojis.cache.size}\`
    > 🖼 UnAnimated: \`${guild.emojis.cache.filter(e => e.animated).size}\`
    > 🎞 Animated: \`${guild.emojis.cache.filter(e => !e.animated).size}\`
    
    **Channels Stats**:
    > 📄 Total: \`${guild.channels.cache.size}\`
    > 🧩 Default Channel: ${guild.channels.cache.filter(c => c.type === 'text').first()}
    > 📚 Categories: \`${guild.channels.cache.filter(c => c.type === 'category').size}\`
    > 💬 Text: \`${guild.channels.cache.filter(c => c.type === 'text').size}\`
    > 🔊 Voice: \`${guild.channels.cache.filter(c => c.type === 'voice').size}\`
    > 📢 News: \`${guild.channels.cache.filter(c => c.type === 'news').size}\`
    > 🏪 Store: \`${guild.channels.cache.filter(c => c.type === 'store').size}\`
    > 📨 DMs: \`${guild.channels.cache.filter(c => c.type === 'dm').size}\`
    > 🔞 NSFW: \`${guild.channels.cache.filter(c => c.type === 'nsfw').size}\`

    **AFK Channel**: \`${guild.afkChannel}\`
    **AFK Timeout**: \`${guild.afkTimeout}\``
  )
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setFooter(`Total: [ ${client.guilds.cache.size} ] Server | © ${author} - Siesta v${version}`)
  channel.send(newGuildEmbed2);
})

//////////////////// LIMIT \\\\\\\\\\\\\\\\\\\\

// Event Client New Guild Leave
client.on('guildDelete', guild => {
  const leaveGuildEmbed1 = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`${guild.name} | ${guild.id}`)
  .setDescription(`Hey ${guild.owner.user.username}, I have left your server. If you want me back, please invite me again to your server.`)
  .addField('Link from Siesta chan:', `[Website](https://siesta-chan.vercel.app) | [Support Server](https://discord.gg/2UshYsFfCP) | [Invite me again](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=534657367281&redirect_uri=https%3A%2F%2Fsiesta-chan.vercel.app&response_type=code&scope=identify%20email%20guilds%20bot%20guilds.join)`)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`New Guild Leave | © ${author} - Siesta v${version}`)
  guild.owner.user.send(leaveGuildEmbed1)
  console.log(`${chalk.red(`New Guild Leave!: ${guild.name} | ${guild.id}`)}`)
  console.log(`${chalk.red(`Owner Left!: ${guild.owner.user.username} | ${guild.owner.user.id}`)}`)
});

const newGuildLeave = process.env.NEW_GUILD_LEAVE
client.on('guildDelete', async guild => {
  const channel = await client.channels.cache.get(newGuildLeave);
  const leaveGuildEmbed2 = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle('📢 INFORMATION | New Guild Leave!')
  .setDescription(
    `***Guild Information*** :
    > **Name**: \`${guild.name}\`
    > **ID**: \`${guild.id}\`

    **Description**:
    > \`${guild.description}\`

    ***Guild Owner Information*** :
    > **Owner**: \`${guild.owner.user.tag}\`
    > **ID**: \`${guild.owner.user.id}\`

    ***Guild OverView*** :
    **Created At**:
    > \`${guild.createdAt}\`
    **Client join At**:
    > \`${guild.me.joinedAt}\`

    > **Region**: \`${guild.region}\`
    > **Badges**: \`${guild.premiumSubscriptionCount}\`
    > **Badge Tier**: \`${guild.premiumTier}\`
    > **Badge Subscription Count**: \`${guild.premiumSubscriptionCount}\`
    > **Badge Subscription Ends**: \`${guild.premiumSubscriptionCount}\`
    > **Features**: \`${guild.features}\`
    > **Partnered**: ${guild.partnered}

    ***Members Stats*** :
    > 👥 Total: \`${guild.memberCount}\`
    > 👤 Human: \`${guild.members.cache.filter(m => !m.user.bot).size}\`
    > 🤖 Bots: \`${guild.members.cache.filter(m => m.user.bot).size}\`

    ***System Stats*** :
    > Verification Level: \`${guild.verificationLevel}\`
    > Explicit Content Filter: \`${guild.explicitContentFilter}\`
    > MFA: \`${guild.mfaLevel}\`
    > Roles: \`${guild.roles.cache.size}\`
    
    **Emojis Stats**:
    > 📄 Total: \`${guild.emojis.cache.size}\`
    > 🖼 UnAnimated: \`${guild.emojis.cache.filter(e => e.animated).size}\`
    > 🎞 Animated: \`${guild.emojis.cache.filter(e => !e.animated).size}\`
    
    **Channels Stats**:
    > 📄 Total: \`${guild.channels.cache.size}\`
    > 🧩 Default Channel: ${guild.channels.cache.filter(c => c.type === 'text').first()}
    > 📚 Categories: \`${guild.channels.cache.filter(c => c.type === 'category').size}\`
    > 💬 Text: \`${guild.channels.cache.filter(c => c.type === 'text').size}\`
    > 🔊 Voice: \`${guild.channels.cache.filter(c => c.type === 'voice').size}\`
    > 📢 News: \`${guild.channels.cache.filter(c => c.type === 'news').size}\`
    > 🏪 Store: \`${guild.channels.cache.filter(c => c.type === 'store').size}\`
    > 📨 DMs: \`${guild.channels.cache.filter(c => c.type === 'dm').size}\`
    > 🔞 NSFW: \`${guild.channels.cache.filter(c => c.type === 'nsfw').size}\`

    **AFK Channel**: \`${guild.afkChannel}\`
    **AFK Timeout**: \`${guild.afkTimeout}\``
  )
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setFooter(`Total: [ ${client.guilds.cache.size} ] Server | © ${author} - Siesta v${version}`)
  channel.send(leaveGuildEmbed2);
})

///////////////////////////////////

// AntiCrash System
process.on('unhandledRejection', (err, reason, p) => {
  console.log('Unhandled Rejection at: Promise:', p, 'reason:', reason);
  console.log(err, p)
})
process.on('uncaughtException', (err, origin) => {
  console.log('Uncaught Exception:', err, origin);
  console.log(err, origin)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('Uncaught Exception:', err, origin);
  console.log(err, origin)
})
process.on('multipleResolves', (type, promise, reason) => {
  console.log('Multiple Resolves:', type, promise, reason);
  console.log(type, promise, reason)
})

// Event Handler
fs.readdir(`${process.cwd()}/events/`, (err, files) => { 
    if (err) return console.error(err); 
    files.forEach(file => {
        const eventFunction = require(`${process.cwd()}/events/${file}`); 
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0]; 
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const once = eventFunction.once; 

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args, client)); 
        } catch (error) {
            console.error(error.stack); 
        }
    });
});

// Command Handler
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;

// ==================== Blacklisted Users with MongoDB =================== \\
let UserData;
try {
    UserData = await userSchema.findOne({
        userId: message.author.id
    })
    if(!UserData) {
        UserData = await userSchema.create({
            userId: message.author.id
        })
    }
} catch (error) {
    console.log(`[ERROR] ${error}`);
}

const userbanEmbed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`${message.author.tag} You has been banned for using bot!`)
    .setDescription(`Please contact Developer to get unbanned! [Click here](https://discord.gg/MCgn6hgVyG)`)
    .setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))

if(UserData.blacklisted == true) return message.reply(userbanEmbed).then(msg => msg.delete({ timeout: 30000 }));

// ==================== Blacklisted Servers with MongoDB =================== \\
let GuildData;
try {
    GuildData = await guildSchema.findOne({
        guildId: message.guild.id
    })
    if(!GuildData) {
        GuildData = await guildSchema.create({
            guildId: message.guild.id
        })
    }
} catch (error) {
    console.log(`[ERROR] ${error}`);
}

const guildbanEmbed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`This server has been banned for using bot!`)
    .setDescription(`Please contact Developer to get unbanned! [Click here](https://discord.gg/MCgn6hgVyG)`)
    .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))

if(GuildData.blacklisted == true) return message.channel.send(guildbanEmbed).then(msg => msg.delete({ timeout: 30000 }));

// command stuff
  let messageArray = message.content.split(" "),
    cmd = messageArray[0].toLowerCase(),
    args = messageArray.slice(1),
    prefix = process.env.PREFIX // Add Prefix

  if (!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args);

});

const commandFolders = fs.readdirSync(`${process.cwd()}/commands`);
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`${process.cwd()}/commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`${process.cwd()}/commands/${folder}/${file}`);
        client.commands.set(command.config.name, command);
        if (command.config.aliases) command.config.aliases.forEach(alias => client.aliases.set(alias, command.config.name))
    }
    console.log(`${chalk.green(`[${commandFiles.length}] in ${folder} was loaded!`)}`)
}

// Old code for commands directory handlers \\
// fs.readdir("./commands/", (err, files) => {
//   if (err) console.log(err);
//   let jsfile = files.filter(R => R.endsWith('.js'));
//   if (jsfile.length <= 0) {
//     return console.log(chalk.red("There are no commands"));
//   }
//   jsfile.forEach((f, i) => {
//     let pull = require(`./commands/${f}`);
//     console.log(`${chalk.cyan(`Loaded - ${f} | ${pull.config.aliases}`)}`)

//     client.commands.set(pull.config.name, pull);
// if (pull.config.aliases) pull.config.aliases.forEach(alias => client.aliases.set(alias, pull.config.name))
//   });
// });

client.on("message", async message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    const chat = new Chat({ name: "AI Chatbot", gender: "female", developer_name: "GalaXd#9165", user: "682211671728455702", language: "en" }); //put a random id here
    message.channel.startTyping();
    let reply = chat.chat(message.content).then(reply => {
        message.sendInline(reply, { allowedMentions: { repliedUser: false } });
    })
    message.channel.stopTyping();
  }
});
// Login
client.login(process.env.TOKEN)

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