import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Loader/Loader';

const PrivateRout = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation()
    

    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    }
};

export default PrivateRout;