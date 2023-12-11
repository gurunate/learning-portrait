'use client';

import {
    Avatar,
    Badge,
    Button,
    Grid,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';

import Greet from '@/components/greet';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';

export type TopNavProps = {
    name: string;
    dateTime: string;
};

/**
 * @param {TopNavProps} props
 * @returns {JSX.Element}
 */
const TopNav: React.FC<TopNavProps> = ({
    dateTime,
    name
}: TopNavProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={4}
            mt={1}
        >
            <Grid item>
                <Stack direction="column" spacing={1}>
                    <Typography variant="h2" color="primary">
                        <Greet name={name} />
                    </Typography>
                    <Typography variant="h6">{dateTime}</Typography>
                </Stack>
            </Grid>
            <Grid item textAlign="right">
                <Grid item>
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row">
                            <IconButton href="/help" component={Link}>
                                <Tooltip title="Help">
                                    <HelpOutlineIcon />
                                </Tooltip>
                            </IconButton>
                            <IconButton>
                                <Badge
                                    color="error"
                                    variant="dot"
                                    invisible={false}
                                >
                                    <Tooltip title="Notifications">
                                        <NotificationsIcon />
                                    </Tooltip>
                                </Badge>
                            </IconButton>
                        </Stack>
                        <Tooltip title="Account">
                            <Button
                                variant="text"
                                startIcon={
                                    <Avatar
                                        sx={{ width: 32, height: 32 }}
                                        src="/avatars/jeff.png"
                                    />
                                }
                                sx={{ backgroundColor: 'white' }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {name}
                            </Button>
                        </Tooltip>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button'
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <ManageAccountsIcon fontSize="small" />
                                </ListItemIcon>
                                Account
                            </MenuItem>
                            <MenuItem component={Link} href="/sign-in">
                                <ListItemIcon>
                                    <LogoutIcon fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TopNav;
