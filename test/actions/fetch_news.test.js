import fetchNewsAction from '../../app/actions/fetch_news';
import { API_SOTA_ES_QUERY_NEWS } from '../../app/constants/api_endpoints';
import * as actionTypes from '../../app/constants/action_types';

describe('Fetch News ActionCreator', () => {

  it('creates fetching of NewsItems action, with query and success action', () => {

    const expectedAction = {
      type: actionTypes.FETCH_NEWS,
      payload: {
        query: API_SOTA_ES_QUERY_NEWS,
        success: actionTypes.SET_NEWS
      }
    };

    expect(fetchNewsAction()).toEqual(expectedAction);
  });

});
