'use client';

import { FieldValues } from 'react-hook-form';
import { Grid } from '@mui/material';
import MarketingPanel from '@/components/marketing-panel';
import SignInCard from '@/components/sign-in-card';
import { generateHash } from '@/lib/utils';
import styles from './page.module.css';

/**
 *
 * @returns
 */
const Page = () => {
    const handleSubmit = async ({ email, password }: FieldValues) => {
        const hash = generateHash(password);
        console.log({ email, hash });
    };

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
                    <SignInCard onSubmit={handleSubmit} />
                </Grid>
                <Grid item lg={6} md={6}>
                    <MarketingPanel />
                </Grid>
            </Grid>
        </main>
    );
};

export default Page;
