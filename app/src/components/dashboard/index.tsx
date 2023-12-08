import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack
} from '@mui/material';

import React from 'react';
import StudentsTable from '../tables/students-table';
import { Course as TCourse } from '@/types/course';

export type DashboardProps = {
    courses: TCourse[];
};

/**
 *
 * @param {DashboardProps} props
 * @returns {JSX.Element}
 */
const Dashboard: React.FC<DashboardProps> = ({
    courses
}: DashboardProps): JSX.Element => {
    return (
        <Grid container alignItems="center" spacing={4}>
            <Grid item md={6} spacing={2}>
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
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <Button variant="outlined" size="large">
                        View Evidence
                    </Button>
                    <Button variant="contained" size="large">
                        Add Evidence
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <StudentsTable />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
