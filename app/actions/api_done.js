import { API_DONE } from '../constants/action_types';

/**
 * Let application know state should be updated when an API call is finished.
 */
 const apiDone = () => ({
   type: API_DONE
 });

 export default apiDone;
