import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import Nav from '../../app/components/Nav';

describe('<Nav /> Component', () => {

  describe('as a stateless functional component', () => {

    it('should be a function', () => {
      expect( typeof Nav ).toEqual('function');
    });

  });

  it('should not have propTypes defined', () => {
    expect( shallow(<Nav />).propTypes ).toBeUndefined();
  });

  it('should not have defaultProps', () => {
    expect( shallow(<Nav />).defaultProps ).toBeUndefined();
  });

  it('should render a UL with a class of `.nav`', () => {
    expect( shallow(<Nav />).is('ul.nav') ).toBe(true);
  });

  it('should render NavLink elements', () => {
    const testNav = shallow(<Nav />);

    expect( testNav.find('NavLink').length ).toBeGreaterThan(1);
  });

});
