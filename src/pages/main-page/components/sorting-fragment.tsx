import { MouseEvent, useEffect, useState } from 'react';

import { SORT_OPTIONS } from '../../../const';

interface SortingFragmentProps {
  handleSortingChange: (sorting: string) => void;
  activePlace:string;
  activeCity: string;
}

export default function SortingFragment ({handleSortingChange, activePlace, activeCity}:SortingFragmentProps) :JSX.Element {

  const [isOpen, setOpen] = useState(false);

  useEffect(()=> {
    setOpen(false);
  },[activeCity]);

  function getActiveClass (sort: string): string {
    return sort === activePlace ? 'places__option--active' : '';
  }

  function handleToggleDropdown () {
    setOpen(!isOpen);
  }

  function handleSortClick (event: MouseEvent<HTMLUListElement>) {
    const element = event.target as HTMLLIElement;
    const textSorting: string | null = element.textContent;
    if (textSorting) {
      handleSortingChange(textSorting);
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span onClick={(handleToggleDropdown)} className="places__sorting-type" tabIndex={0}>
        {activePlace}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={(handleSortClick)} className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {SORT_OPTIONS.map((sort) => (
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
