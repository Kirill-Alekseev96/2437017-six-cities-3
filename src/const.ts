const Setting = {
  VALUE_CARD: 10,
};

const SITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth ='AUTH',
  NoAuth ='NO_AUTH',
  Unknown ='UNKNOWN',
}

export{Setting, SITIES, AppRoute, AuthorizationStatus};
