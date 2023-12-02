import { Card, CardContent, Grid, Typography } from '@mui/material';

const SignIn = () => {
    return (
        <Grid container spacing={12}>
            <Grid item md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h1">Sign in</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6}>
                content here
            </Grid>
        </Grid>
    );
};

export default SignIn;
