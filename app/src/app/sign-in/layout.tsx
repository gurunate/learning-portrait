import { Box, Container } from '@mui/material';

import type { Metadata } from 'next';
import ThemeRegistry from '@/components/theme-registry';

export const metadata: Metadata = {
    title: 'Sign in'
};

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <section style={{ backgroundColor: '#006b96' }}>
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
        </section>
    );
};

export default Layout;
