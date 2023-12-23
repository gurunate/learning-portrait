import { Metadata } from 'next';
import { Typography } from '@mui/material';

const Page = () => (
    <>
        <Typography variant="h2" gutterBottom>
            Can't Sign In
        </Typography>
        <Typography paragraph>Coming soon.</Typography>
    </>
);

export const metadata: Metadata = {
    title: "Can't Sign In | Learning Portrait",
    description: 'A grade book that thinks like you do.'
};

export default Page;
