import {
    Button,
    Container,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';

import { Metadata } from 'next';

const Page = () => {
    return (
        <Grid container spacing={4} maxWidth="xl">
            <Grid item md={12}>
                <Typography variant="h2">Naming Conventions</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h3">Objective Setup</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4">
                    What do you call the high level learning expectations of
                    your course?
                </Typography>
                <Typography paragraph color="textSecondary">
                    Examples include: report card items, reporting standards,
                    standards, learning expectations, course objectives, etc.
                </Typography>
                <Stack direction="row" spacing={2}>
                    <TextField fullWidth placeholder="Objective" />
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Save changes
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4">
                    When your students provide you evidence of learning, what do
                    you call the thing they are providing?
                </Typography>
            </Grid>
            <Grid item md={12}>
                [grid here]
            </Grid>
            <Grid item md={12}>
                <Typography variant="h3">Evidence Setup</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4">
                    What do you call the high level learning expectations of
                    your course?
                </Typography>
                <Typography paragraph color="textSecondary">
                    Examples include: task, evidence, assignment, assessment,
                    etc.
                </Typography>
                <Stack direction="row" spacing={2}>
                    <TextField fullWidth placeholder="Evidence" />
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Save changes
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h4">
                    What do you want to call the descriptors of how well a
                    student completed Evidence?
                </Typography>
            </Grid>
            <Grid item md={12}>
                [grid here]
            </Grid>
        </Grid>
    );
};

export const metadata: Metadata = {
    title: 'Naming Conventions | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
