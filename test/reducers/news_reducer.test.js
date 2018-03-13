import newsReducer from '../../app/reducers/news_reducer';
import { ADD_NEWS, SET_NEWS } from '../../app/constants/action_types';

describe('newsReducer', () => {

  const testNewsItemIdOne = 'abc123';
  const testNewsItemContentOne = 'Sheep killed by Lord British on 2018-03-10T15:30:00.000Z';

  const testNewsItemIdTwo = 'def234';
  const testNewsItemContentTwo = 'Chicken killed by Darkstarr on 2018-03-10T15:30:00.000Z';

  const expectedInitialNewsItem = {
    newsItemId: '0',
    newsItem: {
      id: '0',
      content: 'Loading...'
    }
  };

  const newsItemDoubleOne = {
    newsItemId: testNewsItemIdOne,
    newsItem: {
      id: testNewsItemIdOne,
      content: testNewsItemContentOne
    }
  };

  const newsItemDoubleTwo = {
    newsItemId: testNewsItemIdTwo,
    newsItem: {
      id: testNewsItemIdTwo,
      content: testNewsItemContentTwo
    }
  };

  const addNewsActionDouble = {
    type: ADD_NEWS,
    payload: {
      newsItem: newsItemDoubleOne
    }
  };

  const setNewsActionDouble = {
    type: SET_NEWS,
    payload: {
      newsItems: [ newsItemDoubleOne, newsItemDoubleTwo ]
    }
  };


  // Initial state is an incoming project on Kanban board :-)
  // This skipped test serves as a boilerplate to demo intended Initial
  //  state of the NewsItem data.
  xit('should return the initial state', () => {
    const expectedInitialNewsItemState = [expectedInitialNewsItem];

    expect( newsReducer([], {}) ).toEqual(expectedInitialNewsItemState);
  });

  it('adds a NewsItem to the store with ADD_NEWS action', () => {
    const expectedNewsItemState = [newsItemDoubleOne];

    expect( newsReducer([], addNewsActionDouble) ).toEqual(expectedNewsItemState);
  });

  it('sets a list of NewsItem objects with SET_NEWS action', () => {
    const expectedNewsItemsState = [ newsItemDoubleOne, newsItemDoubleTwo ];

    expect( newsReducer([], setNewsActionDouble) ).toEqual(expectedNewsItemsState);
  });

});
