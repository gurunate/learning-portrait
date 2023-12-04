import { Grid } from '@mui/material';
import MarketingPanel from '@/components/marketing-panel';
import SignInCard from '@/components/sign-in-card';
import styles from './page.module.css';

const Page = () => {
    return (
        <main className={styles.main}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={12}
                height={804}
            >
                <Grid item lg={6} md={6}>
                    <SignInCard />
                </Grid>
                <Grid item lg={6} md={6}>
                    <MarketingPanel />
                </Grid>
            </Grid>
        </main>
    );
};

export default Page;
