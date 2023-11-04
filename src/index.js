import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Store/Store'; // Correct the import path
import { Provider } from 'react-redux';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
