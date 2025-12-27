import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = { AppRoute.Main }
            element = { <MainPage /> }
          />
          <Route
            path = { AppRoute.Offer }
            element = { <OfferPage/ >}
          />
          <Route
            path = { AppRoute.Favorites }
            element = {
              <PrivateRoute authorizationStatus = { AuthorizationStatus.NoAuth }>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path = { AppRoute.Login }
            element = { <LoginPage/> }
          />
          <Route
            path = '*'
            element = { <NotFoundPage/> }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
