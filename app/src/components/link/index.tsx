import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import React from 'react';

type LinkRef = HTMLAnchorElement;

// `LinkProps` is the combination of the MUI `LinkProps` and the Next `LinkProps`
// We wanna use the `href` prop from `next/link` so we omit it from MUI's.
export type LinkProps = Omit<MuiLinkProps, 'href'> &
    Omit<NextLinkProps, 'as' | 'passHref' | 'children'> & {
        component?: React.ReactNode;
    };

/**
 * Wraps the MUI Link component that provides correct look & feel
 * with Next's router Link capabilities.
 *
 * @param {LinkProps} props
 * @returns {JSX.Element}
 * @see https://next.js.org/docs/api-reference/next/link
 */
const Link: React.FC<LinkProps> = React.forwardRef(
    (
        {
            href,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...muiProps
        }: LinkProps,
        ref: React.Ref<LinkRef>
    ) => (
        <NextLink
            passHref
            href={href}
            locale={locale}
            prefetch={prefetch}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
        >
            <MuiLink ref={ref} {...muiProps} />
        </NextLink>
    )
);

Link.displayName = 'Link';

export default Link;
