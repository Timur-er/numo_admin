import React from 'react';
import style from './Header.module.scss';
import {routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";

// header - menu
const Header = () => {

    const renderRoutes = routes.map((route, key) => {
        return (
            <NavLink key={key} className={style.header__link} to={route.path}>
                <span>{route.name}</span>
            </NavLink>
        )
    })

    return (
        <div className={style.header}>
            {renderRoutes}
        </div>
    );
};

export default Header;