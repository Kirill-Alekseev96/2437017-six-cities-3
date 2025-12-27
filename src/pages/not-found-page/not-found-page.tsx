
import { Link } from 'react-router-dom';

export default function NotFoundPage (): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <p> «404 Not Found» </p>
      <Link className="locations__item-link tabs__item" to='/'>
        <span> Главная страница </span>
      </Link>
    </main>
  );
}
