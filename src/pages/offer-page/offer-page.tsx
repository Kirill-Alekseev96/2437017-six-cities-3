import OfferWrapper from './components/offer-wrapper.tsx';
import MemorizedCardBlock from '../../components/card-block/card-block.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';

import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore.ts';

import { fetchCommentsAction, fetchNearbyOffersAction, fetchOfferById } from '../../store/async-actions/offer-action.ts';
import { AppRoute } from '../../const.ts';
import { fetchAllOffers } from '../../store/async-actions/offers-action.ts';
import { selectAuthorizationStatus, selectCurrentOffer, selectOffers } from '../../store/selectors/base-selectors.ts';
import { selectorRangeOffersNearby } from './selectors.ts';

export default function OfferPage (): JSX.Element {

  const currentOffer = useAppSelector(selectCurrentOffer);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const offers = useAppSelector(selectOffers);
  const rangeOffersNearby = useAppSelector(selectorRangeOffersNearby);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>(); // получаем текущее id стр.

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchCommentsAction(id))
        .unwrap()
        .catch(() => navigate(AppRoute.notFound)); // при ошибке перенаправляешь на страницу 404
    }
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fetchAllOffers());
    }
  }, [offers.length, dispatch]);

  const mapOffers = useMemo(() => currentOffer ? [currentOffer, ...rangeOffersNearby] : [],[currentOffer, rangeOffersNearby]);

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
              {rangeOffersNearby.map((offer) => (
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
