const app = require('express')();
const TelegramBot = require('node-telegram-bot-api');
const token = '816960702:AAEoS_BpBJhm8VKN1XK8M24-z8CRvjWqNqc';
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/atack (.+)/, (msg, match) => {
    for (let index = 0; index < 200; index++) {
        bot.sendMessage(chatId, ':) سلام ما لالا لند هستیم شما بگا رفتید :)');
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log('new msg');
    bot.sendMessage(chatId, 'سلام ما لالا لند هستیم شما بگا رفتید :)');

});

app.listen(3000, () => {
    console.log('server run');
})