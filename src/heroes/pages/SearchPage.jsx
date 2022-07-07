import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from '../components/HeroCard';
import { getHeroByName } from '../helpers/';

export const SearchPage = () => {

  const location = useLocation()

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q)

  const showError  = (q.length > 0) && heroes.length === 0;


  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="w-full flex justify-center items-center">
        {showError && <p className="text-2xl text-slate-50 animate__animated animate__fadeIn">No results found</p>}
        {
          heroes.map( hero => (
            <HeroCard key={ hero.id } {...hero } />
          ))
        }
      </div>
    </div>
  )
}
