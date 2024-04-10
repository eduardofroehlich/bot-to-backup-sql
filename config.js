const config = {
    webhook: "", // webhook url what you get in discord channel
    time: 240, // in min
    botusername: "Peepo Backuper", //Bot Name

    connection: {
        host: "0.0.0.0", // Normally 127.0.0.1 or localhost
        user: "", // Database User
        password: "", // Database Password if you have, if not leave it empty
        database: "", // Database Name
    },

    messages: {
        title: "Backup of the database",
        description: "This database file has been saved on ",
        online: "[ONLINE] The bot is running."
    },

    embed: {
        color: "BLACK"
    }
}

module.exports = config