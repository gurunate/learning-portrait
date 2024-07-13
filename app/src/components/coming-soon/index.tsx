'use client';

import { Box, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ComingSoon: React.FC = () => (
    <Stack
        direction="column"
        spacing={4}
        justifyContent="center"
        alignItems="center"
    >
        <Box width={500} height={500} position="relative">
            <Link href="/sign-in">
                <Image fill sizes="100vw" src="/logo.svg" alt="logo" />
            </Link>
        </Box>
        <Typography variant="h3">
            A gradebook that thinks like you do.
        </Typography>
    </Stack>
);

export default ComingSoon;
