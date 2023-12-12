import CourseSetup from '@/components/course-setup';
import { Metadata } from 'next';

const Page = () => {
    const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];
    return <CourseSetup courses={courses} />;
};

export const metadata: Metadata = {
    title: 'Course Setup | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
