import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import App from './components/app/app.tsx';
import { AuthorizationStatus } from './const.ts';

const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App authorizationStatus = {authorizationStatus}/>
    </Provider>
  </React.StrictMode>
);
