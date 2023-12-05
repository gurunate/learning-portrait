import { Box, Container, Grid, Paper } from '@mui/material';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SideNav from '@/components/side-nav';
import ThemeRegistry from '@/components/theme-registry';
import TopNav from '@/components/top-nav';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});

// export const metadata: Metadata = {
//     title: 'Dashboard | Learning Portrait',
//     description: 'A grade book that thinks like you do.'
// };

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
                            <Grid item lg={2} md={3} pr={2}>
                                <SideNav />
                            </Grid>
                            <Grid
                                item
                                lg={10}
                                md={9}
                                container
                                direction="column"
                                spacing={4}
                            >
                                <Grid item>
                                    <TopNav />
                                </Grid>
                                <Grid item>
                                    <Paper elevation={0}>
                                        <Box p={4}>
                                            <main>{children}</main>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeRegistry>
            </body>
        </html>
    );
};

export default Layout;
