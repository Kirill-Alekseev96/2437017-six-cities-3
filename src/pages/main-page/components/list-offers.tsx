import SortingFragment from './sorting-fragment.tsx';
import MemorizedCardBlock from '../../../components/card-block/card-block.tsx';
import { Offer } from '../../../types/offer-data.ts';
import { SORT_TYPES } from '../../../const.ts';

import { useState, useEffect } from 'react';

interface ListOffersProps {
  filteredOffers: Offer[];
  activeCity: string;
  onHover?: (offer:Offer | null) => void;
}

export default function ListOffers ({filteredOffers, activeCity, onHover} :ListOffersProps) {

  const [sortingCards, setSortingCard] = useState<Offer[]>(filteredOffers);
  const [activePlace, setActivePlace] = useState('Popular');

  function handleSortingChange(textSorting: string) {
    setActivePlace(textSorting);
  }

  useEffect(()=> {
    setActivePlace('Popular');
  },[activeCity]);

  useEffect (() => {
    const newOffers = [...filteredOffers];

    switch (activePlace) {
      case SORT_TYPES.lowHigh:
        newOffers.sort((a: Offer, b: Offer) => a.price - b.price);
        setSortingCard(newOffers);
        break;
      case SORT_TYPES.highLow:
        newOffers.sort((a: Offer, b: Offer) => b.price - a.price);
        setSortingCard(newOffers);
        break;
      case SORT_TYPES.top:
        newOffers.sort((a: Offer, b: Offer) => b.rating - a.rating);
        setSortingCard(newOffers);
        break;
      default:
        setSortingCard(filteredOffers);
    }

  },[filteredOffers, activePlace]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${filteredOffers.length}`} places to stay in {activeCity}</b>
      <SortingFragment
        onSortingChange = { handleSortingChange }
        activePlace = { activePlace }
        activeCity = { activeCity }
      />
      <div className="cities__places-list places__list tabs__content">
        { sortingCards.map((offer) => (
          <MemorizedCardBlock
            key = { offer.id }
            offer = { offer }
            onHover = { onHover }
            block = {'cities'}
          />
        ))};
      </div>
    </section>
  );
}
