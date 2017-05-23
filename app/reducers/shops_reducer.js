import { SET_SHOPS } from '../constants/action_types';

const shopsReducer = (shops = [], action) => {
  switch (action.type) {
    case SET_SHOPS:
      return action.payload.response.shops;
  }

  return shops;
};

export default shopsReducer;
