import { SET_RENTALS } from '../constants/action_types';

const rentalsReducer = (rentals = [], action) => {
  switch (action.type) {
    case SET_RENTALS:
      return action.payload.response.rentals;
  }

  return rentals;
};

export default rentalsReducer;
