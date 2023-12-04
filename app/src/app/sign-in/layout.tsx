import { Box, Container } from '@mui/material';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import ThemeRegistry from '@/components/theme-registry';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Sign in | Learning Portrait',
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
                style={{ backgroundColor: '#006b96' }}
            >
                <ThemeRegistry>
                    <Container maxWidth="xl">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="100vh"
                        >
                            {children}
                        </Box>
                    </Container>
                </ThemeRegistry>
            </body>
        </html>
    );
};

export default Layout;