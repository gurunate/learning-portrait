import {
    Avatar,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';

import DashboardIcon from '@/components/icons/dashboard';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MessagesIcon from '@/components/icons/messages';
import React from 'react';
import SettingsIcon from '@/components/icons/settings';

export type SideNavProps = unknown;

/**
 * @param {SideNavProps} props
 * @returns {JSX.Element}
 */
const SideNav: React.FC<SideNavProps> = () => {
    // const selected = false;
    const selected = true;

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            pt={4}
            height="100vh"
            maxWidth={250}
        >
            <Grid item container direction="column" spacing={4}>
                <Grid item>
                    <Image src="/logo.svg" alt="logo" width={122} height={72} />
                </Grid>
                <Grid item>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton selected={selected}>
                                <ListItemIcon>
                                    <DashboardIcon
                                        color={selected ? 'primary' : 'inherit'}
                                    />
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
                            secondaryAction={
                                <Avatar
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
                            <ListItemButton>
                                <ListItemIcon>
                                    <MessagesIcon />
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
                            secondaryAction={
                                <IconButton edge="end" aria-label="settings">
                                    <KeyboardArrowDownIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton>
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
                    &copy; 2023 Learning Portrait
                </Typography>
            </Grid>
        </Grid>
    );
};

export default SideNav;
