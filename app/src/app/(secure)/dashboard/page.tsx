import Dashboard from '@/components/dashboard';
import { Metadata } from 'next';

const Page = () => {
    const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];

    const objectives = [
        {
            id: 'b933247a-62d9-479d-bc14-0ffeca786302',
            key: 'OBJ',
            name: 'Smart',
            description: 'Ullus delinquo quas suadeo traho studio pectus.'
        },
        {
            id: '0c8e8ec1-952c-4026-bebb-0cd4f5b9de45',
            key: 'OBJ',
            name: 'Woozy',
            description: 'Cado custodia comitatus volaticus amiculum deficio.'
        },
        {
            id: 'b8359af7-ebb2-417f-a726-588770c19277',
            key: 'OBJ',
            name: 'Impassioned',
            description:
                'Anser argumentum sollers derideo civis cetera ver denego.'
        },
        {
            id: '7a245dab-1169-4293-822a-52f71e629e30',
            key: 'OBJ',
            name: 'Definite',
            description: 'Cubicularis degenero suasoria coadunatio.'
        },
        {
            id: '6234ad8a-fb8f-4abc-b903-2a9216afa875',
            key: 'OBJ',
            name: 'Marvelous',
            description: 'Tantillus culpa est.'
        }
    ];

    const students = [
        {
            id: 'f3c78758-a481-4768-9322-281575152631',
            firstName: 'Ramona',
            lastName: 'Schultz',
            email: 'Verna74@yahoo.com'
        },
        {
            id: '5cf17955-9c04-44e6-864d-c813a9a5dcc1',
            firstName: 'Orie',
            lastName: 'Stark',
            email: 'Mose.Padberg87@hotmail.com'
        },
        {
            id: '85a2b5bd-4cc7-40a1-a703-260564be693a',
            firstName: 'Anna',
            lastName: 'Lacey',
            email: 'anna-lacey@hotmail.com'
        },
        {
            id: '1557eb1d-a84a-46c1-9725-cd30aac9aac6',
            firstName: 'Juliet',
            lastName: 'Terry',
            email: 'Hank79@gmail.com'
        },
        {
            id: '7bc1bed3-f921-4461-b1a6-72ebc7ba7f89',
            firstName: 'Mae',
            lastName: 'Cole',
            email: 'Dallin_Walter@gmail.com'
        },
        {
            id: '019def51-2704-4e38-9ad9-ded3eaaa7fc7',
            firstName: 'Joanie',
            lastName: 'Ledner',
            email: 'Sidney_Wilkinson-Rice@yahoo.com'
        },
        {
            id: '6c36b98a-e04a-461d-b6c1-6f245744dd4c',
            firstName: 'Lauryn',
            lastName: 'Larkin',
            email: 'Jarret.Hoppe@hotmail.com'
        },
        {
            id: 'b4ae418f-7245-48ad-820a-7a99e5e50013',
            firstName: 'Kenny',
            lastName: 'Spencer-Anderson',
            email: 'Oma57@yahoo.com'
        },
        {
            id: 'd040eea8-a7f7-4005-83a7-ce32c149f213',
            firstName: 'Cade',
            lastName: 'Crooks',
            email: 'Dakota_Emard26@yahoo.com'
        }
    ];

    return (
        <Dashboard
            courses={courses}
            objectives={objectives}
            students={students}
        />
    );
};

export const metadata: Metadata = {
    title: 'Dashboard | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
