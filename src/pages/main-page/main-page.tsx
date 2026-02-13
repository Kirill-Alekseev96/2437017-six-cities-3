import TabsFragment from './components/tabs-fragment.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';
import ListOffers from './components/list-offers.tsx';
import MainEmpty from './components/main-empty.tsx';
import Spinner from '../../components/spinner/spinner.tsx';

import { Offer } from '../../types/offer-data.ts';
import { fetchAllOffers } from '../../store/async-actions/offers-action.ts';
import { RequestStatus } from '../../const.ts';

import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore.ts';

export default function MainPage (): JSX.Element {

  const dispatch = useAppDispatch();

  // Загружаем данные при монтировании компонента(открытие стр)
  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);

  const offers = useAppSelector((state) => state.offers);
  const status = useAppSelector((state) => state.status);

  const [activeCity, setActiveCity] = useState('Paris');

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  function handleHover (offer :Offer | null) {
    if (offer) {
      setActiveOfferId(offer.id);
    }else {
      setActiveOfferId(null);
    }
  }

  const renderContent = () => {
    if (status === RequestStatus.Loading) {
      return <Spinner/>;
    }

    if (filteredOffers.length === 0) {
      return <MainEmpty />;
    }

    return (
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
      </>
    );
  };

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
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}


