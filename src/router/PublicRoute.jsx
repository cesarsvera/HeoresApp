import React, { useContext } from 'react'
import { AuhtContext } from '../auth/AuhtContext.'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuhtContext)
    return (!user.logged)
        ?
        children
        :
        <Navigate to='/' />

}
