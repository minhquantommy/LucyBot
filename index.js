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
  if (message.content === '-c info') {  
    message.channel.send(`**Check your dms**`) 
    }
}); 
client.on('message', message => {
  if (message.content === 'ben gae') {  
    message.channel.send(`fact`) 
    }
});
client.on('message', message => {
  if (message.content === '-c help') {  
    message.channel.send(`**I texted you !**`) 
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
  if(message.content.toLowerCase() === "-c help") {
    const dmuser = message.client.guilds.resolve(message.guild.id).members.resolve(message.author.id).user
    
    const embed = new Discord.MessageEmbed()
    embed.setTitle("Lucy Help")
    embed.setDescription("**__Các lệnh cơ bản của Lucy:__**")
    embed.addFields(
      { name: 'Xem ip', value: '-c ip', inline: true },
      { name: 'Xem hệ thống', value: '-c system', inline: true },
    )
    embed.addFields(
      { name: 'Xem các lệnh', value: '-c help', inline: true },
      { name: 'Xem thông tin', value: '-c info', inline: true },
      { name: 'Xem link mời', value: '-c invite', inline: true },
    )
    embed.setColor('#0099ff')
    embed.setThumbnail('https://media.discordapp.net/attachments/896619903048626246/915548326882082837/logo.png?width=498&height=498')


    embed.addField('__Lưu ý:__', 'Bạn cần đọc những thứ sau trước khi tham gia Circus:')
    embed.setTimestamp()
    embed.setFooter('Rạp xiếc SMP', 'https://media.discordapp.net/attachments/868425557136781313/917331696209256468/Capture_1.png?width=498&height=498');
    embed.addFields(
      { name: 'Luật', value: '<#869216099282087987>', inline: true },
      { name: 'Thông tin', value: '<#880519496312434698>', inline: true },
      { name: 'Hướng dẫn', value: '<#916927147812208670>', inline: true }

    )
    dmuser.send(embed)
}
});          

client.on('message', message => {
  if(message.content.toLowerCase() === "-c ip") {

    const embed = new Discord.MessageEmbed()
    embed.setTitle("Circus SMP")
    embed.setDescription("**__IP, Port, Version phù hợp với Circus SMP__**")
    embed.setColor('#0099ff')
    embed.setThumbnail('https://media.discordapp.net/attachments/868425557136781313/906101394686242816/final_612c2e6f81209a011c41543c_660978.gif.gif?width=58&height=58')
    embed.addFields(
      { name: '**Main-Ip**', value: 'circussmp.xyz', inline: true },
      { name: 'Bedrock Port', value: '19132', inline: true },
      { name: 'Version', value: '1.17-1.17.1 | Latest Version on Bedrock', inline: false }
      
    )
    embed.setFooter('Rạp Xiếc SMP', 'https://media.discordapp.net/attachments/868425557136781313/917331696209256468/Capture_1.png?width=498&height=498');
    embed.setTimestamp()
    embed.setFooter('Rạp xiếc SMP', 'https://media.discordapp.net/attachments/868425557136781313/917331696209256468/Capture_1.png?width=498&height=498');
    message.channel.send({embed})
}
});
client.on('message', message => {
  if(message.content.toLowerCase() === "-c invite") {


    const embed = new Discord.MessageEmbed()
    embed.setTitle("__Circus Invite Link:__")
    embed.setColor('#0099ff')
    embed.setDescription("https://discord.tumy.fun")

    message.channel.send({embed})
}
});

client.on('message', message => {
  if(message.content.toLowerCase() === "-c info") {
    const dmuser = message.client.guilds.resolve(message.guild.id).members.resolve(message.author.id).user

    const embed = new Discord.MessageEmbed()
    embed.setTitle("Circus SMP")
    embed.setImage('https://media.discordapp.net/attachments/910440019649511466/917345570333556736/CIRCUS_SMP.png?width=995&height=498')
    embed.setColor('#0099ff')
    embed.setDescription("**__Các thông tin về Circus SMP__**")
    embed.addField('**About Lucy**', '> Lucy là 1 nhân vật Mascot được vẽ và dành riêng cho **Circus SMP**, được lên ý tưởng và thiết kế bởi <@528838528893714433> và <@631842745681707018>', true)
    embed.addField('**About Circus SMP**', '> Circus SMP được thành lập vào ngày 24/7/2021 với tên gọi lúc đầu là **Mquan SMP** nhưng vì một vài lý do nào đó đã chuyển tên thành **Circus SMP**, và lý do Circus SMP được thành lập thì vì <@840894286992113665> muốn tạo 1 sân chơi cho mọi người đỡ chán vào thời gian giãn cách trong dịch Covid-19')
    embed.addFields(
      { name: 'Website', value: 'https://circussmp.tumy.fun', inline: false },
		  { name: 'Discord Invite link', value: 'https://discord.tumy.fun', inline: false },
    
	)





    dmuser.send(embed)
}
});

keepAlive();
client.login(config.TOKEN);