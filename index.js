// Environmental Variable | Use built-in env in repl
require("dotenv").config();
// This is express, you can ignore this if you gonna self host
const chalk = require('chalk');
const express = require('express')
const app = express()
const port = 8080
const Chat = require('clever-chat')
require("./util/inline.js");



app.get('/', (req, res) => {
  res.send('Server Online! Bot is ready!!')
})

app.listen(port, () => {
    console.log(`${chalk.green(`Server online!`)}`)
})

// Code
const fs = require('fs');
const Discord = require('discord.js');
const { version, author} = require('./package.json');
const client = new Discord.Client({
    disableEveryone: true
});
client.brain = require('./util/chatSend');
client.em = require("./util/embed")
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.db = require('quick.db');
owner = process.env.OWNER // Add you Discord ID

// Discord bot status Activity
client.on('ready', () => {
  console.log(`${client.user.username} is Online`)
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

// Event Client New Guild Join
const newGuildJoin = process.env.NEW_GUILD_JOIN // --> Comming soon

client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(ch => ch.name === 'general' && ch.permissionsFor(guild.me).has('SEND_MESSAGES'));
  const newGuildEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`${guild.name} | ${guild.id}`)
  .setDescription(`Thanks for adding me to your server!. my default prefix is: \`${process.env.PREFIX}\``)
  .addField('Show all commands', `\`${process.env.PREFIX}help\``)
  .addField('Start chatbot', `\`${process.env.PREFIX}setchat #channel-name\``)
  .addField('Link from Siesta chan:', `[Website](https://siesta-chan.vercel.app) | [Support Server](https://discord.gg/2UshYsFfCP)`)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`New Guild Joining | © ${author} - Siesta v${version}`)
  channel.send(newGuildEmbed);
  //console.channels.cache.get(newGuildJoin).send(`New Guild Join: ${guild.name} | ${guild.id}`)
})

// Event Client New Guild Leave
const newGuildLeave = process.env.NEW_GUILD_LEAVE // --> Comming soon

client.on('guildDelete', guild => {
  const leaveGuildEmbed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`${guild.name} | ${guild.id}`)
  .setDescription(`Hey ${guild.owner.user.username}, I have left your server. If you want me back, please invite me again to your server.`)
  .addField('Link from Siesta chan:', `[Website](https://siesta-chan.vercel.app) | [Support Server](https://discord.gg/2UshYsFfCP) | [Invite me again](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=533583101136&redirect_uri=https%3A%2F%2Fsiesta-chan.vercel.app&response_type=code&scope=identify%20email%20guilds%20bot)`)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/891317640763695134/931169337488838676/Siesta-chan.gif')
  .setFooter(`New Guild Leave | © ${author} - Siesta v${version}`)
  guild.owner.user.send(leaveGuildEmbed)
  //console.channels.cache.get(newGuildLeave).send(`New Guild Leave: ${guild.name} | ${guild.id}`)
});

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
fs.readdir('./events/', (err, files) => { 
    if (err) return console.error(err); 
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`); 
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
// command stuff
  let messageArray = message.content.split(" "),
    cmd = messageArray[0].toLowerCase(),
    args = messageArray.slice(1),
    prefix = process.env.PREFIX // Add Prefix

  if (!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args);

});


fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(R => R.endsWith('.js'));
  if (jsfile.length <= 0) {
    return console.log(chalk.red("There are no commands"));
  }
  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    console.log(`Loaded - ${f} | ${pull.config.aliases}`)

    client.commands.set(pull.config.name, pull);
if (pull.config.aliases) pull.config.aliases.forEach(alias => client.aliases.set(alias, pull.config.name))
  });
});

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
