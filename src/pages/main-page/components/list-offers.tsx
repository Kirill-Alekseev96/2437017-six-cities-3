import SortingFragment from './sorting-fragment.tsx';
import CardBlock from '../../../components/card-block/card-block.tsx';
import { Offer } from '../../../types-props.ts';

interface ListOffersProps {
  filteredOffers: Offer[];
  activeCity: string;
  handleHover?: (offer:Offer | null) => void;
}

export default function ListOffers ({filteredOffers, activeCity, handleHover} :ListOffersProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${filteredOffers.length}`} places to stay in {activeCity}</b>
      <SortingFragment/>
      <div className="cities__places-list places__list tabs__content">
        { filteredOffers.map((offer) => (
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
