import TabsFragment from './components/tabs-fragment.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';
import ListOffers from './components/list-offers.tsx';
import MainEmpty from './components/main-empty.tsx';

import { Offer } from '../../types-props.ts';

import { useState } from 'react';

interface MainPageProps {
  offers: Offer[];
}

export default function MainPage ({ offers }: MainPageProps) {

  const [activeCity, setActiveCity] = useState('Paris');
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  function handleHover (offer :Offer | null) {
    if (offer) {
      setActiveOfferId(offer.id);
    }else {
      setActiveOfferId(null);
    }
  }

  return (
    <div className="page page--gray page--main">

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsFragment
          activeCity = {activeCity}
          setActiveCity = {setActiveCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            {
              filteredOffers.length > 0 ? (
                <>
                  <ListOffers
                    filteredOffers = {filteredOffers}
                    activeCity = {activeCity}
                    handleHover = {handleHover}
                  />
                  <div className="cities__right-section">
                    <MapBlock
                      key={activeCity}
                      offers = { filteredOffers }
                      activeOfferId = { activeOfferId }
                    />
                  </div>
                </>) : (<MainEmpty/>
              )
            }
          </div>
        </div>
      </main>
    </div>
  );
}


