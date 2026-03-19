import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderBlock from './header-block.tsx';
import FooterBlock from './footer-block.tsx';
import { AppRoute } from '../../const.ts';
import { useAppSelector } from '../../hooks/useStore.ts';
import { selectFavorites } from '../../store/selectors/base-selectors.ts';

export default function Layout (): JSX.Element {
  const location = useLocation();
  const favorites = useAppSelector(selectFavorites);

  // Убираем basename для сравнения
  const pathname = location.pathname.replace('/2437017-six-cities-3', '');

  const isMainPage = pathname === AppRoute.Main.toString();
  const isOfferPage = pathname.startsWith(AppRoute.Offer); // Динамический путь
  const isLoginPage = pathname === AppRoute.Login.toString(); // Точный путь
  const isFavoritePage = pathname === AppRoute.Favorites.toString(); // Точный путь
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
