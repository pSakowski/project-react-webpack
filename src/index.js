import { BrowserRouter } from 'react-router-dom';
import {createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import React from 'react';
import store from './redux/store'
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);