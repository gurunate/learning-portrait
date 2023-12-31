import * as fixtures from '@/lib/fixtures';

import { Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import ClassNav from './class-nav';
import DirectMessages from './direct-messages';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export type SideNavProps = unknown;

/**
 * @param {SideNavProps} props
 * @returns {JSX.Element}
 */
const SideNav: React.FC<SideNavProps> = (props: SideNavProps): JSX.Element => {
    const classA = fixtures.students(18);
    const classB = fixtures.students(25);
    const students = fixtures.students(5);

    const handleDirectMessagesClick = () => {
        console.log('handleDirectMessagesClick');
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
        >
            <Grid item>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h3">Conversations</Typography>
                    <Tooltip title="Search">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Grid>
            <Grid
                item
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={2}
            >
                <Grid item>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography>Groups</Typography>
                        <Tooltip title="Add">
                            <IconButton>
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Grid>
                <Grid item>
                    <Typography variant="h5">Class A</Typography>
                </Grid>
                <Grid item>
                    <ClassNav students={classA} />
                </Grid>
                <Grid item>
                    <Typography variant="h5">Class B</Typography>
                </Grid>
                <Grid item>
                    <ClassNav students={classB} />
                </Grid>
                <Grid item>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography>Direct messages</Typography>
                        <Tooltip title="Add">
                            <IconButton>
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Grid>
                <Grid item>
                    <DirectMessages
                        students={students}
                        onClick={handleDirectMessagesClick}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default React.memo(SideNav);
