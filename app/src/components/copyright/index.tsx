import { Typography } from '@mui/material';

/**
 * Copyright component.
 *
 * @returns {JSX.Element}
 */
const Copyright = (): JSX.Element => (
    <Typography color="primary">
        &copy; {new Date().getFullYear()} Learning Portrait
    </Typography>
);

export default Copyright;
