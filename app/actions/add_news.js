import { ADD_NEWS } from '../constants/action_types';

/**
 * An "Action Creator" to create our "add News" Action.
 */
const addNews = (newsItem) => ({
  type: ADD_NEWS,
  payload: { newsItem }
});

export default addNews;
