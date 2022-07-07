import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from '../helpers/getHeroById';
import { useMemo } from "react";
export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(()=>getHeroById(id), [id]);

  const handleBack = () => {
    navigate(-1);
  }

  const heroImage = `../../../assets/${id}.jpg`;

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="flex flex-wrap overflow-hidden justify-center py-10 mx-6">
        <div className="sm:w-full md:w-80 lg:w-96 overflow-hidden p-2 bg-slate-50 rounded-t-lg md:rounded-b-lg animate__animated animate__fadeIn">
          <img className="w-full object-fill rounded-lg h-50" alt={ hero.superhero} src={heroImage} />
        </div>
        <div className="w-full sm:w-full md:w-80 lg:w-96 overflow-hidden md:pr-4 flex-col mt-0 md:mt-8">
          <div className="h-auto w-full bg-slate-50 p-5 rounded-bl-lg rounded-br-lg md:rounded-bl-none rounded-tl-none rounded-tr-none md:rounded-tr-lg animate__animated animate__fadeIn">
            <h2 className="text-3xl font-bold text-slate-600">{hero.superhero}</h2>
            <div className="flex">
              <p className="font-semibold mr-2">Publisher:</p>
              <p className="flex">{hero.publisher}</p>
            </div>
            <div className="flex">
              <p className="font-semibold mr-2">Alter ego:</p>
              <p className="flex">{hero.alter_ego}</p>
            </div>
            <div className="flex">
              <p className="font-semibold mr-2">First appearance:</p>
              <p className="flex">{hero.first_appearance}</p>
            </div>
            <div className="flex">
              <p className="font-semibold mr-2">Characters:</p>
              <p className="flex">{hero.characters}</p>
            </div>
          </div>
        <div className="pt-3 animate__animated animate__fadeIn">
          <button className="w-full text-base px-6 py-3 font-normal text-slate-500 bg-slate-50 border rounded-l-lg md:rounded-l-none rounded-r-lg border-white hover:bg-white hover:text-slate-500" onClick={handleBack}>Back</button>
        </div>
        </div>
    </div>

  )
}
