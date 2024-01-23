import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { Marvel } from '../components/marvel/Marvel'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashboardRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/marvel' element={<Marvel/>}/>
            <Route path='/heroe/:heroeId' element={<HeroScreen/>}/>
            <Route path='/dc' element={<DcScreen/>}/>

            <Route path='/*' element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
    
  )
}
