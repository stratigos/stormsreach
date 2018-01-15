import setVendorsAction from '../../app/actions/set_vendors'
import * as actionTypes from '../../app/constants/action_types'

describe('Set Vendors ActionCreator', () => {

  it('creates an action to update set of Vendors in data store', () => {

    const testVendorJSON = JSON.stringify({
      "vendors": [
        {
          "id": 9000,
          "avatar_id": 9000,
          "shop_id": 9000,
          "name": "Testy McSalesman",
          "town": "Storm's Reach",
          "location": "",
          "image": "",
          "description": "Buy my stuff!",
          "published_at": "2018-01-15"
        }
      ]
    });

    const expectedAction = {
      type: actionTypes.SET_VENDORS,
      payload: {
        vendors: testVendorJSON.vendors
      }
    };

    expect(setVendorsAction(testVendorJSON)).toEqual(expectedAction);
  });

});
