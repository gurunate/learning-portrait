import {
    Avatar,
    Badge,
    Button,
    Grid,
    IconButton,
    Stack,
    Typography
} from '@mui/material';

import Greet from '@/components/greet';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { format as formatDate } from 'date-fns';

export type TopNavProps = unknown;

/**
 * @param {TopNavProps} props
 * @returns {JSX.Element}
 */
const TopNav: React.FC<TopNavProps> = (props): JSX.Element => {
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
                        <Greet name="Eureka" />
                    </Typography>
                    <Typography variant="h6">
                        Today {formatDate(new Date(), 'PP | p')}
                    </Typography>
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
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            component={Link}
                            href="/sign-in"
                            variant="text"
                            startIcon={
                                <Avatar
                                    sx={{ width: 32, height: 32 }}
                                    src="/avatars/d141cccb-efe0-4351-ba5f-bd5053058b86.svg"
                                />
                            }
                            sx={{ backgroundColor: 'white' }}
                        >
                            Eureka
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TopNav;
