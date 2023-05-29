import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <h1>loading............</h1>
    }
    if(user){
        return children;
    }
    return <Navigate state= {{from:location}} replace></Navigate>;

};

export default PrivateRoute;