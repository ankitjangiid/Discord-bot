const discord = require('discord.js');
const bot = new discord.Client();

const token = "Nzc1NzQzNDAwMDE1ODIyODk5.X6qxVw.AftC01djFxVTVS7NfyEsI0Z7EPk";

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