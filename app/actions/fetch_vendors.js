import { FETCH_VENDORS, SET_VENDORS } from '../constants/action_types';
import { API_ENDPOINT_VENDORS } from '../constants/api_endpoints';

const fetchVendors = () => ({
  type: FETCH_VENDORS,
  payload: {
    url: API_ENDPOINT_VENDORS,
    success: SET_VENDORS
  }
});

export default fetchVendors;
