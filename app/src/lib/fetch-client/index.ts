import axios from 'axios';

const { DATA_GRAPH_HOST } = process.env ?? {};

/**
 * Reusable Fetch based Apollo client query.
 *
 * @param {*} query
 * @param {*} options
 * @returns
 */
export const fetchQuery = async (query: any, options?: any) => {
    if (DATA_GRAPH_HOST) {
        const { headers, variables } = options ?? {};

        const { data } = await axios.post(
            DATA_GRAPH_HOST,
            JSON.stringify({
                query,
                variables
            }),
            {
                // timeout: 1000,
                withCredentials: true,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (data.errors) {
            console.error(data.errors, 'fetchQuery');
        }

        return data;
    } else {
        throw new Error('DATA_GRAPH_HOST is missing.');
    }
};

// Used for IDE highlighting
export const gql = (str: any) => str.toString();
