require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.commands = new Collection();

// Initializing Handlers (We will create these next)
const handlers = ['commandHandler', 'eventHandler'];
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);
