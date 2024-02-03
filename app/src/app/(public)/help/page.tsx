import { Metadata } from 'next';
import { Typography } from '@mui/material';

const Page = () => (
    <>
        <Typography variant="h2" gutterBottom>
            Help
        </Typography>
        <Typography paragraph>Coming soon.</Typography>
    </>
);

export const metadata: Metadata = {
    title: 'Help'
};

export default Page;
