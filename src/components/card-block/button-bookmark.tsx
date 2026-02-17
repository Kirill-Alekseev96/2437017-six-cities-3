import { favoriteAction } from '../../store/async-actions/favorite-action.ts';
import { useAppDispatch } from '../../hooks/useStore.ts';
import { STYLES } from './const.ts';

import { useAppSelector } from '../../hooks/useStore.ts';
import { AuthorizationStatus } from '../../const.ts';
import { fetchFavoritesAction } from '../../store/async-actions/favorite-action.ts';
interface ButtonBookmarkProps {
  id: string;
  isFavorite?: boolean;
  variant: 'card' | 'offer';
}

export default function ButtonBookmark ({ id, isFavorite = false, variant}:ButtonBookmarkProps) {

  const { name, width, height } = STYLES[variant];

  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;
  const isDisabled = !isAuthorized;

  const dispatch = useAppDispatch();

  function handleStatusButton () {
    const status = isFavorite ? 0 : 1;
    const doAction = async () => {
      await dispatch(favoriteAction({ offerId: id, status })); // ЖДЕМ ответ от сервера
      dispatch(fetchFavoritesAction()); // ТОЛЬКО ПОТОМ запрашиваем свежий список
    };

    doAction();
  }

  return (
    <button
      disabled = {isDisabled}
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
