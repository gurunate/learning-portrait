import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Checkbox from '@mui/material/Checkbox';
import { Objective as TObjective } from '@/types';
import TextField from '@mui/material/TextField';
import { objectives } from '@/lib/fixtures'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" sx={{ backgroundColor: "primary" }} />;

export type ObjectivesDropdownProps = {
    objectives: TObjective[] | undefined;
    value?: TObjective[] | undefined;
    inputValue?: string | undefined;
    onHandleChange?: (event: any, value: TObjective[] | undefined) => void;
    onHandleInputChange?: (event: any, value: string) => void;
}

const subObjectives = objectives(3);

const ObjectivesDropdown: React.FC<ObjectivesDropdownProps> = ({
    objectives = [],
    value,
    inputValue,
    onHandleChange,
    onHandleInputChange
  }) => {
    {console.log(objectives)}
    console.log(subObjectives)
      
      return (
        <Autocomplete
          multiple
          id="objectives-dropdown"
          limitTags={2}
          options={objectives}
          onChange={onHandleChange}
          value={value}
          inputValue={inputValue}
          onInputChange={onHandleInputChange}
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
