import { PrismaClient } from '@prisma/client';
import { courses } from './courses.mjs';
import { instructors } from './instructors.mjs';
import { objectives } from './objectives.mjs';
import { users } from './users.mjs';

const prisma = new PrismaClient();

const seedData = async () => {
    // Users
    users.map(user =>
        prisma.user.upsert({
            where: { id: user?.id },
            update: {},
            create: user
        })
    );

    const updatedById = users[0]?.id;
    const createdById = updatedById;

    // Instructors
    instructors.map(async instructor =>
        prisma.instructor.upsert({
            where: { id: instructor?.id },
            update: instructor,
            create: {
                ...instructor,
                updatedById,
                createdById
            }
        })
    );

    // Courses
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

    // Objectives
    objectives.map(async objective =>
        prisma.objective.upsert({
            where: { id: objective?.id },
            update: objective,
            create: {
                ...objective,
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
