import { BounceLoader } from 'react-spinners';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  position: 'fixed',
  left: '40%',
  top: '40%',
};

export default function Spinner() {


  return (
    <div className="sweet-loading">
      <BounceLoader
        cssOverride={override}
        size={300}
        color='#bfdddd'
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
