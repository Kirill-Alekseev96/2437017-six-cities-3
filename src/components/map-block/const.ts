import leaflet from 'leaflet';

const URL_MARKER_DEFAULT = './markup/img/pin.svg';
const URL_MARKER_CURRENT = './markup/img/pin-active.svg';

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export { defaultMarkerIcon, activeMarkerIcon };
