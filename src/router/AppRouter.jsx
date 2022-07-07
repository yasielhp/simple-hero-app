import { Routes,Route } from 'react-router-dom'

import { LoginPage } from '../auth/';
import { HeroesRoutes } from '../heroes/routers/HeroesRoutes';
import { PrivateRoute, PublicRouter } from './';


export const AppRouter = () => {
  return (
    <div className='min-h-screen min-w-full flex justify-center bg-gradient-to-br from-red-700 to-blue-700 '>
      <Routes>

        <Route path="/login" element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}
