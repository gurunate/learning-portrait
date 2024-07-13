import { Metadata } from 'next';
import { Typography } from '@mui/material';
import { faker } from '@faker-js/faker';

const Page = () => (
    <>
        <Typography variant="h2" gutterBottom>
            Create an Account
        </Typography>
        {faker.lorem
            .paragraphs(11)
            .split('\n')
            .map((p, idx) => (
                <Typography key={idx} paragraph>
                    {p}
                </Typography>
            ))}
    </>
);

export const metadata: Metadata = {
    title: 'Create an Account | Learning Portrait',
    description: 'A gradebook that thinks like you do.'
};

export default Page;
