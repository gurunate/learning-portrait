const { PrismaClient } = require('@prisma/client');
const users = require('./users');

const prisma = new PrismaClient();

const seedData = async () => {
    users.map(async user =>
        prisma.user.upsert({
            where: { id: user?.id },
            update: {},
            // @ts-ignore
            create: user
        })
    );

    await prisma.$disconnect();
};

seedData()
    .catch(e => {
        console.error(`Error seeding: ${e}`);
        process.exit(1);
    })
    .finally(async () => {
        console.log('Seeding successfully.');
    });
