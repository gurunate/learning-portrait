import { Grid, Typography } from '@mui/material';

import { Metadata } from 'next';

const Page = () => {
    return (
        <Grid container spacing={4}>
            <Grid item md={12}>
                <Typography variant="h2">Naming Conventions</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h3">Objective Setup</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4" paragraph>
                    What do you call the high level learning expectations of
                    your course?
                </Typography>
                <Typography paragraph>
                    Examples include: report card items, reporting standards,
                    standards, learning expectations, course objectives, etc.
                </Typography>
            </Grid>
        </Grid>
    );
};

export const metadata: Metadata = {
    title: 'Settings: Naming Conventions | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
