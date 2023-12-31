import {
    Avatar,
    Badge,
    Button,
    Card,
    CardContent,
    Grid,
    Typography
} from '@mui/material';

import React from 'react';
import { Student as TStudent } from '@/types';
import { formatFullName } from '@/lib/utils';

export type StudentCardProps = {
    onMessageStudent: () => void;
    student: TStudent;
};

/**
 * @param {StudentCardProps} props
 * @returns {JSX.Element}
 */
const StudentCard: React.FC<StudentCardProps> = ({
    onMessageStudent,
    student
}: StudentCardProps): JSX.Element => (
    <Card sx={{ maxWidth: 348 }}>
        <CardContent>
            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <Avatar
                        sx={{ width: 132, height: 132 }}
                        src={student?.avatar}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="h3" color="primary">
                        {formatFullName(student) as string}
                    </Typography>
                </Grid>
                <Grid item>
                    <Badge color="error" badgeContent="2">
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={onMessageStudent}
                        >
                            Message Student
                        </Button>
                    </Badge>
                </Grid>
                <Grid item>
                    <Typography variant="caption" color="textSecondary">
                        Last Online Aug 20, 23 6:21 PM
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default React.memo(StudentCard);
