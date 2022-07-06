import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../../heroes/components/Logo';
import {IconSearch, IconProfile} from '../../heroes/components/';

export const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login', {
      replace: true,
    })
  }
  return (
    <div className='flex justify-between px-4 sm:px-32 md:px-40 lg:px-40 items-center bg-slate-800 animate__animated animate__fadeIn'>
      <div className='flex items-center font-medium text-base text-slate-300 gap-3'>
        <Link to="/">
          <Logo/>
        </Link>
        <NavLink className={({isActive}) => `text-slate-200 ${ isActive ? 'text-slate-500':''}`} to="/marvel" > Marvel </NavLink>
        <NavLink className={({isActive}) => `text-slate-200 ${ isActive ? 'text-slate-500':''}`}  to="/dc"> DC </NavLink>
      </div>
      <div className='flex items-center gap-4'>
        <NavLink to="/search">
          <IconSearch />
        </NavLink>
        <button onClick={handleLogout}>
          <IconProfile />
        </button>
      </div>
    </div>
  )
}
