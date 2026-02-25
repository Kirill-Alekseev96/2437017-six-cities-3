import { Link } from 'react-router-dom';
import './not-found-page.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Page not found</p>
        <Link className="not-found__link" to="/">
          Go to main page
        </Link>
      </div>
    </div>
  );
}
