import { toggelFavorite } from '../../store/action.ts';
import { useAppDispatch } from '../../hooks/useStore.ts';
import { STYLES } from './const.ts';

interface ButtonBookmarkProps {
  id: string;
  isFavorite?: boolean;
  variant: 'card' | 'offer';
}

export default function ButtonBookmark ({ id, isFavorite, variant}:ButtonBookmarkProps) {

  const { name, width, height } = STYLES[variant];

  const dispatch = useAppDispatch();

  function handleStatusButton (value:string) {
    dispatch(toggelFavorite(value));
  }

  return (
    <button
      onClick = {() => handleStatusButton(id)}
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
