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

  it('renders a containing div', () => {
    expect( shallow(<About />).is('.about-container') ).toBe(true);
  });

  it('displays text about the site', () => {
    expect( shallow(<About />).text() ).toMatch(/About this site/);
  });

});
