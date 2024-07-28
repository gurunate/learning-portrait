'use client';

import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import { Objective as TObjective } from '@/types';
import TextField from '@mui/material/TextField';

export type ObjectivesDropdownProps = {
    objectives: TObjective[] | undefined;
    value?: TObjective[] | undefined;
    inputValue?: string | undefined;
    onHandleChange?: (event: React.SyntheticEvent, value: TObjective[]) => void;
    onHandleInputChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

const ObjectivesDropdown: React.FC<ObjectivesDropdownProps> = ({
    objectives = [],
    value = [],
    inputValue = '',
    onHandleChange,
    onHandleInputChange,
}) => {
    // Check if an objective is selected
    const isOptionSelected = (optionId: string) => value.some(obj => obj.id === optionId);

    // Handle the selection change for an option
    const handleOptionChange = (option: TObjective) => {
        const optionId = option.id;
        const selectedOptionIds = new Set(value.map(obj => obj.id));

        if (selectedOptionIds.has(optionId)) {
            // Deselect the option and its children
            const newValue = value.filter(obj => obj.id !== optionId && !option.children?.some(child => child.id === obj.id));
            onHandleChange?.(null as any, newValue);
        } else {
            // Select the option and its children
            const newValue = [...value, option, ...(option.children || [])];
            onHandleChange?.(null as any, newValue);
        }
    };

    // Handle the change event for child options
    const handleChildChange = (child: TObjective) => {
        const childId = child.id;
        const selectedOptionIds = new Set(value.map(obj => obj.id));

        if (selectedOptionIds.has(childId)) {
            // Deselect the child option
            const newValue = value.filter(obj => obj.id !== childId);
            onHandleChange?.(null as any, newValue);
        } else {
            // Select the child option
            const newValue = [...value, child];
            onHandleChange?.(null as any, newValue);
        }
    };

    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={objectives}
            disableCloseOnSelect
            limitTags={1}
            value={value}
            inputValue={inputValue}
            onChange={(event, newValue) => {
                if (event && newValue !== undefined) {
                    onHandleChange?.(event, newValue);
                }
            }}
            onInputChange={(event, newInputValue) => {
                if (event && newInputValue !== undefined) {
                    onHandleInputChange?.(event, newInputValue);
                }
            }}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
                const isSelected = isOptionSelected(option.id);

                return (
                    <React.Fragment key={option.id}>
                        <MenuItem {...props} onClick={() => handleOptionChange(option)}>
                            <Checkbox
                                checked={isSelected}
                                sx={{ mr: 2 }}
                            />
                            {option.name}
                        </MenuItem>
                        {(option.children ?? []).length > 0 && (
                            <div style={{ paddingLeft: 20 }}>
                                {(option.children ?? []).map(child => (
                                    <MenuItem
                                        key={child.id}
                                        value={child.id}
                                        onClick={() => handleChildChange(child)}
                                        sx={{ paddingInlineStart: 2 }}
                                    >
                                        <Checkbox
                                            checked={isOptionSelected(child.id)}
                                            sx={{ mr: 2 }}
                                        />
                                        {child.name}
                                    </MenuItem>
                                ))}
                            </div>
                        )}
                    </React.Fragment>
                );
            }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" />
            )}
            sx={{ width: '300px', overflow: 'hidden' }}
        />
    );
};

export default ObjectivesDropdown;
