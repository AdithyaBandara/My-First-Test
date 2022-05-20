import discordJS, { Intents } from 'discord.js'
import doteenv from 'dotenv'
doteenv.config()

const client = new discordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The Bot Is Ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply({
            content: 'hi vato',
        })
    }
})
client.on('messageCreate', (message) => {
    if (message.content === 'gm') {
        message.reply({
            content: 'Good Morning',
        })
    }
})
client.login(process.env.TOKEN)

