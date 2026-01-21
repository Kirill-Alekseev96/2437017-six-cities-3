import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Offer } from '../../types-props.ts';

interface useMapProps {
  mapContainerRef: React.RefObject<HTMLElement | null>;
  offer: Offer;
}

export default function useMap ({ mapContainerRef, offer } :useMapProps) {

  const [ map, setMap ] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapContainerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet
        .map(mapContainerRef.current)
        .setView ([
          offer.location.latitude,
          offer.location.longitude ],
        offer.location.zoom,
        );

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;

    }

  }, [ mapContainerRef, offer ]);


  // Отдельный эффект для обновления центра карты при смене города
  useEffect(() => {
    if (map && offer) {
      map.setView(
        [offer.location.latitude, offer.location.longitude],
        offer.location.zoom
      );
    }
  }, [map, offer]);

  return map;
}
