import { SvgIcon, SvgIconProps } from '@mui/material';

import React from 'react';

export type GoogleIconProps = SvgIconProps & unknown;

/**
 * Google symbol
 *
 * @param {GoogleIconProps} props
 * @returns {JSX.Element}
 */
const GoogleIcon: React.FC<GoogleIconProps> = (
    props: GoogleIconProps
): JSX.Element => (
    <SvgIcon {...props}>
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.9851 8.18765C15.9851 7.64553 15.9402 7.10047 15.8445 6.56714H8.16748V9.6382H12.5637C12.3813 10.6287 11.7951 11.5049 10.9368 12.0616V14.0543H13.5596C15.0998 12.6653 15.9851 10.614 15.9851 8.18765Z"
                fill="#4285F4"
            />
            <path
                d="M8.16731 15.9796C10.3625 15.9796 12.2137 15.2734 13.5625 14.0543L10.9397 12.0617C10.2099 12.5481 9.26787 12.8236 8.1703 12.8236C6.04694 12.8236 4.24657 11.4199 3.60058 9.53271H0.894043V11.5869C2.27573 14.28 5.08993 15.9796 8.16731 15.9796Z"
                fill="#34A853"
            />
            <path
                d="M3.59767 9.53274C3.25673 8.54226 3.25673 7.46974 3.59767 6.47926V4.42505H0.894115C-0.260278 6.67853 -0.260278 9.33347 0.894115 11.587L3.59767 9.53274Z"
                fill="#FBBC04"
            />
            <path
                d="M8.16731 3.18539C9.32769 3.16781 10.4492 3.59565 11.2896 4.38099L13.6133 2.10407C12.1419 0.750225 10.189 0.0059028 8.16731 0.029346C5.08993 0.029346 2.27573 1.72898 0.894043 4.42495L3.59759 6.47916C4.24058 4.58905 6.04395 3.18539 8.16731 3.18539Z"
                fill="#EA4335"
            />
        </svg>
    </SvgIcon>
);

export default GoogleIcon;
