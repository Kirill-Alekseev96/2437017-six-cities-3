import SortingFragment from './sorting-fragment.tsx';
import CardBlock from '../../../components/card-block/card-block.tsx';
import { Offer } from '../../../types-props.ts';
import { SORTING } from '../../../const.ts';

import { useState, useEffect } from 'react';

interface ListOffersProps {
  filteredOffers: Offer[];
  activeCity: string;
  handleHover?: (offer:Offer | null) => void;
}

export default function ListOffers ({filteredOffers, activeCity, handleHover} :ListOffersProps) {

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
      case SORTING[0]:
        newOffers.sort((a: Offer, b: Offer) => a.price - b.price);
        setSortingCard(newOffers);
        break;
      case SORTING[1]:
        newOffers.sort((a: Offer, b: Offer) => b.price - a.price);
        setSortingCard(newOffers);
        break;
      case SORTING[2]:
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
        handleSortingChange = { handleSortingChange }
        activePlace = { activePlace }
      />
      <div className="cities__places-list places__list tabs__content">
        { sortingCards.map((offer) => (
          <CardBlock
            key = { offer.id }
            offer = { offer }
            handleHover = { handleHover }
          />
        ))};
      </div>
    </section>
  );
}
