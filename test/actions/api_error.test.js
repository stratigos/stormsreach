import apiErrorAction from '../../app/actions/api_error'
import * as actionTypes from '../../app/constants/action_types'

describe('Error ActionCreator', () => {

  it('creates an action to broadcast a general error message or status code', () => {

    const errorText = 'Internal Servers are Melting!';
    const error     = `Error: External call returned error message or HTTP Status: ${errorText}`;

    const expectedAction = {
      type: actionTypes.BROADCAST_ERRORS,
      error
    };

    expect(apiErrorAction(errorText)).toEqual(expectedAction);
  });

  it('allows an HTTP Status code to be printed in the error', () => {

    const statusCode = 401;
    const error      = `Error: External call returned error message or HTTP Status: ${statusCode}`;

    const expectedAction = {
      type: actionTypes.BROADCAST_ERRORS,
      error
    };

    expect(apiErrorAction(statusCode)).toEqual(expectedAction);
  });

});
