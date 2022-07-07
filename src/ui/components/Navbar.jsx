
import { Link, NavLink, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import { Logo } from '../../heroes/components/Logo';
import { IconSearch, IconProfile } from '../../heroes/components/';

import { Modal, Search } from './';

import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Navbar = () => {

  //Modal
  const { user, logout } = useContext(AuthContext);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  const navigate = useNavigate()
  const onLogout = () => {
    logout()
    navigate('/login', {
      replace: true
    })
  }
  //Search
  const { q = '' } = queryString.parse(location.search);
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const toggleSearch = () => setIsOpenSearch(!isOpenSearch)
  const { searchText, onInputChange } = useForm({searchText: q})
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`search?q=${searchText}`)
    setIsOpenSearch(!isOpenSearch)
  }

  return (
    <>
      {isOpenModal && <Modal isOpenModal={isOpenModal} toggleModal={toggleModal} onLogout={onLogout} user={user} />}

      <div className='flex justify-between px-4 sm:px-32 md:px-40 lg:px-40 items-center bg-slate-800 animate__animated animate__fadeIn'>
        <div className='flex items-center font-medium text-base text-slate-300 gap-3'>
          <Link to="/">
            <Logo/>
          </Link>
          <NavLink className={({isActive}) => `text-slate-200 ${ isActive ? 'text-slate-500':''}`} to="/marvel" > Marvel </NavLink>
          <NavLink className={({isActive}) => `text-slate-200 ${ isActive ? 'text-slate-500':''}`}  to="/dc"> DC </NavLink>
        </div>
        <div className='flex items-center gap-4'>
          <button onClick={toggleSearch}>
            <IconSearch />
          </button>
          <button onClick={toggleModal} >
            <IconProfile />
          </button>
        </div>
      </div>
      {isOpenSearch &&
        <Search
        isOpenSearch={isOpenSearch}
        toggle={toggleModal}
        onSearchSubmit={onSearchSubmit}
        searchText={searchText}
        onInputChange={onInputChange}
        />}

    </>
  )
}
