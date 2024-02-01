import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {



  return (
    <>
        
        <Routes>

            <Route path='/auth' element={
              <PublicRoute>
                <LoginScreen/>

              </PublicRoute>
            }/>

            <Route path='/*' element={
              <PrivateRoute>
                <DashboardRouter/>
              </PrivateRoute>
            }/>

        </Routes>
    </>
  )
}
