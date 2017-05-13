import { ADD_AVATAR } from '../constants/action_types';

/**
 * An "Action Creator" to create our "add Avatar" Action.
 */
const addAvatar = (avatar) => ({
  type: ADD_AVATAR, payload: { avatar }
});

export default addAvatar;
