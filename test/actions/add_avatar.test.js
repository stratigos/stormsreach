import addAvatarAction from '../../app/actions/add_avatar'
import * as actionTypes from '../../app/constants/action_types'

describe('Add Avatar ActionCreator', () => {

  it('creates an action to add an Avatar', () => {

    const testAvatar = {
      "id": 123,
      "name": "Testy McTesterson",
      "image": "http://res.cloudinary.com/stormsreach/image/upload/v1494110007/black-tortoise-200_ujalrg.jpg",
      "town": "Storm's Reach",
      "abilities": ["Tailoring", "Cooking", "Carpentry"]
    };

    const expectedAction = {
      type: actionTypes.ADD_AVATAR,
      payload: {
        avatar: testAvatar
      }
    };

    expect(addAvatarAction(testAvatar)).toEqual(expectedAction);
  });

});
