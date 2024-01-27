'use client';

import { FieldValues } from 'react-hook-form';
import { Grid } from '@mui/material';
import MarketingPanel from '@/components/marketing-panel';
import React from 'react';
import SignInCard from '@/components/sign-in-card';
import { signIn } from 'next-auth/react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const [error, setError] = React.useState('');

    const handleSignIn = async ({ email: username, password }: FieldValues) => {
        setError('');
        setLoading(true);

        const response = await signIn('credentials', {
            redirect: false,
            username,
            password
        });

        if (response?.ok) {
            router.push('/dashboard');
        } else {
            setLoading(false);
            setError('Incorrect email address or password.');
        }
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
                    <SignInCard
                        onSubmit={handleSignIn}
                        error={error}
                        loading={loading}
                    />
                </Grid>
                <Grid item lg={6} md={6}>
                    <MarketingPanel />
                </Grid>
            </Grid>
        </main>
    );
};

export default Page;
