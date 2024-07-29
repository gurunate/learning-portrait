import { FormControl, MenuItem, Select, Typography } from "@mui/material"

import { Objective as TObjective } from '@/types'

const ObjectiveSelect = ({courseObjectives}: { courseObjectives: TObjective[]}) => {
    return (
        <FormControl fullWidth>
            <Select 
                value={courseObjectives[0].name} 
                sx={{
                    border: 'none', 
                    boxShadow: 'none', 
                    backgroundColor: 'transparent',
                    '& .MuiSelect-select': {
                        padding: '16px 0px', 
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none', 
                    },
                }}
                renderValue={(selected) => (
                    <Typography variant="h4" sx={{ margin: 0 }}>
                        {selected || 'Select an option'}
                    </Typography>
                )}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                        borderRadius: '8px', // Rounded corners for the menu list
                        '& .MuiMenuItem-root': {
                            borderRadius: '8px', // Optional: Rounded corners for each menu item
                        },
                        },
                    },
                }}
            >
                {courseObjectives.map((objective) => (
                    <MenuItem key={objective.id} value={objective.id}>
                        {objective.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default ObjectiveSelect;
