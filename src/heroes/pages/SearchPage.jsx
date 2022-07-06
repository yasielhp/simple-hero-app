import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroByName } from '../helpers/';

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q)

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`)
  }
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <form onSubmit={onSearchSubmit} className="flex w-80 pb-5">
        <input className={`w-full text-base px-4 py-2 font-normal text-slate-600 placeholder:text-slate-400 bg-slate-50 rounded-l-lg border border-r-0 border-slate-200 shadow-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:border-blue-600  focus:ring-blue-600 transition-colors` } placeholder={`${showSearch ? `Write a hero name`: `Search a hero`}`} name="searchText" autoComplete="off" value={searchText} onChange={onInputChange } />
        <button className="w-32 text-base px-4 py-2 font-normal text-slate-50 bg-slate-500 rounded-r-lg shadow-sm border border-slate-200" type="submit">Search</button>
      </form>
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
