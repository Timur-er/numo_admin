import React from 'react';
import Chip from '@mui/material/Chip';
import style from './FieldBlock.module.scss';

const FieldBlock = ({label, options}) => {

    const renderOptions = options.map(option => {
        return <Chip className={style.fieldBlock__chip} label={option}/>
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