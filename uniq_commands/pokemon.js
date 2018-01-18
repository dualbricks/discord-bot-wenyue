module.exports = {
    name: 'p.pokemon',
    description: 'shows pics hehe',
    execute(msg,x) {
        Discord = require('discord.js');
        pics = require('fs');
        link = pics.readFileSync("./links1.txt","utf-8").split("\n");
        if(msg.author.id == "325657843997081600") {
            link = pics.readFileSync("./links2.txt","utf-8").split("\n")
        };
        winner = msg.author
        const pokewin1 = new Discord.RichEmbed()
        .setColor(0xffa5f1)
        .setAuthor(`Win Already ${winner.username}!!!`, winner.displayAvatarURL)
        .setFooter(`Nice luck! ${winner.username}`, winner.displayAvatarURL)
        .setImage(`${link[Math.floor((Math.random()*link.length))]}`)
        .addField(`Good Catch!!!`, `${winner.username}`)
        msg.channel.send({embed : pokewin1});
    }
}