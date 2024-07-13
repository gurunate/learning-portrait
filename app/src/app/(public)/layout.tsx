import '../globals.css';

import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Toolbar
} from '@mui/material';

import Copyright from '@/components/copyright';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import ThemeRegistry from '@/components/theme-registry';

export type LayoutProps = {
    children: React.ReactNode;
};

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Learning Portrait',
    description: 'A gradebook that thinks like you do.'
};

/**
 *
 * @param props
 * @returns
 */
const Layout: React.FC<LayoutProps> = ({ children }) => (
    <html lang="en" className={poppins.className}>
        <body>
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
                            <AppBar position="static" sx={{ borderRadius: 0 }}>
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
                                                endIcon={
                                                    <EastIcon
                                                        fontSize="small"
                                                        sx={{
                                                            color: 'primary.contrast'
                                                        }}
                                                    />
                                                }
                                            >
                                                Go to app
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
                            <Paper>
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

export default Layout;
