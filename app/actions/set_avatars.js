import { SET_AVATARS } from '../constants/action_types';

/**
 * An "Action Creator" to set the initial app state from an external API
 *  response.
 */
 const setAvatars = (avatars) => ({
   type: SET_AVATARS, payload: { avatars }
 });

 export default setAvatars;
