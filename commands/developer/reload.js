module.exports.run = async(client, message, args) => {
    let db = client.db
    const Discord = require('discord.js');
    const { version, author } = require(`${process.cwd()}/package.json`);
    const glob = require("glob");
    const ownerid = process.env.OWNER
    
   if (message.author.id !== ownerid) return;
    client.commands.sweep(() => true);
    glob(`${__dirname}/../*.js`, async (err, filePaths) => {
      if (err) return console.log(err);
      filePaths.forEach((file) => {
        delete require.cache[require.resolve(file)];

        const pull = require(file);
        if (pull.name) {
          console.log(`Reloaded ${pull.name} (cmd)`);
          client.commands.set(pull.name, pull);
        }
        if (pull.aliases && Array.isArray(pull.aliases)) {
          pull.aliases.forEach((alias) => {
            client.aliases.set(alias, pull.name);
          });
        }
      });
    });
    message.reply("Commands Reloaded");
    }

    module.exports.config = {
      name: 'reload',
      aliases: ['reloadbot']
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