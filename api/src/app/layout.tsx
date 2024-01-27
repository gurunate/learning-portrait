import IconLinks from '@/components/icon-links';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Learning Portrait API',
    description: 'An OpenAPI Specification.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <IconLinks />
            </head>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
