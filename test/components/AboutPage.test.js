import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../../app/components/AboutPage';

describe('<AboutPage /> Component', () => {

  describe('as a stateless functional component', () => {

    it('is a function', () => {
      expect( typeof AboutPage ).toEqual('function');
    });

  });

  it('does not have propTypes defined', () => {
    expect( shallow(<AboutPage />).propTypes ).toBeUndefined();
  });

  it('does not have defaultProps', () => {
    expect( shallow(<AboutPage />).defaultProps ).toBeUndefined();
  });

  it('renders its containing div', () => {
    expect( shallow(<AboutPage />).is('div.about-container') ).toBe(true);
  });

  it('displays text about the site', () => {
    expect( shallow(<AboutPage />).text() ).toMatch(/About this application/i);
  });

});
