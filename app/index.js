import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
require('./index.css');

/**
 * Render component to the DOM.
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);