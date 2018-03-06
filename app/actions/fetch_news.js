import { FETCH_NEWS, SET_NEWS } from '../constants/action_types';
import { API_SOTA_ES_QUERY_NEWS } from '../constants/api_endpoints';

const fetchNews = () => ({
  type: FETCH_NEWS,
  payload: {
    query: API_SOTA_ES_QUERY_NEWS,
    success: SET_NEWS
  }
});

export default fetchNews;
