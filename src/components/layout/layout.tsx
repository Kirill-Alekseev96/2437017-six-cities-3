import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderBlock from './header-block.tsx';
import FooterBlock from './footer-block.tsx';
import { AppRoute } from '../../const.ts';
import { useAppSelector } from '../../hooks/useStore.ts';

export default function Layout (): JSX.Element {
  const location = useLocation();
  const favorites = useAppSelector((state) => state.favorites);

  const isMainPage = location.pathname === AppRoute.Main.toString();
  const isOfferPage = location.pathname.startsWith(AppRoute.Offer); // Динамический путь
  const isLoginPage = location.pathname === AppRoute.Login.toString(); // Точный путь
  const isFavoritePage = location.pathname === AppRoute.Favorites.toString(); // Точный путь
  const showFooter = isOfferPage || isFavoritePage;
  const showAuthInfo = !isLoginPage;

  const pageClasses = `page
    ${isMainPage ? ' page--gray page--main' : ' '}
    ${isLoginPage ? ' page--gray page--login' : ' '}
    ${isFavoritePage && favorites.length === 0 ? 'page--favorites-empty' : ''}`;

  return (
    <div className={pageClasses}>
      <HeaderBlock showAuthInfo = { showAuthInfo } />
      <Outlet />
      {showFooter && <FooterBlock/>}
    </div>
  );
}
