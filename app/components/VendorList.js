import React from 'react';
import PropTypes from 'prop-types';
import Vendor from './Vendor';

const VendorList = ({ vendors }) => {
  return(
    <div className='crafter-list-container'>
      {vendors.map( (vendor) => {
        return(<Vendor key={vendor.id} vendor={vendor} />);
      })}
    </div>
  );
};

VendorList.propTypes = {
  vendors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar_id: PropTypes.number,
      shop_id: PropTypes.number,
      name: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
      image: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      published_at: PropTypes.string.isRequired
    })
  )
};

export default VendorList;
