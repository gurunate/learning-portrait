import * as yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/lib/constants';

/**
 * Yup Apply Objective schema
 */
export const applyObjectiveSchema = yup.object().shape({
    search: yup.string().nullable().optional(),
    courses: yup.array().of(yup.string())
});

export type ApplyObjectiveFormValues = yup.InferType<
    typeof applyObjectiveSchema
>;
