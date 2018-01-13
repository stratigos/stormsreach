import apiErrorAction from '../../app/actions/api_error'
import * as actionTypes from '../../app/constants/action_types'

describe('error action', () => {

  it('creates an action to broadcast a general error', () => {

    const errorText = 'This doesnt matter unless its an HTTP Status code...';
    const error     = 'Error: Something went wrong with API call.';

    const expectedAction = {
      type: actionTypes.BROADCAST_ERRORS,
      error
    };

    expect(apiErrorAction(errorText)).toEqual(expectedAction);
  });

  it('creates an action to broadcast an erroneous HTTP Status code was returned', () => {

    const statusCode = 401;
    const error      = `Error: External call yielded HTTP Status: ${statusCode}`;

    const expectedAction = {
      type: actionTypes.BROADCAST_ERRORS,
      error
    };

    expect(apiErrorAction(statusCode)).toEqual(expectedAction);
  });

});
