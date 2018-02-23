/******************************************************************************
* Multi responsibility reducer.
*  Handles reducers specific to adding content records to application state.
******************************************************************************/
import { combineReducers } from 'redux';
import avatarsReducer from './avatars_reducer';
import newsReducer from './news_reducer';
import rentalsReducer from './rentals_reducer';
import shopsReducer from './shops_reducer';
import vendorsReducer from './vendors_reducer';
import loadingReducer from './loading_reducer';
// import errorReducer from './error_reducer';

/**
 * Main Reducer. Each key represents a different piece of application state.
 */
export default combineReducers({
  avatars: avatarsReducer,
  newsItems: newsReducer,
  rentals: rentalsReducer,
  shops:   shopsReducer,
  vendors: vendorsReducer,
  loading: loadingReducer
});
