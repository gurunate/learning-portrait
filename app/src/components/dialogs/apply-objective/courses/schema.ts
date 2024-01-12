import * as yup from 'yup';

import { Course as TCourse } from '@/types';

/**
 * Yup Apply Objective: Courses schema
 */
export const coursesSchema = yup.object().shape({
    courses: yup
        .array()
        .of(yup.mixed<TCourse>())
        .min(1, 'at least 1')
        .required('required')
        .nullable()
});

export type CoursesFormValues = yup.InferType<typeof coursesSchema>;
