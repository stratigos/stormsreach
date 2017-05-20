import { FETCH_RENTALS, SET_RENTALS } from '../constants/action_types';

const fetchRentals = () => ({
  type: FETCH_RENTALS,
  payload: {
    url: 'rentals.json',
    success: SET_RENTALS
  }
});

export default fetchRentals;
