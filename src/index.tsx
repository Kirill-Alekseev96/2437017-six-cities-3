import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

import App from './components/app/app.tsx';
import ErrorMessage from './components/error-message/error-message.tsx';
import { checkAuthAction } from './store/async-actions/authorization-action.ts';
import { BrowserRouter } from 'react-router-dom'; //Все пути начинай отсюда

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter basename="/2437017-six-cities-3">
        <ErrorMessage />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
