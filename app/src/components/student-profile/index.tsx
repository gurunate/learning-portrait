'use client';

import { Course as TCourse, Student as TStudent } from '@/types';

import { Grid } from '@mui/material';
import React from 'react';
import StudentCard from '@/components/student-card';
import StudentEvidence from './evidence';
import StudentObjective from './objective';

export type StudentProfileProps = {
    courses: TCourse[];
    student: TStudent;
};

/**
 * @param {StudentProfileProps} props
 * @returns {JSX.Element}
 */
const StudentProfile: React.FC<StudentProfileProps> = ({
    courses,
    student
}): JSX.Element => (
    <Grid container spacing={4}>
        <Grid item md={3}>
            <StudentCard student={student} />
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
