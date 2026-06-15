module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Viper is online and logged in as ${client.user.tag}!`);
    },
};
