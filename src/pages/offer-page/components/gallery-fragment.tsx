import { memo } from 'react';
import { OFFER_IMAGES } from '../../../const';

interface imagesProps {
  images: string[];
}

function OfferGallery ({images}:imagesProps){
  const displayImages = images?.slice(OFFER_IMAGES.MIN_COUNT, OFFER_IMAGES.MAX_COUNT) || [];
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {displayImages.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}

const MemorizedOfferGallery = memo(OfferGallery);

export default MemorizedOfferGallery;

