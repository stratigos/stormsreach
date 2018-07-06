import { API_SOTA_ES_QUERY_NEWS } from '../../constants/api_endpoints';

/**
 * Build the dynamic query parameters for the SoTA Elastic Search query, and
 * return the assembled URL.
 */
const buildNewsQueryService = () => {
  let yesterdaysYYYYMMDD = new Date(Date.now() - (86400000*2))
    .toISOString()
    .split('T')[0];
  return `${API_SOTA_ES_QUERY_NEWS}${yesterdaysYYYYMMDD}`;
};

export default buildNewsQueryService;
