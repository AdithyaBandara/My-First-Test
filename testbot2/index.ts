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
    const guildid = '961103103569051668'
    const guild = client.guilds.cache.get(guildid)
    let commands
    
    if (guild) {
        commands = guild.commands    
    } else {
        commands = client.application?.commands
    }
    
    commands?.create({
        name: 'ping',
        description: 'Replies With Pong'
    })

})


client.login(process.env.TOKEN)
