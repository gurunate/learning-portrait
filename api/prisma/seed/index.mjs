import { PrismaClient } from '@prisma/client';
import { courses } from './courses.mjs';
import { users } from './users.mjs';

const prisma = new PrismaClient();

const seedData = async () => {
    users.map(user =>
        prisma.user.upsert({
            where: { id: user?.id },
            update: {},
            create: user
        })
    );

    const updatedById = users[0]?.id;
    const createdById = updatedById;

    courses.map(async course =>
        prisma.course.upsert({
            where: { id: course?.id },
            update: course,
            create: {
                ...course,
                updatedById,
                createdById
            }
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
