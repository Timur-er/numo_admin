import React from 'react';
import Chip from '@mui/material/Chip';
import style from './FieldBlock.module.scss';
import { styled } from '@mui/material/styles';
import {useFormikContext} from "formik";


const StyledChip = styled(Chip)(({ theme, selected }) => ({
    backgroundColor: selected ? '#1964FF' : 'inherit',
    color: selected ? 'white' : theme.palette.text.primary,
    borderRadius: '8px',
    border: '1px solid #D9D9D9',
    padding: '8px 16px',
    fontSize: '15px',
    '&:hover': {
        backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[400],
    },
}));
const FieldBlock = ({label, options, name}) => {
    const { values, setFieldValue } = useFormikContext();
    const selectedChips = values[name] || [];

    options = {
        all: 'All users',
        ...options
    }

    const allValues = Object.keys(options)

    const handleChipClick = (value) => {
        let newChips
    
        if (value === 'all') {
            if (selectedChips.includes(value)) newChips = []
            else newChips = allValues
        }
        else {
            newChips = selectedChips.filter(i => i !== 'all')
            if (newChips.includes(value)) {
                newChips = newChips.filter(chip => chip !== value)
            }
            else newChips =  [...newChips, value]
        }

        setFieldValue(name, newChips)
    };

    const renderOptions = Object.entries(options).map(([value, label]) => {
        const isSelected = selectedChips.includes(value);
        return <StyledChip
            key={value}
            selected={isSelected}
            onClick={() => handleChipClick(value)}
            label={label}
        />
    })

    return (
        <div className={style.fieldBlock}>
            <span>{label}</span>
            <div className={style.fieldBlock__chipWrapper}>
                {renderOptions}
            </div>
        </div>
    );
};

export default FieldBlock;