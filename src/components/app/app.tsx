import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import MainPage from '../../pages/main-page/main-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';

import Layout from '../layout/layout.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { AppRoute } from '../../const.ts';
import { checkAuthAction } from '../../store/async-actions/authorization-action.ts';

import { useAppSelector, useAppDispatch } from '../../hooks/useStore.ts';


export default function App() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  const authorizationStatus = useAppSelector((state) => state.authStatus);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = { < MainPage /> }/>
            <Route path = { AppRoute.Offer } element = { <OfferPage/> }/>
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
