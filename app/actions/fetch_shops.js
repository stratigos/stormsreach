import { FETCH_SHOPS, SET_SHOPS } from '../constants/action_types';

const fetchShops = () => ({
  type: FETCH_SHOPS,
  payload: {
    url: 'shops.json',
    success: SET_SHOPS
  }
});

export default fetchShops;
