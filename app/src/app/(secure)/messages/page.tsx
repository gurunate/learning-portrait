import { Metadata } from 'next';
import { Typography } from '@mui/material';

const Page = () => {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Messages
            </Typography>
            <Typography paragraph>Coming soon.</Typography>
        </>
    );
};

export const metadata: Metadata = {
    title: 'Messages | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
