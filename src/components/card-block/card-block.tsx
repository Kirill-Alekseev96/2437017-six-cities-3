import ButtonBookmark from './button-bookmark.tsx';
import { Offer } from '../../types/offer-data.ts';

import { Link } from 'react-router-dom';
import { memo } from 'react';

interface OfferCardProps {
  offer: Offer;
  onHover?: (offer:Offer | null) => void;
  block: string;
}

function CardBlock({ offer, onHover, block} :OfferCardProps) :JSX.Element {

  const { id, title, type, price, previewImage, isPremium, isFavorite, rating } = offer;

  function handleCardMouseEnter () {
    if (onHover) {
      onHover(offer);
    }
  }

  function handleCardMouseLeave () {
    if (onHover) {
      onHover(null);
    }
  }

  return (
    <article className={`${block}__card place-card`}
      onMouseEnter = {handleCardMouseEnter}
      onMouseLeave = {handleCardMouseLeave}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to ={`/offer/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={block === 'favorites' ? '150' : '260'}
            height={block === 'favorites' ? '110' : '200'}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`place-card__info ${block === 'favorites' ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark
            id = {id}
            isFavorite = {isFavorite}
            variant = 'card'
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style= {{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

const MemorizedCardBlock = memo(CardBlock);

export default MemorizedCardBlock;
