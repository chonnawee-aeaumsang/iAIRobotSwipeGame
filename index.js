const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7498251188:AAH7qY1omTujNBtBKghu_d6ypT7cflfDf9U"; // Replace with your bot token
const webhookUrl = "https://robot-swipei-ai.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

