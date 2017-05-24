import { FETCH_RENTALS, SET_RENTALS } from '../constants/action_types';
import { API_ENDPOINT_RENTALS } from '../constants/api_endpoints';

const fetchRentals = () => ({
  type: FETCH_RENTALS,
  payload: {
    url: API_ENDPOINT_RENTALS,
    success: SET_RENTALS
  }
});

export default fetchRentals;
