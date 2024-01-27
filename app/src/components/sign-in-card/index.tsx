'use client';

import {
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import {
    FieldErrors,
    FieldValues,
    FormProvider,
    useController,
    useForm
} from 'react-hook-form';

import Button from '@mui/lab/LoadingButton';
import FacebookIcon from '../../symbols/facebook';
import GoogleIcon from '../../symbols/google';
import Link from '@/components/link';
import NextLink from 'next/link';
import React from 'react';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { get } from 'lodash';
import { signInCardSchema } from './schema';
import styles from './styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

export type SignInCardProps = {
    error?: React.ReactNode;
    loading?: boolean;
    onError?: (errors: FieldErrors) => void;
    onSubmit: (data: FieldValues) => void;
};

/**
 * Sign In card.
 *
 * @param {SignInCardProps} props
 * @returns {JSX.Element}
 */
const SignInCard: React.FC<SignInCardProps> = ({
    error,
    loading = false,
    onError,
    onSubmit
}: SignInCardProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(signInCardSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const [showPassword, setShowPassword] = React.useState(false);

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

    const buttonStyle = {
        width: 189,
        height: 48,
        borderColor: 'edge.main'
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
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
                                    No account?{' '}
                                    <Link href="/create-an-account">
                                        Sign up
                                    </Link>
                                </Typography>
                            </Grid>
                            {error && (
                                <Grid item xs={12}>
                                    <Typography color="error">
                                        <Stack direction="row" spacing={1}>
                                            <ReportGmailerrorredIcon
                                                sx={{ color: 'inherit' }}
                                            />
                                            <Typography>{error}</Typography>
                                        </Stack>
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    {...emailField}
                                    disabled={loading}
                                    color="secondary"
                                    autoFocus
                                    fullWidth
                                    label="Email address"
                                    variant="standard"
                                    InputProps={{
                                        sx: {
                                            paddingBottom: 1
                                        }
                                    }}
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
                                    disabled={loading}
                                    color="secondary"
                                    type={showPassword ? 'text' : 'password'}
                                    label="Password"
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
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip
                                                title={
                                                    showPassword
                                                        ? 'Hide'
                                                        : 'Show'
                                                }
                                            >
                                                <IconButton
                                                    onClick={togglePassword}
                                                >
                                                    {showPassword && (
                                                        <VisibilityOffIcon
                                                            fontSize="small"
                                                            sx={{
                                                                color: '#84818A'
                                                            }}
                                                        />
                                                    )}
                                                    {!showPassword && (
                                                        <VisibilityIcon
                                                            fontSize="small"
                                                            sx={{
                                                                color: '#84818A'
                                                            }}
                                                        />
                                                    )}
                                                </IconButton>
                                            </Tooltip>
                                        )
                                    }}
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
                                        loading={loading}
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
                                        loading={loading}
                                        variant="outlined"
                                        sx={buttonStyle}
                                        startIcon={!loading && <GoogleIcon />}
                                        href="/dashboard"
                                        component={NextLink}
                                        size="large"
                                    >
                                        Google
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        loading={loading}
                                        variant="outlined"
                                        sx={buttonStyle}
                                        startIcon={!loading && <FacebookIcon />}
                                        href="/dashboard"
                                        component={NextLink}
                                        size="large"
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
