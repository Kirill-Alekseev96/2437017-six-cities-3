import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderBlock from './header-block.tsx';
import FooterBlock from './footer-block.tsx';
import { AppRoute } from '../../const.ts';

export default function Layout (): JSX.Element {
  const location = useLocation();
  // Проверяем на какой странице мы
  const isOfferPage = location.pathname.startsWith(AppRoute.Offer); // Динамический путь
  const isLoginPage = location.pathname === AppRoute.Login.toString(); // Точный путь
  const showFooter = isOfferPage || isLoginPage;

  return (
    <>
      {<HeaderBlock showAuthInfo />}
      <main className="page__main page__main--index">
        <Outlet />
      </main>
      {showFooter && <FooterBlock/>}
    </>
  );
}

