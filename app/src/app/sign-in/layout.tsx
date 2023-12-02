import './layout.css';

import { Container } from '@mui/material';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

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
            <body className={inter.className}>
                <Container maxWidth="xl">{children}</Container>
            </body>
        </html>
    );
};

export default Layout;
