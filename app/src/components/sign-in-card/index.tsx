import {
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    TextField,
    Typography
} from '@mui/material';

import FacebookIcon from '../icons/facebook';
import GoogleIcon from '../icons/google';
import Link from '@/components/link';
import React from 'react';

export type SignInCardProps = unknown;

/**
 * Sign In card.
 *
 * @param {SignInCardProps} props
 * @returns {JSX.Element}
 */
const SignInCard: React.FC<SignInCardProps> = (): JSX.Element => (
    <Card variant="outlined" sx={{ borderRadius: 6 }}>
        <CardContent>
            <form>
                <Grid container spacing={4} p={10}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Sign in</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            New user?{' '}
                            <Link href="/register">Create an account</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email address"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            label="Password"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h6">
                                <Link href="/forgot-password">
                                    Can&apos;t sign in?
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    width: 164,
                                    height: 48
                                }}
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider textAlign="center">or</Divider>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: 189,
                                    height: 48
                                }}
                                startIcon={<GoogleIcon fontSize="large" />}
                            >
                                Google
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: 189,
                                    height: 48
                                }}
                                startIcon={<FacebookIcon />}
                            >
                                Facebook
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            Protected by reCAPTCHA and subject to the{' '}
                            <Link href="/privacy-policy">
                                Learning Portrait Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link href="/terms-of-service">
                                Terms of Service.
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    </Card>
);

export default SignInCard;
