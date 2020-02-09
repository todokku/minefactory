const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : false});
const botconfig = require("./botconfig.json");
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
const emoji = require("./emoji.json");
//fs-extra//emoji.szena mondjuk xd
// const cooldown = require("./cooldown.json");
let name = "© Minefactory ©";
const superagent = require("superagent");
let cooldown = new Set();
let ldw = new Set();
let sdseconds = 15;
const weather = require('weather-js');
// const randomPuppy = require("random-puppy");

const ytdl = require('ytdl-core');
const {YTSearcher} = require('ytsearcher');
const streamOptions = { seek: 0.01, volume: 1.001 };
// const {YouTubeAPIKey} = require('./youapi.json');
// const YouTube = require('simple-youtube-api');
// bot.youtube = new YouTube(YouTubeAPIKey);
// const queue = new Map();
////////////////////////////////////////////////

//Feljebb vannak a globális változók.
 
 
 
bot.on("ready", async() => { //bot.on kezdete
    console.log(`${bot.user.username} elindult sikeresen!`)
 
//status :d   
let prefix = botconfig.prefix; 
    let statusok = [
        `parancsok: ${prefix}help`,
        `${bot.guilds.size} szerver`,
        `fejlesztő: Magyar Games`

    ]
    
 
    setInterval(function(){
        let status = statusok[Math.floor(Math.random() * statusok.length)];
        bot.user.setActivity(status, {type: "WATCHING"}) 
    }, 3000) 


}); //itt vége a bot.on nak
 
 
 
bot.on("message", async message => { //bot on kezdete
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 //prefix messageArray és cmd :D cmd = 0. karakter prefix = botconfig.prefix :D
    let prefix = botconfig.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 

//////////////////////////////////////////////////
////////////////////////////////////////////////////
// let rain = message.guild.roles.find(`name`, `rainbow`);
// if(!rain) {
//     message.guild.createRole({
//         name: 'rainbow',
//         hoist: false,
//         mentionable: false
//     });
// };

// setInterval(function(){
//     let asd = message.guild.roles.find(`name`, `rainbow`);
//         asd.setColor("RANDOM");
// }, 1000) 

///////////////////testing area

if(cmd === `${prefix}nyeremény`) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
    if(args[0]) {

    if(args[1] === `5m`){
    let botThumb = bot.user.displayAvatarURL;
    let nyer = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`)
    .setColor("#2DE7F7")
    .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(nyer);

    await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
    let asd = message.guild.members.filter(member => !member.user.bot).random();

    setTimeout(() => {
    message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}${emoji.gg}. (<@${asd.user.id}>)`);
    message.channel.send("**A nyeremény játéknak vége!**")
    }, 300000)


    } else if(args[1] === `10m`){
    let botThumb = bot.user.displayAvatarURL;
    let nyer = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`)
    .setColor("#2DE7F7")
    .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(nyer);

    await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
    let asd = message.guild.members.filter(member => !member.user.bot).random();

    setTimeout(() => {
        message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}${emoji.gg}. (<@${asd.user.id}>)`);
    message.channel.send("**A nyeremény játéknak vége!**")
    }, 600000)

    } else if(args[1] === `30m`){
        let botThumb = bot.user.displayAvatarURL;
    let nyer = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`)
    .setColor("#2DE7F7")
    .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(nyer);

    await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
    let asd = message.guild.members.filter(member => !member.user.bot).random();

    setTimeout(() => {
        message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}${emoji.gg}. (<@${asd.user.id}>)`);
    message.channel.send("**A nyeremény játéknak vége!**")
    }, 1800000)

    } else if(args[1] === `1h`){
        let botThumb = bot.user.displayAvatarURL;
    let nyer = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`)
    .setColor("#2DE7F7")
    .addField(`**Nyeremény játék tárgya: ${args[0]}**`, `Ez a nyeremény játék ${args[1]} tart!`)
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(nyer);

    await message.channel.send(`**Innentől számítva **${args[1]}** idő van hátra!**`);
    let asd = message.guild.members.filter(member => !member.user.bot).random();

    setTimeout(() => {
        message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}${emoji.gg}. (<@${asd.user.id}>)`);
    message.channel.send("**A nyeremény játéknak vége!**")
    }, 3600000)

    } else if(args[1] === `gyors`){

    let asd = message.guild.members.filter(member => !member.user.bot).random();

    message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}${emoji.gg}. (<@${asd.user.id}>)`);

    }else {
        message.channel.send(`${emoji.x} Kérlek add meg az időt! (gyors, 5m, 10m, 30m, 1h)`);
    }

} else message.channel.send(`${emoji.x} Kérlek add meg a nyeremény játék tárgyát!`);
    } else message.channel.send(`${emoji.x} Ehhez a parancshoz nincs jogod!`)
    
    
    

}
/////////////////////////////////////////////


if(cmd === `${prefix}ötlet`){
    if(args[0]) {
        message.delete().catch();

    bot.fetchUser('389003470117797889').then((user) => {
        user.send(`${message.author.username} ötlete: ` + args.join(' '));
    });

    // bot.fetchUser('ide az én idm').then((user) => {
    //     user.send(`${message.author.username} ötlete: ` + args[0]);
    // });

        message.channel.send(`${emoji.done} *Az ötleted sikeresen elküldve egy fejlesztőnek!*`);
} else message.channel.send(`${emoji.x} Kérlek adj meg egy szöveget!`);

}

if(cmd === `${prefix}userinfo`) {
    let status = ["elérhető", "nincs gépnél", "elfoglalt", "láthatatlan", "asd"];
    let avatarUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!avatarUser) return message.channel.send("Kérlek adj meg egy nevet! pl: @asd123");
    let avatarUserName = avatarUser.user.username;
    let userAvatar = avatarUser.user.displayAvatarURL;
    const guild = message.guild;

    let userEmbed = new Discord.RichEmbed()
    .setColor("#42c8f4")
    .setAuthor(avatarUser.user.username)
    .addField(`ID:`, `${avatarUser.id}`)
    .addField(`Ekkor csatlakozott a szerverhez:`, `${moment(message.guild.members.get(avatarUser.id).joinedAt).format("MMMM Do YYYY, h:mm:ss a")}`)
    .addField(`Ekkor hozta létre a fiókját:`, `${moment(message.guild.members.get(avatarUser.id).createdAt).format("MMMM Do YYYY, h:mm:ss a")}`)
    .addField("Rangok:", avatarUser.roles.map(roles => `${roles}`).join(' '), true)
    .addField("Játékban:", `${avatarUser.presence.game}`)
    .addField("Állapota:", `${avatarUser.presence.status}`)
    .addField(`${avatarUserName} profilképe.`, "ˇˇˇ")
    .setImage(userAvatar)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(userEmbed);
    

}

if(cmd === `${prefix}serverinfo`) {
    const guild = message.guild;
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " nap" : " napja") + " létrehozva.";
    };
    let verifLevels = ["Nincs", "Kevés", "Közepes", "Erős", "Nagyon erős"];
    let region = {
        "brazil": ":flag_br: Brazília",
        "eu-central": ":flag_eu: Közép európa",
        "singapore": ":flag_sg: Szingapúr",
        "us-central": ":flag_us: Közép USA",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: Kelet USA",
        "us-south": ":flag_us: Dél USA",
        "us-west": ":flag_us: Nyugat USA",
        "europe": ":flag_eu: Nyugat európa",
        "vip-us-east": ":flag_us: VIP Kelet USA",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Oroszország",
        "southafrica": ":flag_za:  Dél afrika"
    };
    if(message.guild.roles.size < 45) {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name)
        .addField("Név:", message.guild.name, true)
        .addField("ID:", message.guild.id, true)
        .addField("Tulaj:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Régió:", region[message.guild.region], true)
        .addField("Összes | Ember | Bot", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Biztonsági szint:", verifLevels[message.guild.verificationLevel], true)
        .addField("Csatornák:", message.guild.channels.size, true)
        .addField("Rangok száma:", message.guild.roles.size, true)
        .addField("Szerver létrehozása:", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .addField(`Rangok:`, guild.roles.map(roles => `${roles}`).join(' '), true)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`${name}`);
    message.channel.send({embed});
    } else {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name)
        .addField("Név:", message.guild.name, true)
        .addField("ID:", message.guild.id, true)
        .addField("Tulaj:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Régió:", region[message.guild.region], true)
        .addField("Összes | Ember | Bot", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Biztonsági szint:", verifLevels[message.guild.verificationLevel], true)
        .addField("Csatornák:", message.guild.channels.size, true)
        .addField("Rangok száma:", message.guild.roles.size, true)
        .addField("Szerver létrehozása:", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .addField(`Rangok:`, "Túl sok rang van! Max 45 rangot lehet megjeleníteni!")
        .setThumbnail(message.guild.iconURL)
        .setFooter(`${name}`);
    message.channel.send({embed});
    }

}


if (cmd === `${prefix}profilkép`) {
    let avatarUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!avatarUser) return message.channel.send(`${emoji.x} Kérlek adj meg egy nevet! pl: @asd123`);
    let userAvatar = avatarUser.user.displayAvatarURL;
    let avatarUserName = avatarUser.user.username;

    let avatarEmbed = new Discord.RichEmbed()

    .setColor("#42c8f4")
    .setAuthor(message.author.username)
    .addField(`${avatarUserName} profilképe.`, "ˇˇˇ")
    .setImage(userAvatar)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(avatarEmbed);
}


/////////////////////////////////////////////////////////////
 
   if(cmd === `${prefix}help`){
 
 
    let botThumb = bot.user.displayAvatarURL;
    let testembed = new Discord.RichEmbed()
    .setTitle(`${name}`)
    .setColor("#2DE7F7")
    .addBlankField()
    .addField("Általános Parancsok:", "ˇˇˇ")
    .addBlankField()
    .addField(`${prefix}ötlet <ötleted>`, "Ha bármi ötleted van, hogy mi legyen a botba ide írd!")
    .addField(`${prefix}szavazás <szavazás>`, "Szavazás indítása.")
    .addField(`${prefix}üzemidő`, "Üzem idő.")
    .addField(`${prefix}meghívó`, "Ha tetszik a bot itt tudod meghívni.")
    .addField(`${prefix}profilkép <@név>`, "Profilkép lekérése.")
    .addField(`${prefix}cigi`, "Elszívsz egy cigit. (Vigyázz káros!)")
    .addField(`${prefix}userinfo <@név>`, "Lekéri az összes információt a felhasználóról.")
    .addField(`${prefix}serverinfo`, "Lekéri az összes információt a szerverről.")
    .addField(`${prefix}macska`, "Cuki macskás kép.")
    .addField(`${prefix}időjárás <falu / város neve>`, "Lekéri a falu/város nak az időjárás adatait.")
    .addField(`${prefix}nitrókód`, "Generál egy random discord nitró kódot. (0.001% az esély hogy a kód működő kód!)")
    .addField(`${prefix}matek <easy / normal / hard>`, "Matematikai rejtvény a profiknak!")
    .addBlankField()
    .addField("A bot fejlesztője: Magyar Games", "<3")
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);
 
    message.member.send(testembed);

    let thxxd = new Discord.RichEmbed()
    .setTitle(`${name}`)
    .setColor("#2DE7F7")
    .addBlankField()
    .addField("Moderátor parancsok:", "ˇˇˇ")
    .addBlankField()
    .addField(`${prefix}némítás <@név>`, "némítás. **Moderator**")
    .addField(`${prefix}felnémítás <@név>`, "némítás oldása. **Moderator**")
    .addField(`${prefix}ranglétrehoz <új rang>`, "Létrehoz egy új rangot. **Moderator**")
    .addField(`${prefix}duma`, "Szöveg iratás bottal. **Moderator**")
    .addField(`${prefix}kick <@név>`, "Ember kickelése. **Moderator**")
    .addField(`${prefix}warn <@név>`, "Ember warnolása. **Moderator**")
    .addField(`${prefix}ban <@név>`, "Ember bannolása. **Moderator**")
    .addField(`${prefix}törlés <2-100>`, "Üzenetek törlése. **Moderator**")
    .addField(`${prefix}nyeremény <tárgy> <5m, 10m, 30m, 1h>`, "Nyeremény játék létrehozása. **Moderator**")
    .addField(`${prefix}időnémítás <@név> <3m, 5m, 15m, 30m, 1h>`, "Ember némítása egy meghatározott időre! **Moderator**")
    .addBlankField()
    .addField("A bot fejlesztője: Magyar Games", "<3")
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);
    message.member.send(thxxd);

    message.reply(`privátba elküldtem a parancsokat!`);
    
}

if(cmd === `${prefix}meghívó`) {
    let mgEmbed = new Discord.RichEmbed()
    .setColor("#3a74e0")
    .setTitle("Meghívó a bothoz:")
    .addField("Bot meghívása:", `https://bit.ly/2ZJ0Gys`)
    .addField("Meghívás a bot support szerverére:", "https://discord.gg/QTWvY4U")
    .addBlankField()
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(mgEmbed);
}

if(cmd === `${prefix}szavazás`){
    if(!args[0]) return message.channel.send(`${emoji.x} Kérlek adj meg egy tárgyat!`);

    const szavazásEmbed = new Discord.RichEmbed()
        .setColor('#8c45a8')
        .addField(args.join(' '), `Szavazást létrehozta: ${message.author.username}`)
        .addField("Igen=✅", "ˇ")
        .addField("Nem=❎", "ˇ")
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);

        message.delete().catch();
        message.channel.send(szavazásEmbed).then(async msg => {
            await msg.react('✅')
            await msg.react('❎')
    })
}

if (cmd === `${prefix}üzemidő`) {
    let boticon = bot.user.displayAvatarURL;
    let uptime = ms(bot.uptime);
    let uptimeEmbed = new Discord.RichEmbed()
    .setColor("#3a74e0")
    .setTitle("A bot üzem ideje:")
    .addField("Ennyi ideje online a bot:", `${uptime}`)
    .setThumbnail(boticon)
    .addBlankField()
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.channel.send(uptimeEmbed);
}

// if(cmd === `${prefix}troll`){
//     if(cooldown.has(message.author.id)) {
//         message.delete();
//         return message.channel.send(`<@${message.author.id}> Csak 2.5percenként tudsz trollkodni!`)
//     }
//         cooldown.add(message.author.id);


//     setTimeout(() => {
//         cooldown.delete(message.author.id)
//     }, sdseconds * 150000)
//     let asd = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     let bMessage = args.join(" ");
//     if (asd) {
//         if(asd.user.id === "439676294821576705") return message.channel.send(`MI VAN TE SZARHÁZI? <@${asd.id}> -T AKAROD PINGELNI? EZ NEM FOG MENNI TE GYÁSZ, A NAGY VAZÍR SÉRTHETETLEN! XD`);
//         bot.fetchUser(asd.id,false).then(user => {
//             user.send(`<@${asd.id}> ${bMessage}`,) 
//     })
//         message.reply(`<@${asd.id}> sikeresen megtrollkodva! XDD`)
//     } else message.reply("Kérlek írj be egy nevet! pl: @porba")
// }

if(cmd === `${prefix}kick`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
    let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (kickPerson) {
    if (!kickPerson.hasPermission("KICK_MEMBERS")) {
    let bicon = bot.user.displayAvatarURL;

    let kickEmbed = new Discord.RichEmbed()
    .setTitle(">>Kick<<")
    .setDescription("Kick üzenet:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField(`${kickPerson.user.username} kickelve lett!`, "ˇˇˇˇ")
    .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.guild.member(kickPerson.id).kick();
    message.channel.send(kickEmbed);
    console.log(`${message.author.id} kickelte ${kickPerson}!`);

    } else message.channel.send(`${emoji.x} A szerver adminjait nem tudod kickelni!`);

    } else message.channel.send(`${emoji.x} Kérlek adj meg egy nevet! (pl: @asd)`);

    } else message.channel.send(`${emoji.x} Neked nincs jogod hogy kickelj!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)

}

if(cmd === `${prefix}ban`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
    let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (kickPerson) {
    if (!kickPerson.hasPermission("KICK_MEMBERS")) {
    let bicon = bot.user.displayAvatarURL;

    let kickEmbed = new Discord.RichEmbed()
    .setTitle(">>Ban<<")
    .setDescription("Ban üzenet:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField(`${kickPerson.user.username} bannolva lett!`, "ˇˇˇˇ")
    .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);

    message.guild.member(kickPerson.id).ban();
    message.channel.send(kickEmbed);
    console.log(`${message.author.id} bannolta: ${kickPerson}!`);

    } else message.channel.send(`${emoji.x} A szerver adminjait nem tudod bannolni!`);

    } else message.channel.send(`${emoji.x} Kérlek adj meg egy nevet! (pl: @asd)`);

    } else message.channel.send(`${emoji.x} Neked nincs jogod hogy bannolj!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)

}

if(cmd === `${prefix}duma`) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${emoji.x} Nincs jogod ehhez a parancshoz!`);
    let bMessage = args.join(" ");
    message.delete().catch();
    message.channel.send(bMessage);

    console.log(`${message.author.username} elküldte velem ezt az üzenetet: ${bMessage}`);
}

if(cmd === `${prefix}ranglétrehoz`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    message.delete().catch();
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(!args[0]) return message.channel.send(`${emoji.x} Kérlek add meg az új rang nevét!`);
    message.guild.createRole({
        name: `${args[0]}`,
        hoist: true,
        mentionable: false
    });
    message.channel.send(`${emoji.done} Létrehozta a(z) ${args[0]} rangot!`)
} else message.channel.send(`${emoji.x} Nincs jogod ehhez a parancshoz!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
}

if (cmd === `${prefix}cigi`) {
    message.channel.send(`${message.author.username} cigi szünetet tart! Tudja hogy a cigi káros de csak azért is rágyujt!`).then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3500);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 4000);
        setTimeout(() => {
            msg.edit(`${message.author.username} végzett a tüdőt károsító szórakozásával!`);
            message.channel.send("Ha leakarsz szokni a cigizésről akkor ezt ajánlom: www.leteszemacigit.hu")
        }, 4500);
    });
};

///////////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}nitrókód`) {
    let kkk = 60;
    let egy = Math.floor(Math.random() *1200);
    let keto = Math.floor(Math.random() *2200);
    let harom = Math.floor(Math.random() *300);
    let negy = Math.floor(Math.random() *300)*2;
    let ot = 2;
    let hat = Math.floor(Math.random() *9999999)*2;
    let uIcon = message.member.user.displthayAvatarURL;
    let asd = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];
    let asd2 = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];
    let asd3 = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];
    let asd4 = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];

    let num = Math.floor(Math.random() *asd.length);
    let num2 = Math.floor(Math.random() *asd2.length);
    let num3 = Math.floor(Math.random() *asd3.length);
    let num4 = Math.floor(Math.random() *asd4.length);    


    let szam = [`0`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    let szam2 = [`0`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    let szam3 = [`0`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    let szam4 = [`0`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

    let xd = Math.floor(Math.random() *szam.length);
    let xd2 = Math.floor(Math.random() *szam2.length);
    let xd3 = Math.floor(Math.random() *szam3.length);
    let xd4 = Math.floor(Math.random() *szam4.length);   


    let k = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];
    let k2 = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];
    let k3 = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];
    let k4 = [`a`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `ü`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `x`, `y`, `z`];


    let n = Math.floor(Math.random() *k.length);
    let n2 = Math.floor(Math.random() *k2.length);
    let n3 = Math.floor(Math.random() *k3.length);
    let n4 = Math.floor(Math.random() *k4.length);   


    mmessage.channel.send(`Nitró kód: https://discordapp.com/gifts/${asd[num]}${asd2[num2]}${asd3[num3]}${asd4[num4]}-${szam[xd]}${szam2[xd2]}${szam3[xd3]}${szam4[xd4]}-${k[n]}${k2[n2]}${k3[n3]}${k4[n4]}`)
    
}

let cdrole = message.guild.roles.find(`name`, `mutedfactory`);
if(!cdrole) {
    message.guild.createRole({
        name: 'mutedfactory',
        hoist: false,
        mentionable: false
    });
};
 
if (cmd === `${prefix}némítás`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `mutedfactory`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(!mute.hasPermission("KICK_MEMBERS")) {
    if(!mute.roles.has(muterang.id)) {

    message.channel.send(`<@${mute.id}> némítva lett!`)

    mute.addRole(muterang.id);

    } else message.channel.send(`${emoji.x} Ez az ember már némítva van!`)
    } else message.channel.send(`${emoji.x} A szerver adminjait nem tudod némítani!`);
    } else message.channel.send(`${emoji.x} Kérlek írj be egy nevet. (pl: @asd)`);
    } else message.channel.send(`${emoji.x} Nincs jogod hogy némíts!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
}

if (cmd === `${prefix}időnémítás`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `mutedfactory`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {


    if(!mute.hasPermission("KICK_MEMBERS")) {
    if(!mute.roles.has(muterang.id)) {
        if(args[1] === `3m`) { 
            message.channel.send(`${emoji.done} <@${mute.id}> némítva lett 3 percre!`)

            mute.addRole(muterang.id);

            setTimeout(() => {
                mute.removeRole(muterang.id);
            }, 180000);
        } else if(args[1] === `5m`) { 
            message.channel.send(`${emoji.done} <@${mute.id}> némítva lett 5 percre!`)

            mute.addRole(muterang.id);

            setTimeout(() => {
                mute.removeRole(muterang.id);
            }, 300000);
        } else if(args[1] === `15m`) { 
            message.channel.send(`${emoji.done} <@${mute.id}> némítva 15 percre!`)

            mute.addRole(muterang.id);

            setTimeout(() => {
                mute.removeRole(muterang.id);
            }, 900000);
        } else if(args[1] === `30m`) { 
            message.channel.send(`${emoji.done} <@${mute.id}> némítva 30 percre!`)

            mute.addRole(muterang.id);

            setTimeout(() => {
                mute.removeRole(muterang.id);
            }, 1800000);
        } else if(args[1] === `1h`) { 
            message.channel.send(`${emoji.done} <@${mute.id}> némítva lett 1órára!`)

            mute.addRole(muterang.id);

            setTimeout(() => {
                mute.removeRole(muterang.id);
            }, 3600000);
        } else return message.channel.send(`${emoji.x} Kérlek írj be egy időt! (3m, 5m, 15m, 30m, 1h)`)
    } else message.channel.send(`${emoji.x} Ez az ember már némítva van!`);
    } else message.channel.send(`${emoji.x} A szerver adminjait nem tudod némítani!`);
    } else message.channel.send(`${emoji.x} Kérlek írj be egy nevet. (pl: @asd)`);
    } else message.channel.send(`${emoji.x} Nincs jogod hogy némíts!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
}

let nemitottrang = message.guild.roles.find(`name`, `mutedfactory`);
if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
if(message.member.hasPermission("KICK_MEMBERS")) {

} else if(message.member.roles.has(nemitottrang.id)) {
    message.delete();
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////

if (cmd === `${prefix}felnémítás`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `mutedfactory`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(mute.roles.has(muterang.id)) {

    message.channel.send(`${emoji.done} <@${mute.id}> -nak/nek fel lett oldva a némítása!`)

    mute.removeRole(muterang.id);

    } else message.channel.send(`${emoji.x} Ez az ember nincs némítva!`)
    } else message.channel.send(`${emoji.x} Kérlek írj be egy nevet. (pl: @asd)`);
    } else message.channel.send(`${emoji.x} Nincs jogod hogy felnémíts!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
}

if(cmd === `${prefix}macska`) {
    let msg = await message.channel.send("Macska betöltése...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("A file betöltésekor hiba történt!")

        let maEmbed = new Discord.RichEmbed()
        .setColor("#3a74e0")
        .setAuthor(message.author.username)
        .addField("Ugye milyen cuki?", "A cukiság határtalan!")
        .setImage(body.file)
        .setTimestamp(message.createdAt)
        .setFooter("© Minefactory ©");

        message.channel.send(maEmbed);
}


if(cmd === `${prefix}időjárás`){ // This checks to see if the beginning of the message is calling the weather command.
    // You can find some of the code used here on the weather-js npm page in the description.
    if(args[0]) {

    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
        if (err) message.channel.send(err);

        // We also want them to know if a place they enter is invalid.
        if (result.length === 0) {
            message.channel.send(`${emoji.x} Kérlek adj meg egy létező város/falu nevet!`) // This tells them in chat that the place they entered is invalid.
            return; // This exits the code so the rest doesn't run.
        }

        // Variables
        var current = result[0].current; // This is a variable for the current part of the JSON output
        var location = result[0].location; // This is a variable for the location part of the JSON output

        // Let's use an embed for this.
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
            .setAuthor(`Időjárás itt: ${current.observationpoint}`) // This shows the current location of the weather.
            .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
            .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
            .addField('Idő zóna',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
            .addField('Fokozat típusa',location.degreetype, true)// This is the field that shows the degree type, and is inline
            .addField('Hőfok',`${current.temperature}°C`, true)
            .addField('Hőérzet', `${current.feelslike}°C`, true)
            .addField('Szél',current.winddisplay, true)
            .addField('Páratartalom', `${current.humidity}%`, true)

            // Now, let's display it when called
            message.channel.send({embed});
    });
} else message.channel.send(`${emoji.x} Kérlek adj meg egy város/falu nevet!`)
}


let pluszplszplusz = message.guild.roles.find(`name`, `warn1`);
if(!pluszplszplusz) {
    message.guild.createRole({
        name: 'warn1',
        hoist: false,
        mentionable: false
    });
};

let pluszplszplusza = message.guild.roles.find(`name`, `warn2`);
if(!pluszplszplusza) {
    message.guild.createRole({
        name: 'warn2',
        hoist: false,
        mentionable: false
    });
};

let pluszplszpluszaa = message.guild.roles.find(`name`, `warn3`);
if(!pluszplszpluszaa) {
    message.guild.createRole({
        name: 'warn3',
        hoist: false,
        mentionable: false
    });
};

let pluszplszpluszaaa = message.guild.roles.find(`name`, `warn4`);
if(!pluszplszpluszaaa) {
    message.guild.createRole({
        name: 'warn4',
        hoist: false,
        mentionable: false
    });
};

let warnolt = message.guild.roles.find(`name`, `warn4`);
if(message.member.roles.has(warnolt.id)) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
    message.channel.send(`${emoji.w} <@${warnolt.id}> Túl sok warnod volt ezért a rendszer autómatikusan kickelt!`);
    message.member.kick();
    }
}
}

if (cmd === `${prefix}warn`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let warn1 = message.guild.roles.find(`name`, `warn1`);
    let warn2 = message.guild.roles.find(`name`, `warn2`);
    let warn3 = message.guild.roles.find(`name`, `warn3`);
    let warn4 = message.guild.roles.find(`name`, `warn4`);
    let wr = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(wr) {
    if(!wr.hasPermission("KICK_MEMBERS")) {
    if(!wr.roles.has(warn1.id)) {

    message.channel.send(`${emoji.w} <@${wr.id}> warnolva lettél. Warnok: 1/4 (A 3. warn után a rendszer autómatikusan kickel!)`);

    wr.addRole(warn1.id);

    } else if(!wr.roles.has(warn2.id)) {

        message.channel.send(`${emoji.w} <@${wr.id}> warnolva lettél. Warnok: 2/4 (A 3. warn után a rendszer autómatikusan kickel!)`);
    
        wr.addRole(warn2.id);
    
        } else if(!wr.roles.has(warn3.id)) {

            message.channel.send(`${emoji.w} <@${wr.id}> warnolva lettél. Warnok: 3/4 (A 3. warn után a rendszer autómatikusan kickel!)`);
        
            wr.addRole(warn3.id);
        
            } else if(!wr.roles.has(warn4.id)) {

                message.channel.send(`${emoji.w} <@${wr.id}> túl sok warnod volt. Ezért a rendszer autómatikusan kickelt!`);
            
                wr.addRole(warn4.id);
                message.guild.member(wr.id).kick();
            
                } else {

                    message.channel.send(`${emoji.w} Ez az ember kickelve lett! Ha nem akkor kérlek add meg nekem az 'ADMINISTRATOR' jogot.`);
                    message.guild.member(wr.id).kick();
                }
    } else message.channel.send(`${emoji.x} A szerver adminjait nem tudod warnolni!`);
    } else message.channel.send(`${emoji.x} Kérlek írj be egy nevet. (pl: @asd)`);
    } else message.channel.send(`${emoji.x} Nincs jogod hogy warnolj!`);
} else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.`)
}


////////////////////////////////matek
if(cmd === `${prefix}matek`) {
    if(cooldown.has(message.author.id)) {
        message.delete();
        return message.channel.send(`${emoji.x} <@${message.author.id}> Neked 15másodperces cooldownöd van! Kérlek várjál még egy kicsit!`)
    }
        cooldown.add(message.author.id);


    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, sdseconds * 1000)
  

///////////////////////////// ifek
    if(args[0] === `easy`){
    let egy = Math.floor(Math.random() *200);
    let keto = Math.floor(Math.random() *400);
    let harom = Math.floor(Math.random() *100);
    let negy = Math.floor(Math.random() *90)*2;
    let ot = 2;
    let uIcon = message.member.user.displthayAvatarURL;
    let askArray = [`Mennyi? ${egy} + ${keto}`, `Mennyi? ${egy} + ${keto} - ${harom}`, `Mennyi? ${negy}:${ot}`];

    let respondArray = [`${egy + keto}`, `${egy + keto - harom}`, `${negy / ot}`];

    let num = Math.floor(Math.random() *askArray.length);

    let  qEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(uIcon)
    .addField("**(EASY MODE)** Matematikai kvíz! Válaszolj a kérdésre 35mp belül!", askArray[num])
    .addBlankField()
    .setFooter(`${name}`)
    .setTimestamp(message.createdAt);

    const filter = m => m.author.id === message.author.id;
    message.channel.send(qEmbed);
    message.channel.awaitMessages(filter, {max: 1, time:35000}).then(collected => {

        if(collected.first().content === "Nemtudom") return message.reply(`A megoldás ez volt: ${respondArray[num]}`);
        let response = collected.first().content;

        if(response === respondArray[num]) {

            let kvizEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .addField("Sikeresen teljesítetted a feladatot!", `Ügyes vagy!`)
            .setColor("#1CEF5B")
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`)

            message.channel.send(kvizEmbed)
            
            message.reply("Sikeresen teljesítetted ezt a feladatot!").then(r => r.delete(6000));

        } else message.reply(`Hibás válasz. A megoldás ez volt: ${respondArray[num]}.`);
            
            

    }).catch(err => {

            message.reply(`Lejárt az időd! A megoldás ez volt: ${respondArray[num]}.`);

    });
    /////easy if vége
    } else if(args[0] === `normal`) {
        ///normal
    let egy = Math.floor(Math.random() *1200);
    let keto = Math.floor(Math.random() *2200);
    let harom = Math.floor(Math.random() *300);
    let negy = Math.floor(Math.random() *300)*2;
    let ot = 2;
    let uIcon = message.member.user.displthayAvatarURL;
    let askArray = [`Mennyi? ${egy} + ${keto}`, `Mennyi? ${egy} + ${keto} - ${harom}`, `Mennyi? ${negy}:${ot}`];

    let respondArray = [`${egy + keto}`, `${egy + keto - harom}`, `${negy / ot}`];

    let num = Math.floor(Math.random() *askArray.length);

    let  qEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(uIcon)
    .addField("**(NORMAL MODE)** Matematikai kvíz! Válaszolj a kérdésre 35mp belül!", askArray[num])
    .addBlankField()
    .setFooter(`${name}`)
    .setTimestamp(message.createdAt);

    const filter = m => m.author.id === message.author.id;
    message.channel.send(qEmbed);
    message.channel.awaitMessages(filter, {max: 1, time:35000}).then(collected => {

        if(collected.first().content === "Nemtudom") return message.reply(`A megoldás ez volt: ${respondArray[num]}`);
        let response = collected.first().content;

        if(response === respondArray[num]) {

            let kvizEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .addField("Sikeresen teljesítetted a feladatot!", `Ügyes vagy!`)
            .setColor("#1CEF5B")
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`)

            message.channel.send(kvizEmbed)
            
            message.reply("Sikeresen teljesítetted ezt a feladatot!").then(r => r.delete(6000));

        } else message.reply(`Hibás válasz. A megoldás ez volt: ${respondArray[num]}.`);
            
            

    }).catch(err => {

            message.reply(`Lejárt az időd! A megoldás ez volt: ${respondArray[num]}.`);

    });
    } else if(args[0] === `hard`) {
    let egy = Math.floor(Math.random() *9000);
    let keto = Math.floor(Math.random() *5000);
    let harom = Math.floor(Math.random() *4000);
    let negy = Math.floor(Math.random() *4120)*2;
    let ot = 2;
    let hat = Math.floor(Math.random() *9999999)*2;
    let uIcon = message.member.user.displthayAvatarURL;
    let askArray = [`Mennyi? ${egy} + ${keto}`, `Mennyi? ${egy} + ${keto} - ${harom}`, `Mennyi? ${negy}:${ot}`, `Mennyu? ${egy} + ${hat}`];

    let respondArray = [`${egy + keto}`, `${egy + keto - harom}`, `${negy / ot}`, `${egy + hat}`];

    let num = Math.floor(Math.random() *askArray.length);

    let  qEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(uIcon)
    .addField("**(HARD MODE)** Matematikai kvíz! Válaszolj a kérdésre 35mp belül!", askArray[num])
    .addBlankField()
    .setFooter(`${name}`)
    .setTimestamp(message.createdAt);

    const filter = m => m.author.id === message.author.id;
    message.channel.send(qEmbed);
    message.channel.awaitMessages(filter, {max: 1, time:35000}).then(collected => {

        if(collected.first().content === "Nemtudom") return message.reply(`A megoldás ez volt: ${respondArray[num]}`);
        let response = collected.first().content;

        if(response === respondArray[num]) {

            let kvizEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .addField("Sikeresen teljesítetted a feladatot!", `Ügyes vagy!`)
            .setColor("#1CEF5B")
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`)

            message.channel.send(kvizEmbed)
            
            message.reply("Sikeresen teljesítetted ezt a feladatot!").then(r => r.delete(6000));

        } else message.reply(`Hibás válasz. A megoldás ez volt: ${respondArray[num]}.`);
            
            

    }).catch(err => {

            message.reply(`Lejárt az időd! A megoldás ez volt: ${respondArray[num]}.`);

    });
    } else {
    let egy = Math.floor(Math.random() *1200);
    let keto = Math.floor(Math.random() *2200);
    let harom = Math.floor(Math.random() *300);
    let negy = Math.floor(Math.random() *300)*2;
    let ot = 2;
    let uIcon = message.member.user.displthayAvatarURL;
    let askArray = [`Mennyi? ${egy} + ${keto}`, `Mennyi? ${egy} + ${keto} - ${harom}`, `Mennyi? ${negy}:${ot}`];

    let respondArray = [`${egy + keto}`, `${egy + keto - harom}`, `${negy / ot}`];

    let num = Math.floor(Math.random() *askArray.length);

    let  qEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(uIcon)
    .addField("**(NORMAL MODE)** Matematikai kvíz! Válaszolj a kérdésre 35mp belül!", askArray[num])
    .addBlankField()
    .setFooter(`${name}`)
    .setTimestamp(message.createdAt);

    const filter = m => m.author.id === message.author.id;
    message.channel.send(qEmbed);
    message.channel.awaitMessages(filter, {max: 1, time:35000}).then(collected => {

        if(collected.first().content === "Nemtudom") return message.reply(`A megoldás ez volt: ${respondArray[num]}`);
        let response = collected.first().content;

        if(response === respondArray[num]) {

            let kvizEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .addField("Sikeresen teljesítetted a feladatot!", `Ügyes vagy!`)
            .setColor("#1CEF5B")
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`)

            message.channel.send(kvizEmbed)
            
            message.reply("Sikeresen teljesítetted ezt a feladatot!").then(r => r.delete(6000));

        } else message.reply(`Hibás válasz. A megoldás ez volt: ${respondArray[num]}.`);
            
            

    }).catch(err => {

            message.reply(`Lejárt az időd! A megoldás ez volt: ${respondArray[num]}.`);

    });
    }
}

if(cmd === `${prefix}törlés`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        if(message.member.hasPermission("KICK_MEMBERS")) {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(`${emoji.x} Kérlek írj be egy számot 2 és 100 között!`);
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    message.channel.send(`${emoji.done} ${args[0]} üzenet sikeresen törölve!`)
        } else message.channel.send(`${emoji.x} Ehhez a parancshoz nincs jogod!`)
    } else message.channel.send(`${emoji.x} Ahhoz hogy ez a parancs sikeresen működjön kérlek adj nekem 'ADMINISTRATOR' jogot.`)
  }
 
//////////////////////REEEEEEEEEEEEE

if(cmd === `${prefix}fizika`) {
    if(ldw.has(message.author.id)) {
        message.delete();
        return message.channel.send(`${emoji.x} <@${message.author.id}> Neked 15másodperces cooldownöd van! Kérlek várjál még egy kicsit!`)
    }
        ldw.add(message.author.id);


    setTimeout(() => {
        ldw.delete(message.author.id)
    }, sdseconds * 1000)
  

///////////////////////////// ifek

    let egy = Math.floor(Math.random() *10);
    let keto = Math.floor(Math.random() *5000);
    let harom = Math.floor(Math.random() *400);
    let negy = Math.floor(Math.random() *2120)*2;
    let ot = 2;
    let hat = Math.floor(Math.random() *9999999)*2;
    let uIcon = message.member.user.displthayAvatarURL;
    let askArray = [`Ez egy kérdés?`, `Molnár Kiki tömege: ${keto}kg. Mennyi N erővel nyomja a mérleget?`, `W=${negy} s=${egy*2}m F=?`, `F=${egy}N s=${harom}m W=?`,
                    `Mennyi a sebesség? t=${egy*2}s s=${harom*2}m v=? (Erdedményt így add meg: 0m/s)`]
    let respondArray = [`igen`, `${keto * 10}N`, `${negy/egy*2}N`, `${egy*harom}J`, `${harom*2/egy*2}m/s`]

    let num = Math.floor(Math.random() *askArray.length);

    let  qEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(uIcon)
    .addField("**Kvíz! Válaszolj a kérdésre 35mp belül!", askArray[num])
    .addBlankField()
    .setFooter(`${name}`)
    .setTimestamp(message.createdAt);

    const filter = m => m.author.id === message.author.id;
    message.channel.send(qEmbed);
    message.channel.awaitMessages(filter, {max: 1, time:35000}).then(collected => {

        if(collected.first().content === "Nemtudom") return message.reply(`A megoldás ez volt: ${respondArray[num]}`);
        let response = collected.first().content;

        if(response === respondArray[num]) {

            let kvizEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .addField("Sikeresen teljesítetted a feladatot!", `Ügyes vagy!`)
            .setColor("#1CEF5B")
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`)

            message.channel.send(kvizEmbed)
            
            message.reply("Sikeresen teljesítetted ezt a feladatot!").then(r => r.delete(6000));

        } else message.reply(`Hibás válasz. A megoldás ez volt: ${respondArray[num]}.`);
            
            

    }).catch(err => {

            message.reply(`Lejárt az időd! A megoldás ez volt: ${respondArray[num]}.`);

    });

    
}
///raaa
if(cmd === `${prefix}i`) {
    if(!args[0]) return message.reply('A semmire nem tudok válaszolni!');
    
    for(let i = 0; i <= messageArray.length; i++) 
       {
           if(messageArray[i] === "nem" || messageArray[i] === "NEM") {
           {
            for(let i = 0; i <= messageArray.length; i++) 
               if(messageArray[i] === "akarok") {
                   message.reply("És ha még is akarod?");
                   break;
               } else if(messageArray[i] === "vagyok") {
                message.reply("De igen! Az vagy!");
                break;
               } else if(messageArray[i] === "nem") {
                message.reply("Mi az hogy nem?");
                break;
               }
           }
        } else if(messageArray[i] === "igen" || messageArray[i] === "IGEN") {
        {
         for(let i = 0; i <= messageArray.length; i++) 
            if(messageArray[i] === "akarok") {
                message.reply("Biztos?");
                break;
            } else if(messageArray[i] === "vagyok") {
             message.reply("Ok?");
             break;
            } else if(messageArray[i] === "igen") {
             message.reply("Igen?");
             break;
            }
        } 
    } else if(messageArray[i] === "fasz" || messageArray[i] === "geci" || messageArray[i] === "kurva") {
        message.reply("Szépen beszélni! Nem vagyunk mi állatok! Igaz?");
        break;
    } if(messageArray[i] === "kormány" || messageArray[i] === "év")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "kormány") {
            message.reply("A kormány? Hát eléggé gyatra emberekből áll. XD");
            break;
        } else if(messageArray[i] === "év") {
         message.reply("Az biztos hogy szép évnek nézünk eléje!");
         break;
        } else if(messageArray[i] === "év") {
         break;
        }
    } else if(messageArray[i] === "ember" || messageArray[i] === "nagy")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "ember") {
            message.reply("Ember ember december... :)");
            break;
        } else if(messageArray[i] === "nagy") {
         message.reply("Én is ismerek nagy dolgokat!");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "fidesz" || messageArray[i] === "dk")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "fidesz") {
            message.reply("A fidesz az szar!");
            break;
        } else if(messageArray[i] === "dk") {
         message.reply("Feri a kedvenc youtuberem. Ezt nem tudtad igaz?");
         break;
        } else if(messageArray[i] === "dk") {
         break;
        }
    } else if(messageArray[i] === "vagyok" || messageArray[i] === "vagy")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "vagyok") {
            message.reply("Igen.");
            break;
        } else if(messageArray[i] === "vagy") {
         message.reply("Lehetséges.");
         break;
        } else if(messageArray[i] === "vagy") {
         break;
        } 
    } else if(messageArray[i] === "kuss" || messageArray[i] === "thx")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "kuss") {
            message.reply("Nem fogok kussolni :D");
            break;
        } else if(messageArray[i] === "thx") {
         message.reply("Nincs mit!");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "hívnak" || messageArray[i] === "nap")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "hívnak") {
            message.reply("Minefactory. Ez nem egyértelmű?");
            break;
        } else if(messageArray[i] === "nap") {
         message.reply("Pffu. Hát nem tudom.");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "fiú" || messageArray[i] === "lány")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "fiú") {
            message.reply("Erre nem akarok válaszolni.");
            break;
        } else if(messageArray[i] === "lány") {
         message.reply("Szeretem a csajokat.");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "szeretsz" || messageArray[i] === "szeretlek")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "szeretsz") {
            message.reply("Persze :3");
            break;
        } else if(messageArray[i] === "szeretlek") {
         message.reply("Én is téged :)");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "törvény" || messageArray[i] === "úr")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "törvény") {
            message.reply("Én nem szeretem a törvényeket.");
            break;
        } else if(messageArray[i] === "úr") {
         message.reply("úr? ");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "új" || messageArray[i] === "szó")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "új") {
            message.reply("Szerintem nagyszerű.");
            break;
        } else if(messageArray[i] === "szó") {
         message.reply("fogalmam sincs.");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === "kecske" || messageArray[i] === "pornó")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === "kecske") {
            message.reply("A kecskék jó állatok.");
            break;
        } else if(messageArray[i] === "pornó") {
         message.reply("Szeretem a pornót :D");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } else if(messageArray[i] === `${Number}` || messageArray[i] === "tudom")
    {
     for(let i = 0; i <= messageArray.length; i++) 
        if(messageArray[i] === `${Number}`) {
            message.reply("És most ezzel mit kezdjek?");
            break;
        } else if(messageArray[i] === "tudom") {
         message.reply("Tudom hogy tudod azt amit én. :D");
         break;
        } else if(messageArray[i] === "ember") {
         break;
        }
    } 
    
    
    
           
    
    }
    ///vége az intnek
    }
//inteligencia
// if(cmd === `${prefix}meme`) {

// const subReddits = ["dankmeme", "meme", "me_irl"];
//         const random = subReddits[Math.floor(Math.random() * subReddits.length)];

//         const img = await randomPuppy(random);
//         const embed = new Discord.RichEmbed()
//             .setColor("RANDOM")
//             .setImage(img)
//             .setTitle(`From /r/${random}`)
//             .setURL(`https://reddit.com/r/${random}`);

//         message.channel.send(embed);
// }



///vége


//mentés

        //Itt a bot on vége.

////zene

    if(message.content.toLowerCase().startsWith("!kilép"))
    {
    let VoiceChannel = message.guild.channels.find(channel => channel.id === message.member.voiceChannelID);
    if(VoiceChannel != null)
    {            
        VoiceChannel.leave();    
        message.reply("kitett a duma szobábol!");
    }
    }
    ///////////////////////////loading
    ///////////////////////////////////////
    /////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////
    if(cmd === `${prefix}play`){
        
    let VC = message.member.voiceChannel;
    if (!VC) return message.reply("Kérlek lépj be egy voice channel be!")

    let url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    let pl = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/

    // let searchString = args.join(' ');
    if (!url || !pl) return message.reply(`kérlek írj zene címet vagy url linket!`)

    let perms = VC.permissionsFor(message.client.user);
    if (!perms.has('CONNECT')) return message.reply(`Nem tudok csatlakozni a hang csatornába mert nincs jogom hogy csatlakozzak ehhez a hang csatornához!`)
    if (!perms.has('SPEAK')) return message.reply(`Nem tudok zenét indítani mert nincs jogom hogy beszéljek!`)
    let VoiceChannel = message.guild.channels.find(channel => channel.id === message.member.voiceChannelID);
    if(message.guild.channels.find(channel => channel.id === message.guild.member(bot.user).voiceChannelID)){
    VoiceChannel.join()
    .then(connection => {
        console.log("A bot csatlakozott a szobához.");
        const stream = ytdl(url, { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);

        // dispatcher.on('end', () => {
        //     VoiceChannel.leave();
        // })
         dispatcher.on('end', () => {
            message.reply("A zenének vége!")
        })
    })
    .catch(error => message.channel.send(`Hiba! A zene nem található! Adj meg egy urlt!`));

} else {
    VoiceChannel.leave();  
    VoiceChannel.join()
    .then(connection => {
        console.log("A bot csatlakozott a szobához.");
        const stream = ytdl(url, { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);

        // dispatcher.on('end', () => {
        //     VoiceChannel.leave();
        // })
        dispatcher.on('end', () => {
            message.reply("A zenének vége!")
        })
        
    })
    .catch(error => message.channel.send(`Hiba! A zene nem található! Adj meg egy urlt!`));

}

    }
//////////////////////////////////volumeee
/////////////////////////////////////////////////////
if(cmd === `${prefix}volume`){
if (!args[0]) return message.channel.send(`Jelenlegi hangerő: **${volume}/100**`)
if (isNaN(args[0])) return (`Kérlek írj egy számot **1** és **100** között!`, `${prefix}volume <hangerő>`)
if (args[0] < 0 || args[0] > 100) return message.channel.send(`kérlek 1 és 100 között írj be egy számot!`, `${prefix}volume <hangerő>`)

dispatcher.setVolume(args[0]);

message.channel.send(`Hangerő beállítva a következőre: **${volume}/100**`);

}
/////////////////////////////////////////////////////////
if(cmd === `${prefix}stop`){
    dispatcher.pause();
    message.reply("Sikeresen megállítva!");
}
if(cmd === `${prefix}resume`){
    dispatcher.resume();
    message.reply("Sikeresen folytatva!");
}

   ///////////////////vége
})
 

bot.login(process.env.BOT_TOKEN);
