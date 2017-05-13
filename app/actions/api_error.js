import { BROADCAST_ERRORS } from '../constants/action_types';

/**
 * Custom error handler Action, allowing for fallback if Middlewares or Actions
 *  produce erroneous results.
 */
const apiError = (error_message) => {
 let error = 'Error: ';

  // Simple check for HTTP Status code error.
  if (error_message && !isNaN(error_message)) {
    error += `External call yielded HTTP Status: ${error_message}`;
  } else {
    error += 'Something went wrong with API call.';
  }

  return {
    type: BROADCAST_ERRORS, error
  }
};

 export default apiError;
