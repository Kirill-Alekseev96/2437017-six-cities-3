import { Offer } from '../../../types/offer-data.ts';
import MemorizedReviewForm from './form-review-offer.tsx';
import ListReview from './list-review.tsx';
import MemorizedOfferGallery from './gallery-fragment.tsx';
import { AuthorizationStatus } from '../../../const.ts';
import ButtonBookmark from '../../../components/card-block/button-bookmark.tsx';
import Spinner from '../../../components/spinner/spinner.tsx';

interface OfferWrapperProps {
  currentOffer: Offer | null;
  authorizationStatus: AuthorizationStatus;
}

export default function OfferWrapper ({currentOffer, authorizationStatus}: OfferWrapperProps): JSX.Element {

  if (!currentOffer) {
    return <Spinner/>;
  }

  const { id, title, type, price, isFavorite, isPremium, rating, description, goods, host, images, maxAdults, bedrooms } = currentOffer;

  return (
    <>
      <MemorizedOfferGallery images={images}/>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium &&
            <div className="offer__mark">
              <span>Premium</span>
            </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <ButtonBookmark
              id = {id}
              isFavorite = {isFavorite}
              variant = 'offer'
            />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style= {{width: `${Math.round(rating) * 20}%`}}></span>
              <span className="visually-hidden">{rating}</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good) => (
                <li key = {good} className="offer__inside-item">{good}</li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt={host.name}/>
              </div>
              <span className="offer__user-name">
                {host.name}
              </span>
              {host.isPro && (
                <span className="offer__user-status">Pro</span>
              )}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <ListReview/>
            {authorizationStatus === AuthorizationStatus.Auth && <MemorizedReviewForm/>}
          </section>
        </div>
      </div>
    </>
  );
}
