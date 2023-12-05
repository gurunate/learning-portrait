import '../globals.css';

import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Toolbar,
    Typography
} from '@mui/material';

import Copyright from '@/components/copyright';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import ThemeRegistry from '@/components/theme-registry';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.className}>
            <body style={{ backgroundColor: '#f4f7f7' }}>
                <ThemeRegistry>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={4}
                        height="100vh"
                    >
                        <Grid item>
                            <Box sx={{ flexGrow: 1 }} mb={4}>
                                <AppBar
                                    position="static"
                                    sx={{ borderRadius: 0 }}
                                >
                                    <Toolbar>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                            p={1}
                                        >
                                            <Grid item>
                                                <Link href="/">
                                                    <Image
                                                        src="/logo-white.svg"
                                                        alt="logo"
                                                        width={101.9}
                                                        height={60}
                                                    />
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="text"
                                                    href="/sign-in"
                                                    component={Link}
                                                    color="inherit"
                                                >
                                                    Sign In
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="stretch"
                        >
                            <Container maxWidth="xl">
                                <Paper elevation={0} variant="outlined">
                                    <Box p={4}>
                                        <main>{children}</main>
                                    </Box>
                                </Paper>
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container maxWidth="xl">
                                <Copyright />
                            </Container>
                        </Grid>
                    </Grid>
                </ThemeRegistry>
            </body>
        </html>
    );
}
