import {
    Checkbox,
    Divider,
    Grid,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Typography
} from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export type ViewPortfolioMenuProps = unknown;

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
        label: 'None'
    }
];

/**
 * @param {ViewPortfolioMenuProps} props
 * @returns {JSX.Element}
 */
const ViewPortfolioMenu: React.FC<ViewPortfolioMenuProps> = (
    props: ViewPortfolioMenuProps
): JSX.Element => (
    <Grid container direction="column" spacing={1} width={240}>
        <Grid item>
            <Typography variant="body1" px={2} pb={1}>
                View Portfolio
            </Typography>
            <Divider />
        </Grid>
        <Grid item>
            <MenuList dense>
                {options.map(({ key, label, color }, idx) => (
                    <MenuItem key={`${key}-${idx}`} selected={idx === 0}>
                        <ListItemIcon>
                            {color && (
                                <CircleIcon
                                    fontSize="small"
                                    sx={{ color: `${color}.main` }}
                                />
                            )}
                            {!color && <PanoramaFishEyeIcon fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body2">
                                {key && <>{key} &ndash; </>}
                                {label}
                            </Typography>
                        </ListItemText>
                        <Checkbox color="success" />
                    </MenuItem>
                ))}
            </MenuList>
        </Grid>
    </Grid>
);

export default ViewPortfolioMenu;
