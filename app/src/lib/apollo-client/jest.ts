import crossFetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
    // requires an explicit uri that includes the url
    uri: 'http://localhost:4001/graphql',

    // Use explicit `window.fetch` so tha outgoing requests
    // are captured and deferred until the Service Worker is ready.
    fetch: (...args) => crossFetch(...args)
});

export const client = new ApolloClient({
    cache,
    link
});
