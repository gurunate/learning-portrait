import {
    Badge,
    FormControl,
    ListItemIcon,
    MenuItem,
    Select,
    SelectProps
} from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import React from 'react';

export type CompleteSelectProps = SelectProps & {
    warning?: boolean;
    error?: boolean;
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
 * @param {CompleteSelectProps} props
 * @returns {JSX.Element}
 */
const CompleteSelect: React.FC<CompleteSelectProps> = ({
    warning,
    error,
    ...props
}: CompleteSelectProps): JSX.Element => (
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
            <FormControl fullWidth size="small">
                <Select
                    {...props}
                    renderValue={p => p as string}
                    sx={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: `${
                            options.find(({ key }) => key === props?.value)
                                ?.color
                        }.main`
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

export default React.memo(CompleteSelect);
