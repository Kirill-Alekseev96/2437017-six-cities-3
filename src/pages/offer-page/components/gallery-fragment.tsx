import { memo } from 'react';

interface imagesProps {
  images: string[];
}

function OfferGallery ({images}:imagesProps){
  const displayImages = images?.slice(0, 6) || [];
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

