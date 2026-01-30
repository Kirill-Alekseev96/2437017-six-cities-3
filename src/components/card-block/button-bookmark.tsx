interface ButtonBookmarkProps {
handleStatusButton: (id:string) => void;
id: string;
isFavorite?: boolean;
}

export default function ButtonBookmark ({handleStatusButton, id, isFavorite}:ButtonBookmarkProps) {
  return (
    <button
      onClick = {() => handleStatusButton(id)}
      className={`place-card__bookmark-button button
        ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
