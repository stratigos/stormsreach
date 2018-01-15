import setAvatarsAction from '../../app/actions/set_avatars'
import * as actionTypes from '../../app/constants/action_types'

describe('Set Avatars ActionCreator', () => {

  it('creates an action to update set of Avatars in data store', () => {

    const testAvatarJSON = JSON.stringify({
      "avatars": [
        {
          "id": 9000,
          "name": "Testy McTesterson",
          "image": "http://res.cloudinary.com/stormsreach/image/upload/v1494110007/black-tortoise-200_ujalrg.jpg",
          "town": "Storm's Reach",
          "abilities": ["Tailoring", "Cooking", "Carpentry"]
        }
      ]
    });

    const expectedAction = {
      type: actionTypes.SET_AVATARS,
      payload: {
        avatars: testAvatarJSON.avatars
      }
    };

    expect(setAvatarsAction(testAvatarJSON)).toEqual(expectedAction);
  });

});
