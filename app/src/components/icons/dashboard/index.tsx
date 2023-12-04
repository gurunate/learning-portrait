import { SvgIcon, SvgIconProps } from '@mui/material';

import React from 'react';

export type DashboardIconProps = SvgIconProps & unknown;

/**
 * Dashboard icon
 *
 * @param {DashboardIconProps} props
 * @returns {JSX.Element}
 */
const DashboardIcon: React.FC<DashboardIconProps> = (
    props: DashboardIconProps
): JSX.Element => (
    <SvgIcon {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 0.669989C0.1 -1.12653e-05 14.24 3.31999 14.24 5.46999C14.24 7.52999 12.89 9.19999 10.83 9.19999C8.76 9.19999 7.2 7.52999 7.2 5.46999L7.23 5.10999C5.21 7.50999 4 10.62 4 14C4 18.42 7.58 22 12 22C16.42 22 20 18.42 20 14C20 8.60999 17.41 3.79999 13.5 0.669989ZM11.71 19C9.93 19 8.49 17.6 8.49 15.86C8.49 14.24 9.54 13.1 11.3 12.74C13.07 12.38 14.9 11.53 15.92 10.16C16.31 11.45 16.51 12.81 16.51 14.2C16.51 16.85 14.36 19 11.71 19Z"
        />
    </SvgIcon>
);

export default DashboardIcon;
