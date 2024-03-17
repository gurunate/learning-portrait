import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    Observable,
    from,
    fromPromise,
    split,
    toPromise
} from '@apollo/client';

import { ApolloError } from 'apollo-server-errors';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { getSession } from 'next-auth/react';
import initCache from './init-cache';
import { onError } from '@apollo/client/link/error';
import router from 'next/router';

export type ApolloClientOptions = {
    session: boolean;
    uri: string;
};

/**
 * Omega Apollo Client
 *
 * @param {ApolloClientOptions} ApolloClientOptions
 * @returns {ApolloClient}
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient
 */
export const client = ({
    session,
    uri
}: ApolloClientOptions): ApolloClient<unknown> => {
    const ssrMode = typeof window === 'undefined';
    const cache = initCache({});
    const httpLink = new HttpLink({
        uri
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

    const redirectToLogin = () => {
        router.push({
            pathname: '/sign-in',
            query: {
                redirect: router.asPath
            }
        });
    };

    const sessionLink = new ApolloLink((operation, forward) => {
        const observable = forward(operation);

        return fromPromise(
            getSession().then(data => {
                return toPromise(
                    new Observable(observer => {
                        return observable.subscribe({
                            next: value => {
                                if (!data) {
                                    value.errors = [
                                        new ApolloError('AUTHENTICATION ERROR')
                                    ];
                                }
                                observer.next(value);
                            },
                            error: observer.error.bind(observer),
                            complete: observer.complete.bind(observer)
                        });
                    })
                );
            })
        );
    });

    const errorLink = onError(({ graphQLErrors }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message }) => {
                if (/AUTHENTICATION ERROR/.test(message)) {
                    redirectToLogin();
                }
            });
        }
    });

    return new ApolloClient({
        link: from(
            session ? [errorLink, sessionLink, link] : [errorLink, link]
        ),
        cache,
        ssrMode,
        connectToDevTools: !ssrMode,
        name: 'omega-client'
    });
};
