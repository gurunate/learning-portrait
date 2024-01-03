import {
    FieldErrors,
    FieldValues,
    FormProvider,
    useController,
    useForm
} from 'react-hook-form';
import { IconButton, TextField, Tooltip } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import { DevTool } from '@hookform/devtools';
import SearchIcon from '@mui/icons-material/Search';
import { get } from 'lodash';
import { searchSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

export { searchSchema } from './schema';
export type { SearchFormValues } from './schema';

export type SearchProps = {
    devtool?: boolean;
    onError?: (errors: FieldErrors) => void;
    onSearch: (term: string) => void;
};

/**
 * @param {SearchProps} props
 * @returns {JSX.Element}
 */
const Search: React.FC<SearchProps> = ({
    devtool = false,
    onError,
    onSearch
}: SearchProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(searchSchema),
        defaultValues: {
            term: ''
        }
    });

    const {
        control,
        formState: { errors, isDirty },
        handleSubmit,
        reset
    } = methods;

    const { field: termField } = useController({
        control,
        name: 'term'
    });

    const onSubmit = (data: FieldValues) => {
        onSearch(data.term);
    };

    const handleClick = () => {
        reset();
    };

    return (
        <FormProvider {...methods}>
            {devtool && <DevTool control={control} placement="top-right" />}
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <TextField
                    {...termField}
                    error={Boolean(get(errors, termField.name))}
                    InputProps={{
                        startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
                        endAdornment: isDirty && (
                            <Tooltip title="Clear">
                                <IconButton size="small" onClick={handleClick}>
                                    <ClearIcon />
                                </IconButton>
                            </Tooltip>
                        )
                    }}
                    placeholder="Search for course or evidence"
                    fullWidth
                />
            </form>
        </FormProvider>
    );
};

export default Search;
