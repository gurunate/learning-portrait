'use client';

import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import React from 'react';

export type GreetingProps = BoxProps & {
    date?: Date;
    name: string;
};

/**
 * @param {GreetingProps} props
 * @returns {JSX.Element}
 */
const Greeting: React.FC<GreetingProps> = ({
    date = new Date(),
    name,
    ...props
}: GreetingProps): JSX.Element => {
    var hours = date.getHours();
    var greetingMsg;

    if (hours < 12) {
        greetingMsg = 'Good Morning';
    } else if (hours >= 12 && hours <= 17) {
        greetingMsg = 'Good Afternoon';
    } else if (hours >= 17 && hours <= 24) {
        greetingMsg = 'Good Evening';
    }

    return (
        <Box {...props} data-testid="greeting">
            {greetingMsg}, {name}
        </Box>
    );
};

export default Greeting;
