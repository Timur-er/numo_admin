import React from 'react';
import {routes} from "./routes";
import {useRoutes} from "react-router";
import Header from "../Components/Header/Header";


// a component that displays routes and menu (Header)
const AppRoutes = () => {

    const optimizeRoutes = routes.map(route => {
        return {path: route.path, element: route.element}
    })

    const renderRoutes = useRoutes([...optimizeRoutes])

    return (
        <>
            <Header />
            {renderRoutes}
        </>
    );
};

export default AppRoutes;