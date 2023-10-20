import React from 'react';
import style from './FilterInput.module.scss';

const FilterInput = ({label}) => {
    return (
        <div className={style.inputWrapper}>
            <label className={style.inputWrapper__label} htmlFor="">{label}</label>
            <input className={style.inputWrapper__input}/>
        </div>
    );
};

export default FilterInput;