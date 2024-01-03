import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';

import { Course as TCourse } from '@/types';
import { get } from 'lodash';

export type ConversationHeaderProps = {
    courses: TCourse[];
    name: string;
};

/**
 * @param {ConversationHeaderProps} props
 * @returns {JSX.Element}
 */
const ConversationHeader: React.FC<ConversationHeaderProps> = ({
    courses,
    name
}: ConversationHeaderProps): JSX.Element => {
    const {
        formState: { errors }
    } = useFormContext();

    const { field: courseField } = useController({
        name: 'course'
    });

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
        >
            <Grid item sm={6}>
                <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item sm={6}>
                <FormControl fullWidth>
                    <Select
                        {...courseField}
                        id={courseField.name}
                        error={Boolean(get(errors, courseField.name))}
                    >
                        {courses.map(({ id, name }) => (
                            <MenuItem key={id} value={id}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default ConversationHeader;
