import { useAppSelector } from '../../hooks/useStore';
import { selectError } from '../../store/selectors/base-selectors';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectError);

  return (error)
    ? <div className='error-message'>{error}</div> : null;
}

