import apiDoneAction from '../../app/actions/api_done'
import * as actionTypes from '../../app/constants/action_types'

describe('API Done ActionCreator', () => {

  it('creates an action to broadcast end of API request', () => {

    const expectedAction = {
      type: actionTypes.API_DONE
    };

    expect(apiDoneAction()).toEqual(expectedAction);
  });

});
