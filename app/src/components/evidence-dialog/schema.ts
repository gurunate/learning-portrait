import * as yup from 'yup';

const REQUIRED_FIELD_MESSAGE = 'Required.';

/**
 * Yup Evidence schema
 */
export const evidenceSchema = yup.object().shape({
    files: yup.array().of(yup.mixed()),
    name: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    course: yup
        .array()
        .of(yup.string().nullable().required(REQUIRED_FIELD_MESSAGE))
        .min(1)
        .required(REQUIRED_FIELD_MESSAGE),
    objective: yup
        .array()
        .of(yup.string().nullable().required(REQUIRED_FIELD_MESSAGE))
        .min(1)
        .required(REQUIRED_FIELD_MESSAGE),
    description: yup.string()
});

export type EvidenceFormValues = yup.InferType<typeof evidenceSchema>;
