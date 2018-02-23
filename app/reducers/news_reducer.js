import { ADD_NEWS, SET_NEWS } from '../constants/action_types';

const newsReducer = (newsItems = [], action) => {
  switch (action.type) {
    case ADD_NEWS:
      return newsItems.concat( action.payload.newsItem );
    case SET_NEWS:
      return action.payload.newsItems;
  }

  return newsItems;
};

export default newsReducer;
