'use client';

import {
    Collapse,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';

import Copyright from '@/components/copyright';
import ForumIcon from '@mui/icons-material/Forum';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import MessageCountAvatar from '../avatars/message-count';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { usePathname } from 'next/navigation';

export type SideNavProps = {
    segment?: string;
};

/**
 * @param {SideNavProps} props
 * @returns {JSX.Element}
 */
const SideNav: React.FC<SideNavProps> = ({
    segment
}: SideNavProps): JSX.Element => {
    const [openSettings, setOpenSettings] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        setOpenSettings(segment === 'settings');
    }, [segment]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
            maxWidth={350}
            height="91vh"
        >
            <Grid item container direction="column" spacing={2}>
                <Grid item>
                    <List>
                        <ListItem
                            disablePadding
                            href="/dashboard"
                            component={Link}
                            sx={{ marginTop: 2, color: 'inherit' }}
                        >
                            <ListItemButton selected={segment === 'dashboard'}>
                                <ListItemIcon>
                                    <WhatshotIcon />
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
                            secondaryAction={<MessageCountAvatar total={5} />}
                            disablePadding
                        >
                            <ListItemButton selected={segment === 'messages'}>
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
                            sx={{ marginTop: 2, color: 'inherit' }}
                            secondaryAction={
                                <IconButton edge="end" aria-label="settings">
                                    {!openSettings && <KeyboardArrowDownIcon />}
                                    {openSettings && <KeyboardArrowUpIcon />}
                                </IconButton>
                            }
                            onClick={() => {
                                setOpenSettings(prev => !prev);
                            }}
                            disablePadding
                        >
                            <ListItemButton
                                // selected={Boolean(
                                //     pathname.match(/^\/settings/)
                                // )}
                                selected={segment === 'settings'}
                            >
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
                        <Collapse
                            in={openSettings}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List>
                                <ListItem
                                    href="/settings/profile"
                                    component={Link}
                                    sx={{ paddingLeft: 7, color: 'inherit' }}
                                >
                                    <ListItemButton
                                        selected={
                                            segment === '/settings/profile'
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
