import {
  SOTA_ES_SCENE_STORMS_REACH,
  SOTA_ES_EVENT_MONSTER_PLAYER
} from './defaults';

/**
 * API host to application "back end".
 *  - Using local JSON file data store for now, back end TBD.
 */
export const BASE_URL = '../data/';

/**
 * Strings to represent API endpoints for respective resources. Actual
 *  back end API application TBD.
 */
export const API_ENDPOINT_AVATARS = 'avatars.json';
export const API_ENDPOINT_RENTALS = 'rentals.json';
export const API_ENDPOINT_SHOPS   = 'shops.json';
export const API_ENDPOINT_VENDORS = 'vendors.json';

/**
 * Proxy origin for handling 3rd party requests for servers with a strict or
 *  absent CORS policy.
 * @see [cors-anywhere](https://github.com/Rob--W/cors-anywhere/)
 * ```git clone https://github.com/Rob--W/cors-anywhere.git
 *    cd cors-anywhere/
 *    npm install
 *    heroku create
 *    git push heroku master```
 */
export const API_EXTERNAL_PROXY = 'https://cors-anywhere.herokuapp.com/';

/**
 * Third party or external API endpoints, origins, path partials, and URLs.
 */
export const API_ENDPOINT_SOTA_ES_BASE = 'http://www.shroudoftheavatar.com:9200/_all/_search?q=';
export const API_SOTA_ES_QUERY_NEWS    = `SceneName:${
  SOTA_ES_SCENE_STORMS_REACH}%20AND%20LocationEvent:${
  SOTA_ES_EVENT_MONSTER_PLAYER}%20AND%20@timestamp:`;
