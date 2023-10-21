import React from 'react';
import style from './Header.module.scss';
import {routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";
import { CREATE_SEGMENT, SEGMENT } from '../../routes/const'

// header - menu
const Header = () => {
    const excludedRoutes = [CREATE_SEGMENT, SEGMENT]
    const visibleRoutes = routes.filter(i => !excludedRoutes.includes(i.path))

    const renderRoutes = visibleRoutes.map((route, key) => {
        return (
            <NavLink key={key} className={style.header__link} to={route.path}>
                <span>{route.name}</span>
            </NavLink>
        )
    })

    return (
        <div className={style.header}>
            <div>
                {renderRoutes}
            </div>
        </div>
    );
};

export default Header;