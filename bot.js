const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDE3MDE1NzQ1NzA1MTQ4NDE2.DXM3wA.1OjT7zjWObF5ZU4tjZSgq3WkowM");
