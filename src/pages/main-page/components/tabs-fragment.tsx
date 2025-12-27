import {SITIES} from '../../../const.ts';
import { NavLink } from 'react-router-dom';

export default function TabsFragment (): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {SITIES.map((city) => (
            <li className="locations__item" key={city}>
              <NavLink to = '' className={({ isActive }) =>
                `locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
              >
                <span>{city}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
