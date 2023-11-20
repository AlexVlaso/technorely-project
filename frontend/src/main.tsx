import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app/app';
import './assets/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
