import React from 'react';
import {routes} from "./routes";
import {Navigate, useRoutes} from "react-router";
import Header from "../Components/Header/Header";

// a component that displays routes and menu (Header)
const AppRoutes = () => {

    const optimizeRoutes = routes.map(route => {
        return {
            path: route.path, element: route.element}
    })

    const renderRoutes = useRoutes([
        { path: '*', element: <Navigate to="/segments" /> }, /* Default */
        ...optimizeRoutes
    ])

    return (
        <>
            <Header />
            {renderRoutes}
        </>
    );
};

export default AppRoutes;