const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "#"
const code = '#'

client.on('ready', () => {
	client.user.setGame(`SuperCodes.`,'https://www.twitch.tv/fofodiscord');
  console.log(`Logged in as [ ${client.user.tag}! ]`);

});


client.on("ready", () => {
  function lol() {
    client.guilds.get('501708070460850176').roles.find("name", "Rainbow").setColor("RANDOM");
  }
  setInterval(lol, 6000);
})

client.on('message',async message => {
    if(message.content.startsWith(prefix + "js")) {
      const ayy = client.emojis.find(emoji => emoji.name === "GooD");
const nos = client.emojis.find(emoji => emoji.name === "BaD")
const ter = client.emojis.get("501785113814761473");
const Devt = client.emojis.get("501785041358028811");
const m7twa = client.emojis.get("501785575968210946");
let customemojis = client.emojis.find(r => r.name === 'GooD');
let customemoji = client.emojis.find(r => r.name === 'BaD');
  if(!message.channel.guild) return message.reply('This Command For Servers Only !');
          if(message.channel.name !== '✻-sharecodes') return message.reply('يجب كتابه الامر في روم باسم ✻-sharecodes')
    let jscodes = message.guild.channels.find(`name`, "✻-codes-js");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();

            
            jscodes.send(`@everyone | @here
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
**${message.guild.name}© :arrow_down:**     
\`\`\`js
${thisMessage}\`\`\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
${ter}**وصف الكود**: ${boi}
${m7twa}**تم النشر بواسطة**: ${message.author}
${Devt}**المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
  message.react("501807338106126336").then(() => message.react("501786909677322270"))


                })

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});



  client.on('message',async message => {

      if(message.content.startsWith(prefix + "py")) {
        const ayy = client.emojis.find(emoji => emoji.name === "GooD");
const nos = client.emojis.find(emoji => emoji.name === "BaD")
const ter = client.emojis.get("501785113814761473");
const Devt = client.emojis.get("501785041358028811");
const m7twa = client.emojis.get("501785575968210946");
let customemojis = client.emojis.find(r => r.name === 'GooD');
let customemoji = client.emojis.find(r => r.name === 'BaD');
    if(!message.channel.guild) return message.reply('This Command For Servers Only !');
            if(message.channel.name !== '✻-sharecodes') return message.reply('يجب كتابه الامر في روم باسم ✻-sharecodes')
      let pycodes = message.guild.channels.find(`name`, "✻-codes-py");
      if(!pycodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
        let filter = m => m.author.id === message.author.id;
        let thisMessage;
        let thisFalse;
        message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
    
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          collected.first().delete();
          thisMessage = collected.first().content;
          let boi;
          msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
    
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
                collected.first().delete();
                boi = collected.first().content;
                let boi2;
                msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
    
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ['time']
                  })
                  .then(collected => {
                    collected.first().delete();
                  boi2 = collected.first().content;
          msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
     message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
            max: 1,
            time: 90000,
            errors: ['time']
          })
          .then(collected => {
            if(collected.first().content === 'لا') {
              msg.delete();
              message.delete();
              thisFalse = false;
            }
            if(collected.first().content === 'نعم') {
              if(thisFalse === false) return;
              msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
              collected.first().delete();

              
              pycodes.send(`@everyone | @here
  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
  **${message.guild.name}© :arrow_down:**     
  \`\`\`py
  ${thisMessage}\`\`\`
  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
  ${ter}**وصف الكود**: ${boi}
  ${m7twa}**تم النشر بواسطة**: ${message.author}
  ${Devt}**المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
    message.react("501807338106126336").then(() => message.react("501786909677322270"))
  
  
  
                })

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});
  


    client.on('message',async message => {

        if(message.content.startsWith(prefix + "html")) {
          const ayy = client.emojis.find(emoji => emoji.name === "GooD");
const nos = client.emojis.find(emoji => emoji.name === "BaD")
const ter = client.emojis.get("501785113814761473");
const Devt = client.emojis.get("501785041358028811");
const m7twa = client.emojis.get("501785575968210946");
let customemojis = client.emojis.find(r => r.name === 'GooD');
let customemoji = client.emojis.find(r => r.name === 'BaD');
      if(!message.channel.guild) return message.reply('This Command For Servers Only !');
              if(message.channel.name !== '✻-sharecodes') return message.reply('يجب كتابه الامر في روم باسم ✻-sharecodes')
        let htmlcodes = message.guild.channels.find(`name`, "✻-codes-html");
        if(!htmlcodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
          let filter = m => m.author.id === message.author.id;
          let thisMessage;
          let thisFalse;
          message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
      
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ['time']
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
      
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                  boi = collected.first().content;
                  let boi2;
                  msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
      
                    message.channel.awaitMessages(filter, {
                      max: 1,
                      time: 90000,
                      errors: ['time']
                    })
                    .then(collected => {
                      collected.first().delete();
                    boi2 = collected.first().content;
            msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
       message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              if(collected.first().content === 'لا') {
                msg.delete();
                message.delete();
                thisFalse = false;
              }
              if(collected.first().content === 'نعم') {
                if(thisFalse === false) return;
                msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
                collected.first().delete();

                
                htmlcodes.send(`@everyone | @here
    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
    **${message.guild.name}© :arrow_down:**     
    \`\`\`html
    ${thisMessage}\`\`\`
    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
    ${ter}**وصف الكود**: ${boi}
    ${m7twa}**تم النشر بواسطة**: ${message.author}
    ${Devt}**المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
      message.react("501807338106126336").then(() => message.react("501786909677322270"))
    
    
    
    
                })

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});
  

      client.on('message',async message => {

          if(message.content.startsWith(prefix + "eris")) {
            const ayy = client.emojis.find(emoji => emoji.name === "GooD");
const nos = client.emojis.find(emoji => emoji.name === "BaD")
const ter = client.emojis.get("501785113814761473");
const Devt = client.emojis.get("501785041358028811");
const m7twa = client.emojis.get("501785575968210946");
let customemojis = client.emojis.find(r => r.name === 'GooD');
let customemoji = client.emojis.find(r => r.name === 'BaD');
        if(!message.channel.guild) return message.reply('This Command For Servers Only !');
                if(message.channel.name !== '✻-sharecodes') return message.reply('يجب كتابه الامر في روم باسم ✻-sharecodes')
          let eriscodes = message.guild.channels.find(`name`, "✻-codes-eris");
          if(!eriscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
            let filter = m => m.author.id === message.author.id;
            let thisMessage;
            let thisFalse;
            message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
        
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              thisMessage = collected.first().content;
              let boi;
              msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
        
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ['time']
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    let boi2;
                    msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
        
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      .then(collected => {
                        collected.first().delete();
                      boi2 = collected.first().content;
              msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
         message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
                if(collected.first().content === 'لا') {
                  msg.delete();
                  message.delete();
                  thisFalse = false;
                }
                if(collected.first().content === 'نعم') {
                  if(thisFalse === false) return;
                  msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
                  collected.first().delete();

                  
                  eriscodes.send(`@everyone | @here
      ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
      **${message.guild.name}© :arrow_down:**     
      \`\`\`eris
      ${thisMessage}\`\`\`
      ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
      ${ter}**وصف الكود**: ${boi}
      ${m7twa}**تم النشر بواسطة**: ${message.author}
      ${Devt}**المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
        message.react("501807338106126336").then(() => message.react("501786909677322270"))

                })

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});

  


const ytdl = require('ytdl-core');

const request = require('request');

const Canvas = require("canvas");

const fs = require("fs");

const jimp = require("jimp");

const moment = require("moment")



client.on('message',async message => {

  if(message.author.bot || message.channel.type === 'dm') return;

  let args = message.content.split(' ');

  if(args[0] === `${prefix}bc`) {

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');

    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

  

    let msgCount = 0;

    let errorCount = 0;

    let successCount = 0;

    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {

      message.guild.members.forEach(g => {

        g.send(args.slice(1).join(' ')).then(() => {

          successCount++;

          msgCount++;

          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);

        }).catch(e => {

          errorCount++;

          msgCount++;

          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);

        });

      });

    });

  }

});

client.on('guildMemberAdd', member=> {

    member.addRole(member.guild.roles.find("name","Member"));

    });

client.on('message', message => {

	//xRGRx .. By Julian

	if (message.author.bot) return;

	var command = message.content.toLowerCase().split(" ")[0];

	var args = message.content.toLowerCase().split(" ");

if(null == message.guild || !message.guild) return;

	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));

	var logChannel = message.guild.channels.find(c => c.name === 'log');

	var prefix = '-';


	if(command == prefix + 'ban') {

	if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');

        if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');

		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');

//xRGRx .. By Julian

		if(!userM) return message.channel.send(`**➥ Useage:** ${prefix}ban \`\`@Name\`\` time reason`);

		if(userM.user.id === message.author.id) return message.channel.send(':no_entry: | Why you want ban **Your Self** ?');

		if(userM.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | Nice try dude \:D');

		if(message.guild.member(userM.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | You cant give **${userM.user.username}** Ban beacuse him role highest then your role!`);

		if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I cant give **${userM.user.username}** Ban beacuse him role highest then my role!`);

		if(!message.guild.member(userM.user).bannable) return message.channel.send(`:no_entry: | I cant give **${userM.user.username}** Ban.`);

//xRGRx .. By Julian

		var time = message.content.split(" ")[2];

		if(!time) time = '1d';


		if(!ms(time)) {

			var reason = message.content.split(' ')[2];

		}else {

			var reason = message.content.split(' ')[3];

		}


		if(!reason) reason = 'No reason provided.';


		userM.user.send(`:no_entry: | You have \`\`BANNED\`\` From the server **${message.guild.name}**, By: **${message.author.tag}**, Reason: \`\`${reason}\`\`, Time: **${time}**`).catch();

        message.guild.member(userM.user).ban({ reason: reason });

        message.channel.send(`:white_check_mark: | Successfully \`\`BANNED\`\` ${userM.user.username} from the server! :airplane: \`\`${reason}\`\``);

		//xRGRx .. By Julian

		let banInfo = new Discord.RichEmbed()

		.setTitle('**[BANNED]**')

		.setThumbnail(message.author.avatarURL)

		.setColor('GREEN')

		.setDescription(`**\n:airplane: Successfully \`\`BANNED\`\` **${userM.user.username}** From the server!\n\n**User:** <@${userM.user.id}> (ID: ${userM.user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\`\n**Time:** ${time}`)

		.setTimestamp()

		.setFooter(userM.user.tag, userM.user.avatarURL)


		if(logChannel) {

			logChannel.send(banInfo);

		}

		//xRGRx .. By Julian

		setTimeout(function() {

			message.guild.fetchBans().then(bans => {

				var Found = bans.find(m => m.id === userM.user.id);

				if(!Found) return;


				message.guild.unban(userM.user);


				let unbanInfo = new Discord.RichEmbed()

				.setTitle('**[UNBANNED]**')

				.setThumbnail(message.guild.iconURL)

				.setColor('GREEN')

				.setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` **${userM.user.username}** From the server!\n\n**User:** <@${userM.user.id}> (ID: ${userM.user.id})\n**Reason:** \`\`Time Ended.\`\``)

				.setTimestamp()

				.setFooter(userM.user.tag, userM.user.avatarURL)


				if(logChannel) {

					logChannel.send(banInfo);

				}

			})

		}, ms(time))

	}

	if(command == prefix + 'unban') {

		//xRGRx .. By Julian

		 if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 

		if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');

		if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');

		if(!args[1]) return message.channel.send(':no_entry: | Please type the ID of user');

		if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');

		message.guild.fetchBans().then(bans => {

			var Found = bans.find(m => m.id === args[1]);

			if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);

			message.guild.unban(args[1]);

			message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);

			//xRGRx .. By Julian

			let banInfo = new Discord.RichEmbed()

			.setTitle('**[UNBANNED]**')

			.setThumbnail(message.author.avatarURL)

			.setColor('GREEN')

			.setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)

			.setTimestamp()

			.setFooter(userM.user.tag, userM.user.avatarURL)


			if(logChannel) {

				logChannel.send(banInfo);

			}

		})

	}

});

client.on('message', message => { 

if (message.author.bot) return;

var prefix = "-";

if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];

command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "mute") {

if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');

        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');

let user = message.mentions.users.first();

let muteRole = message.guild.roles.find("name", "Muted");

if (!muteRole) return message.reply(":no_entry: Error | I Cant find 'Muted' Role").then(msg => {msg.delete(5000)});

if (message.mentions.users.size < 1) return message.reply('**➥ Useage:** -mute \`\`@Name\`\` reason');

let reason = message.content.split(" ").slice(2).join(" ");

message.guild.member(user).addRole(muteRole);

const muteembed = new Discord.RichEmbed()

.setColor("RANDOM")

.setAuthor(`Muted!`, user.displayAvatarURL)

.setThumbnail(user.displayAvatarURL)

.addField("**:busts_in_silhouette: المستخدم**", '**[ ' + `${user.tag}` + ' ]**',true)

.addField("**:hammer: تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)

.addField("**:book: السبب**", '**[ ' + `${reason}` + ' ]**',true)

.addField("User", user, true) 

  .setTitle('**[MUTED]**')

		.setThumbnail(message.author.avatarURL)

		.setColor('GREEN')

		.setDescription(`**\n:zipper_mouth: Successfully \`\`MUTED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\``)

		.setTimestamp()

		.setFooter(user.tag, user.avatarURL)

client.channels.find('name', "log").send({embed : muteembed});

}


if (command == "unmute") {

if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');

        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');

let user = message.mentions.users.first();

let muteRole = message.guild.roles.find("name", "Muted");

if (!muteRole) return message.reply(":no_entry: Error | I Cant find 'Muted' Role").then(msg => {msg.delete(5000)});

if (message.mentions.users.size < 1) return message.reply('**➥ Useage:** -unmute \`\`@Name\`\`');

let reason = message.content.split(" ").slice(2).join(" ");

message.guild.member(user).removeRole(muteRole);

const unmuteembed = new Discord.RichEmbed()

.setTitle('**[UNMUTED]**')

			.setThumbnail(message.author.avatarURL)

			.setColor('GREEN')

			.setDescription(`**\n:zipper_mouth: Successfully \`\`UNMUTED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)

			.setTimestamp()

			.setFooter(user.tag, user.avatarURL)

client.channels.find('name', "log").send({embed : unmuteembed});

}

});





client.on('message' , message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "ping")) {

 message.channel.send('pong').then((msg) => {

var PinG = `${Date.now() - msg.createdTimestamp}`

var ApL = `${Math.round(client.ping)}`

      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);

 })

  }  

 });

client.on("message", message => {
	if (message.author.bot) return;
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

var Julian = {};
client.on('guildMemberRemove', member => {
Julian[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!Julian[member.user.id]) return;
console.log(Julian[member.user.id].roles.length);
for(let i = 0; i < Julian[member.user.id].roles.length + 1; i++) {
member.addRole(Julian[member.user.id].roles.shift());
}
});
client.on('message', message => {
	if (message.author.bot) return;
const prefix = "-";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | You dont have **KICK_MEMBERS** Permission!');
        if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | I dont have **KICK_MEMBERS** Permission!');
 let args = message.content.split(" ").slice(1)
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("**➥ Useage:** -kick \`\`@Name\`\` reason");
  if(!reason) return message.channel.send (":no_entry: | Please type the Reason");
  if (!message.guild.member(user)
  .bannable) return message.channel.send(":no_entry: | I cant give **${user.username}** Kick.");

  message.guild.member(user).kick(7, user);
  
  user.send(`:no_entry: | You have \`\`KICKED\`\` From the server **${message.guild.name}**, By: **${message.author.tag}**, Reason: \`\`${reason}\`\``).catch();
        message.channel.send(`:white_check_mark: | Successfully \`\`KICKED\`\` ${user.username} from the server! :airplane: \`\`${reason}\`\``);
		
  const banembed = new Discord.RichEmbed()
  .setTitle('**[KICKED]**')
		.setThumbnail(message.author.avatarURL)
		.setColor('GREEN')
		.setDescription(`**\n:airplane: Successfully \`\`KICKED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\``)
		.setTimestamp()
		.setFooter(user.tag, user.avatarURL)
  client.channels.find('name', "log").send({embed : banembed})
}
});
  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('discordapp.com/invite/')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
	  if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
	  	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
   message.channel.sendMessage(args.join(" .   "))
   message.delete()
  }
 });

client.on('message', message => {
    var prefix = "-";         //<=== هنا تقدر تغير البريفكس
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {            //Codes Development .
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));         //Codes Development .
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);      //Codes Development .
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))   //Codes Development .

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {          //Codes Development .

        }           //Codes Development .
      }}).then(msg => {msg.delete(3000)});

})     //Codes Development .
reaction2.on("collect", r => {   //Codes Development .
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});   //Codes Development .

client.on('message', message => {

var prefix = ".";

       if(message.content === prefix + "mutechannel") {

                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: false

              }).then(() => {

                  message.reply("**__تم تقفيل الشات__ ✅ **")

              });

                }

    if(message.content === prefix + "unmutechannel") {

                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: true

                

              }).then(() => {

                  message.reply("**__تم فتح الشات__✅**")

              });

    }

       

});



client.on('message', message => {

    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({

        thing: true,

        maxUses: 100,

        maxAge: 86400

    }).then(invite =>

      message.author.sendMessage(invite.url)

    )

  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم

عدد استخدامات الرابط : 100**`)

    }

});



 

client.on('message', async message =>{


  let messageArray = message.content.split(" ");

  let cmd = messageArray[0];

  let args = messageArray.slice(1);

  let prefix = '-';

  let sicon = message.author.displayAvatarURL;

  if(cmd === `${prefix}help`) {

      var bots = new Discord.RichEmbed()


      .setDescription(`** 


  


_─══════ {✯SuperCodes✯} ══════─_

__الاوامرالخاصة__:spy::skin-tone-1: 

\`\`#js\`\` | نشر اكواد جافا سكريبت

\`\`#py\`\` | نشر اكواد بايثون

\`\`#html\`\` | نشر اكواد اتشتيامل

\`\`#تقديم\`\` |

\`\`#قبول\`\` |

\`\`#رفض\`\` |


∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞

__اوامر صاحب البوت__:cherry_blossom: 

\`\`#bc\`\`| امر البرودكاست
\`\`#ban\`\`| لحظر شخص من السيرفر
\`\`#unban\`\`| لفك الحظر عن شخص من السيرفر
\`\`#mute\`\`| لأسكات عضو
\`\`#unmute\`\`| لفك الاسكات عن العضو
\`\`#kick\`\`| لطرد عضو
\`\`#mutechannel\`\`| قفل الشات
\`\`#unmutechannel\`\`| فك القفل عن الشات
\`\`#clear\`\`| لمسح الشات
\`\`#role\`\`| اعطاء شخص رتبة
\`\`#roleremove\`\`| ازالة رتبة من شخص
\`\`#say\`\`| التكلم عبر البوت

_─══════ {✯Ping Development✯} ══════─_

**`)

      .setColor('RANDOM')

      message.channel.send(bots);

  }

});



client.on('message', message => {

if (message.content === "-help") {

message.react("✅")


}

});



client.on('message', message => {

if (message.content === "-help") {

message.react("📩")


}

});

client.on('message', async rokz => {

    if(rokz.content.startsWith(prefix + "تقديم")) {

      let lang = '';

      let time = '';

      let expe = '';

      let fillter = m => m.author.id === rokz.author.id

      await rokz.channel.send("ما لغتك ؟").then(e => {

     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {

       lang = co.first().content;

        co.first().delete();


       e.edit(`كم هي المدة ؟

[${lang}]`)

       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

       .then(col => {

         time = col.first().content;

          col.first().delete();


            e.edit(`ما هي خبرتك ؟

[${time}]

[${lang}]`)

            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

            .then(coll => {

              expe = coll.first().content;

               coll.first().delete();


               e.edit(`جاري تقديمك...

[${expe}]

[${time}]

[${lang}]`)

              let rokzz = rokz.guild.channels.find("name","submissions")

              setTimeout(() => {

                e.edit("تم التقديم")

              }, 3000)

              rokzz.send(`

» اللغة : **${lang}**
» المدة : **${time}**
» الخبرة : **${expe}**

تم التقديم بواسطة: ${rokz.author}
`).then(rokzzz => {

                  rokzzz.react("501807338106126336")

                  rokzzz.react("501786909677322270")

                })

            })

       })

     })

   })

    }

  })

 

    

    
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('502796059966439424');

if(message.content.startsWith(prefix + "رفض")) {

if(message.guild.id !== '501709408796147712') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}

[ :x: ] :: لقد تم رفض العضو`);

}

});
  

    
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('501709408796147712');

if(message.content.startsWith(prefix + "قبول")) {


 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}

[ :white_check_mark: ] :: لقد تم قبول العضو واعطائه رتبة سبورت`);

}

});


client.on("message", message => {    
	if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content ===  prefix + "help"){ 
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("─══════ {✯**Choose**✯} ══════─",' ‎ ')
.addField(" **❧#help1 ➺      ⦁قائمة الاكواد ⦁  **",' ‎ ')
.addField("**❧#help2 ➺      ⦁ أوامر عامة ⦁** ",' ‎ ')
.addField("**❧#help3 ➺      ⦁ أوامر الأدارة + السبورت ⦁**",' ‎ ')
 .addField("─══════ {✯**SuperCodes**✯} ══════─",' ‎ ')

.setFooter('SuperCodes')


message.channel.send({embed});

}
});




client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help1") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("❧  **#help-js  ➺      ⦁ قائمة أكواد الجافا سكربت**  ⦁",' ‎ ')
.addField("❧  **#help-py  ➺      ⦁ قائمة أكواد البايثون**  ⦁",' ‎ ')
.addField("❧  **#help-eris  ➺    ⦁ قائمة أكواد الإرس** ⦁",' ‎ ')
 .addField("❧  **#help-io  ➺      ⦁ قائمة أكواد الآي أو** ⦁",' ‎ ')

.setFooter('SuperCodes')


message.channel.send({embed});

}
});




client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("❧  **#help-js-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
.addField("❧  **#help-js-admin     ➺      ⦁ قسم الأكواد الإدارية** ⦁",' ‎ ')
.addField("❧  **#help-js-general   ➺      ⦁ قسم الأكواد العامة*** ⦁",' ‎ ')
 .addField("❧  **#help-js-welcome   ➺      ⦁ قسم أكواد الترحيب** ⦁",' ‎ ')
	  .addField("❧  **#help-js-help      ➺      ⦁ قسم أكواد الهلب** ⦁",' ‎ ')
			.addField("❧  **#help-js-bc        ➺      ⦁ قسم أكواد البرودكاست** ⦁",' ‎ ')
.setFooter('SuperCodes')


message.channel.send({embed});


}
});


client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-source") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("**#help-js-source-1  ➺      ⦁ السورس الأساسي**⦁",' ‎ ')
.addField("**#help-js-source-2  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
.addField("**#help-js-source-3  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
 .addField("**#help-js-source-4  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')

.setFooter('SuperCodes')


message.channel.send({embed});


}
});



client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-source-1") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود السورس الأساسي**
https://hastebin.com/xumiferaru.coffeescript
`);

}
});  

client.on("message", message => {

	  if (message.content.startsWith(prefix + "bc4")) {
				   if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});


client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-source-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **السورس الأساسي مع الستريمنق ومعلومات البوت**
https://hastebin.com/idotifusid.coffeescript
`);

}
});  





client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-source-3") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **السورس الأساسي مع الواتشينق**
https://hastebin.com/jivizupafi.coffeescript
`);

}
});  



  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-source-4") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **السورس الاساسي مع البنق**
https://hastebin.com/uxogubebif.coffeescript
`);

}
});  





 client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-admin") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("**#help-js-admin-1  ➺      ⦁ كود الباند**⦁",' ‎ ')
.addField("**#help-js-admin-2  ➺      ⦁ كود الكيك** ⦁",' ‎ ')
.addField("**#help-js-admin-3  ➺      ⦁ كود مسح الشات مع عدد وشبيه بالبروبوت** ⦁",' ‎ ')
.addField("**#help-js-admin-4  ➺      ⦁ كود فتح وتقفيل الشات** ⦁",' ‎ ')
.addField("**#help-js-admin-5  ➺      ⦁  كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه** ⦁",' ‎ ')
.addField("**#help-js-admin-6  ➺      ⦁  كود لانشاء شات كتابي** ⦁",' ‎ ')	  
.addField("**#help-js-admin-7  ➺      ⦁  كود لانشاء روم صوتي** ⦁",' ‎ ')
.addField("**#help-js-admin-8  ➺      ⦁  invite : كود دعوه البوت مثال ** ⦁",' ‎ ')	  



.setFooter('SuperCodes')


message.channel.send({embed});


}
});



	client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-1") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود الباند**
https://hastebin.com/hahujuwexa.php
`);

}
});  




	  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود الكيك**
https://hastebin.com/bowivopose.php
`);

}
});  



		client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-3") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود مسح الشات مع عدد وشبيه بالبروبوت**
https://hastebin.com/iwororamam.coffeescript
`);

}
});  





		  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-4") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود فتح وتقفيل الشات**
https://hastebin.com/etugawomeh.coffeescript
`);

}
});  


			client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-5") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ ** كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه**
https://pastebin.com/Xe5kzVUw
`);

}
});

   client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-6") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ ** كود لانشاء شات كتابي**
https://pastebin.com/ChtbaGu2
`);

}
});

	 client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-7") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ ** كود لانشاء روم صوتي**
https://pastebin.com/Y2SWEE6N
`);

}
});



	client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-admin-8") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **invite : كود دعوه البوت مثال **
https://pastebin.com/hP9VQpFR
`);

}
});  






   client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-general") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("**#help-js-general-1  ➺      ⦁ كود البنق **⦁",' ‎ ')
.addField("**#help-js-general-2  ➺      ⦁ كود القرعة ** ⦁",' ‎ ')
.addField("**#help-js-general-3  ➺      ⦁ كود الافتار  ** ⦁",' ‎ ')	  
.addField("**#help-js-general-4  ➺      ⦁ كود معلومات السيرفر ** ⦁",' ‎ ')
.addField("**#help-js-general-5  ➺      ⦁ كود المعلومات الشخصية** ⦁",' ‎ ')
.addField("**#help-js-general-6  ➺      ⦁ كود كت تويت** ⦁",' ‎ ')	  
.addField("**#help-js-general-7  ➺      ⦁ كود صراحه** ⦁",' ‎ ')	  


.setFooter('SuperCodes')

message.channel.send({embed});


}
});






			client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-1") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود البنق**
https://hastebin.com/udehosayej.coffeescript
`);

}
});




				  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود القرعة**
https://hastebin.com/qunobubuji.js
`);

}
});





			  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-3") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود الافاتار**
https://hastebin.com/wopigecazo.js
`);

}
});





				client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-4") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود معلومات السيرفر**
https://hastebin.com/xajaregari.js
`);

}
});






			  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-5") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود المعلومات الشخصية**
https://hastebin.com/vitodewesa.js
`);

}
});


		  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-6") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود كت تويت**
https://pastebin.com/fak2SQsm
`);

}
});




			  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-general-7") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود صراحه **
https://pastebin.com/NC32yt0v
`);

}
});






	 client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-welcome") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("**#help-js-welcome-1  ➺      ⦁ كود ترحيب مع ذكر رقم العضو **⦁",' ‎ ')
.addField("**#help-js-welcome-2  ➺      ⦁ كود الترحيب مع صورة ** ⦁",' ‎ ')
.addField("**#help-js-welcome-3  ➺      ⦁ كود مغادرة العضو ** ⦁",' ‎ ')


	 
.setFooter('SuperCodes')


message.channel.send({embed});

}
});




				client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-welcome-1") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود ترحيب مع ذكر رقم العضو**
https://hastebin.com/zapuyexive.js
`);

}
});




				  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-welcome-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود الترحيب مع صورة**
https://hastebin.com/tujehubuqo.php
`);

}
});




				client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-welcome-3") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود مغادرة العضو**
https://hastebin.com/gufimedaca.js
`);

}
});






	   client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-help") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("**#help-js-help-1  ➺      ⦁ كود هلب مع امبد يرسل بنفس الشات **⦁",' ‎ ')
.addField("**#help-js-help-2  ➺      ⦁ كود هلب مزخرف بدون امبد ويرسل عالخاص ** ⦁",' ‎ ')
	 
.setFooter('SuperCodes')


message.channel.send({embed});

}
});




				  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-help-1") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود هلب مع امبد يرسل بنفس الشات**
https://hastebin.com/cikeyoguqa.cs
`);

}
});



					client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-help-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **كود هلب مزخرف بدون امبد ويرسل عالخاص**
https://hastebin.com/emawayudib.bash
`);

}
});







		 client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-bc") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in SuperCodes Server 💬`⦁",' ‎ ')
.addField("**#help-js-bc-1  ➺      ⦁ برودكاست + للكل + مطور **⦁",' ‎ ')
.addField("**#help-js-bc-2  ➺      ⦁ برودكاست + للكل + غير مطور ** ⦁",' ‎ ')
.addField("**#help-js-bc-3  ➺      ⦁ برودكاست + للأونلاين + مع منشن + غير مطور **⦁",' ‎ ')
.addField("**#help-js-bc-4  ➺      ⦁ برودكاست + للكل + مع منشن + غير مطور ** ⦁",' ‎ ')	   
	 
.setFooter('SuperCodes')


message.channel.send({embed});

}
});










						client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-bc-1") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **برودكاست + للكل + مطور**
https://hastebin.com/bipanureqa.js
`);

}
});



					  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-bc-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **برودكاست + للكل + غير مطور**
https://hastebin.com/kuvoruzowe.cs
`);

}
});




					  client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-bc-3") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ ** برودكاست + للأونلاين + مع منشن + غير مطور**
https://hastebin.com/zujuvupali.php
`);

}
});




						client.on('message', message => {
if (message.author.bot) return;
if (message.content === prefix + "help-js-bc-4") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
	  

   


message.author.sendMessage(`

❖ **برودكاست + للكل + مع منشن + غير مطور**
https://hastebin.com/zojokunayo.php
`);

}
});










client.login(process.env.BOT_TOKEN);
