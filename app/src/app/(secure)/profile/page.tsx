import { Metadata } from 'next';
import React from 'react';
import { Typography } from '@mui/material';

const Page = () => {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Profile
            </Typography>
            <Typography paragraph>Coming soon.</Typography>
        </>
    );
};

export const metadata: Metadata = {
    title: 'Profile | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
