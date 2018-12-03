const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "#"
const code = '#'

client.on('ready', () => {
	client.user.setGame(`Codes Server.`,'https://www.twitch.tv/fofodiscord');
  console.log(`Logged in as [ ${client.user.tag}! ]`);

});


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
          let staff = message.guild.member(message.author).roles.find('name' , `Codes Support`); 
          if(!staff) return message.channel.send(`🛑 You Cant Do This Command`) 
    let jscodes = message.guild.channels.find(`name`, "discord-js");
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
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**${message.guild.name}© :arrow_down:**     
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
  message.react("✅").then(() => message.react("❌"))


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
            let staff = message.guild.member(message.author).roles.find('name' , `Codes Support`);
             if(!staff) return message.channel.send(`🛑 You Cant Do This Command`) 
      let pycodes = message.guild.channels.find(`name`, "discord-py");
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
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  **${message.guild.name}© :arrow_down:**     
  \`\`\`py
  ${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  **وصف الكود**: ${boi}
  **تم النشر بواسطة**: ${message.author}
  **المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
    message.react("✅").then(() => message.react("❌"))
  
  
  
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
              let staff = message.guild.member(message.author).roles.find('name' , `Codes Support`);
               if(!staff) return message.channel.send(`🛑 You Cant Do This Command`) 
        let htmlcodes = message.guild.channels.find(`name`, "discord-html");
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
  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    **${message.guild.name}© :arrow_down:**     
    \`\`\`html
    ${thisMessage}\`\`\`
  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    **وصف الكود**: ${boi}
    **تم النشر بواسطة**: ${message.author}
    **المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
      message.react("✅").then(() => message.react("❌"))
    
    
    
    
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
                let staff = message.guild.member(message.author).roles.find('name' , `Codes Support`);
                 if(!staff) return message.channel.send(`🛑 You Cant Do This Command`) 
          let eriscodes = message.guild.channels.find(`name`, "discord-eris");
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
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      **${message.guild.name}© :arrow_down:**     
      \`\`\`eris
      ${thisMessage}\`\`\`
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      **وصف الكود**: ${boi}
      **تم النشر بواسطة**: ${message.author}
      **المصدر / الشخص الذي صنع الكود**: ${boi2}`).then(message => {
        message.react("✅").then(() => message.react("❌"))

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





 

client.on('message', async message =>{


  let messageArray = message.content.split(" ");

  let cmd = messageArray[0];

  let args = messageArray.slice(1);

  let prefix = '#';

  let sicon = message.author.displayAvatarURL;

  if(cmd === `${prefix}help`) {

      var bots = new Discord.RichEmbed()


      .setDescription(`** 


  


_─══════ {✯Codes Server✯} ══════─_

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

_─══════ {✯Codes Server✯} ══════─_

**`)

      .setColor('RANDOM')

      message.channel.send(bots);

  }

});



client.on('message', message => {

if (message.content === "#help") {

message.react("✅")


}

});



client.on('message', message => {

if (message.content === "#help") {

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

                  rokzzz.react("✅")

                  rokzzz.react("❌")

                })

            })

       })

     })

   })

    }

  })

 

    

    
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('514424398581596161');

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

let Room = client.channels.get('514424398581596161');

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
 .addField("─══════ {✯**Codes Server**✯} ══════─",' ‎ ')

.setFooter('Codes Server')


message.channel.send({embed});

}
});




client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help1") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("❧  **#help-js  ➺      ⦁ قائمة أكواد الجافا سكربت**  ⦁",' ‎ ')
.addField("❧  **#help-py  ➺      ⦁ قائمة أكواد البايثون**  ⦁",' ‎ ')
.addField("❧  **#help-eris  ➺    ⦁ قائمة أكواد الإرس** ⦁",' ‎ ')
 .addField("❧  **#help-io  ➺      ⦁ قائمة أكواد الآي أو** ⦁",' ‎ ')

.setFooter('Codes Server')


message.channel.send({embed});

}
});




client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("❧  **#help-js-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
.addField("❧  **#help-js-admin     ➺      ⦁ قسم الأكواد الإدارية** ⦁",' ‎ ')
.addField("❧  **#help-js-general   ➺      ⦁ قسم الأكواد العامة*** ⦁",' ‎ ')
 .addField("❧  **#help-js-welcome   ➺      ⦁ قسم أكواد الترحيب** ⦁",' ‎ ')
	  .addField("❧  **#help-js-help      ➺      ⦁ قسم أكواد الهلب** ⦁",' ‎ ')
			.addField("❧  **#help-js-bc        ➺      ⦁ قسم أكواد البرودكاست** ⦁",' ‎ ')
.setFooter('Codes Server')


message.channel.send({embed});


}
});


client.on('message', message => {
if (message.author.bot) return;
if (message.content  === prefix + "help-js-source") {
	const embed = new Discord.RichEmbed()


.setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("**#help-js-source-1  ➺      ⦁ السورس الأساسي**⦁",' ‎ ')
.addField("**#help-js-source-2  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
.addField("**#help-js-source-3  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
 .addField("**#help-js-source-4  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')

.setFooter('Codes Server')


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

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("**#help-js-admin-1  ➺      ⦁ كود الباند**⦁",' ‎ ')
.addField("**#help-js-admin-2  ➺      ⦁ كود الكيك** ⦁",' ‎ ')
.addField("**#help-js-admin-3  ➺      ⦁ كود مسح الشات مع عدد وشبيه بالبروبوت** ⦁",' ‎ ')
.addField("**#help-js-admin-4  ➺      ⦁ كود فتح وتقفيل الشات** ⦁",' ‎ ')
.addField("**#help-js-admin-5  ➺      ⦁  كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه** ⦁",' ‎ ')
.addField("**#help-js-admin-6  ➺      ⦁  كود لانشاء شات كتابي** ⦁",' ‎ ')	  
.addField("**#help-js-admin-7  ➺      ⦁  كود لانشاء روم صوتي** ⦁",' ‎ ')
.addField("**#help-js-admin-8  ➺      ⦁  invite : كود دعوه البوت مثال ** ⦁",' ‎ ')	  



.setFooter('Codes Server')


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

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("**#help-js-general-1  ➺      ⦁ كود البنق **⦁",' ‎ ')
.addField("**#help-js-general-2  ➺      ⦁ كود القرعة ** ⦁",' ‎ ')
.addField("**#help-js-general-3  ➺      ⦁ كود الافتار  ** ⦁",' ‎ ')	  
.addField("**#help-js-general-4  ➺      ⦁ كود معلومات السيرفر ** ⦁",' ‎ ')
.addField("**#help-js-general-5  ➺      ⦁ كود المعلومات الشخصية** ⦁",' ‎ ')
.addField("**#help-js-general-6  ➺      ⦁ كود كت تويت** ⦁",' ‎ ')	  
.addField("**#help-js-general-7  ➺      ⦁ كود صراحه** ⦁",' ‎ ')	  


.setFooter('Codes Server')

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

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("**#help-js-welcome-1  ➺      ⦁ كود ترحيب مع ذكر رقم العضو **⦁",' ‎ ')
.addField("**#help-js-welcome-2  ➺      ⦁ كود الترحيب مع صورة ** ⦁",' ‎ ')
.addField("**#help-js-welcome-3  ➺      ⦁ كود مغادرة العضو ** ⦁",' ‎ ')


	 
.setFooter('Codes Server')


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

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("**#help-js-help-1  ➺      ⦁ كود هلب مع امبد يرسل بنفس الشات **⦁",' ‎ ')
.addField("**#help-js-help-2  ➺      ⦁ كود هلب مزخرف بدون امبد ويرسل عالخاص ** ⦁",' ‎ ')
	 
.setFooter('Codes Server')


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

.addField("⦁`All types of codes in Codes Server Server 💬`⦁",' ‎ ')
.addField("**#help-js-bc-1  ➺      ⦁ برودكاست + للكل + مطور **⦁",' ‎ ')
.addField("**#help-js-bc-2  ➺      ⦁ برودكاست + للكل + غير مطور ** ⦁",' ‎ ')
.addField("**#help-js-bc-3  ➺      ⦁ برودكاست + للأونلاين + مع منشن + غير مطور **⦁",' ‎ ')
.addField("**#help-js-bc-4  ➺      ⦁ برودكاست + للكل + مع منشن + غير مطور ** ⦁",' ‎ ')	   
	 
.setFooter('Codes Server')


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
