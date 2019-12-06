import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './store';  //import object
import App from './App';

ReactDOM.render(
  <App store={STORE} />, //what??
  document.getElementById('root'),
);
