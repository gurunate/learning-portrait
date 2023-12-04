'use client';

import {
    Avatar,
    Box,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import { usePathname, useSearchParams } from 'next/navigation';

import ForumIcon from '@mui/icons-material/Forum';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export type SideNavProps = unknown;

/**
 * @param {SideNavProps} props
 */
const SideNav: React.FC<SideNavProps> = () => {
    const pathname = usePathname();

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            pt={4}
            height="100vh"
            maxWidth={350}
        >
            <Grid item container direction="column" spacing={4}>
                <Grid item>
                    <Box px={4}>
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={122}
                                height={72}
                            />
                        </Link>
                    </Box>
                </Grid>
                <Grid item>
                    <List>
                        <ListItem
                            disablePadding
                            href="/dashboard"
                            component={Link}
                            sx={{ marginTop: 2, color: 'inherit' }}
                        >
                            <ListItemButton
                                selected={pathname === '/dashboard'}
                            >
                                <ListItemIcon>
                                    <WhatshotIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">
                                            Dashboard
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            href="/messages"
                            component={Link}
                            sx={{ marginTop: 2, color: 'inherit' }}
                            secondaryAction={
                                <Avatar
                                    color="primary"
                                    sx={{
                                        bgcolor: '#D44646',
                                        width: 24,
                                        height: 24
                                    }}
                                >
                                    <Typography>4</Typography>
                                </Avatar>
                            }
                            disablePadding
                        >
                            <ListItemButton selected={pathname === '/messages'}>
                                <ListItemIcon>
                                    <ForumIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">
                                            Messages
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            href="/settings"
                            component={Link}
                            sx={{ marginTop: 2, color: 'inherit' }}
                            secondaryAction={
                                <IconButton edge="end" aria-label="settings">
                                    <KeyboardArrowDownIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton selected={pathname === '/settings'}>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">
                                            Settings
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid item>
                <Typography color="primary">
                    &copy; {new Date().getFullYear()} Learning Portrait
                </Typography>
            </Grid>
        </Grid>
    );
};

export default SideNav;
