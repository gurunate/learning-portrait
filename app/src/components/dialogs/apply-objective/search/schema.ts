import * as yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/lib/constants';

/**
 * Yup Apply Objective: Search schema
 */
export const searchSchema = yup.object().shape({
    term: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE)
});

export type SearchFormValues = yup.InferType<typeof searchSchema>;
