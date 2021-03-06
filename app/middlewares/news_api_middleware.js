/******************************************************************************
 * Load data from Portalarium's "Shroud of the Avatar" Elastic Search server.
 ******************************************************************************/

import { FETCH_NEWS } from '../constants/action_types';
import { API_EXTERNAL_PROXY, API_ENDPOINT_SOTA_ES_BASE } from '../constants/api_endpoints';
import apiError from '../actions/api_error';
import apiStart from '../actions/api_start';
import apiDone from '../actions/api_done';
import formatNewsResponseService from '../lib/services/format_news_response_service';

/**
 * Make call to SoTA Elastic Search server by applying the Action's `query` to
 *  the Elastic Search instance's search endpoint.
 * - for info on making calls, see [this post](https://www.shroudoftheavatar.com/forum/index.php?threads/public-stats-api.89186/page-2#post-808458)
 * - field mapping can be seen [here](http://shroudoftheavatar.com:9200/_mapping)
 *   - check for a recent "logstash" entry, go to "logs > properties" and view
 *     current list of searchable attributes / events
 * - combine searh fields from the mapping with known values for desired
 *   events, using the Storm's Reach `SceneName` field.
 * - E.g, `?q=SceneName:Novia_R6_City_StormsReach%20AND%20LocationEvent:MonsterKilledByPlayer`
 *   for loading farm animals harvested in town.
 */
const newsApiMiddleware = ({ dispatch }) => next => action => {

  // Pass through if not a SoTA Elastic Search API call.
  if(action.type != FETCH_NEWS) {
    next(action);
    return;
  }

  // Since Flux Standard Action pattern is used, expect a `payload` prop.
  const { payload } = action;

  dispatch(apiStart());

  // Use the FETCH_ACTION `payload.query` to request the latest "news".
  fetch(API_EXTERNAL_PROXY + API_ENDPOINT_SOTA_ES_BASE + payload.query)
    .then(newsResponse => {
      if (newsResponse.status >= 400) {
        dispatch(apiDone());
        dispatch(apiError(newsResponse.status));
      } else {
        newsResponse.json()
          .then(newsResponse  => {
            dispatch(apiDone());
            dispatch({ type: payload.success, payload: { newsItems: formatNewsResponseService(newsResponse) } });
          })
      }
    })
    .catch(() => {
      dispatch(apiDone());
      dispatch(apiError());
    });

};

export default newsApiMiddleware;
