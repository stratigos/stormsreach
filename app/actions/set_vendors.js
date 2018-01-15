import { SET_VENDORS } from '../constants/action_types';

const setVendors = (vendors_json) => {

  let vendors = vendors_json.vendors;

  return {
    type: SET_VENDORS,
    payload: { vendors }
  }
};

export default setVendors;
