import TabsFragment from './components/tabs-fragment.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';
import MemorizedListOffers from './components/list-offers.tsx';
import MainEmpty from './components/main-empty.tsx';
import Spinner from '../../components/spinner/spinner.tsx';

import { Offer } from '../../types/offer-data.ts';
import { fetchAllOffers } from '../../store/async-actions/offers-action.ts';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore.ts';
import { selectCity, selectOffers } from '../../store/selectors/base-selectors.ts';
import { selectHasAnyFavorite, selectIsLoading } from './selectors.ts';
import { setCity } from '../../store/slice/offers-slice.ts';

export default function MainPage (): JSX.Element {

  const dispatch = useAppDispatch();

  const offers = useAppSelector(selectOffers);
  const isLoading = useAppSelector(selectIsLoading);
  const hasAnyFavorite = useAppSelector(selectHasAnyFavorite);
  const activeCity = useAppSelector(selectCity);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const filteredOffers = useMemo(() =>
    offers.filter((offer) => offer.city.name === activeCity),
  [offers, activeCity]
  );

  useEffect(() => {
    if (!hasAnyFavorite) {
      dispatch(fetchAllOffers());
    }
  }, [dispatch, hasAnyFavorite]);

  const handleCityChange = useCallback((city: string) => {
    dispatch(setCity(city));
  }, [dispatch]);

  const handleHover = useCallback ((offer :Offer | null) => {
    if (offer) {
      setActiveOfferId(offer.id);
    }else {
      setActiveOfferId(null);
    }
  },[]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    filteredOffers.length === 0 ? (
      <MainEmpty
        activeCity={activeCity}
        onCityChange={handleCityChange}
      />
    ) : (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsFragment
          activeCity={activeCity}
          onCityChange={handleCityChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <MemorizedListOffers
              filteredOffers={filteredOffers}
              activeCity={activeCity}
              onHover={handleHover}
            />
            <div className="cities__right-section">
              <MapBlock
                key={activeCity}
                offers={filteredOffers}
                activeOfferId={activeOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    )
  );
}


