import axios from 'axios';
import { onError } from '@apollo/client/link/error';
import { Observable } from '@apollo/client';
import getConfig from 'next/config';

export const refreshTokenLink = getNewAccessToken =>
    onError(
        ({ graphQLErrors, networkError, operation, response, forward }) =>
            new Observable(async observer => {
                if (networkError) {
                    if (networkError.statusCode === 401) {
                        // redirectToLogin();
                    }

                    return observer.error(networkError);
                }

                // Nothing happened
                if (!graphQLErrors && !networkError) {
                    return observer.next(response);
                }

                return null;
            })
    );
