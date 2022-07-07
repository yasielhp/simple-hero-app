
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/';
import { useLocation } from 'react-router-dom';
export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  const lasPath = pathname + search
  localStorage.setItem('lastPath', lasPath)

  return (logged)
    ? children
    : <Navigate to="/login" />
}
