import { MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material"

interface GradeSelectProps {
    value: "" | string[] | undefined;
    onChange?: (event: SelectChangeEvent<string[]>) => void;
}

const GradeSelect: React.FC<GradeSelectProps> = ({ value, onChange }) => {
    return (
        <Select value={value} onChange={onChange} size='small' sx={{ backgroundColor: '#E7EAEC', borderRadius: '8px'}}>
            <MenuItem value={'A+'}>A+</MenuItem>
            <MenuItem value={'A'}>A</MenuItem>
            <MenuItem value={'A-'}>A-</MenuItem>
            <MenuItem value={'B+'}>B+</MenuItem>
            <MenuItem value={'B'}>B</MenuItem>
            <MenuItem value={'B-'}>B-</MenuItem>
            <MenuItem value={'C+'}>C+</MenuItem>
            <MenuItem value={'C'}>C</MenuItem>
            <MenuItem value={'C-'}>C-</MenuItem>
            <MenuItem value={'D+'}>D+</MenuItem>
            <MenuItem value={'D'}>D</MenuItem>
            <MenuItem value={'D-'}>D-</MenuItem>
            <MenuItem value={'F'}>F</MenuItem>
        </Select>
    )
}

export default GradeSelect;
