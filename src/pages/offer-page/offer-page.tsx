import OfferWrapper from './components/offer-wrapper.tsx';
import MemorizedCardBlock from '../../components/card-block/card-block.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';

import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore.ts';

import { fetchCommentsAction, fetchNearbyOffersAction, fetchOfferById } from '../../store/async-actions/offer-action.ts';
import { Offer } from '../../types/offer-data.ts';


export default function OfferPage (): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const currentOffer = useAppSelector((state) => state.offer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const authorizationStatus = useAppSelector((state) => state.authStatus);

  const offersInNearby: Offer[] = offers.filter((offer) => nearbyOffers.some((nearby) => nearby.id === offer.id));


  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>(); // получаем текущее id стр.

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [dispatch, id]);

  const newNearby = offersInNearby.slice(0, 3);
  const mapOffers = currentOffer ? [currentOffer, ...newNearby] : [];

  return (
    <>
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
              {newNearby.map((offer) => (
                <MemorizedCardBlock
                  key = {offer.id}
                  offer={offer}
                  block = {'near-places'}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
