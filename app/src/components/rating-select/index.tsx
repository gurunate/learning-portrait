import {
    Badge,
    FormControl,
    ListItemIcon,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
    Tooltip
} from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import React from 'react';

export type RatingSelectProps = SelectProps & {
    error?: boolean;
    errorText?: React.ReactNode;
    extended?: boolean;
    warning?: boolean;
    warningText?: React.ReactNode;
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
    errorText,
    extended = false,
    onChange,
    onOpen,
    onClose,
    warning = false,
    warningText,
    width,
    ...props
}: RatingSelectProps): JSX.Element => {
    const [state, setState] = React.useState({
        value: '',
        isOpen: false,
        openTooltip: false
    });

    React.useEffect(() => {
        setState(prev => ({
            ...prev,
            value: (props?.value as string) || (props?.defaultValue as string)
        }));
    }, [props?.defaultValue, props?.value]);

    const handleOpen = (event: React.SyntheticEvent) => {
        setState(prev => ({
            ...prev,
            isOpen: true,
            openTooltip: false
        }));

        onOpen && onOpen(event);
    };

    const handleClose = (event: React.SyntheticEvent) => {
        setState(prev => ({
            ...prev,
            isOpen: false
        }));

        onClose && onClose(event);
    };

    /**
     * @param {SelectChangeEvent} event
     * @param {React.ReactNode} child
     */
    const handleChange = React.useCallback(
        (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
            setState(prev => ({
                ...prev,
                value: event.target.value as string
            }));
            onChange && onChange(event, child);
        },
        [onChange]
    );

    /**
     *
     * @param {HTMLSelectElement} value
     * @returns {React.ReactNode}
     */
    const handleRenderValue = (value: unknown): React.ReactNode => {
        if (extended && value) {
            return options.find(
                ({ key }) => key === (value as unknown as string)
            )?.label;
        }

        return value as React.ReactNode;
    };

    const handleTooltipOpen = () => {
        !state?.isOpen &&
            setState(prev => ({
                ...prev,
                openTooltip: true
            }));
    };

    const handleTooltipClose = () => {
        setState(prev => ({
            ...prev,
            openTooltip: false
        }));
    };

    return (
        <Badge
            color="warning"
            badgeContent={
                <Tooltip arrow title={warningText}>
                    <span>!</span>
                </Tooltip>
            }
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            invisible={!warning}
        >
            <Badge
                color="error"
                badgeContent={
                    <Tooltip arrow title={errorText}>
                        <span>x</span>
                    </Tooltip>
                }
                variant="dot"
                invisible={!error}
            >
                <FormControl
                    fullWidth={extended}
                    sx={{ ...(width && { width }) }}
                    size="small"
                >
                    <Tooltip
                        arrow
                        title={
                            (!extended &&
                                options.find(({ key }) => key === state?.value)
                                    ?.label) ||
                            ''
                        }
                        open={state?.openTooltip}
                    >
                        <Select
                            {...props}
                            onMouseEnter={handleTooltipOpen}
                            onMouseLeave={handleTooltipClose}
                            onOpen={handleOpen}
                            onClose={handleClose}
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
                    </Tooltip>
                </FormControl>
            </Badge>
        </Badge>
    );
};

export default React.memo(RatingSelect);
