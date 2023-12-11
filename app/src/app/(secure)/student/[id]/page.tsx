import { Metadata } from 'next';
import StudentProfile from '@/components/student-profile';

const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];

const Page = () => {
    return <StudentProfile courses={courses} />;
};

export const metadata: Metadata = {
    title: 'Student Profile | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
