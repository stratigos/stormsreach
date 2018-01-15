import fetchVendorsAction from '../../app/actions/fetch_vendors'
import { API_ENDPOINT_VENDORS } from '../../app/constants/api_endpoints';
import * as actionTypes from '../../app/constants/action_types'

describe('Fetch Vendors ActionCreator', () => {

  it('creates an action to request fetching of Vendors with action to perform on success', () => {

    const expectedAction = {
      type: actionTypes.FETCH_VENDORS,
      payload: {
        url: API_ENDPOINT_VENDORS,
        success: actionTypes.SET_VENDORS
      }
    };

    expect(fetchVendorsAction()).toEqual(expectedAction);
  });

});
