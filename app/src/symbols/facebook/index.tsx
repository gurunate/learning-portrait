import { SvgIcon, SvgIconProps } from '@mui/material';

import React from 'react';

export type FacebookIconProps = SvgIconProps & unknown;

/**
 * Facebook symbol
 *
 * @param {FacebookIconProps} props
 * @returns {JSX.Element}
 */
const FacebookIcon: React.FC<FacebookIconProps> = (
    props: FacebookIconProps
): JSX.Element => (
    <SvgIcon {...props}>
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="7.99485" cy="7.99485" r="7.99485" fill="#1977F3" />
            <path
                d="M11.1069 10.3063L11.4611 7.99476H9.24398V6.49495C9.24398 5.8631 9.55316 5.24586 10.547 5.24586H11.5555V3.27835C11.5555 3.27835 10.6404 3.12207 9.76566 3.12207C7.9398 3.12207 6.7458 4.22837 6.7458 6.23299V7.99476H4.71533V10.3063H6.7458V15.8929C7.1528 15.957 7.56991 15.9896 7.99489 15.9896C8.41988 15.9896 8.83699 15.9559 9.24398 15.8929V10.3063H11.1069Z"
                fill="white"
            />
        </svg>
    </SvgIcon>
);

export default FacebookIcon;
