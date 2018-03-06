/**
 * Service object for formatting JSON content from the SoTA Elastic Search
 *  query into application data.
 * @return Array NewsItem data objects.
 */
const formatNewsResponseService = (newsJson) => {
  return (
    (
      newsJson.hits.total > 0 &&
      newsJson.hits.hits.map(hit => formatNewsItem(hit))
    ) ||
    defaultEmptyNews()
  );
};

export const formatNewsItem = (newsHit) => {
  return {
    newsItemId: newsHit._id.trim(),
    newsItem: {
      id: newsHit._id.trim(),
      content: formatNewsItemContent(newsHit._source)
    }
  };
};

export const formatNewsItemContent = (source) => {
  return `${source.Victim} killed by ${source.Killer} on ${source['@timestamp']}`;
};

export const defaultEmptyNews = () => {
  return [{
    newsItemId: '0',
    newsItem: {
      id: '0',
      content: 'No news returned - try again later.'
    }
  }];
};

export default formatNewsResponseService;
