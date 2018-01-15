import setShopsAction from '../../app/actions/set_shops'
import * as actionTypes from '../../app/constants/action_types'

describe('Set Shops ActionCreator', () => {

  it('creates an action to update set of Shops in data store', () => {

    const testShopJSON = JSON.stringify({
      "shops": [
        {
          "id": 9000,
          "avatar_id": 9000,
          "vendor_id": 9000,
          "name": "Test Shop",
          "town": "Storm's Reach",
          "location": "",
          "image": "http://res.cloudinary.com/stormsreach/image/upload/c_scale,w_500/v1495492587/storm_shadow_tavern_R41_b3nujx.jpg",
          "description": "Stuff is sold here",
          "size": "Town",
          "basement": true,
          "published_at": "2018-01-15"
        }
      ]
    });

    const expectedAction = {
      type: actionTypes.SET_SHOPS,
      payload: {
        shops: testShopJSON.shops
      }
    };

    expect(setShopsAction(testShopJSON)).toEqual(expectedAction);
  });

});
