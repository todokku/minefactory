const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Nincs zene aminek állíthatnám a hangerejét.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(` Jelenlegi hangerő: **${queue.volume}/100**`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Kérlek írj egy számot **1** és **100** között!`, `${config.prefix}hangerő <hangerő>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, kérlek 1 és 100 között írj be egy számot!`, `${config.prefix}hangerő <hangerő>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(` Hangerő beállítva a következőre: **${queue.volume}/100**`);
};

module.exports.help = {
    name: 'hangerő',
    aliases: ['hang']
};