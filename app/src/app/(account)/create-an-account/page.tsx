import CreateAnAccountCard from '@/components/create-an-account-card';
import { Grid } from '@mui/material';
import MarketingPanel from '@/components/marketing-panel';
import { Metadata } from 'next';

const Page = () => (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={12}
        height={804}
    >
        <Grid item lg={6} md={6}>
            <CreateAnAccountCard />
        </Grid>
        <Grid item lg={6} md={6}>
            <MarketingPanel />
        </Grid>
    </Grid>
);
export const metadata: Metadata = {
    title: 'Create an account'
};

export default Page;
