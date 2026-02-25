import MemorizedCardBlock from '../../components/card-block/card-block.tsx';
import FavoritesBlock from './components/favorites-empty.tsx';

import { CITIES } from '../../const.ts';

import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/useStore.ts';
import { Link } from 'react-router-dom';

export default function FavoritesScreen () {

  const favorites = useAppSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return <FavoritesBlock />;
  }

  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map(({city}) => {
                //есть ли избранные в этом городе
                const hasCityOffers = favorites.some((offer) => offer.city.name === city);

                if(!hasCityOffers) {
                  return null;
                }

                // Предложения для текущего этого города
                const cityOffer = favorites.filter((offer) => (offer.city.name === city));

                return (
                  <li className="favorites__locations-items" key = {city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{ city }</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityOffer.map((offer) => (
                        <MemorizedCardBlock
                          key = {offer.id}
                          offer={offer}
                          block = {'favorites'}
                        />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

