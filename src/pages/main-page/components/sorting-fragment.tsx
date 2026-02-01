import { useState, MouseEvent } from 'react';
// import { useAppSelector } from '../../../hooks/useStore';
// import { useAppDispatch } from '../../../hooks/useStore.ts';


const SORTINGS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export default function SortingFragment () :JSX.Element {

  // const offers = useAppSelector((state) => state.offers);
  // const dispatch = useAppDispatch();

  const [activePlace, setActivePlace] = useState('Popular');

  function getActiveClass (sort: string): string {
    return sort === activePlace ? 'places__option--active' : '';
  }

  function fn (evnt :MouseEvent<HTMLUListElement>) {
    const element = evnt.target as HTMLLIElement;
    const textSorting:string | null = element.textContent;
    if (textSorting) {
      setActivePlace(textSorting);
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={(fn)} className="places__options places__options--custom places__options--opened">
        {SORTINGS.map((sort) => (
          <li key={sort}
            className={`places__option ${getActiveClass(sort)}`}
            tabIndex={0}
          >{sort}
          </li>
        ))}
        {/* <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li> */}
      </ul>
    </form>
  );
}
