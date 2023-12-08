'use client';

import {
    Avatar,
    Badge,
    Button,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';

import Greet from '@/components/greet';
import Link from 'next/link';
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
                    <Typography variant="h6">Today {dateTime}</Typography>
                </Stack>
            </Grid>
            <Grid item textAlign="right">
                <Grid item>
                    <Stack direction="row" spacing={2}>
                        <IconButton>
                            <Badge
                                color="error"
                                variant="dot"
                                invisible={false}
                            >
                                <Tooltip title="Messages">
                                    <NotificationsIcon />
                                </Tooltip>
                            </Badge>
                        </IconButton>
                        <Button
                            variant="text"
                            startIcon={
                                <Avatar
                                    sx={{ width: 32, height: 32 }}
                                    src="/avatars/d141cccb-efe0-4351-ba5f-bd5053058b86.svg"
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem component={Link} href="/sign-in">
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
