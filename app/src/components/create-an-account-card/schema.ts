import * as yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/lib/constants';

/**
 * Yup schema
 */
export const createAnAccountSchema = yup.object().shape({
    email: yup
        .string()
        .required(REQUIRED_FIELD_MESSAGE)
        .email('Not a valid email address.'),
    password: yup
        .string()
        .required(REQUIRED_FIELD_MESSAGE)
        .max(40, 'Maximum 40 characters.')
});

export type CreateAnAccountFormValues = yup.InferType<
    typeof createAnAccountSchema
>;
