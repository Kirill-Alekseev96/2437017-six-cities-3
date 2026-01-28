import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { defaultMarkerIcon, activeMarkerIcon } from './const.ts';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Offer } from '..//../types-props.ts';
import useMap from './use-map.ts';

interface MapBlockProps {
  offers: Offer[];
  activeOfferId: string | null;
  className?: string;
}

export default function MapBlock ({offers, activeOfferId, className = 'cities__map map'} :MapBlockProps) {

  const mapContainerRef = useRef<HTMLDivElement>(null); //в роли ссылки за DOM Element

  const map = useMap({
    mapContainerRef,
    offer: offers[0],
  });

  useEffect (() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker( //создание маркера
            [offer.location.latitude, offer.location.longitude],
            {
              icon: offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
            })
          .addTo(map);
      });
    }
  },[activeOfferId, map, offers]);

  return (
    <section className = {className} ref = { mapContainerRef }></section>
  );
}
