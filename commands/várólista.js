const discord = require('discord.js');
const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('Jelenleg 1 zene sincs a várólistán.', 5000)];

    let embed = new discord.RichEmbed()
        .setColor('1cd1ff')
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Várólista**\n${queue.musics.map(music => 
            `**-** ${music.title}`).join('\n')}\n\n **Most megy:** ${queue.musics[0].title}`)
        .setTimestamp(message.createdAt)
        .setFooter("© Minefactory ©");

    message.channel.send(embed);

};

module.exports.help = {
    name: 'várólista',
    aliases: ['lista', 'zenelista', 'dallista']
}