import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/async-actions/login-action';

interface HeaderProps {
  showAuthInfo: boolean;
}

export default function HeaderBlock ({showAuthInfo} :HeaderProps): JSX.Element {

  const favorites = useAppSelector((state) => state.favorites);
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;

  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  function handleLogout () {
    dispatch(logoutAction());
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to = '/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {showAuthInfo && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuthorized ? (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${userData?.avatarUrl})`}}></div>
                        <span className="header__user-name user__name">{userData?.email}</span>
                        <span className="header__favorite-count">{favorites.length}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to = '/' className="header__nav-link" onClick={handleLogout}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
