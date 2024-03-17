import { InMemoryCache } from '@apollo/client';

const initCache = initialState => {
    const cache = new InMemoryCache().restore(initialState || {});

    // Add caching strategy here

    return cache;
};

export default initCache;
