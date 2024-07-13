import { Metadata } from 'next';
import { Typography } from '@mui/material';

const Page = () => (
    <>
        <Typography variant="h2" gutterBottom>
            Can&apos;t Sign In
        </Typography>
        <Typography paragraph>Coming soon.</Typography>
    </>
);

export const metadata: Metadata = {
    title: "Can't Sign In | Learning Portrait",
    description: 'A gradebook that thinks like you do.'
};

export default Page;
