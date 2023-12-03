import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';

import Image from 'next/image';

const SignIn = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
        >
            <Grid item md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h1">Sign in</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Stack direction="column" spacing={5}>
                    <Image
                        src="./logo-white.svg"
                        width={231}
                        height={136}
                        alt="logo"
                    />
                    <Typography variant="h3">
                        Simple. Flexible. Empowering.
                    </Typography>
                    <Typography variant="subtitle1">
                        A grade book that thinks like you do.
                    </Typography>
                    <Typography paragraph>
                        Learning Portrait was built from the ground up to think
                        like, and support, the classrooms of the most
                        progressive K-12 educators - allowing educators,
                        students, families and school systems to finally monitor
                        learning in a way that makes sense. Students aren&apos;t
                        numbers. They are learners. See the portrait of what
                        they can do.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default SignIn;
