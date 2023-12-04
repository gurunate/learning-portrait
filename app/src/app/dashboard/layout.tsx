import { Container, Grid } from '@mui/material';

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
            <body
                className={poppins.className}
                style={{ backgroundColor: '#f4f7f7' }}
            >
                <ThemeRegistry>
                    <Container maxWidth={false}>
                        <Grid container spacing={4}>
                            <Grid item md={3}>
                                <SideNav />
                            </Grid>
                            <Grid
                                item
                                md={9}
                                container
                                direction="column"
                                spacing={4}
                            >
                                <Grid item>
                                    <TopNav />
                                </Grid>
                                <Grid item>{children}</Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeRegistry>
            </body>
        </html>
    );
};

export default Layout;
