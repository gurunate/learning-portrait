import './layout.css';

import { Container } from '@mui/material';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

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
            <body className={poppins.className}>
                <Container maxWidth="xl">{children}</Container>
            </body>
        </html>
    );
};

export default Layout;
