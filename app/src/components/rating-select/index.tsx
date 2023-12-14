import {
    Badge,
    FormControl,
    ListItemIcon,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps
} from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import React from 'react';

export type RatingSelectProps = SelectProps & {
    error?: boolean;
    extended?: boolean;
    warning?: boolean;
    width?: string | number;
};

export const options = [
    {
        key: 'M',
        label: 'Mastery',
        color: 'success'
    },
    {
        key: 'A',
        label: 'Approaching',
        color: 'warning'
    },
    {
        key: 'T',
        label: 'NoT YeT',
        color: 'info'
    },
    {
        key: 'H',
        label: 'Help',
        color: 'error'
    },
    {
        key: '',
        label: 'None'
    }
];

/**
 * @param {RatingSelectProps} props
 * @returns {JSX.Element}
 */
const RatingSelect: React.FC<RatingSelectProps> = ({
    error = false,
    extended = false,
    warning = false,
    width,
    onChange,
    ...props
}: RatingSelectProps): JSX.Element => {
    const [state, setState] = React.useState({ value: '' });

    React.useEffect(() => {
        setState({
            value: (props?.value as string) || (props?.defaultValue as string)
        });
    }, [props?.defaultValue, props?.value]);

    /**
     * @param {SelectChangeEvent} event
     * @param {React.ReactNode} child
     */
    const handleChange = React.useCallback(
        (
            event: SelectChangeEvent<HTMLSelectElement>,
            child: React.ReactNode
        ) => {
            setState({ value: event.target.value as string });
            onChange && onChange(event, child);
        },
        [onChange]
    );

    /**
     *
     * @param {HTMLSelectElement} value
     * @returns {React.ReactNode}
     */
    const handleRenderValue = (value: HTMLSelectElement): React.ReactNode => {
        if (extended && value) {
            return options.find(
                ({ key }) => key === (value as unknown as string)
            )?.label;
        }

        return value as React.ReactNode;
    };

    return (
        <Badge
            color="warning"
            badgeContent="!"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            invisible={!warning}
        >
            <Badge color="error" variant="dot" invisible={!error}>
                <FormControl
                    fullWidth={extended}
                    sx={{ ...(width && { width }) }}
                    size="small"
                >
                    {/* @ts-ignore */}
                    <Select
                        {...props}
                        onChange={handleChange}
                        renderValue={handleRenderValue}
                        sx={{
                            '&.MuiOutlinedInput-root': {
                                borderWidth: state?.value ? 1 : 'inherit',
                                borderStyle: 'solid',
                                borderColor: `${
                                    options.find(
                                        ({ key }) => state?.value === key
                                    )?.color
                                }.main`
                            }
                        }}
                    >
                        {options.map(({ key, label, color }, idx) => (
                            <MenuItem key={`${key}-${idx}`} value={key}>
                                <ListItemIcon>
                                    {color && (
                                        <CircleIcon
                                            fontSize="small"
                                            sx={{ color: `${color}.main` }}
                                        />
                                    )}
                                    {!color && (
                                        <PanoramaFishEyeIcon fontSize="small" />
                                    )}
                                </ListItemIcon>
                                {key && <>{key} &ndash; </>}
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Badge>
        </Badge>
    );
};

export default React.memo(RatingSelect);
