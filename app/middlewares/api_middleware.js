/******************************************************************************
 * Load data from a remote server.
 ******************************************************************************/

import { FETCH_AVATARS, FETCH_RENTALS, FETCH_SHOPS, FETCH_VENDORS } from '../constants/action_types';
import { BASE_URL } from '../constants/api_endpoints';
import apiError from '../actions/api_error';
import apiStart from '../actions/api_start';
import apiDone from '../actions/api_done';

/**
 * Make API calls to "the server". Expect the server to respond with the next
 *  Action name/ID within the `success` parameter of the response, a la FSA, or
 *  "Flux Standard Action".
 */
const apiMiddleware = ({ dispatch }) => next => action => {

  // Pass through if not an API call.
  if([FETCH_AVATARS, FETCH_RENTALS, FETCH_SHOPS, FETCH_VENDORS].indexOf(action.type) === -1) {
    next(action);
    return;
  }

  // Expects a specific structure from this Action, namely a property named
  //  `payload` which will contain the next Action name to evoke.
  const { payload } = action;

  // Notify application of API request beginning, so it can handle feedback for
  //  the user (like an animated whirlygig or something).
  dispatch(apiStart());

  // Fetch the response from the API server, and check for the next Action name
  //  (or ID) in the `Action.payload.success` property.
  // Dispatch `apiDone()` when finished, and dispatch an error Action creator
  //  if any errors or bad HTTP status codes were encountered.
  fetch(BASE_URL + payload.url)
    .then(response => {
      if (response.status >= 300) {
        dispatch(apiDone());
        dispatch(apiError(response.status));
      } else {
        response.json()
          .then(response  => {
            dispatch(apiDone());
            dispatch({ type: payload.success, payload: { response } });
          })
      }
    })
    .catch(() => {
      dispatch(apiDone());
      dispatch(apiError());
    });

};

export default apiMiddleware;
