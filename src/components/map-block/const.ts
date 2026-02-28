import leaflet from 'leaflet';

const URL_MARKER_CURRENT = '/public/img/pin-active.svg';
const URL_MARKER_DEFAULT = '/public/img/pin.svg';

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

export { defaultMarkerIcon, activeMarkerIcon };
