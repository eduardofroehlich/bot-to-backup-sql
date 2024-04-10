const { MessageEmbed, WebhookClient } = require('discord.js');
const mysqldump = require('mysqldump');
const config = require('./config');

setInterval(async() => {
    mysqldump({
        connection: {
            host: config.connection.host,
            user: config.connection.user,
            password: config.connection.password,
            database: config.connection.database,

        },
        dumpToFile: './backup.sql'
    });

    const webhookClient = new WebhookClient({ id: config.webhook.split('https://discord.com/api/webhooks/')[1].split('/')[0], token: config.webhook.split('https://discord.com/api/webhooks/')[1].split('/')[1] });
    let time = Math.round(+new Date() / 1000)
    const embed = new MessageEmbed()
        .setTitle(`${config.messages.title} | ${config.connection.database}`)
        .setColor(config.embed.color)
        .setDescription(`${config.messages.description} <t:${time}>`)

    setTimeout(() => {
        webhookClient.send({
            username: config.botusername,
            embeds: [embed],
            files: ['./backup.sql']
        });
    }, 15000)


}, 1000 * 60 * config.time)

console.log(`%c${config.messages.online}`, 'background: green; color: white; display: block;');