const TelegramBot = require('node-telegram-bot-api');

const token = '6049087139:AAE0nWkEE2MaRxm4nnYjyiN0Wj2RjrUxOs4';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello!');
});
