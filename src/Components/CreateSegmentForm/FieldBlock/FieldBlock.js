import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import style from './FieldBlock.module.scss';
import { styled } from '@mui/material/styles';
import {useFormikContext} from "formik";
import {Button, ButtonGroup} from "@mui/material";


// намагався створити кнопки як у фігмі
const StyledBtnGrp = styled(ButtonGroup)(({theme, selected}) => ({
    // border: '1px solid #007BFF',
    borderRadius: '4px',
    // backgroundColor: '#007BFF',
    width: 'min-content',
}))

const StyledBtn = styled(Button)(({theme, selected}) => ({
    color: '#007BFF',
    border: 'none',
    // borderColor: '#007BFF',
    '&.MuiButton-contained': {
        backgroundColor: selected ? '#007BFF' : 'white',
        color: selected ? 'white' : '#007BFF',
    },
    '&:not(:first-child)': {
        // borderLeft: '1px solid #007BFF',
    }
}))

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
    const [selected, setSelected] = useState([]);


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
        // return  (<StyledBtn
        //     selected={isSelected}
        //     key={value}
        //     onClick={() => toggleButton(value)}
        //     variant={selected.includes(value) ? "contained" : "outlined"}
        // >
        //     {value}
        // </StyledBtn>)
    })


    const toggleButton = (value) => {
        setSelected((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    return (
        <div className={style.fieldBlock}>
            <span>{label}</span>
            <div className={style.fieldBlock__chipWrapper}>
                {renderOptions}
            </div>


            {/*<StyledBtnGrp variant="contained" color="primary" aria-label="outlined primary button group">*/}
                {/*{options.map((option) => (*/}
                {/*    <Button*/}
                {/*        key={option}*/}
                {/*        onClick={() => toggleButton(option)}*/}
                {/*        variant={selected.includes(option) ? "contained" : "outlined"}*/}
                {/*    >*/}
                {/*        {option}*/}
                {/*    </Button>*/}
                {/*))}*/}
                {/*{renderOptions}*/}
            {/*</StyledBtnGrp>*/}
        </div>
    );
};

export default FieldBlock;