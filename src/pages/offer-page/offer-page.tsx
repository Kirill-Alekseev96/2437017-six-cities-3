import OfferGallery from './components/gallery-fragment.tsx';
import OfferWrapper from './components/offer__wrapper.tsx';
import CardBlock from '../../components/card-block/card-block.tsx';
import MapBlock from '../../components/map-block/map-block.tsx';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types-props.ts';
import { AuthorizationStatus } from '../../const.ts';
// import { useState } from 'react';
import CardHover from '../../components/card-block/card-hover.tsx';
import { useParams } from 'react-router-dom';

interface OfferPageProps {
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
}

function getSelectedOffer (offers: Offer[], currentOffer?: Offer) {
  if(!currentOffer) {
    return [];
  }

  return offers.filter((offer) => (
    offer.id !== currentOffer.id &&
    offer.city.name === currentOffer?.city.name
  )).slice(0, 3);
}

export default function OfferPage ({ offers, authorizationStatus } : OfferPageProps): JSX.Element {

  const { handleHover } = CardHover();
  const { id } = useParams<{ id: string }>(); // получаем текущее id стр.

  const currentOffer = offers.find((offer) => offer.id === id) as Offer; // находит по id конкретный offer

  const nearbyOffers = getSelectedOffer(offers, currentOffer); // находим ближайшие предложения, разные id, одно name

  const mapOffers = currentOffer ? [currentOffer, ...nearbyOffers] : [];


  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery/>
          <OfferWrapper
            currentOffer = {currentOffer}
            authorizationStatus = {authorizationStatus}
          />
          {/* <section className="offer__map map"></section> */}
          <MapBlock
            offers = { mapOffers }
            activeOfferId = { currentOffer.id }
            className="offer__map map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((offer) => (
                <CardBlock
                  key = {offer.id}
                  offer={offer}
                  handleHover = {handleHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
