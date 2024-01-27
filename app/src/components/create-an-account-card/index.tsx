'use client';

import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import { FormProvider, useController, useForm } from 'react-hook-form';

import Link from '@/components/link';
import { createAnAccountSchema } from './schema';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export type CreateAnAccountCardProps = {
    loading?: boolean;
};

/**
 * @param {CreateAnAccountCardProps} props
 * @returns {JSX.Element}
 */
const CreateAnAccountCard: React.FC<CreateAnAccountCardProps> = (
    props: CreateAnAccountCardProps
): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(createAnAccountSchema),
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

    const onSubmit = () => {
        console.log('onSubmit');
    };

    const onError = () => {
        console.log('onError');
    };

    return (
        <FormProvider {...methods}>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Grid container spacing={4} p={{ lg: 10, sm: 5 }}>
                            <Grid item xs={12}>
                                <Typography variant="h2">
                                    Create an account
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Existing user?{' '}
                                    <Link href="/sign-in">Sign In</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...emailField}
                                    color="secondary"
                                    autoFocus
                                    fullWidth
                                    label="Email address"
                                    placeholder="Email"
                                    variant="standard"
                                    InputLabelProps={{
                                        sx: {
                                            color: '#84818A'
                                        }
                                    }}
                                    sx={{
                                        '& label': {
                                            '&.Mui-focused': {
                                                color: '#84818A'
                                            }
                                        }
                                    }}
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
                                    color="secondary"
                                    type="password"
                                    label="Password"
                                    placeholder="Password"
                                    variant="standard"
                                    InputLabelProps={{
                                        sx: {
                                            color: '#84818A'
                                        }
                                    }}
                                    sx={{
                                        '& label': {
                                            '&.Mui-focused': {
                                                color: '#84818A'
                                            }
                                        }
                                    }}
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
                                        Create Account
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

export default CreateAnAccountCard;
