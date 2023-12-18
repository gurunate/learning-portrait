import * as fixtures from '@/lib/fixtures';

import { Metadata } from 'next';
import StudentProfile from '@/components/student-profile';

// const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];
const courses = fixtures.courses(1);
const student = fixtures.student();

const Page = () => {
    return <StudentProfile courses={courses} student={student} />;
};

export const metadata: Metadata = {
    title: 'Student Profile | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
