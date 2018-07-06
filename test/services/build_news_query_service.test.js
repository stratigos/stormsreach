import { API_SOTA_ES_QUERY_NEWS } from '../../app/constants/api_endpoints';
import
  buildNewsQueryService
  from '../../app/lib/services/build_news_query_service';

describe('function buildNewsQueryService()', () => {
  it('appends yesterday\'s date in YYYY-MM-DD format to the query URL', () => {
    const yesterdaysYYYYMMDDstring = new Date(Date.now() - (86400000*2))
      .toISOString()
      .split('T')[0];
    const expectedNewsQueryURL = API_SOTA_ES_QUERY_NEWS +
      yesterdaysYYYYMMDDstring;

    expect(buildNewsQueryService()).toEqual(expectedNewsQueryURL);
  });
});
