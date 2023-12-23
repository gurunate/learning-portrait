import * as yup from 'yup';

const REQUIRED_FIELD_MESSAGE = 'Required.';

/**
 * Yup Objective schema
 */
export const objectiveSchema = yup.object().shape({
    name: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    abbreviation: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    description: yup.string()
});

export type ObjectiveFormValues = yup.InferType<typeof objectiveSchema>;
