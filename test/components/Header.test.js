import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../app/components/Header';

describe('<Header /> Component', () => {

  describe('as a stateless functional component', () => {

    it('is a function', () => {
      expect( typeof Header ).toEqual('function');
    });

  });

  it('does not have propTypes defined', () => {
    expect( shallow(<Header />).propTypes ).toBeUndefined();
  });

  it('does not have defaultProps', () => {
    expect( shallow(<Header />).defaultProps ).toBeUndefined();
  });

  it('renders its containing div', () => {
    expect( shallow(<Header />).is('div.header-container') ).toBe(true);
  });

  describe('renders the branding', () => {

    it('renders a container for branding', () => {
      expect( shallow(<Header />).find('div.branding-container').length ).toEqual(1);
    });

    it('renders the Branding Component', () => {
      const testHeader = shallow(<Header />);

      expect( testHeader.find('Branding').length ).toBe(1);
    });

  });

  describe('renders the site navigation', () => {

    it('renders a container for navigation', () => {
      expect( shallow(<Header />).find('div.nav-container').length ).toEqual(1);
    });

    it('renders the Nav element', () => {
      const testHeader = shallow(<Header />);

      expect( testHeader.find('Nav').length ).toBe(1);
    });

  });

  describe('renders the user navigation', () => {

    it('renders a container for user links', () => {
      expect( shallow(<Header />).find('div.user-container').length ).toEqual(1);
    });

    it('renders the NavProfile element', () => {
      const testHeader = shallow(<Header />);

      expect( testHeader.find('NavProfile').length ).toBe(1);
    });

  });

});
