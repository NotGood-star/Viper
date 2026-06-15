const { SlashCommandBuilder } = require('discord.js');
const { createEmbed } = require('../../utils/embeds'); // Importing your embed helper

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks the latency of the bot and the API.'),
    
    async execute(interaction) {
        // 1. Send an initial reply to measure the response time
        const sent = await interaction.reply({ 
            content: 'Pinging...', 
            fetchReply: true 
        });

        // 2. Calculate the difference in time
        const roundTripLatency = sent.createdTimestamp - interaction.createdTimestamp;
        const apiLatency = interaction.client.ws.ping;

        // 3. Create the Embed using your utils function
        const embed = createEmbed(
            '🏓 Pong!',
            `**Round-trip Latency:** ${roundTripLatency}ms\n**API Latency:** ${apiLatency}ms`
        );

        // 4. Edit the initial reply with the Embed
        await interaction.editReply({ 
            content: null, // Removes the "Pinging..." text
            embeds: [embed] 
        });
    },
};
