import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Offer } from '../../types/offer-data.ts';

import { CITIES, ZOOM } from '../../const.ts';

interface useMapProps {
  mapContainerRef: React.RefObject<HTMLElement | null>;
  offer: Offer;
}

const getCityCoordinates = (offer:Offer) => {
  const foundCity = CITIES.find((city) => city.city === offer.city.name);
  if(foundCity) {
    return foundCity ;
  }else {
    return{ lat: 0, lon: 0 };
  }
};

export default function useMap ({ mapContainerRef, offer } :useMapProps) {

  const [ map, setMap ] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    const { lat, lon } = getCityCoordinates(offer);
    if (mapContainerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet
        .map(mapContainerRef.current)
        .setView ([lat, lon],ZOOM
        );

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          maxZoom: 16,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;

    }

  }, [ mapContainerRef, offer ]);


  // Отдельный эффект для обновления центра карты при смене города
  useEffect(() => {
    const { lat, lon } = getCityCoordinates(offer);
    if (map && offer) {
      map.setView(
        [lat, lon],ZOOM
      );
    }
  }, [map, offer]);

  return map;
}
