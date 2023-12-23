'use client';

import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/system';

export type CopyrightProps = TypographyProps & {
    year?: string | number;
};

/**
 * Copyright component.
 * @param {CopyrightProps} props
 * @returns {JSX.Element}
 */
const Copyright: React.FC<CopyrightProps> = ({
    year = new Date().getFullYear(),
    ...props
}: CopyrightProps): JSX.Element => (
    <Typography color="primary" {...props} data-testid="copyright">
        &copy; {year} Learning Portrait
    </Typography>
);

export default Copyright;
