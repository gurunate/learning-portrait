import * as fixtures from '@/lib/fixtures';

import { Metadata } from 'next';
import StudentProfile from '@/components/student-profile';
import { Student as TStudent } from '@/types';

const courses = fixtures.courses(1);
const objectives = fixtures.objectives(3);

const students = [
    {
        id: '7e04a6c5-89d2-4817-bce4-c82e2903f903',
        firstName: 'Devonte',
        lastName: 'Kozey',
        email: 'Jennifer.DuBuque66@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg'
    },
    {
        id: '15a4cb30-59e3-4e1f-bab9-f4d36694a402',
        firstName: 'Opal',
        lastName: 'Stoltenberg',
        email: 'Kenny_Krajcik@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/135.jpg'
    },
    {
        id: '85a2b5bd-4cc7-40a1-a703-260564be693a',
        firstName: 'Anna',
        lastName: 'Lacey',
        email: 'anna-lacey@hotmail.com',
        avatar: '/avatars/2185184f-ffa9-48f2-8611-9893de06e4f6.svg'
    },
    {
        id: '06bd706d-2e5b-40aa-93d0-d66897e1c078',
        firstName: 'Cynthia',
        lastName: 'Johnston',
        email: 'Baby44@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg'
    },
    {
        id: 'd653729d-d12e-40d5-9f65-873ec376b134',
        firstName: 'Christa',
        lastName: 'Abshire',
        email: 'Savanah62@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg'
    },
    {
        id: '59e00072-523c-4fa2-9f1a-8dd673705de6',
        firstName: 'Fredrick',
        lastName: 'Kreiger',
        email: 'Kiley_Grady-Hansen99@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/924.jpg'
    },
    {
        id: '0394eef5-1d3e-452c-8c43-e67164a9db95',
        firstName: 'Keshawn',
        lastName: 'Altenwerth',
        email: 'Lora.Skiles40@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/73.jpg'
    },
    {
        id: '9ee05f10-2b0f-408f-88c5-e369f83d5dbd',
        firstName: 'Jarret',
        lastName: 'Murphy',
        email: 'Pearline_Yundt93@gmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/804.jpg'
    },
    {
        id: '9739df17-b5f2-4032-884c-7db950a51752',
        firstName: 'Einar',
        lastName: 'Crist',
        email: 'Leanna_Dooley26@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg'
    }
];

const Page = ({ params }: { params: { id: string } }) => (
    <StudentProfile
        courses={courses}
        objectives={objectives}
        student={students.find(s => s.id === params.id) as TStudent}
    />
);

export const metadata: Metadata = {
    title: 'Student Profile | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
