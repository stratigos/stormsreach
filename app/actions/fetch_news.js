import { FETCH_NEWS, SET_NEWS } from '../constants/action_types';
import buildNewsQueryService from '../lib/services/build_news_query_service';


const fetchNews = () => ({
  type: FETCH_NEWS,
  payload: {
    query: buildNewsQueryService(),
    success: SET_NEWS
  }
});

export default fetchNews;
