import React from 'react';
import { shallow } from 'enzyme';

import About from '../../app/components/About';

describe('<About /> Component', () => {

  describe('as a stateless functional component', () => {

    it('should be a function', () => {
      expect( typeof About ).toEqual('function');
    });

  });

  it('should not have propTypes defined', () => {
    expect( shallow(<About />).propTypes ).toBeUndefined();
  });

  it('should not have defaultProps', () => {
    expect( shallow(<About />).defaultProps ).toBeUndefined();
  });

  it('should render its containing div', () => {
    expect( shallow(<About />).is('div.about-container') ).toBe(true);
  });

  it('should display text about the site', () => {
    expect( shallow(<About />).text() ).toMatch(/About this site/);
  });

});
