import * as fixtures from '@/lib/fixtures';

import CourseSetup from '@/components/course-setup';
import { Metadata } from 'next';
import React from 'react';

const Page = () => {
    const courses = fixtures.courses(1);
    const objectives = fixtures.objectives(5);

    return <CourseSetup courses={courses} objectives={objectives} />;
};

export const metadata: Metadata = {
    title: 'Course Setup | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
