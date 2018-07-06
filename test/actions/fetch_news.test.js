import fetchNewsAction from '../../app/actions/fetch_news';
import { API_SOTA_ES_QUERY_NEWS } from '../../app/constants/api_endpoints';
import * as actionTypes from '../../app/constants/action_types';

describe('Fetch News ActionCreator', () => {

  it('creates fetch NewsItems action, with query and success action', () => {
    const expectedNewsQuery = stubNewsQueryUrl();

    const expectedAction = {
      type: actionTypes.FETCH_NEWS,
      payload: {
        query: expectedNewsQuery,
        success: actionTypes.SET_NEWS
      }
    };

    expect(fetchNewsAction()).toEqual(expectedAction);
  });

});

const stubNewsQueryUrl = () => {
  const buildNewsQueryServiceMock = jest.fn();
  buildNewsQueryServiceMock.mockReturnValue(
    API_SOTA_ES_QUERY_NEWS + (new Date(Date.now() - (86400000*2))
      .toISOString()
      .split('T')[0]
    )
  );

  return buildNewsQueryServiceMock();
};
