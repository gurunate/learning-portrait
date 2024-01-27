import jwt from 'jsonwebtoken';

/**
 *
 * @param request
 * @returns
 */
export const PUT = async (request: Request) => {
    const { email, hash } = await request.json();

    console.log({ email, hash });

    const token = jwt.sign(
        {
            iss: 'https://www.learningportrait.com/',
            sub: 'auth0|123456',
            aud: [
                'my-api-identifier',
                'https://www.learningportrait.com/api/userinfo'
            ],
            azp: 'clrnl7ojm0001jaj33zvno5t8',
            exp: 1489179954,
            iat: 1489143954,
            scope: 'openid profile email address phone read:appointments'
        },
        'hahaha'
    );

    return Response.json({ token });
};
