import fetchRentalsAction from '../../app/actions/fetch_rentals'
import { API_ENDPOINT_RENTALS } from '../../app/constants/api_endpoints';
import * as actionTypes from '../../app/constants/action_types'

describe('Fetch Rentals ActionCreator', () => {

  it('creates an action to request fetching of Rentals with action to perform on success', () => {

    const expectedAction = {
      type: actionTypes.FETCH_RENTALS,
      payload: {
        url: API_ENDPOINT_RENTALS,
        success: actionTypes.SET_RENTALS
      }
    };

    expect(fetchRentalsAction()).toEqual(expectedAction);
  });

});
