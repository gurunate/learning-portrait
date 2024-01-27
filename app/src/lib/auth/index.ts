import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const { LEARNING_PORTRAIT_API_HOST } = process.env ?? {};

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt' //(1) the default is jwt when no adapter defined, we redefined here to make it obvious what strategy that we use
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            //(2)
            console.log('------------ JWT ------------');
            console.log({ token }, { account }, { profile });
            if (account && account.type === 'credentials') {
                token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
            }
            return token;
        },
        async session({ session, token, user }) {
            //(3)
            console.log('------------ SESSION ------------');
            console.log({ session }, { token }, { user });
            // @ts-ignore
            session.user.id = token.userId;
            return session;
        }
    },
    pages: {
        signIn: '/sign-in' //(4)
    },
    providers: [
        Credentials({
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'username'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!LEARNING_PORTRAIT_API_HOST) {
                    throw new Error('LEARNING_PORTRAIT_API_HOST undefined.');
                }

                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };

                try {
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Accept', 'application/json');

                    var body = JSON.stringify({
                        username,
                        password
                    });

                    const url = new URL(
                        './users/authenticate',
                        LEARNING_PORTRAIT_API_HOST
                    );

                    const response = await fetch(url.href, {
                        method: 'POST',
                        headers,
                        body
                    });

                    if (!response.ok) return null;
                    const user = await response.json();
                    console.log({ user });
                    return { ...user, name: user?.firstName } ?? null;
                } catch (error) {
                    console.log('error', { error });
                    throw new Error('No go!');
                }
            }
        })
    ]
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
