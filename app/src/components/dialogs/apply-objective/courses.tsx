import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Typography
} from '@mui/material';
import {
    FieldErrors,
    FieldValues,
    FormProvider,
    useController,
    useForm
} from 'react-hook-form';
import { Stack, useTheme } from '@mui/system';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { DevTool } from '@hookform/devtools';
import { Course as TCourse } from '@/types';
import { applyObjectiveSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

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
    courses,
    devtool,
    onError,
    onSubmit
}: CoursesProps): JSX.Element => {
    const theme = useTheme();

    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(applyObjectiveSchema),
        defaultValues: {
            search: '',
            courses: []
        }
    });

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = methods;

    const { field: coursesField } = useController({
        control,
        name: 'courses'
    });

    return (
        <FormProvider {...methods}>
            {devtool && <DevTool control={control} placement="top-right" />}
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container spacing={4}>
                    <Grid item sm={12}>
                        <FormControl fullWidth>
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
                                {courses?.map(({ id, name }) => (
                                    <FormControlLabel
                                        key={id}
                                        control={
                                            <Checkbox
                                                {...coursesField}
                                                checkedIcon={
                                                    <CheckCircleOutlineOutlinedIcon color="success" />
                                                }
                                            />
                                        }
                                        label={name}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item sm={12}>
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
