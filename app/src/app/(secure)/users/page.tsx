'use client';

import { gql, useQuery } from '@apollo/client';

import { Typography } from '@mui/material';

const GET_USERS = gql`
    query Users {
        users {
            id
            email
            firstName
            lastName
        }
    }
`;

const Page = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const { users } = data ?? {};

    return (
        <>
            <Typography variant="h3">Users</Typography>
            <ul>
                {users?.map(({ id, firstName, lastName, email }: any) => (
                    <li key={id}>
                        {firstName} {lastName} {email}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Page;
