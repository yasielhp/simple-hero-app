
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Fernando Herrera' );

    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className='h-screen items-center justify-center flex flex-col'>
      <div className='max-w-sm rounded-lg bg-slate-50 p-5 drop-shadow-xl animate__animated animate__fadeIn'>
        <p className='font-mono text-slate-500 text-base text-center my-2 select-none'>Access heroes metaverse</p>
        <input className="w-full font-mono text-base rounded-lg border-2 border-slate-100 placeholder:stroke-slate-300 py-3 px-6 my-2 focus:border-blue-700" type="text" placeholder="Email" />
        <input className="w-full font-mono text-base rounded-lg border-2 border-slate-100 placeholder:stroke-slate-300 py-3 px-6 my-2 focus:border-blue-700" type="password" placeholder="Password" />
        <button className='w-full text-base px-6 py-3 my-2 font-normal text-slate-50 bg-slate-500 border rounded-lg border-white hover:border-slate-500' type='button'  onClick={handleLogin}>
          Sign in
        </button>
        </div>
    </div>
  )
}
