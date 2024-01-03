import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    Typography
} from '@mui/material';
import {
    FieldErrors,
    FieldValues,
    FormProvider,
    useFieldArray,
    useForm
} from 'react-hook-form';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { DevTool } from '@hookform/devtools';
import { Course as TCourse } from '@/types';
import { coursesSchema } from './schema';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export { coursesSchema } from './schema';
export type { CoursesFormValues } from './schema';

export type CoursesProps = {
    courses: TCourse[];
    devtool?: boolean;
    onError?: (errors: FieldErrors) => void;
    onSubmit: (data: FieldValues) => void;
};

/**
 * @param {CoursesProps} props
 * @returns {JSX.Element}
 */
const Courses: React.FC<CoursesProps> = ({
    courses = [],
    devtool,
    onError,
    onSubmit
}: CoursesProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(coursesSchema),
        defaultValues: {
            courses
        }
    });

    const {
        control,
        formState: { errors },
        handleSubmit
    } = methods;

    const name = 'courses';
    const { fields: coursesFields } = useFieldArray({
        control,
        name
    });

    return (
        <FormProvider {...methods}>
            {devtool && <DevTool control={control} placement="top-right" />}
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <FormControl
                            fullWidth
                            error={Boolean(get(errors, name))}
                        >
                            <FormLabel component="legend">
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="h6">
                                        Courses
                                    </Typography>
                                    <Button size="small">Edit</Button>
                                </Stack>
                            </FormLabel>
                            <FormGroup>
                                {coursesFields.map((courseField: any) => (
                                    <FormControlLabel
                                        key={courseField.id}
                                        control={
                                            <Checkbox
                                                {...courseField}
                                                checkedIcon={
                                                    <CheckCircleOutlineOutlinedIcon color="success" />
                                                }
                                            />
                                        }
                                        label={courseField.name}
                                    />
                                ))}
                            </FormGroup>
                            {Boolean(get(errors, 'courses')) && (
                                <FormHelperText>
                                    {get(errors, `${name}.message`)}
                                </FormHelperText>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="outlined" fullWidth>
                            Done
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default Courses;
