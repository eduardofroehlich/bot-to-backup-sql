require('dotenv').config()

const config = {
    webhook: "https://discord.com/api/webhooks/1227606547421593721/lPeKJO7bU0LW-_741irHkuwwg0-pBT1QhFZPo03YtWSQoE1agjXHRNVKIH31uyG83NYA", // webhook url what you get in discord channel
    time: 240, // in min
    botusername: "Peepo Backuper", //Bot Name

    connection: {
        host: process.env.DB_HOST, // Normally 127.0.0.1 or localhost
        user: process.env.DB_USER, // Database User
        password: process.env.DB_PASSWORD, // Database Password if you have, if not leave it empty
        database: process.env.DB_NAME, // Database Name
    },

    messages: {
        title: "Backup of the database",
        description: "This database file has been saved on ",
        online: "[ONLINE] The bot is running.",
        error: {
            webhook: "Please enter the webhook url in the config.js file.",
            connection: "Please configure the connections informations in your .env"
        },
    },

    embed: {
        color: 0x0099FF
    }
}

module.exports = config