const Setting = {
  VALUE_CARD: 10,
};

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const RATING_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' }
] as const;

const SORTING = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const APIRoute = {
  Comments: '/comments',
  Login: '/login',
  Favorites: '/favorites',
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

export{Setting, CITIES, RATING_STARS, AppRoute, AuthorizationStatus, SORTING, APIRoute, RequestStatus};
