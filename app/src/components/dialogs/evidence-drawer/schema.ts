import * as yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/lib/constants';

/**
 * Yup Evidence schema
 */
export const evidenceSchema = yup.object().shape({
    files: yup.array().of(yup.mixed()),
    name: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    title: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
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
