'use client';

import {
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Stack
} from '@mui/material';

import EvidenceDialog from '../evidence-dialog';
import React from 'react';
import StudentsTable from '../tables/students-table';
import { Course as TCourse } from '@/types/course';
import { Objective as TObjective } from '@/types/objective';
import { Student as TStudent } from '@/types/student';

export type DashboardProps = {
    courses: TCourse[];
    objectives: TObjective[];
    students: TStudent[];
};

/**
 * @param {DashboardProps} props
 * @returns {JSX.Element}
 */
const Dashboard: React.FC<DashboardProps> = ({
    courses,
    objectives,
    students
}: DashboardProps): JSX.Element => {
    const [openEvidenceDialog, setOpenEvidenceDialog] = React.useState(false);

    const handleAddEvidenceClick = () => {
        setOpenEvidenceDialog(true);
    };

    const handleAddEvidenceClose = () => {
        setOpenEvidenceDialog(false);
    };

    return (
        <>
            <Grid container alignItems="center" spacing={4}>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <Select
                            labelId="course-label"
                            id="course"
                            value={courses[0].id}
                        >
                            {courses.map(({ id, name }) => (
                                <MenuItem key={id} value={id}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6}>
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
                </Grid>
                <Grid item md={12}>
                    <StudentsTable students={students} />
                </Grid>
            </Grid>
            <EvidenceDialog
                open={openEvidenceDialog}
                onClose={handleAddEvidenceClose}
                courses={courses}
                objectives={objectives}
            />
        </>
    );
};

export default Dashboard;
