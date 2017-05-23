import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AvatarLink from './AvatarLink';
import VendorLink from './VendorLink';

/**
 * Handle logic for displaying link to Vendor page.
 * @return
 *  JSX String if currently on a Vendor page.
 *  JSX VendorLink if elsewhere in the app.
 */
const displayNameOrLink = (vendor_name, vendor_id, currentUri) => {
  return /\/?vendors\/\d+\/?/.test(currentUri)
    ? <strong>{vendor_name}</strong>
    : <VendorLink id={vendor_id} />;
};

/**
 * Handle logic for optional image display.
 */
const displayImage = (image) => {
  return image !== undefined && image.length > 0
    ? <div className='vendor-image'><img src={image} alt={`${name} Image`} /></div>
    : '';
};

/**
 * Functional component for composing Vendor data.
 */
const Vendor = (props) => {

  let nameOrLink = displayNameOrLink(props.vendor.name, props.vendor.id, props.location.pathname);
  let vendorImg  = displayImage(props.vendor.image, props.vendor.name);

  return(
    <div className='vendor'>
      {vendorImg}
      <div>
        <span className='list-label'>Name:</span> {nameOrLink}
      </div>
      <div>
        <span className='list-label'>Host:</span> <AvatarLink id={props.vendor.avatar_id} />
      </div>
      <div>
        <span className='list-label'>Shop:</span> <em>*coming soon*</em>
      </div>
      <div>
        <span className='list-label'>Town:</span> {props.vendor.town}
      </div>
      <div className='vendor-location'>
        <span className='list-label'>Location:</span> {props.vendor.location}
      </div>
      <div>
        <span className='list-label'>Listed date:</span> {props.vendor.published_at}
      </div>
      <div className='vendor-description'>{props.vendor.description}</div>
    </div>
  );
};

Vendor.defaultProps = {
  vendor: {
    id: 0,
    avatar_id: undefined,
    shop_id: undefined,
    name: 'Loading',
    image: undefined,
    town: "Storm's Reach",
    location: '',
    description: '',
    published_at: ''
  }
};

Vendor.propTypes= {
  vendorId: PropTypes.number.isRequired,
  vendor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar_id: PropTypes.number,
    shop_id: PropTypes.number,
    name: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    published_at: PropTypes.string.isRequired
  }).isRequired
};

/**
 * Export as HoC `withRouter` to allow Router to supply `location` to
 *  the Vendor Component, wherever it is called.
 */
export default withRouter(Vendor);
