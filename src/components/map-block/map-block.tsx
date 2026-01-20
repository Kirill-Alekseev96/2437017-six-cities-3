import leaflet from 'leaflet';
import { useRef } from 'react';

export default function MapBlock () {
  return (
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  );
}
