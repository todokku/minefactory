const discord = require('discord.js');
const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let VC = message.member.voiceChannel;
    if (!VC) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, kérlek csatlakozz egy hangcsatornához!`, `${config.prefix}lejátsz <zene/url>`), 5000)];

    let url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    let pl = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/

    let searchString = args.join(' ');
    if (!url || !searchString) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, kérlek írj zene címet vagy url linket!`, `${config.prefix}lejátsz <zene/url>`), 5000)];

    let perms = VC.permissionsFor(message.client.user);
    if (!perms.has('CONNECT')) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Nem tudok csatlakozni a hang csatornába mert nincs jogom hogy csatlakozzak ehhez a hang csatornához!`, `${config.prefix}lejátsz <zene/url>`), 5000)];
    if (!perms.has('SPEAK')) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Nem tudok zenét indítani mert nincs jogom hogy beszéljek`, `${config.prefix}lejátsz <zene/url>`), 5000)];

    if (url.match(pl)) {
        let playlist = await bot.youtube.getPlaylist(url);
        let videos = await playlist.getVideos();

        for (const vid of Object.values(videos)) {
            let video = await bot.youtube.getVideoByID(vid.id)
            await bot.handleVideo(video, message, VC, true)
        }

        return message.channel.send(` Lejátszási lista: **${playlist.title}** Hozzáadva a várólistához!`);
    } else {

        try {
            var video = await bot.youtube.getVideo(url);
        } catch (err) {
            if (err) undefined;
            try {
                var videos = await bot.youtube.searchVideos(searchString, 10);
                let index = 0;

                let embed = new discord.RichEmbed()
                    .setColor('1cd1ff')
                    .setThumbnail(bot.user.avatarURL)
                    .setDescription(`**-=- TOP 10 -=-**\n${videos.map(video => 
                        `**${++index} -** ${video.title}`).join('\n')}\n\n Válasz zenét **1** és **10** között **10 másodpercen belül**`);

                message.channel.send(embed);

                try {
                    var response = await message.channel.awaitMessages(msg => msg.content > 0 && msg.content < 11, {
                        maxMatches: 1,
                        time: 10000,
                        errors: ['time']
                    });
                } catch (err) {
                    if (err) undefined
                    return message.channel.send(utils.cmd_fail('Nem sikerült beírnod egy számot **1** és **10** között', `${config.prefix}keresés <zene>`));
                }
                const videoIndex = parseInt(response.first().content);
                var video = await bot.youtube.getVideoByID(videos[videoIndex - 1].id);
            } catch (err) {
                console.error(err);
                return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Nincs találat a következőre: \`${searchString}\``, `${config.prefix}lejátsz <zene/url>`), 5000)];
            }
        }
        return bot.handleVideo(video, message, VC);
    }
};

module.exports.help = {
    name: 'keresés',
    aliases: []
};