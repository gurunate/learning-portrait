'use client';

import * as yup from 'yup';

import {
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import { FormProvider, useController, useForm } from 'react-hook-form';

import FacebookIcon from '../icons/facebook';
import GoogleIcon from '../icons/google';
import Link from '@/components/link';
import React from 'react';
import { get } from 'lodash';
import styles from './styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

export type SignInCardProps = unknown;

export const schema = yup.object().shape({
    email: yup
        .string()
        .required('Required field.')
        .email('Not a valid email address.'),
    password: yup
        .string()
        .required('Required field.')
        .max(40, 'Maximum 40 characters.')
});

/**
 * Sign In card.
 *
 * @param {SignInCardProps} props
 * @returns {JSX.Element}
 */
const SignInCard: React.FC<SignInCardProps> = (): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const {
        control,
        formState: { errors },
        handleSubmit
    } = methods;

    const { field: emailField } = useController({
        control,
        name: 'email'
    });

    const { field: passwordField } = useController({
        control,
        name: 'password'
    });

    const onSubmit = (data: any) => {
        console.log('onSubmit', { data });
    };

    const onError = (data: any) => {
        console.log('onError', { data });
    };

    return (
        <FormProvider {...methods}>
            <Card
                variant="outlined"
                className={styles.root}
                style={{ borderRadius: 16 }}
            >
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Grid container spacing={4} p={{ lg: 10, sm: 5 }}>
                            <Grid item xs={12}>
                                <Typography variant="h2">Sign in</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    New user?{' '}
                                    <Link href="/create-an-account">
                                        Create an account
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...emailField}
                                    autoFocus
                                    fullWidth
                                    label="Email address"
                                    variant="standard"
                                    error={Boolean(
                                        get(errors, emailField.name)
                                    )}
                                    helperText={get(
                                        errors,
                                        `${emailField.name}.message`
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...passwordField}
                                    fullWidth
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                    inputProps={{ maxLength: 40 }}
                                    error={Boolean(
                                        get(errors, passwordField.name)
                                    )}
                                    helperText={get(
                                        errors,
                                        `${passwordField.name}.message`
                                    )}
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
                                        <Link href="/cant-sign-in">
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
                                        startIcon={<GoogleIcon />}
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
        </FormProvider>
    );
};

export default SignInCard;
