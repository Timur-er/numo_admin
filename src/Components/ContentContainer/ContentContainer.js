import React from 'react';
import style from './ContentContainer.module.scss';

const ContentContainer = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default ContentContainer;