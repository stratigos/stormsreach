/******************************************************************************
 * Temporary API utility until Redux implemented.
 ******************************************************************************/

/**
 * Select from local database until back end developed.
 */
const fetchAvatar = (avatarId) => {
  return fetch('../data/avatars.json')
    .then((response) => {
      return(response.json());
    })
    .then((response) => {
      return(response.avatars[avatarId]);
    })
    .catch((error) => {
      console.log('API ERROR', error);
      // TODO DO SOMETHING WITH ERROR?
    });
};

export default fetchAvatar;
