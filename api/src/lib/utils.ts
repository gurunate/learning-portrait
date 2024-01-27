import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const compareHash = async (password: string, hash: string) =>
    bcrypt.compare(password, hash);

const encryptHash = async (password: string) => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);

    return bcrypt.hash(password, salt);
};
