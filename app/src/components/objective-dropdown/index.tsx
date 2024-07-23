import * as React from 'react';
import * as fixtures from '@/lib/fixtures';

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
    subObjectives: [],
    onHandleChange?: (event: any, value: TObjective[] | undefined) => void;
    onHandleInputChange?: (event: any, value: string) => void;
}

const subObjectivesData = objectives(12);

const ObjectivesDropdown: React.FC<ObjectivesDropdownProps> = ({
    objectives = [],
    value,
    inputValue,
    onHandleChange,
    onHandleInputChange
  }) => {

    const subObjectivesData = fixtures.objectives(12);
    const subObjectives = objectives.map((objective) => {
      return {
          ...objective,
          key: objective.id,
          subObjectives:subObjectivesData,
      }
  })
  console.log(subObjectives)
  console.log('objectives', objectives)
      
      return (
        <Autocomplete
          multiple
          id="objectives-dropdown"
          limitTags={2}
          groupBy={(objectives) => objectives.name}
          options={subObjectives}
          onChange={onHandleChange}
          value={value}
          inputValue={inputValue}
          onInputChange={onHandleInputChange}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          /*renderOption={(props, subObjectives, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8}}
                checked={selected}

              />
              {subObjectives.name}
            </li>
          )}*/
            renderOption={(props, objective, { selected }) => (
              <li {...props}>
                  <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                  />
                  {objective.name}
                  <ul>
                      {objective.subObjectives.map(subObjectives => (
                          <li key={subObjectives.id}>
                              <Checkbox
                                  icon={icon}
                                  checkedIcon={checkedIcon}
                                  style={{ marginRight: 8 }}
                                  checked={selected} // Ensure you have a proper checked condition for subobjectives
                              />
                              {subObjectives.name}
                          </li>
                      ))}
                  </ul>
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
