import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import Layout from '../layout/layout.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Offer } from '../../types-props.ts';

interface AppProps {
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
}

export default function App(props: AppProps) {
  const {offers, authorizationStatus} = props;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = { <MainPage offers = {offers}/> }/>
            <Route path = { AppRoute.Offer } element = { <OfferPage offers = {offers}/> }/>
            <Route path = { AppRoute.Login } element = { <LoginPage/> } />
            <Route path = { AppRoute.Favorites } element = {
              <PrivateRoute authorizationStatus = { authorizationStatus }>
                <FavoritesPage/>
              </PrivateRoute>
            }
            />
          </Route>
          <Route path = '*' element = { <NotFoundPage/> } />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
