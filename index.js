const Discord = require('discord.js')
const Client = new Discord.Client
const PREFIX = "m!"

Client.on('ready', () => {
    console.log('Bot is ready')
})

Client.on('message', message => {
    console.log(message.content)

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    if(cmd === "info") {
        const who = message.mentions.members.first()
        if(!who) return message.channel.send("You haven't stated a user")
        if(who) {
            message.channel.send(`Name - ${who.user.username}\nTag - ${who.user.tag}\nID - ${who.user.id}`)
        }
    }
    else if(cmd === "ping") {
        message.channel.send(`Pong!**${Date.now() - message.createdTimestamp}ms**`)
    }
    else if(cmd === 'ban') {
        const ban = message.mentions.members.first()
        if(!ban) return message.channel.send("Please tell me who to ban, idiot")
        if(ban) {
            ban.ban()
        }
    }
    else if(cmd === "me") {
        const embed = new Discord.MessageEmbed()
        embed.setTitle("Name")
        embed.setDescription(`${message.author.tag}`)
        embed.addField("ID", `${message.author.id}`)
        embed.setTimestamp()
        embed.setColor("Red")
        message.author.send(embed)
    }
    else if(cmd === "warn") {
        const embedWarn = new Discord.MessageEmbed()
        .setTitle("Oops, you've been warned")
        .setDescription("Unfortantly, you have been warned in **meety**")
        .addField("Moderator", `${message.author.tag}`)
        .addField("Appeal", "You can appeal at meetyteam.wixsite.com/meety")
        .setTimestamp()
        .setColor("blue")
        const warn = message.mentions.members.first()
        if(!warn) return message.channel.send("who dumbo")
        if(warn) {
            warn.send(embedWarn)
            message.channel.send(`Sucesfully warned ${warn.user.tag}`)
        }
    }
    else if(cmd === "bot-info") {
        const botInfo = new Discord.MessageEmbed()
        .setTitle("Bot Info")
        .setDescription("Meety++ Info")
        .setColor("BLUE")
        .addField("Name", "Meety++(Sams Son)")
        .addField("Version", "1.0.0")
        .addField("Status", "Recieving Updates")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/847530234026000445/850341959506984970/meetyplus.png")
        message.channel.send(botInfo)
    }
})

Client.login('ODQ5NTc3NTI5NDA0ODE3NDIw.YLdMuw.QTkNwiqeIfuxTkhNffpoDPzd1R4')