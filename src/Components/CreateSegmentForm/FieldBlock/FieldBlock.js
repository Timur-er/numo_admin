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
    const selectedChips = values[name];

    const handleChipClick = (option) => {
        setFieldValue(name,
            selectedChips.includes(option)
                ? selectedChips.filter(chip => chip !== option)
                : [...selectedChips, option]
        );
    };

    const renderOptions = options.map((option, key) => {
        const isSelected = selectedChips.includes(option);
        return <StyledChip
            key={key}
            selected={isSelected}
            onClick={() => handleChipClick(option)}
            label={option}
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