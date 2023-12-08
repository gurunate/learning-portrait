import {
    AppBar,
    Box,
    Container,
    Grid,
    Link,
    Paper,
    Tooltip
} from '@mui/material';

import Image from 'next/image';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SideNav from '@/components/side-nav';
import ThemeRegistry from '@/components/theme-registry';
import TopNav from '@/components/top-nav';
import { format as formatDate } from 'date-fns';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ThemeRegistry>
                    <Container maxWidth={false}>
                        <Grid container direction="row" spacing={2}>
                            <Grid
                                item
                                md={12}
                                container
                                sx={{
                                    top: -10,
                                    position: 'sticky',
                                    zIndex: 99,
                                    backgroundColor: 'background.default'
                                }}
                            >
                                <Grid item md={2} pl={4} pt={4}>
                                    <Tooltip title="Home">
                                        <Link href="/">
                                            <Image
                                                src="/logo.svg"
                                                alt="logo"
                                                width={150}
                                                height={88.5}
                                            />
                                        </Link>
                                    </Tooltip>
                                </Grid>
                                <Grid item md={10}>
                                    <TopNav
                                        dateTime={`Today  ${formatDate(
                                            new Date(),
                                            'PP | p'
                                        )}`}
                                        name="Eureka"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={2}>
                                <Grid
                                    item
                                    sx={{
                                        zIndex: 99,
                                        overflow: 'hidden',
                                        top: 150,
                                        left: 0,
                                        position: 'sticky'
                                    }}
                                >
                                    <SideNav />
                                </Grid>
                            </Grid>
                            <Grid item md={10}>
                                <Paper>
                                    <Box p={4}>
                                        <main>{children}</main>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeRegistry>
            </body>
        </html>
    );
};

export default Layout;
