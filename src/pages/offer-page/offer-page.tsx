import OfferWrapper from './components/offer__wrapper.tsx';
import CardBlock from '../../components/card-block/card-block.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';

import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore.ts';

import { fetchOfferById } from '../../store/async-actions/offer-action.ts';

import { Offer } from '../../types/offer-data.ts';


function getSelectedOffer (offers: Offer[], currentOffer: Offer | null) {
  if(!currentOffer) {
    return [];
  }

  return offers.filter((offer) => (
    offer.id !== currentOffer.id &&
    offer.city.name === currentOffer?.city.name
  )).slice(0, 3);
}

export default function OfferPage (): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const currentOffer = useAppSelector((state) => state.offer);
  const authorizationStatus = useAppSelector((state) => state.authStatus);

  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>(); // получаем текущее id стр.

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
    }
  }, [dispatch, id]);

  const nearbyOffers = getSelectedOffer(offers, currentOffer); // находим ближайшие предложения, разные id, одно name

  const mapOffers = currentOffer ? [currentOffer, ...nearbyOffers] : [];


  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferWrapper
            currentOffer = {currentOffer}
            authorizationStatus = {authorizationStatus}
          />
          {currentOffer && (
            <MapBlock
              offers={mapOffers}
              activeOfferId={currentOffer.id}
              className="offer__map map"
            />
          )}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((offer) => (
                <CardBlock
                  key = {offer.id}
                  offer={offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
