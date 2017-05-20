import { SET_RENTALS } from '../constants/action_types';


const setRentals = (rentals_json) => (

  let rentals = rentals_json.rentals;

  return {
    type: SET_AVATARS,
    payload: { rentals }
  }
);

export default setRentals;
