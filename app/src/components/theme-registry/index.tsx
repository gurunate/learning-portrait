'use client';

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './emotion-cache';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export type ThemeRegistryProps = {
    children?: React.ReactNode;
};

const ThemeRegistry: React.FC<ThemeRegistryProps> = ({ children }) => {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
};
export default ThemeRegistry;
