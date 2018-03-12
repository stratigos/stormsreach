import formatNewsResponseService from '../../app/lib/services/format_news_response_service';
import {
  formatNewsItem,
  formatNewsItemContent,
  defaultEmptyNews
} from '../../app/lib/services/format_news_response_service';

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

/**
 * A "hit" is a member of the Elastic Search nomenclature for query results.
 */
const testHitId = '  abc123 ';

const testNewsHit = {
  _id: testHitId,
  _source: testSource
};

const expectedNewsItemContent = `${testSource.Victim} killed by ${testSource.Killer} on ${testSource['@timestamp']}`;

const expectedDefaulEmptyNewsItem = {
  newsItemId: '0',
  newsItem: {
    id: '0',
    content: 'No news returned - try again later.'
  }
};

describe('function formatNewsResponseService()', () => {

  const emptyNewsJSON = {
    hits: {
      total: 0,
      hits: []
    }
  };

  /**
   * This sample structure of a SoTA Elastic Search response has its property
   *  naming convention and values maintained to allow for better understanding
   *  of the response's data.
   */
  const testSuccessfulHitsJSON = {
    "took": 107,
    "timed_out": false,
    "_shards": {
      "total": 159,
      "successful": 159,
      "failed": 0
    },
    "hits": {
      "total": 14, // most hits omitted for testing brevity
      "max_score": 11.974642,
      "hits": [
        {
          "_index": "logstash-2018.03.10",
          "_type": "logs",
          "_id": "AWIQkpfI6mCHR0PU114n",
          "_score": 11.974642,
          "_source": {
            "ypos": "37.59",
            "SceneName": "Novia_R6_City_StormsReach",
            "PlayerName": "Lord British",
            "LocationEvent": "MonsterKilledByPlayer",
            "Killer": "Lord British",
            "timestamp": "Mar 10 09:30:00",
            "Victim": "Sheep",
            "zpos": "114.39",
            "xpos": "127.12",
            "@timestamp": "2018-03-10T15:30:00.000Z"
          }
        },
        {
          "_index": "logstash-2018.03.10",
          "_type": "logs",
          "_id": "AWIQkrhs6mCHR0PU118j",
          "_score": 11.974642,
          "_source": {
            "ypos": "38.00",
            "SceneName": "Novia_R6_City_StormsReach",
            "PlayerName": "Darkstarr",
            "LocationEvent": "MonsterKilledByPlayer",
            "Killer": "Darkstarr",
            "timestamp": "Mar 10 09:30:00",
            "Victim": "Chicken",
            "zpos": "117.22",
            "xpos": "109.57",
            "@timestamp": "2018-03-10T15:30:00.000Z"
          }
        },
        {
          "_index": "logstash-2018.03.10",
          "_type": "logs",
          "_id": "AWIQkzeQ6mCHR0PU12MU",
          "_score": 11.885955,
          "_source": {
            "ypos": "37.10",
            "SceneName": "Novia_R6_City_StormsReach",
            "PlayerName": "Atos",
            "LocationEvent": "MonsterKilledByPlayer",
            "Killer": "Atos",
            "timestamp": "Mar 10 09:30:00",
            "Victim": "Duck",
            "zpos": "100.70",
            "xpos": "130.28",
            "@timestamp": "2018-03-10T15:30:00.000Z"
          }
        }
      ]
    }
  };

  it('returns an array with single default item when no hits are returned', () => {
    const expectedArrayOfEmptyNewsItems = [expectedDefaulEmptyNewsItem];

    expect(formatNewsResponseService(emptyNewsJSON)).toEqual(expectedArrayOfEmptyNewsItems);
  });

  it('formats Elastic Search response into array of NewsItem structures', () => {
    const expectedArrayOfNewsItems = [
      {
        newsItemId: 'AWIQkpfI6mCHR0PU114n',
        newsItem: {
          id: 'AWIQkpfI6mCHR0PU114n',
          content: 'Sheep killed by Lord British on 2018-03-10T15:30:00.000Z'
        }
      },
      {
        newsItemId: 'AWIQkrhs6mCHR0PU118j',
        newsItem: {
          id: 'AWIQkrhs6mCHR0PU118j',
          content: 'Chicken killed by Darkstarr on 2018-03-10T15:30:00.000Z'
        }
      },
      {
        newsItemId: 'AWIQkzeQ6mCHR0PU12MU',
        newsItem: {
          id: 'AWIQkzeQ6mCHR0PU12MU',
          content: 'Duck killed by Atos on 2018-03-10T15:30:00.000Z'
        }
      }
    ];

    expect(formatNewsResponseService(testSuccessfulHitsJSON)).toEqual(expectedArrayOfNewsItems);
  });

});

describe('function defaultEmptyNews()', () => {

  const assertedDefaultEmptyNewsItems = defaultEmptyNews();

  it('returns an array', () => {
    expect(assertedDefaultEmptyNewsItems.constructor).toBe(Array);
  });

  describe('array contents', () => {

    it('contains just one object', () => {
      expect(assertedDefaultEmptyNewsItems.length).toBe(1);
    });

    it('has an object that conforms to NewsItem props', () => {
      expect(assertedDefaultEmptyNewsItems[0]).toEqual(expectedDefaulEmptyNewsItem);
    });

  });

});

describe('function formatNewsItemContent()', () => {

  const assertededNewsItemContent = formatNewsItemContent(testSource);

  it('creates a String with player name, target, and timestamp', () => {
    expect(assertededNewsItemContent).toEqual(expectedNewsItemContent);
  });

});

describe('function formatNewsItem()', () => {

  const expectedHitId = testHitId.trim();

  const expectedNewsItem = {
    newsItemId: expectedHitId,
    newsItem: {
      id: expectedHitId,
      content: expectedNewsItemContent
    }
  };

  const assertedNewsItem = formatNewsItem(testNewsHit);

  it('formats Elastic Search hit into NewsItem structure', () => {
    expect(assertedNewsItem).toEqual(expectedNewsItem);
  });

  it('trims the ID', () => {
    expect(assertedNewsItem.newsItemId).toBe(expectedHitId);
    expect(assertedNewsItem.newsItem.id).toBe(expectedHitId);
  });

});
