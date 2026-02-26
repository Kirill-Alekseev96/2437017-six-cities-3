const TIMEOUT_SHOW_ERROR = 2000;

const COMMENT = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
  MIN_COUNT: 0,
  MAX_COUNT: 10,
} as const;

const NEARBY_OFFERS = {
  MIN_COUNT: 0,
  MAX_COUNT: 3,
} as const;

const OFFER_IMAGES = {
  MIN_COUNT: 0,
  MAX_COUNT: 6,
} as const;

const CITIES = [
  { city: 'Paris', lat: 48.8566, lon: 2.3522 },
  { city: 'Cologne', lat: 50.9385, lon: 6.9591 },
  { city: 'Brussels', lat: 50.85045, lon: 4.34878 },
  { city: 'Amsterdam', lat: 52.378156, lon: 4.899821 },
  { city: 'Hamburg', lat: 53.5584, lon: 10.0003 },
  { city: 'Dusseldorf', lat: 51.2277, lon: 6.7735 }
]as const;

const ZOOM = 13;

const RATING_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' }
] as const;

const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

const SORT_TYPES = {
  lowHigh: 'Price: low to high',
  highLow: 'Price: high to low',
  top: 'Top rated first',
};

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  notFound = '/404',
}

const APIRoute = {
  Comments: '/comments',
  Login: '/login',
  Favorite: '/favorite',
  Logout: '/logout',
  Offers: '/offers',
};

enum AuthorizationStatus {
  Auth ='AUTH',
  NoAuth ='NO_AUTH',
  Unknown ='UNKNOWN',
}

enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed,
}

export{OFFER_IMAGES, NEARBY_OFFERS, COMMENT, TIMEOUT_SHOW_ERROR, CITIES, ZOOM, RATING_STARS, AppRoute, AuthorizationStatus, SORT_OPTIONS, SORT_TYPES, APIRoute, RequestStatus};
