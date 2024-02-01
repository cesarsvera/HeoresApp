import React, { useContext } from 'react'
import { AuhtContext } from '../auth/AuhtContext.'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const {user} = useContext(AuhtContext);

    const location = useLocation()

    const lastPath = location.pathname + location.search

    localStorage.setItem('lastPath', lastPath)



    return (user.logged)
        ?
        children
        :
        <Navigate to="/auth"/>
}
