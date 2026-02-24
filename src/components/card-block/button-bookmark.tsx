import { favoriteAction } from '../../store/async-actions/favorite-action.ts';
import { useAppDispatch } from '../../hooks/useStore.ts';
import { STYLES_SVG } from './const.ts';

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useStore.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { fetchFavoritesAction } from '../../store/async-actions/favorite-action.ts';
import { useState } from 'react';
interface ButtonBookmarkProps {
  id: string;
  isFavorite?: boolean;
  variant: 'card' | 'offer';
}

export default function ButtonBookmark ({ id, isFavorite = false, variant}:ButtonBookmarkProps) {

  const [isPending, setIsPending] = useState(false);
  const { name, width, height } = STYLES_SVG[variant];

  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleStatusButton () {

    const status = isFavorite ? 0 : 1;
    if(!isAuthorized) {
      navigate (AppRoute.Login);
      return;
    }

    // Предотвращаем множественные клики
    if (isPending) {
      return;
    }

    setIsPending(true);

    dispatch(favoriteAction({ offerId: id, status }))
      .unwrap()
      .then(() => dispatch(fetchFavoritesAction()))
      .catch(() => {
        dispatch(fetchFavoritesAction());
      })
      .finally(() => {
        setIsPending(false);
      });
  }

  return (
    <button
      onClick = {handleStatusButton}
      className={`${name}__bookmark-button button
        ${isFavorite ? `${name}__bookmark-button--active` : ''}`}
      type="button"
    >
      <svg className={`${name}__bookmark-icon`} width = {width} height= {height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
