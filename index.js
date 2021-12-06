const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const keepAlive = require("./server");
const { MessageEmbed } = require('discord.js');

client.on("ready", ()=> console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);

client.on('message', message => {
  if (message.content === '-ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

client.on('message', message => {
  if (message.content === 'ben gae') {  
    message.channel.send(`fact`) 
    }
});
client.on('message', message => {
  if (message.content === '-c ip') {  
    message.channel.send(`**Main-ip**: circussmp.xyz\n**Bedrock port**: 19132\n**Version**: 1.17 - 1.17.1 ( Java ) | Latest version on Bedrock `) 
    }
});
client.on('message', message => {
  if (message.content === '-c help') {  
    message.channel.send(`View ip and port: -c ip\nView server system: -c system\nFor more information: -c info`) 
    }
}); 
client.on('message', message => {
  if (message.content === 'tommy') {  
    message.channel.send(`<@840894286992113665> có người kêu kìa`) 
    }
}); 
client.on('message', message => {
  if (message.content === 'tummy') {  
    message.channel.send(`<@840894286992113665> dậy nào bro`) 
    }
}); 
client.on('message', message => {
  if (message.content === 'tumy') {  
    message.channel.send(`có người nhắc kìa <@840894286992113665>`) 
    }
});
client.on('message', message => {
  if (message.content === 'sv cho xray ko') {  
    message.channel.send(`thử đi hjhj`) 
    }
});
client.on('message', message => {
  if (message.content === '-c huongdan') {  
    message.channel.send(`Làm ơn hãy đọc: <#902823356582219776> và xem <#916927147812208670>`) 
    }
});          


keepAlive();
client.login(config.TOKEN);