import {Navigate, Routes,Route } from 'react-router-dom'

import { Navbar } from '../../ui'
import { MarvelPage, DcPage, HeroPage, SearchPage, HomePage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="*" element={<Navigate to='/' />} />

      </Routes>
    </div>
  )
}
