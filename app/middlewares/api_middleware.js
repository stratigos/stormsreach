/******************************************************************************
 * Load data from a remote server.
 ******************************************************************************/

import { FETCH_AVATARS } from '../constants/action_types';
import { BASE_URL } from '../constants/defaults';
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
  if(action.type !== FETCH_AVATARS) {
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
  // Dispatch `apiDone()` when finished.
  fetch(BASE_URL + payload.url)
    .then(response => {
      // Check for any non successful HTTP status codes.
      if (response.status >= 300) {
        dispatch(apiDone());
        dispatch(apiError(response.status));
      } else {
        // TODO: Remove `avatars` specific logic, and handle response in the
        //  next Action (after its been JSONified here). The next Action may
        //  need to call a subsequent ActionCreator (e.g., handle the response
        //  having returned an empty data set after a successful call).
        response.json()
          .then(response => response.avatars)
          .then(avatars  => {
            dispatch(apiDone());
            dispatch({ type: payload.success, payload: { avatars } });
          })
      }
    })
    .catch(() => {
      dispatch(apiDone());
      dispatch(apiError());
    });

};

export default apiMiddleware;
