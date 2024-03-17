import {
    ApolloClient,
    split,
    HttpLink,
    from,
    ApolloLink,
    toPromise,
    fromPromise,
    Observable
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloError } from 'apollo-server-errors';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getSession } from 'next-auth/react';
import router from 'next/router';
import initCache from './init-cache';

const ssrMode = typeof window === 'undefined';
const cache = initCache({});
const httpLink = new HttpLink({
    uri: '/graphql'
});

let link = httpLink;

if (!ssrMode) {
    const wsLink = new GraphQLWsLink(
        createClient({
            url: 'ws://localhost:4422/policies/graphql'
        })
    );

    link = split(
        ({ query }) => {
            const definition = getMainDefinition(query);

            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink
    );
}

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => {
            if (/AUTHENTICATION ERROR/.test(message)) {
                console.log('unauthenticated')
            }
        });
    }
});

/**
 * Apollo's client-side
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient
 */
export const client = new ApolloClient({
    link: from([errorLink, link]),
    cache,
    ssrMode,
    connectToDevTools: !ssrMode,
    name: 'users-app-client'
});
