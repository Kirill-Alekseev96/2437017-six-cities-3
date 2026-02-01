import { RATING_STARS } from '../../../const.ts';
import { useState, ChangeEvent, Fragment } from 'react';

type ChangeHandler = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function ReviewForm () {
  const [formData, setFromData] = useState({
    rating: 0,
    review: '',
  });

  function fieldChangeHandle (evt:ChangeHandler) {
    const { name, value, type } = evt.target;

    if (type === 'radio') {
      setFromData({
        ...formData,
        [name]: Number(value),
      });
    }else {
      setFromData({
        ...formData,
        [name]: value,
      });
    }
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map(({value , title}) => (
          <Fragment key={value}>
            <input onChange={ fieldChangeHandle } className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}"-stars"`} type="radio" checked={formData.rating === value}/>
            <label htmlFor={`${value}"-stars"`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment >
        ))}
      </div>
      <textarea onChange={ fieldChangeHandle } className="reviews__textarea form__textarea" id="review" name="review" value = {formData.review} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
