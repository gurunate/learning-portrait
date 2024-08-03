import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Checkbox from '@mui/material/Checkbox';
import { Student as TStudents } from '@/types';
import TextField from '@mui/material/TextField';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" sx={{ backgroundColor: "primary" }} />;

export type StudentsDropdownProps = {
    students: TStudents[] | undefined;
    value?: TStudents[] | undefined;
    inputValue?: string | undefined;
    onHandleChange?: (event: any, value: TStudents[] | undefined) => void;
    onHandleInputChange?: (event: any, value: string) => void;
}

const StudentsDropdown: React.FC<StudentsDropdownProps> = ({
    students = [],
    value,
    inputValue,
    onHandleChange,
    onHandleInputChange
  }) => {
      
      return (
        <Autocomplete
          multiple
          limitTags={2}
          id="students-dropdown"
          options={students}
          onChange={onHandleChange}
          value={value}
          inputValue={inputValue}
          onInputChange={onHandleInputChange}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8}}
                checked={selected}

              />
              {`${option.firstName} ${option.lastName}`}
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

export default StudentsDropdown
