import Dashboard from '@/components/dashboard';
import { Metadata } from 'next';

const Page = () => {
    const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];

    return <Dashboard courses={courses} />;
};

export const metadata: Metadata = {
    title: 'Dashboard | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
