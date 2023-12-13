import Dashboard from '@/components/dashboard';
import { Metadata } from 'next';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';

const Page = () => {
    const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];

    const objectives = [
        {
            id: faker.string.uuid(),
            key: 'OBJ',
            name: startCase(faker.word.adjective()),
            description: faker.lorem.sentence()
        },
        {
            id: faker.string.uuid(),
            key: 'OBJ',
            name: startCase(faker.word.adjective()),
            description: faker.lorem.sentence()
        },
        {
            id: faker.string.uuid(),
            key: 'OBJ',
            name: startCase(faker.word.adjective()),
            description: faker.lorem.sentence()
        },
        {
            id: faker.string.uuid(),
            key: 'OBJ',
            name: startCase(faker.word.adjective()),
            description: faker.lorem.sentence()
        },
        {
            id: faker.string.uuid(),
            key: 'OBJ',
            name: startCase(faker.word.adjective()),
            description: faker.lorem.sentence()
        }
    ];

    return (
        <Dashboard courses={courses} objectives={objectives} students={[]} />
    );
};

export const metadata: Metadata = {
    title: 'Dashboard | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
