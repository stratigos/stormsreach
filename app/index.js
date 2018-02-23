/******************************************************************************
 * The stormsreach.com Web Application
 ******************************************************************************/

// Load application dependencies and topmost container Components.
import React from 'react';
import ReactDOM from 'react-dom';
// Load data store from Redux.
import store from './stores/store';
// Load the Redux Actions which will initialize data store content.
import fetchNews    from './actions/fetch_news';
import fetchAvatars from './actions/fetch_avatars';
import fetchRentals from './actions/fetch_rentals';
import fetchShops   from './actions/fetch_shops';
import fetchVendors from './actions/fetch_vendors';
// `Provider` is Redux binding to React.
import { Provider } from 'react-redux';
// React Component for application root node.
import App from './containers/App';
// Load application styles.
import './assets/stylesheets/index.scss';

// Set initial application state.
store.dispatch(fetchNews());
store.dispatch(fetchAvatars());
store.dispatch(fetchRentals());
store.dispatch(fetchShops());
store.dispatch(fetchVendors());

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
