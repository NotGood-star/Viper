const { EmbedBuilder } = require('discord.js');

function createEmbed(title, description, color = '#2b2d31') {
    return new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setTimestamp()
        .setFooter({ text: 'Viper Bot' });
}

module.exports = { createEmbed };
