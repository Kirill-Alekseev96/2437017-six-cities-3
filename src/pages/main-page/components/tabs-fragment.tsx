import {CITIES} from '../../../const.ts';
import { Link } from 'react-router-dom';
interface TabsFragmentProps {
  activeCity: string;
  onCityChange: (city: string) => void;
}

export default function TabsFragment ({activeCity, onCityChange} :TabsFragmentProps): JSX.Element {

  function getActiveClass (city: string): string {
    return city === activeCity ? 'tabs__item--active' : '';
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map(({city}) => (
            <li className="locations__item" key={city}>
              <Link to = '' className= {`locations__item-link tabs__item ${getActiveClass(city)}`}
                onClick = {() => {
                  onCityChange(city);
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
