import React, {useEffect} from 'react';
import {Slider} from "@mui/material";
import { styled } from '@mui/material/styles';
import {useField} from "formik";
import style from './Slider.module.scss';

const CustomSlider = styled(Slider)({
    width: "400px",
    // Track style
    '& .MuiSlider-track': {
        backgroundColor: '#1964FF',
        height: '8px',
    },

    // Rail style
    '& .MuiSlider-rail': {
        backgroundColor: '#D9D9D9',
        height: '8px',
        // width: "400px"
    },

    // Thumb style
    '& .MuiSlider-thumb': {
        width: 24,
        height: 24,
        backgroundColor: '#1964FF',
        '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 3px #1964FF',
        },
    },
});

const SliderField = ({name, options, label, start, end}) => {
    const [value, setValue] = React.useState([1, 2]);
    const [field, meta, helpers] = useField(name);


    useEffect(() => {
        console.log('options - ', options);
    }, [name])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={style.slider__wrapper}>
            <span>{label}</span>
            <CustomSlider
                {...field}
                value={field.value}
                onChange={(_, value) => helpers.setValue(value)}
                // value={value}
                // onChange={handleChange}
                valueLabelDisplay="off"
                aria-labelledby="range-slider"
                min={start}
                max={end}
                step={1}
                marks={options}
            />
        </div>
    );
};

export default SliderField;