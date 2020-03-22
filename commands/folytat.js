const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`A zene folytatódik!`);
    }

    return [message.delete(), utils.timed_msg('Nincs zene amit folytathatnék.', 5000)];
    
};

module.exports.help = {
    name: 'folytat',
    aliases: []
};