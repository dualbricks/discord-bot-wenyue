module.exports = {
    name: 'weather',
    description: 'Weather Report',
    execute(msg, args) {
        const Discord = require("discord.js")
        const weather = new Discord.RichEmbed()
        .setColor(0xffa5f1)
        .setAuthor("Weather Today", msg.author.displayAvatarURL)
        .setFooter(`Provided by Weather.com`, "https://weather.com/weather/assets/footer/img/twc-logo-lockup.png")
        .setImage(`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`)
        .addField(`Weather`, `Mostly cloudy. Low near 75F. Winds light and variable.`)
            msg.reply({embed : weather});
    },
};