import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import IconLinks from '@/components/icon-links';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ThemeRegistry from '@/components/theme-registry';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Learning Portrait',
    description: 'A gradebook that thinks like you do.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.className}>
            <head>
                <IconLinks />
            </head>
            <body style={{ backgroundColor: '#f4f7f7', height: '100%' }}>
                <ThemeRegistry>
                    <main>
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </main>
                </ThemeRegistry>
            </body>
        </html>
    );
}
