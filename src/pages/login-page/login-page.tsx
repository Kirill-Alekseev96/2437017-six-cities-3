import { Helmet } from 'react-helmet-async';
import { useState, ChangeEvent } from 'react';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../hooks/useStore';


import { loginAction } from '../../store/async-actions/login-action';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type ChangeHandler = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function LoginPage (): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<AuthData>({
    email: '',
    password: '',
  });

  function handleFiledChange (evt: ChangeHandler) {
    const { value, name } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const email = formData.email.trim();
    const password = formData.password.trim();
    dispatch(loginAction({ email, password }))
      .unwrap()
      .then(() => navigate(AppRoute.Main))
      .catch(() => {});
  }


  return (
    <>
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange = { handleFiledChange } className="login__input form__input" value={formData.email} type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange = { handleFiledChange } className="login__input form__input" value={formData.password} type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

