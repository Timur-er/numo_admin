import React from 'react';
import Autocomplete from '@mui/lab/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import {useField} from "formik";
import style from './SelectField.module.scss';

function SelectField({label, options, name}) {
    const [field, /* meta */, helpers] = useField(name);

    options = options || {};

    const optionValues = Object.keys(options)
    const getOptionLabel = (optionValue) => Object.entries(options)
        .find(([value]) => value === optionValue)[1]

    return (
        <div className={style.field}>
            <Autocomplete
                multiple
                id="tags-outlined"
                name={name}
                options={optionValues}
                getOptionLabel={getOptionLabel}
                value={field.value}
                onChange={(event, newValue) => helpers.setValue(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label={label}
                        placeholder="Search…"
                    />
                )}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={getOptionLabel(option)}
                            {...getTagProps({ index })}
                        />
                    ))
                }
            />
        </div>
    );
}

export default SelectField;
