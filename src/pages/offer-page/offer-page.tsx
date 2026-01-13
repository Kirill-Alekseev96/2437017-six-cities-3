import OfferGallery from './components/gallery-fragment.tsx';
import OfferWrapper from './components/offer__wrapper.tsx';
import CardBlock from '../../components/card-block/card-block.tsx';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types-props.ts';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface OfferPageProps {
  offers: Offer[];
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

export default function OfferPage ({ offers } : OfferPageProps): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState<Offer | null>(null);
  const { id } = useParams<{ id: string }>();

  const currentOffer = offers.find((offer) => offer.id === id) as Offer;

  const nearbyOffers = getSelectedOffer(offers, currentOffer);

  function handleHover (offer :Offer | null) {
    if (offer) {
      setActiveOfferId(offer);
    }else {
      setActiveOfferId(null);
    }
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery/>
          <OfferWrapper currentOffer = {currentOffer}/>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
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
