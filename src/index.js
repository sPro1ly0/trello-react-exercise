import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './store';  //import object
import App from './App';

ReactDOM.render(
  <App store={STORE} />, //creating a props called store equal to our STORE object
  document.getElementById('root'),
);
