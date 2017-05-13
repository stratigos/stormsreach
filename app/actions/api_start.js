import { API_START } from '../constants/action_types';

/**
 * Let application know state should be updated when an API call is starting.
 */
 const apiStart = () => ({
   type: API_START
 });

 export default apiStart;
