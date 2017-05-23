import { FETCH_VENDORS, SET_VENDORS } from '../constants/action_types';

const fetchVendors = () => ({
  type: FETCH_VENDORS,
  payload: {
    url: 'vendors.json',
    success: SET_VENDORS
  }
});

export default fetchVendors;
