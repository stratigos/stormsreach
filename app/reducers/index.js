/******************************************************************************
* Multi responsibility reducer.
*  Handles reducers specific to adding content records to application state.
******************************************************************************/
import { combineReducers } from 'redux';
import avatarsReducer from './avatars_reducer';
import rentalsReducer from './rentals_reducer';
import loadingReducer from './loading_reducer';
// import errorReducer from './error_reducer';
// import uiReducer from './ui_reducer';

/**
 * Main Reducer.
 */
// export default combineReducers({
//   avatars: avatarsReducer,
//   error: errorReducer,
//   serverStatus: uiReducer
// });
export default combineReducers({
  avatars: avatarsReducer,
  rentals: rentalsReducer,
  loading: loadingReducer
});
