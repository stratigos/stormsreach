/******************************************************************************
 * The stormsreach.com Web Application
 ******************************************************************************/

// Load application dependencies and topmost container Components.
import React from 'react';
import ReactDOM from 'react-dom';
// Load data store from Redux.
import store from './stores/store';
// Load the Redux Actions which will initialize data store content.
import fetchAvatars from './actions/fetch_avatars';
import fetchRentals from './actions/fetch_rentals';
// `Provider` is Redux binding to React.
import { Provider } from 'react-redux';
// React Component for application root node.
import App from './containers/App';
// Load application styles.
import './assets/stylesheets/index.scss';

// Set initial application state.
store.dispatch(fetchAvatars());
store.dispatch(fetchRentals());

/**
 * Render application to the DOM.
 * The data store is passed as a prop of the wrapping `Provider` Component,
 *  which makes the store available throughout the Component tree.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
