import React from 'react';
import style from './PageContainer.module.scss';

// page wrapper for paddings
const PageContainer = ({children}) => {
    return (
        <div className={style.pageContainer}>
            {children}
        </div>
    );
};

export default PageContainer;