import { BROADCAST_ERRORS } from '../constants/action_types';

/**
 * Custom error ActionCreator, allowing for fallback if Middlewares or Actions
 *  produce erroneous results.
 */
const apiError = (error_message) => {

  const error = `Error: External call returned error message or HTTP Status: ${error_message}`;

  return {
    type: BROADCAST_ERRORS,
    error
  }
};

 export default apiError;
