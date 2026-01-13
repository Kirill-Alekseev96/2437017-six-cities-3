import ButtonBookmark from './button-bookmark.tsx';
import { Offer } from '../../types-props.ts';
import { Link } from 'react-router-dom';

interface OfferCardProps {
  offer: Offer;
  handleHover?: (offer:Offer | null) => void;
}

export default function CardBlock({ offer, handleHover, } :OfferCardProps) :JSX.Element {
  const { id, title, type, price, previewImage, isPremium, rating } = offer;

  function handleCardMouseEnter () {
    if (handleHover) {
      handleHover(offer);
    }
  }

  function handleCardMouseLeave () {
    if (handleHover) {
      handleHover(null);
    }
  }

  return (
    <article className="cities__card place-card"
      onMouseEnter = {handleCardMouseEnter}
      onMouseLeave = {handleCardMouseLeave}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to ={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: '80%',
            }}
            >
            </span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
