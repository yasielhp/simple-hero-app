
import { useNavigate } from 'react-router-dom';
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
}) => {
  const heroImage = `image/${id}.jpg`;
  const navigation = useNavigate()
  const handleNavigation = () => {
    navigation(`/hero/${id}`)
  }
  return (
    <div className="my-3 px-3 w-full mx-3 overflow-hidden w-1/1 sm:my-3 sm:px-2 sm:w-1/2 md:my-3 md:px-2 md:w-1/1 lg:my-3 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/4 bg-white m-1 rounded-xl p-3 shadow-lg animate__animated animate__fadeIn">
      <div className="flex flex-col justify-between rounded-lg bg-cover w-auto h-96" style={{backgroundImage:`url(${heroImage})`}}>
        <div className="rounded-t-lg bg-black bg-opacity-25 p-4 text-left backdrop-blur-md backdrop-filter">
          <p className="text-xl font-semibold text-white">{publisher}</p>
        </div>
        <div className="flex justify-between rounded-b-lg bg-black bg-opacity-25 p-4 text-left backdrop-blur-md backdrop-filter">
          <div>
            <p className="text-base font-semibold text-white">{superhero}</p>
            <p className="text-sm font-normal text-white">{alter_ego}</p>
          </div>
          <div>
            <button className="w-full text-base px-6 py-3 font-normal text-slate-500 bg-slate-50 border rounded-lg border-white hover:bg-white hover:text-slate-500" onClick={handleNavigation}>Ver más</button>
          </div>
        </div>
      </div>
    </div>

  )
}
