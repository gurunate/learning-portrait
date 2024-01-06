import * as yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/lib/constants';

/**
 * Yup Objective schema
 */
export const objectiveSchema = yup.object().shape({
    name: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    abbreviation: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    description: yup.string()
});

export type ObjectiveFormValues = yup.InferType<typeof objectiveSchema>;
