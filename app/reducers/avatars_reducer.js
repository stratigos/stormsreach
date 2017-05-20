import { ADD_AVATAR, SET_AVATARS } from '../constants/action_types';

/**
 * Reducer for handling Avatar (site member) actions.
 */
const avatarsReducer = (avatars = [], action) => {
  switch (action.type) {
    case ADD_AVATAR:
      return avatars.concat( action.payload.avatar );
    case SET_AVATARS:
      return action.payload.response.avatars;
    // TODO: ENHANCE REDUCER WITH `avatarReducer(avatar, action)` TO CALL HERE?
    // case SET_AVATAR:
    //   return action.payload.avatar;
  }

  return avatars;
};

export default avatarsReducer;
