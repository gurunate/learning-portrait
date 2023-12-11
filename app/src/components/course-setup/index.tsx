import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';

import ObjectivesTable from '../tables/objectives-table';
import { Course as TCourse } from '@/types/course';
import { faker } from '@faker-js/faker';

export type CourseSetupProps = {
    courses: TCourse[];
};

const objectives = [
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: 'Objective Name',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: 'Objective Name',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: 'Objective Name',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: 'Objective Name',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: 'Objective Name',
        description: 'Lorem ipsum dolor sit amet...'
    }
];

/**
 * @param {CourseSetupProps} props
 * @returns {JSX.Element}
 */
const CourseSetup: React.FC<CourseSetupProps> = ({
    courses
}: CourseSetupProps): JSX.Element => (
    <Grid container direction="row" spacing={4} maxWidth="xl">
        <Grid item md={12}>
            <Typography variant="h2">Course Setup</Typography>
        </Grid>
        <Grid item md={6} sm={8}>
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
        <Grid item md={12}>
            <ObjectivesTable objectives={objectives} />
        </Grid>
    </Grid>
);

export default CourseSetup;
