import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app/app';
import './assets/styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from './lib/packages/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
