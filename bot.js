const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

bot.login("NDE3MDE1NzQ1NzA1MTQ4NDE2.DXM3wA.1OjT7zjWObF5ZU4tjZSgq3WkowM");
