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

export type StudentCardProps = unknown;

/**
 * @param {StudentCardProps} props
 * @returns {JSX.Element}
 */
const StudentCard: React.FC<StudentCardProps> = (
    props: StudentCardProps
): JSX.Element => (
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
                        src="/avatars/2185184f-ffa9-48f2-8611-9893de06e4f6.svg"
                    />
                </Grid>
                <Grid item>
                    <Typography variant="h3" color="primary">
                        Anna Lacey
                    </Typography>
                </Grid>
                <Grid item>
                    <Badge color="error" badgeContent="2">
                        <Button variant="contained" size="large" fullWidth>
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
