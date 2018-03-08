import formatNewsResponseService from '../../app/lib/services/format_news_response_service';
import {
  formatNewsItem,
  formatNewsItemContent,
  defaultEmptyNews
} from '../../app/lib/services/format_news_response_service';

describe('function defaultEmptyNews()', () => {

  const assertedDefaultEmptyNewsItems = defaultEmptyNews();

  it('returns an array', () => {
    expect(assertedDefaultEmptyNewsItems.constructor).toBe(Array);
  });

  describe('array contents', () => {

    const expectedDefaulEmptyNewsItem = {
      newsItemId: '0',
      newsItem: {
        id: '0',
        content: 'No news returned - try again later.'
      }
    };

    it('contains just one object', () => {
      expect(assertedDefaultEmptyNewsItems.length).toBe(1);
    });

    it('has an object that conforms to NewsItem props', () => {
      expect(assertedDefaultEmptyNewsItems[0]).toEqual(expectedDefaulEmptyNewsItem);
    });

  });

});
