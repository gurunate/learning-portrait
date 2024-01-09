import * as yup from 'yup';

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
