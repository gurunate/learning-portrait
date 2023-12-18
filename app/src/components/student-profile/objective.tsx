import {
    Divider,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Typography
} from '@mui/material';

import RatingSelect from '@/components/rating-select';
import { Course as TCourse } from '@/types';

export type StudentObjectiveProps = {
    courses: TCourse[];
};

/**
 *
 * @param {StudentObjectiveProps} props
 * @returns {JSX.Element}
 */
const StudentObjective: React.FC<StudentObjectiveProps> = ({
    courses
}: StudentObjectiveProps): JSX.Element => (
    <Grid container spacing={4}>
        <Grid item md={12}>
            <Typography variant="h3">Objective</Typography>
        </Grid>
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
        <Grid item md={12} container spacing={4}>
            <Grid item md={4}>
                <Typography variant="subtitle2" paragraph>
                    Teacher Rating
                </Typography>
                <RatingSelect defaultValue="M" extended width={262} />
            </Grid>
            <Grid item md={4}>
                <Typography variant="subtitle2" paragraph>
                    Last Update
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    12/31/23
                </Typography>
            </Grid>
            <Grid item md={4}>
                <Typography variant="subtitle2" paragraph>
                    Last Message
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    12/31/23
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Divider />
            </Grid>
            <Grid item md={4}>
                <Typography variant="subtitle2" paragraph>
                    Student Rating
                </Typography>
                <RatingSelect defaultValue="M" extended width={262} />
            </Grid>
            <Grid item md={4}>
                <Typography variant="subtitle2" paragraph>
                    Last Update
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    12/31/23
                </Typography>
            </Grid>
            <Grid item md={4}>
                <Typography variant="subtitle2" paragraph>
                    Last Message
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    12/31/23
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Divider />
            </Grid>
        </Grid>
    </Grid>
);

export default StudentObjective;
