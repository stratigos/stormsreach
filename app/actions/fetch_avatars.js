import { FETCH_AVATARS, SET_AVATARS } from '../constants/action_types';

/**
 * An ActionCreator to kick off an asynch API call to fetch initial app state.
 * Include a `payload` object for additional message passing, which will
 *  include the API endpoint (`url`) and the next Action (`SET_AVATARS`)
 * @see [Flux Standard Action](https://github.com/acdlite/flux-standard-action)
 */
const fetchAvatars = () => ({
  type: FETCH_AVATARS,
  payload: {
    url: 'avatars.json',
    success: SET_AVATARS
  }
});

 export default fetchAvatars;
