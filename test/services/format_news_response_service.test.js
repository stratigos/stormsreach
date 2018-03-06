import formatNewsResponseService from '../../app/lib/services/format_news_response_service';
import {
  formatNewsItem,
  formatNewsItemContent,
  defaultEmptyNews
} from '../../app/lib/services/format_news_response_service';

describe('function defaultEmptyNews', () => {

  it('returns an array', () => {
    const assertedDefaultEmptyNewsItems = defaultEmptyNews();

    expect(assertedDefaultEmptyNewsItems.constructor).toBe(Array);
  });

  describe('array contents', () => {

    it('contains just one object', () => {
      const assertedDefaultEmptyNewsItems = defaultEmptyNews();

      expect(assertedDefaultEmptyNewsItems.length).toBe(1);
    });

    it('has an object that conforms to NewsItem props', () => {
      const assertedDefaultEmptyNewsItems = defaultEmptyNews();
      const expectedDefaulEmptyNewsItem = {
        newsItemId: '0',
        newsItem: {
          id: '0',
          content: 'No news returned - try again later.'
        }
      };

      expect(assertedDefaultEmptyNewsItems[0]).toEqual(expectedDefaulEmptyNewsItem);
    });

  });

});
