import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { Marvel } from '../components/marvel/Marvel'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-2'>
        <Routes>
          <Route path='/marvel' element={<Marvel />} />
          <Route path='/hero/:heroeId' element={<HeroScreen />} />
          <Route path='/dc' element={<DcScreen />} />
          <Route path='/search' element={<SearchScreen/>}/>

          <Route path='/*' element={<Navigate to="/marvel" />} />
        </Routes>

      </div>

    </>

  )
}
