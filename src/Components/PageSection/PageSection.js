import React from 'react';
import ContentContainer from "../ContentContainer/ContentContainer";
import style from './PageSection.module.scss';

const PageSection = ({title, children}) => {
    return (
        <div className={style.pageSection}>
            <span className={style.pageSection__title}>{title}</span>
            <ContentContainer>
                {children}
            </ContentContainer>
        </div>
    );
};

export default PageSection;