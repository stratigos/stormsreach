import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../../app/components/AboutPage';

describe('<About /> Component', () => {

  // Still deciding on if and how to test this.
  describe('as a stateless functional component', () => {

    it('should be a function', () => {
      expect( typeof AboutPage ).toEqual('function');
    });

  });

  it('should not have propTypes defined', () => {
    expect( shallow(<AboutPage />).propTypes ).toBeUndefined();
  });

  it('should not have defaultProps', () => {
    expect( shallow(<AboutPage />).defaultProps ).toBeUndefined();
  });

  it('should render its containing div', () => {
    expect( shallow(<AboutPage />).is('div.about-container') ).toBe(true);
  });

  it('should display text about the site', () => {
    expect( shallow(<AboutPage />).text() ).toMatch(/About this application/i);
  });

});
