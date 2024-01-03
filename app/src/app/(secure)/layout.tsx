'use client';

import { Box, Container, Grid, Paper, Tooltip } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
import SideNav from '@/components/side-nav';
import ThemeRegistry from '@/components/theme-registry';
import TopNav from '@/components/top-nav';
import { format as formatDate } from 'date-fns';
import { useSelectedLayoutSegment } from 'next/navigation';

export type LayoutProps = {
    route?: unknown;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const segment = useSelectedLayoutSegment();

    return (
        <section>
            <ThemeRegistry>
                <Container maxWidth={false}>
                    <Grid container direction="row" spacing={2}>
                        <Grid
                            item
                            md={12}
                            container
                            sx={{
                                top: -10,
                                position: 'sticky',
                                zIndex: 99,
                                backgroundColor: 'background.default'
                            }}
                        >
                            <Grid item md={2} pl={4} pt={4}>
                                <Tooltip title="Home">
                                    <Link href="/">
                                        <Image
                                            priority
                                            src="/logo.svg"
                                            alt="logo"
                                            width={150}
                                            height={88.5}
                                        />
                                    </Link>
                                </Tooltip>
                            </Grid>
                            <Grid item md={10}>
                                <TopNav
                                    dateTime={`Today  ${formatDate(
                                        new Date(),
                                        'PP | p'
                                    )}`}
                                    name="Jeff"
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={2}>
                            <Grid
                                item
                                sx={{
                                    zIndex: 99,
                                    overflow: 'hidden',
                                    top: 150,
                                    left: 0,
                                    position: 'sticky'
                                }}
                            >
                                <SideNav segment={segment as string} />
                            </Grid>
                        </Grid>
                        <Grid item md={10}>
                            <Paper
                                sx={{
                                    backgroundColor:
                                        segment === 'student'
                                            ? 'inherit'
                                            : 'default'
                                }}
                            >
                                <Box p={4}>
                                    <main>{children}</main>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeRegistry>
        </section>
    );
};

export default Layout;
