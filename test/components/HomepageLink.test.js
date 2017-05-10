import React from 'react';
import { shallow } from 'enzyme';
// import { Link } from 'react-router-dom'; // TODO NEED THIS?

import HomepageLink from '../../app/components/HomepageLink';

describe('<HomepageLink /> Component', () => {

  describe('as a stateless functional component', () => {

    it('should be a function', () => {
      expect( typeof HomepageLink ).toEqual('function');
    });

  });

  it('should not have propTypes defined', () => {
    expect( shallow(<HomepageLink />).propTypes ).toBeUndefined();
  });

  it('should not have defaultProps', () => {
    expect( shallow(<HomepageLink />).defaultProps ).toBeUndefined();
  });

  it('should render its containing div', () => {
    expect( shallow(<HomepageLink />).is('div.homepage-link-container') ).toBe(true);
  });

  it('should render a Link element for the home page', () => {
    const testHomepageLink = shallow(<HomepageLink />);
    const childLink        = testHomepageLink.find('Link');

    expect( childLink.length ).toEqual(1);
    expect( childLink.props().to ).toEqual('/');
  });

});
