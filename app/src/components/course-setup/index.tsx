import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import { Course as TCourse, Objective as TObjective } from '@/types';

import ObjectivesTable from '../tables/objectives-table';
import React from 'react';

export type CourseSetupProps = {
    courses: TCourse[];
    objectives: TObjective[];
};

/**
 * @param {CourseSetupProps} props
 * @returns {JSX.Element}
 */
const CourseSetup: React.FC<CourseSetupProps> = ({
    courses,
    objectives
}: CourseSetupProps): JSX.Element => (
    <Grid container direction="row" spacing={4} maxWidth="xl">
        <Grid item md={12}>
            <Typography variant="h2">Course Setup</Typography>
        </Grid>
        <Grid item md={6} sm={8}>
            {/*<FormControl fullWidth>
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
            </FormControl>*/}
        </Grid>
        <Grid item md={12}>
            {/*<ObjectivesTable objectives={objectives} />*/}
        </Grid>
    </Grid>
);

export default CourseSetup;
