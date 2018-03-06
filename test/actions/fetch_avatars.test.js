import fetchAvatarsAction from '../../app/actions/fetch_avatars';
import { API_ENDPOINT_AVATARS } from '../../app/constants/api_endpoints';
import * as actionTypes from '../../app/constants/action_types';

describe('Fetch Avatars ActionCreator', () => {

  it('creates an action to request fetching of Avatars with action to perform on success', () => {

    const expectedAction = {
      type: actionTypes.FETCH_AVATARS,
      payload: {
        url: API_ENDPOINT_AVATARS,
        success: actionTypes.SET_AVATARS
      }
    };

    expect(fetchAvatarsAction()).toEqual(expectedAction);
  });

});
