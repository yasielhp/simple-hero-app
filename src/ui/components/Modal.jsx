
export const Modal = ({ toggleModal, onLogout, user }) => {


  return (
    <div className="absolute z-20 w-screen h-screen flex items-start justify-center pt-20 pr-0 animate__animated animate__fadeIn" onClick={toggleModal} >
      <div className="flex flex-col justify-center items-center bg-slate-800 w-60 h-auto rounded-lg border border-slate-100 p-3 animate__animated animate__fadeInDown">
        <p className="text-slate-50 mb-4 text-center">{user?.name }</p>
        <button className="w-full text-base px-3 py-2 font-normal text-slate-700 bg-slate-50 border rounded-lg border-white hover:bg-white hover:text-slate-500" onClick={onLogout} >
          Logout
        </button>
      </div>
    </div>
  )
}