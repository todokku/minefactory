const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : false});
const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
//fs-extra//emoji.szena mondjuk xd
// const cooldown = require("./cooldown.json");
let name = "© Minefactory ©";
const superagent = require("superagent");

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
 
    
 
 //help embed

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
    let asd = message.guild.members.random()

    setTimeout(() => {
    message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
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
    let asd = message.guild.members.random()

    setTimeout(() => {
    message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
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
    let asd = message.guild.members.random()

    setTimeout(() => {
    message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
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
    let asd = message.guild.members.random()

    setTimeout(() => {
    message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>)`);
    message.channel.send("**A nyeremény játéknak vége!**")
    }, 3600000)

    } else {
        message.channel.send('Kérlek add meg az időt! (5m, 10m, 30m, 1h)');
    }

} else message.channel.send('Kérlek add meg a nyeremény játék tárgyát!');
    } else message.reply("Ehhez a parancshoz nincs jogod!")
    
    
    

}


if(cmd === `${prefix}ötlet`){
    if(args[0]) {

    bot.fetchUser('389003470117797889').then((user) => {
        user.send(`${message.author.username} ötlete: ` + args.join(' '));
    });

    // bot.fetchUser('ide az én idm').then((user) => {
    //     user.send(`${message.author.username} ötlete: ` + args[0]);
    // });

        message.channel.send("Az ötleted sikeresen elküldve egy fejlesztőnek!");
} else message.channel.send('Kérlek adj meg egy szöveget!');

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
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
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

}


if (cmd === `${prefix}profilkép`) {
    let avatarUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!avatarUser) return message.channel.send("Kérlek adj meg egy nevet! pl: @asd123");
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
    .addField("Parancsok:", "ˇˇˇ")
    .addBlankField()
    .addField(`${prefix}ötlet <ötleted>`, "Ha bármi ötleted van, hogy mi legyen a botba ide írd!")
    .addField(`${prefix}szavazás <szavazás>`, "Szavazás indítása.")
    .addField(`${prefix}üzemidő`, "Üzem idő.")
    .addField(`${prefix}profilkép <@név>`, "Profilkép lekérése.")
    .addField(`${prefix}cigi`, "Elszívsz egy cigit. (Vigyázz káros!)")
    .addField(`${prefix}userinfo <@név>`, "Lekéri az összes információt a felhasználóról.")
    .addField(`${prefix}serverinfo`, "Lekéri az összes információt a szerverről.")
    .addField(`${prefix}macska`, "Cuki macskás kép.")
    .addField(`${prefix}némítás <@név>`, "némítás. **Moderator**")
    .addField(`${prefix}felnémítás <@név>`, "némítás oldása. **Moderator**")
    .addField(`${prefix}ranglétrehoz <új rang>`, "Létrehoz egy új rangot. **Moderator**")
    .addField(`${prefix}duma`, "Szöveg iratás bottal. **Moderator**")
    .addField(`${prefix}kick <@név>`, "Ember kickelése. **Moderator**")
    .addField(`${prefix}warn <@név>`, "Ember warnolása. **Moderator**")
    .addField(`${prefix}ban <@név>`, "Ember bannolása. **Moderator**")
    .addField(`${prefix}nyeremény <tárgy> <5m, 10m, 30m, 1h>`, "Nyeremény játék létrehozása. **Moderator**")
    .addBlankField()
    .addField("A bot fejlesztője: Magyar Games", "<3")
    .setThumbnail(botThumb)
    .setTimestamp(message.createdAt)
    .setFooter(`${name}`);
 
    message.member.send(testembed);
    message.reply(`privátba elküldtem a parancsokat!`);
    
}



if(cmd === `${prefix}szavazás`){
    if(!args[0]) return message.channel.send('Kérlek adj meg egy tárgyat!');

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

    } else message.channel.send("A szerver adminjait nem tudod kickelni!");

    } else message.channel.send("Kérlek adj meg egy nevet! (pl: @asd)");

    } else message.channel.send("Neked nincs jogod hogy kickelj!");
} else message.reply("Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.")

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

    } else message.channel.send("A szerver adminjait nem tudod bannolni!");

    } else message.channel.send("Kérlek adj meg egy nevet! (pl: @asd)");

    } else message.channel.send("Neked nincs jogod hogy bannolj!");
} else message.reply("Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.")

}

if(cmd === `${prefix}duma`) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Nincs jogod ehhez a parancshoz!");
    let bMessage = args.join(" ");
    message.delete().catch();
    message.channel.send(bMessage);

    console.log(`${message.author.username} elküldte velem ezt az üzenetet: ${bMessage}`);
}

if(cmd === `${prefix}ranglétrehoz`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    message.delete().catch();
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(!args[0]) return message.reply('Kérlek add meg az új rang nevét!');
    message.guild.createRole({
        name: `${args[0]}`,
        hoist: true,
        mentionable: false
    });
    message.reply(`Létrehozta a(z) ${args[0]} rangot!`)
} else message.reply("Nincs jogod ehhez a parancshoz!");
} else message.reply("Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.")
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
        }, 4500);
    });
};


let cdrole = message.guild.roles.find(`name`, `muted`);
if(!cdrole) {
    message.guild.createRole({
        name: 'muted',
        hoist: false,
        mentionable: false
    });
};
 
if (cmd === `${prefix}némítás`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `muted`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(!mute.hasPermission("KICK_MEMBERS")) {
    if(!mute.roles.has(muterang.id)) {

    message.channel.send(`<@${mute.id}> némítva lett!`)

    mute.addRole(muterang.id);

    } else message.channel.send("Ez az ember már némítva van!")
    } else message.channel.send("A szerver adminjait nem tudod némítani!");
    } else message.channel.send("Kérlek írj be egy nevet. (pl: @asd)");
    } else message.reply("Nincs jogod hogy némíts!");
} else message.reply("Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.")
}
////////////////////////////////////////////////////////////////////////////////////////////////////

if (cmd === `${prefix}felnémítás`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `muted`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(mute.roles.has(muterang.id)) {

    message.channel.send(`<@${mute.id}> -nak/nek fel lett oldva a némítása!`)

    mute.removeRole(muterang.id);

    } else message.channel.send("Ez az ember nincs némítva!")
    } else message.channel.send("Kérlek írj be egy nevet. (pl: @asd)");
    } else message.reply("Nincs jogod hogy felnémíts!");
} else message.reply("Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.")
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

let nemitottrang = message.guild.roles.find(`name`, `muted`);
if(message.member.roles.has(nemitottrang.id)) {
    message.delete();
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

    message.channel.send(`<@${wr.id}> warnolva lettél. Warnok: 1/4 (A 3. warn után a rendszer autómatikusan kickel!)`);

    wr.addRole(warn1.id);

    } else if(!wr.roles.has(warn2.id)) {

        message.channel.send(`<@${wr.id}> warnolva lettél. Warnok: 2/4 (A 3. warn után a rendszer autómatikusan kickel!)`);
    
        wr.addRole(warn2.id);
    
        } else if(!wr.roles.has(warn3.id)) {

            message.channel.send(`<@${wr.id}> warnolva lettél. Warnok: 3/4 (A 3. warn után a rendszer autómatikusan kickel!)`);
        
            wr.addRole(warn3.id);
        
            } else if(!wr.roles.has(warn4.id)) {

                message.channel.send(`<@${wr.id}> túl sok warnod volt. Ezért a rendszer autómatikusan kickelt!`);
            
                wr.addRole(warn4.id);
                message.guild.member(wr.id).kick();
            
                } else {

                    message.channel.send("Ez az ember kickelve lett! Ha nem akkor kérlek add meg nekem az 'ADMINISTRATOR' jogot.");
                    message.guild.member(wr.id).kick();
                }
    } else message.channel.send("A szerver adminjait nem tudod némítani!");
    } else message.channel.send("Kérlek írj be egy nevet. (pl: @asd)");
    } else message.reply("Nincs jogod hogy warnolj!");
} else message.reply("Ahhoz hogy ez a parancs sikeresen működjön ahhoz nekem administratornak kéne lennem. Kérlek add meg nekem az 'ADMINISTRATOR' jogot.")
}

let warnolt = message.guild.roles.find(`name`, `warn4`);
if(message.member.roles.has(warnolt.id)) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
    message.delete();
    message.reply("Túl sok warnod volt ezért a rendszer autómatikusan kickelt!");
    message.member.kick();
    }
}
}
 
//xd
 
// if (cmd === `${prefix}asd`) {
//     let viprang = message.guild.roles.find(`name`, `redstone`);
//     let price = 100000;
//     if(message.member.roles.has(viprang.id)) return message.reply("Ezt a rangot már egyszer megvetted!");
//     if(selfMoney < price ) return message.reply(`Erre a rangra nincs elég pénzed! Számlád: ${selfMoney}${emoji.emerald}.`);
 
//     money[message.author.id] = {
//         money: selfMoney - parseInt(price)
//     };
 
//     message.member.addRole(viprang.id);
 
//     message.reply("*Köszönöm a vásárlást! További szép napot!*");
// }



//mentés

        //Itt a bot on vége.


   
})
 
bot.login(tokenfile.token);