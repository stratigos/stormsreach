import { FETCH_NEWS } from '../../app/constants/action_types';
import { API_EXTERNAL_PROXY, API_ENDPOINT_SOTA_ES_BASE } from '../../app/constants/api_endpoints';
import newsApiMiddleware from '../../app/middlewares/news_api_middleware';

describe('newsApiMiddleware', () => {

  /**
   * Simplified response content for testing.
   * The actual response from SoTA Elastic Search server is a lot more
   *  complex than `newsResponseBodyDouble`.
   * @see `test/services/format_news_response_service` for more robust
   *  ES response structure.
   */
  const newsResponseBodyDouble = {
    hits: [{
      _id: 'abc123',
      source: {
        Victim: 'Sheep',
        Killer: 'Lord British',
        '@timestamp': '2018-03-05T21:59:10+00:00'
      }

    }]
  };

  /**
   * Mock `fetch()`, since we dont want any external API calls.
   */
  global.fetch = jest.fn().mockImplementation(() => {
    let promiseDouble = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        json: () => {
          return newsResponseBodyDouble;
        }
      });
    });

    return promiseDouble;
  });

  /**
   * The entire Redux `dispatch` behavior needs mocked to test middleware.
   *  Mock the `getState()`, `dispatch()`, and `next()` functions to simulate
   *  the dispatcher behavior.
   * @see [Redux recipes](https://redux.js.org/recipes/writing-tests#middleware)
   */
   const create = () => {

     // Mock data store
     const store = {
       getState: jest.fn(() => ({})),
       dispatch: jest.fn()
     };

     // Mock next action call
     const next = jest.fn();

     // Encapsulate call to middleware being tested
     const invoke = (action) => newsApiMiddleware(store)(next)(action);

     return { store, next, invoke };
   };

  /**
   * Test that middleware is calling `getState`, `dispatch`, and `next`
   *  functions at the right time.
   */
  describe('Redux dispatch behavior', () => {

    it('passes through for irrelevant action', () => {
      const { next, invoke } = create();

      const irrelevantActionDouble = {
        type: 'TEST_ACTION',
        payload: {
          query: 'TEST_URI_PATH',
          success: 'TEST_DONT_DO_THINGS'
        }
      };

      invoke(irrelevantActionDouble);

      expect(next).toHaveBeenCalledWith(irrelevantActionDouble);
    });

    // Fix the mocking of the data store and dispatch() to complete this test.
    //  It is left here for now to exemplify the middleware design.
    xit('passes dispatch() and dispatches update of application state', () => {
      const { store, invoke } = create();

      invoke((dispatch) => { dispatch(); });

      expect(store.dispatch).toHaveBeenCalled();
    });

  });

  /**
   * Test that the external API is called.
   * Resulting formatting of data returned/set is a responsibility of
   *  `formatNewsResponseService` and `newsReducer`.
   */
  describe('external API request behavior', () => {

    const expectedActionDouble = {
      type: FETCH_NEWS,
      payload: {
        query: 'TEST_SOTA_ES_QUERY',
        success: 'TEST_DO_THINGS'
      }
    };

    /**
     * Note that `API_EXTERNAL_PROXY` is used to handle CORS restrictions, and
     *  is a necessary component of this application.
     */
    const expectedApiRequest = API_EXTERNAL_PROXY + API_ENDPOINT_SOTA_ES_BASE + expectedActionDouble.payload.query;

    it('calls external API when appropriate action passed in', () => {
      const { invoke } = create();

      invoke(expectedActionDouble);

      expect(global.fetch).toHaveBeenCalledWith(expectedApiRequest);
    });
  });

});
