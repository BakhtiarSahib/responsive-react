import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {Spinner} from "react-bootstrap";


const PrivateRoute = () => {

    const {user, isLoading} = useAuth()
    const location = useLocation();
    if (isLoading) {
        return <Spinner animation='border' variant='danger'/>
    }

    return user.email ? <Outlet/> : <Navigate
        to={'/login'}
        state={{ from: location }} // <-- pass in route state
        replace
    />

};

export default PrivateRoute;