import fetchShopsAction from '../../app/actions/fetch_shops'
import { API_ENDPOINT_SHOPS } from '../../app/constants/api_endpoints';
import * as actionTypes from '../../app/constants/action_types'

describe('Fetch Shops ActionCreator', () => {

  it('creates an action to request fetching of Shops with action to perform on success', () => {

    const expectedAction = {
      type: actionTypes.FETCH_SHOPS,
      payload: {
        url: API_ENDPOINT_SHOPS,
        success: actionTypes.SET_SHOPS
      }
    };

    expect(fetchShopsAction()).toEqual(expectedAction);
  });

});
