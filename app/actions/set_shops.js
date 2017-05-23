import { SET_SHOPS } from '../constants/action_types';

const setShops = (shops_json) => (

  let shops = shops_json.shops;

  return {
    type: SET_SHOPS,
    payload: { shops }
  }
);

export default setShops;
