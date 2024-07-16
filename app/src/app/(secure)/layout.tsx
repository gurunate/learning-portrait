'use client';

import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    gql
} from '@apollo/client';

import { Box } from '@mui/material';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeRegistry from '@/components/theme-registry';
import { useSelectedLayoutSegment } from 'next/navigation';

export type LayoutProps = {
    route?: unknown;
    children: React.ReactNode;
};

const client = new ApolloClient({
    ssrMode: true,
    uri: '/graphql',
    credentials: 'same-origin',
    cache: new InMemoryCache()
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const segment = useSelectedLayoutSegment();

    return (
        <section>
            <ApolloProvider client={client}>
                <ThemeRegistry>
                    <Header />
                    <Box py={4} sx={{ backgroundColor: '#FCFCFF' }}>
                        <main>{children}</main>
                    </Box>
                    <Footer />
                </ThemeRegistry>
            </ApolloProvider>
        </section>
    );
};

export default Layout;
