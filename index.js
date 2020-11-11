const discord = require('discord.js');
const bot = new discord.Client();

const token = "";
bot.on("ready", () =>{
    console.log("Bot Online");
})

bot.on("message", msg=> {
    if(msg.content === "!hello") {
        msg.reply("Hello, Nice to meet you.");
    } 
    if(msg.content === "!help") {
        msg.reply("This bot is under construction, you might face a bug.");
    }
})

bot.login(token);
