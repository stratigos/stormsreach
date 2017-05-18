import { API_START, API_DONE } from '../constants/action_types';

/**
 * Reducer for displaying application loading state.
 */
const loadingReducer = (loading = false, action) => {
  switch (action.type) {
    case API_START:
      return loading = true;
    case API_DONE:
      return loading = false;
  }

  return loading;
};

export default loadingReducer;
