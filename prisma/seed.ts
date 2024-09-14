import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const teams = await prisma.team.createMany({
    data: [
        {
            name: "Milk Buds",
            discordId: "1121246752167706734"
        },
        {
            name: "Flagrant Fowl",
            discordId: "1121248150611579020"
        },
        {
            name: "T-Wrecks",
            discordId: "1121248427687288924"
        },
        {
            name: "Bad Cattitude",
            discordId: "1121248097037713428"
        },
        {
            name: "Snow Ballers",
            discordId: "1121248804381937695"
        },
        {
            name: "B-Team",
            discordId: "1121249057852100768"
        },
        {
            name: "Troubles Bruin",
            discordId: "1284113662247702589"
        },
        {
            name: "Piggy In Pink",
            discordId: "1284113738089234433"
        }
    ]
  })

  console.log(`Seeded database with ${teams.count} teams.`)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })