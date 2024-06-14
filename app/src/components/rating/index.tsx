import { Badge, Chip, ChipProps } from '@mui/material';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export type RatingProps = Omit<ChipProps, 'color'> & {
    color?: ChipProps['color'];//'#E1FFE7' | '#E0F6FF' | '#FFE2E2' | '#FFEFBC';
    label: string;
    variant?: 'filled' | 'outlined';
    underRated?: boolean;
    overRated?: boolean;
};

/**
 * @param {RatingProps} props
 * @returns {JSX.Element}
 */
const Rating: React.FC<RatingProps> = props => {
    return (
        <Badge 
            anchorOrigin={{
                vertical: props.underRated ? 'bottom' : 'top', 
                horizontal: 'right'
            }} 
            badgeContent={props.overRated ? 
                <ArrowCircleUpIcon 
                    sx={{
                        backgroundColor: 'edge.dark', 
                        borderRadius: '100%', 
                        color: '#fff' 
                    }} 
                    fontSize='small'
                /> 
                : 
                props.underRated ? 
                    <ArrowDownwardIcon 
                        sx={{
                            backgroundColor: 'edge.dark', 
                            borderRadius: '100%', 
                            color: '#fff' 
                        }} 
                        fontSize='small'
                    />
                    : 
                    ''
                } 
        >
                <Chip 
                    label={props.label} 
                    size={props.size}
                    color={props.color}
                    variant={props.variant}
                />
        </Badge>
    );
}

export default Rating;
