const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('#b08bbf')
        .setTitle(`Zene`)
        .addField(`${prefix}lejátsz/belép <zene/url>`, 'Zene lejátszása!')
        .addField(`${prefix}keresés <zenecím>`, 'Keresés a top 10 között a zene cím alapján')
        .addField(`${prefix}átlép`, 'Zene átlépése, ha nem vagy adminisztrátor és nem csak egyedül vagy benn az adott hangcsatornában akkor 3 embernek be kell írnia ugyan ezt a parancsot')
        .addField(`${prefix}hangerő/hang [hangerő]`, 'Jelenlegi hangerő megtekintése és át állítása')
        .addField(`${prefix}megáll`, 'Zene megállítása')
        .addField(`${prefix}folytat`,'Zene folytatása')
        .addField(`${prefix}leáll/kilép`, 'Zene leállítás és bot kiléptetése a csatornából')
        .addField(`${prefix}reload <command>`, 'Zene parancsok újratörlése')
        .setTimestamp(message.createdAt)
        .setFooter("© Minefactory ©");

    message.channel.send(embed);

};

module.exports.help = {
    name: 'zene',
    aliases: ['p-zene']
};