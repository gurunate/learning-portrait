import { MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material"

interface GradeSelectProps {
    value: "" | string[] | undefined;
    onChange?: (event: SelectChangeEvent<string[]>) => void;
}

const GradeSelect: React.FC<GradeSelectProps> = ({ value, onChange }) => {
    return (
        <Select aria-label="grade-select" value={value} onChange={onChange} size='small' sx={{ backgroundColor: '#E7EAEC', borderRadius: '8px'}}>
            <MenuItem aria-label="a+" value={'A+'}>A+</MenuItem>
            <MenuItem aria-label='a' value={'A'}>A</MenuItem>
            <MenuItem aria-label='a-' value={'A-'}>A-</MenuItem>
            <MenuItem aria-label='b+' value={'B+'}>B+</MenuItem>
            <MenuItem aria-label='b' value={'B'}>B</MenuItem>
            <MenuItem aria-label='b-' value={'B-'}>B-</MenuItem>
            <MenuItem aria-label='c+' value={'C+'}>C+</MenuItem>
            <MenuItem aria-label='c' value={'C'}>C</MenuItem>
            <MenuItem aria-label='c-' value={'C-'}>C-</MenuItem>
            <MenuItem aria-label='d+' value={'D+'}>D+</MenuItem>
            <MenuItem aria-label='d' value={'D'}>D</MenuItem>
            <MenuItem aria-label='c-' value={'D-'}>D-</MenuItem>
            <MenuItem aria-label='f' value={'F'}>F</MenuItem>
        </Select>
    )
}

export default GradeSelect;
