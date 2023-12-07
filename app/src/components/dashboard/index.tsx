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

export type DashboardProps = unknown;

/**
 *
 * @param {DashboardProps} props
 * @returns {JSX.Element}
 */
const Dashboard: React.FC<DashboardProps> = (
    props: DashboardProps
): JSX.Element => {
    const course = 10;

    return (
        <Grid container spacing={2}>
            <Grid
                item
                md={6}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <FormControl fullWidth>
                    <Select labelId="course-label" id="course" value={course}>
                        <MenuItem value={10}>Pre Calculus Adv</MenuItem>
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
