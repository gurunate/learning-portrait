'use client';

import {
    Avatar,
    Box,
    Collapse,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography
} from '@mui/material';
import { usePathname, useSearchParams } from 'next/navigation';

import Copyright from '@/components/copyright';
import ForumIcon from '@mui/icons-material/Forum';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export type SideNavProps = unknown;

/**
 * @param {SideNavProps} props
 */
const SideNav: React.FC<SideNavProps> = () => {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        if (pathname.match(/^\/settings/)) {
            setOpen(true);
        }
    }, [pathname]);

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
            <Grid item container direction="column" spacing={2}>
                <Grid item>
                    <Box px={4}>
                        <Tooltip title="Home">
                            <Link href="/">
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    width={150}
                                    height={88.5}
                                />
                            </Link>
                        </Tooltip>
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
                            // href="/settings"
                            // component={Link}
                            sx={{ marginTop: 2, color: 'inherit' }}
                            secondaryAction={
                                <IconButton edge="end" aria-label="settings">
                                    {!open && <KeyboardArrowDownIcon />}
                                    {open && <KeyboardArrowUpIcon />}
                                </IconButton>
                            }
                            onClick={() => {
                                setOpen(prev => !prev);
                            }}
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
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List>
                                <ListItem
                                    href="/settings/profile"
                                    component={Link}
                                    sx={{ paddingLeft: 7, color: 'inherit' }}
                                >
                                    <ListItemButton
                                        selected={
                                            pathname === '/settings/profile'
                                        }
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography variant="h6">
                                                    Profile
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    href="/settings/naming-conventions"
                                    component={Link}
                                    sx={{ paddingLeft: 7, color: 'inherit' }}
                                >
                                    <ListItemButton
                                        selected={
                                            pathname ===
                                            '/settings/naming-conventions'
                                        }
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography variant="h6">
                                                    Naming Conventions
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    href="/settings/course-setup"
                                    component={Link}
                                    sx={{ paddingLeft: 7, color: 'inherit' }}
                                >
                                    <ListItemButton
                                        selected={
                                            pathname ===
                                            '/settings/course-setup'
                                        }
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography variant="h6">
                                                    Course Setup
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
            </Grid>
            <Grid item>
                <Copyright />
            </Grid>
        </Grid>
    );
};

export default SideNav;
