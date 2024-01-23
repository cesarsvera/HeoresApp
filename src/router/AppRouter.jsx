import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'

export const AppRouter = () => {
  return (
    <>
        
        <Routes>
            <Route path='/auth' element={<LoginScreen/>}/>
            <Route path='/*' element={<DashboardRouter/>}/>
        </Routes>
    </>
  )
}
