

module.exports = {

    ready : (bot) => {
        bot.on('ready', () => {
            bot.user.setActivity('Music', {type: 'LISTENING'});
            bot.user.setStatus('dnd');
            console.log('Készen állok a zenék fogadására!');
        });
    }
    
};
