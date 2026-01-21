import { Offer } from '../../types-props.ts';
import { useState } from 'react';

export default function CardHover () {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  function handleHover (offer :Offer | null) {
    if (offer) {
      setActiveOfferId(offer.id);
    }else {
      setActiveOfferId(null);
    }
  }

  return {
    activeOfferId,
    setActiveOfferId,
    handleHover,
  };
}
