
import { getHeroesByPublisher } from '../helpers/';
import { HeroCard } from './';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className='flex flex-wrap mx-1 my-10 overflow-hidden sm:mx-1 md:mx-1 lg:mx-1 xl:mx-1 justify-center'>
      {heroes.map(hero => (
        <HeroCard
          {...hero}
          key={hero.id}
        />
      ))}
    </div>
  )
}
