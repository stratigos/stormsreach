import { FETCH_SHOPS, SET_SHOPS } from '../constants/action_types';
import { API_ENDPOINT_SHOPS } from '../constants/api_endpoints';

const fetchShops = () => ({
  type: FETCH_SHOPS,
  payload: {
    url: API_ENDPOINT_SHOPS,
    success: SET_SHOPS
  }
});

export default fetchShops;
