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

describe('function formatNewsItemContent()', () => {

  /**
   * "Source" is a nomenclature of the response body from the ElasticSearch
   *  API response, and represents a "hit" of a search result set.
   */
  const testSource = {
    '@timestamp': '2018-03-06T05:03:05.000Z',
    Killer: 'Lord British',
    LocationEvent: 'MonsterKilledByPlayer',
    PlayerName: 'Anonymous',
    SceneName: 'Novia_R6_City_StormsReach',
    Victim: 'Sheep',
    timestamp: '%{month} %{day} %{hour}:00:00',
    xpos: '119.86',
    ypos: '38.00',
    zpos: '85.65'
  };

  const expectedNewsItemContent = `${testSource.Victim} killed by ${testSource.Killer} on ${testSource['@timestamp']}`;

  const assertededNewsItemContent = formatNewsItemContent(testSource);

  it('creates a String with player name, target, and timestamp', () => {
    expect(assertededNewsItemContent).toEqual(expectedNewsItemContent);
  });

});
