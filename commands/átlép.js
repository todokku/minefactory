const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    let votes = bot.votes.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, kérlek csatlakozz egy hangcsatornához hogy használni tudd ezt a parancsot!`, `${config.prefix}átlép`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Nincs zene amit át tudnék lépni.', 5000)];

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        if (votes.voters.includes(message.author.id)) return [message.delete(), utils.timed_msg(utils.cmd_fail(` ${message.author}, te már szavaztál! **${votes.votes}/3** szavazat`, `${config.prefix}átlép`), 5000)];

        votes.votes++
        votes.voters.push(message.author.id);
        message.channel.send(` ${message.author}, sikeresen szavaztál! **${votes.votes}/3** szavazat`);

        if (votes.votes > 3) return queue.connection.dispatcher.end(' ***Sikeres átlépés!***');
    } else return queue.connection.dispatcher.end();
    
};

module.exports.help = {
    name: 'átlép',
    aliases: []
};