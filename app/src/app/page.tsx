import ComingSoon from '@/components/coming-soon';
import Copyright from '@/components/copyright';
import { Grid } from '@mui/material';
import { Metadata } from 'next';

const Page = () => (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        spacing={6}
    >
        <Grid item>
            <ComingSoon />
        </Grid>
        <Grid item>
            <Copyright />
        </Grid>
    </Grid>
);

export const metadata: Metadata = {
    title: 'Learning Portrait',
    description: 'A gradebook that thinks like you do.'
};

export default Page;
