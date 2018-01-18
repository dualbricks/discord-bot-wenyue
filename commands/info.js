module.exports = {
    name: 'info',
    description: 'Show your info',
    execute(msg,args) {
        user = msg.mentions.users.first();
        if( msg.mentions.users.size == 0) {
            user = msg.author

        }; 
        const uinfo = new Discord.RichEmbed()
        .setColor(0xffa5f1)
        .setAuthor(`Essential information for ${user.username}`, user.displayAvatarURL)
        .setImage(user.displayAvatarURL)
        .setFooter(`This info is for ${user.username}`, user.displayAvatarURL)
        .addField(`Info for ${user.username}`, `**Users Name** ${user.username}\n**User ID**: ${user.id}\n**User Status**: ${user.presence.status}\n**Joined at:** ${user.createdAt}`)
        msg.channel.send({embed: uinfo});
    }
};

