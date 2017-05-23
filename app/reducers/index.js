/******************************************************************************
* Multi responsibility reducer.
*  Handles reducers specific to adding content records to application state.
******************************************************************************/
import { combineReducers } from 'redux';
import avatarsReducer from './avatars_reducer';
import rentalsReducer from './rentals_reducer';
import vendorsReducer from './vendors_reducer';
import loadingReducer from './loading_reducer';
// import errorReducer from './error_reducer';

/**
 * Main Reducer. Each key represents a different piece of application state.
 */
export default combineReducers({
  avatars: avatarsReducer,
  rentals: rentalsReducer,
  vendors: vendorsReducer,
  loading: loadingReducer
});
