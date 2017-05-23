import { SET_VENDORS } from '../constants/action_types';

const vendorsReducer = (vendors = [], action) => {
  switch (action.type) {
    case SET_VENDORS:
      return action.payload.response.vendors;
  }

  return vendors;
};

export default vendorsReducer;
