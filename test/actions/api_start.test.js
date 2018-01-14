import apiStartAction from '../../app/actions/api_start'
import * as actionTypes from '../../app/constants/action_types'

describe('API Start ActionCreator', () => {

  it('creates an action to broadcast beginning of API request', () => {

    const expectedAction = {
      type: actionTypes.API_START
    };

    expect(apiStartAction()).toEqual(expectedAction);
  });

});
