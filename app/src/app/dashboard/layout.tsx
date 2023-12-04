import { Box, Container, Grid } from '@mui/material';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SideNav from '@/components/side-nav';
import ThemeRegistry from '@/components/theme-registry';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Dashboard | Learning Portrait',
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
                        <Grid container spacing={4}>
                            <Grid item md={3}>
                                <SideNav />
                            </Grid>
                            <Grid item md={9}>
                                {children}
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeRegistry>
            </body>
        </html>
    );
};

export default Layout;
