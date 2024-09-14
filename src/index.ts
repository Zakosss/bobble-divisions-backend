import 'dotenv/config'
import { container, SapphireClient } from '@sapphire/framework';
import {  } from 'discord.js';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

declare module '@sapphire/pieces' {
    interface Container {
        databases: {
            api: typeof prisma
        }
    }
}

container.databases = {
    api: prisma
}

const client = new SapphireClient({ intents: [] });
client.login(process.env.DISCORD_TOKEN);