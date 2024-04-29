import jwt from 'jsonwebtoken';

const PRIVATE_KEY =
    '805134640f122e2d594000730de945695074247b20d6a470583c6ee21b08e1a4';

/**
 *
 * @param request
 * @returns
 * @see https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims
 */
export const POST = async (request: Request) => {
    const { email, hash } = await request.json();

    console.log({ email, hash });

    /**
     * iss (issuer): Issuer of the JWT
     * sub (subject): Subject of the JWT (the user)
     * aud (audience): Recipient for which the JWT is intended
     * exp (expiration time): Time after which the JWT expires
     * nbf (not before time): Time before which the JWT must not be accepted for processing
     * iat (issued at time): Time at which the JWT was issued; can be used to determine age of the JWT
     * jti (JWT ID): Unique identifier; can be used to prevent the JWT from being replayed (allows a token to be used only once)
     */

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
        PRIVATE_KEY,
        { algorithm: 'RS256' }
    );

    return Response.json({ token });
};
