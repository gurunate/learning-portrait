'use client';

import {
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Stack
} from '@mui/material';
import {
    Course as TCourse,
    Objective as TObjective,
    Student as TStudent
} from '@/types';

import CourseDropdown from '../course-dropdown';
import CourseTable from '../tables/course-table';
import EvidenceDialog from '../dialogs/evidence';
import { FieldValues } from 'react-hook-form';
import ObjectivesDropdown from '../objective-dropdown';
import React from 'react';
import StudentsTable from '../tables/students-table';

export type DashboardProps = {
    courses: TCourse[];
    loading?: boolean;
    students: TStudent[];
};

/**
 * @param {DashboardProps} props
 * @returns {JSX.Element}
 */
const Dashboard: React.FC<DashboardProps> = ({
    courses = [],
    loading = false,
    students = []
}: DashboardProps): JSX.Element => {
    const [openEvidenceDialog, setOpenEvidenceDialog] = React.useState(false);

    const handleAddEvidenceClick = () => {
        setOpenEvidenceDialog(true);
    };

    const handleAddEvidenceClose = () => {
        setOpenEvidenceDialog(false);
    };

    const handleSubmit = (data: FieldValues) => {
        console.log('handleSubmit', { data });
        setOpenEvidenceDialog(false);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Grid container alignItems="center" spacing={4}>
                <Grid item md={2} sx={{ mx: '16px' }}>
                    <FormControl fullWidth>
                       <CourseDropdown courses={courses} />
                    </FormControl>
                </Grid>
                <Grid item md={2}>
                    <FormControl fullWidth>
                       <ObjectivesDropdown objectives={courses[0].objectives} />
                    </FormControl>
                </Grid>
                {/*<Grid item md={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        spacing={2}
                    >
                        <Button variant="outlined" size="large">
                            View Evidence
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAddEvidenceClick}
                        >
                            Add Evidence
                        </Button>
                    </Stack>
                </Grid>*/}
                <Grid item md={12} sx={{ overflow: 'scroll'}}>
                    <CourseTable
                        course={courses[0]} 
                        objectives={courses[0]?.objectives}
                        students={students}
                    />
                    {/*<CourseTable course={courses[0]} students={[]} />*/}
                </Grid>
            </Grid>
            {/*<EvidenceDialog
                open={openEvidenceDialog}
                onClose={handleAddEvidenceClose}
                courses={courses}
                objectives={courses[0]?.objectives}
                onSubmit={handleSubmit}
            />*/}
        </>
    );
};

export default Dashboard;
