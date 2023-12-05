import { Metadata } from 'next';
import { Typography } from '@mui/material';
import { faker } from '@faker-js/faker';

const Page = () => {
    return (
        <>
            <Typography variant="h2" paragraph>
                Privacy Policy
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
};

export const metadata: Metadata = {
    title: 'Privacy Policy | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
