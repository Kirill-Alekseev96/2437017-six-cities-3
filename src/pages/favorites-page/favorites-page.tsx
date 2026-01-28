import CardBlock from '../../components/card-block/card-block.tsx';
import FavoritesBlock from './components/favorites-empty.tsx';

import { CITIES } from '../../const.ts';

import { Helmet } from 'react-helmet-async';

import { Offer } from '../../types-props.ts';

interface FavoritesScreenProps {
  offers: Offer[];
}

export default function FavoritesScreen ({offers}: FavoritesScreenProps) {

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  if (favoriteOffers.length === 0) {
    return <FavoritesBlock />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
                //есть ли избранные в этом городе
                const hasCityOffers = favoriteOffers.some((offer) => offer.city.name === city);

                if(!hasCityOffers) {
                  return null;
                }

                // Предложения для текущего этого города
                const cityOffer = favoriteOffers.filter((offer) => (offer.city.name === city));

                return (
                  <li className="favorites__locations-items" key = {city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{ city }</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityOffer.map((offer) => (
                        <CardBlock
                          key = {offer.id}
                          offer={offer}
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
    </div>
  );
}

