import './intro.scss';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import React from 'react';

const Intro = () => (
    <Container className="root">
        <Box p={4}>
            <Paper>
                <Box p={4}>
                    <Grid container spacing={4}>
                        <Grid item container justifyContent="center">
                            <img src="/logo.png" height={150} alt="logo" />
                        </Grid>
                        <Grid item>
                            <Typography>
                                <strong>Learning Portrait Design</strong> is a
                                theme system and component library built on{' '}
                                <a href="https://mui.com/" target="_blank">
                                    MUI
                                </a>{' '}
                                (Material UI) . Material UI is an open-source
                                React component library that implements Google's{' '}
                                <a
                                    href="https://m2.material.io/"
                                    target="_blank"
                                >
                                    Material Design
                                </a>
                                .
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    </Container>
);

export default Intro;
