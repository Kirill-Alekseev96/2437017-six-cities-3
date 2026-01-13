import TabsFragment from './components/tabs-fragment.tsx';
import SortingFragment from './components/sorting-fragment.tsx';
import CardBlock from '../../components/card-block/card-block.tsx';
import MapBlock from '../../components/map-block.tsx';
import { Offer } from '../../types-props.ts';
import { useState } from 'react';

interface MainPageProps {
  offers: Offer[];
}

export default function MainPage ({ offers }: MainPageProps) {

  const [activeCity, setActiveCity] = useState('Paris');
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsFragment
          activeCity = {activeCity}
          setactiveCity = {setActiveCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortingFragment/>
              <div className="cities__places-list places__list tabs__content">
                { filteredOffers.map((offer) => (
                  <CardBlock
                    key = { offer.id }
                    offer = { offer }
                  />
                ))};
              </div>
            </section>
            <MapBlock/>
          </div>
        </div>
      </main>
    </div>
  );
}


