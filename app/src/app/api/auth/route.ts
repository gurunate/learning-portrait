import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const encryptHash = async (password: string) => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);

    return bcrypt.hash(password, salt);
};

export const POST = async (request: Request) => {
    const { email, password } = await request.json();

    const hash = await encryptHash(password);

    return Response.json({ email, hash });
};
