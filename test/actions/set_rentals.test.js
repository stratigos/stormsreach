import setRentalsAction from '../../app/actions/set_rentals'
import * as actionTypes from '../../app/constants/action_types'

describe('Set Rentals ActionCreator', () => {

  it('creates an action to update set of Rentals in data store', () => {

    const testRentalJSON = JSON.stringify({
      "rentals": [
        {
          "id": 9000,
          "avatar_id": 900,
          "town": "Storm's Reach",
          "location": "-68.9, 36.0, 423.8",
          "price": 10,
          "description": "Things and stuff happen!",
          "size": "Village",
          "basement": true,
          "name": "",
          "published_at": "2018-01-15"
        }
      ]
    });

    const expectedAction = {
      type: actionTypes.SET_RENTALS,
      payload: {
        rentals: testRentalJSON.rentals
      }
    };

    expect(setRentalsAction(testRentalJSON)).toEqual(expectedAction);
  });

});
