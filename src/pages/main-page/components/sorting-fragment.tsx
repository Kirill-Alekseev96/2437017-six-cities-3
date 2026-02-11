import { MouseEvent } from 'react';

import { SORTING } from '../../../const';

interface SortingFragmentProps {
  handleSortingChange: (sorting: string) => void;
  activePlace:string;
}

export default function SortingFragment ({handleSortingChange, activePlace}:SortingFragmentProps) :JSX.Element {

  function getActiveClass (sort: string): string {
    return sort === activePlace ? 'places__option--active' : '';
  }

  function fn (event: MouseEvent<HTMLUListElement>) {
    const element = event.target as HTMLLIElement;
    const textSorting: string | null = element.textContent;
    if (textSorting) {
      handleSortingChange(textSorting);
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
        {SORTING.map((sort) => (
          <li key={sort}
            className={`places__option ${getActiveClass(sort)}`}
            tabIndex={0}
          >{sort}
          </li>
        ))}
      </ul>
    </form>
  );
}
