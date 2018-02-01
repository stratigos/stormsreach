import React from 'react';
import { shallow } from 'enzyme';

import HomepageLink from '../../app/components/HomepageLink';

describe('<HomepageLink /> Component', () => {

  describe('as a stateless functional component', () => {

    it('is a function', () => {
      expect( typeof HomepageLink ).toEqual('function');
    });

  });

  it('does not have propTypes defined', () => {
    expect( shallow(<HomepageLink />).propTypes ).toBeUndefined();
  });

  it('does not have defaultProps', () => {
    expect( shallow(<HomepageLink />).defaultProps ).toBeUndefined();
  });

  it('renders its containing div', () => {
    expect( shallow(<HomepageLink />).is('div.homepage-link-container') ).toBe(true);
  });

  it('renders a Link element for the home page', () => {
    const testHomepageLink = shallow(<HomepageLink />);
    const childLink        = testHomepageLink.find('Link');

    expect( childLink.length ).toEqual(1);
    expect( childLink.props().to ).toEqual('/');
  });

});
