import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Checkbox from '@mui/material/Checkbox';
import { Objective as TObjective } from '@/types';
import TextField from '@mui/material/TextField';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" sx={{ backgroundColor: "primary" }} />;

export type ObjectivesDropdownProps = {
    objectives: TObjective[] | undefined;
}

const ObjectivesDropdown: React.FC<ObjectivesDropdownProps> = ({
    objectives = []}) =>{
  return (
    <Autocomplete
      multiple
      id="objectives-dropdown"
      options={objectives}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8}}
            checked={selected}

          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField 
          {...params} 
        />
      )}
    />
  );
};

export default ObjectivesDropdown
