import * as yup from 'yup';

export const signInCardSchema = yup.object().shape({
    email: yup
        .string()
        .required('Required field.')
        .email('Not a valid email address.'),
    password: yup
        .string()
        .required('Required field.')
        .max(40, 'Maximum 40 characters.')
});
