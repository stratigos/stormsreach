// Load application dependencies and topmost container Components.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// Load application styles.
import './assets/stylesheets/index.scss';

/**
 * Render component to the DOM.
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
