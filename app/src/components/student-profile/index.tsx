'use client';

import { Grid } from '@mui/material';
import React from 'react';
import StudentCard from '@/components/student-card';
import StudentEvidence from './evidence';
import StudentObjective from './objective';
import { Course as TCourse } from '@/types/course';

export type StudentProfileProps = {
    courses: TCourse[];
};

/**
 * @param {StudentProfileProps} props
 * @returns {JSX.Element}
 */
const StudentProfile: React.FC<StudentProfileProps> = ({
    courses
}): JSX.Element => (
    <Grid container spacing={4}>
        <Grid item md={3}>
            <StudentCard />
        </Grid>
        <Grid item md={9} container spacing={4} mt={1}>
            <Grid item md={12}>
                <StudentObjective courses={courses} />
            </Grid>
            <Grid item md={12}>
                <StudentEvidence />
            </Grid>
        </Grid>
    </Grid>
);

export default React.memo(StudentProfile);
