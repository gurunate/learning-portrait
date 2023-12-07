import Dashboard from '@/components/dashboard';
import { Metadata } from 'next';

const Page = () => {
    return <Dashboard />;
};

export const metadata: Metadata = {
    title: 'Dashboard | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
