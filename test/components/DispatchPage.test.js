import React from 'react';
import { shallow } from 'enzyme';

import DispatchPage from '../../app/components/DispatchPage';

describe('<DispatchPage /> Component', () => {

  describe('as a stateless functional component', () => {

    it('is a function', () => {
      expect( typeof DispatchPage ).toEqual('function');
    });

  });

  it('does not have propTypes defined', () => {
    expect( shallow(<DispatchPage />).propTypes ).toBeUndefined();
  });

  it('does not have defaultProps', () => {
    expect( shallow(<DispatchPage />).defaultProps ).toBeUndefined();
  });

  it('renders its containing div', () => {
    expect( shallow(<DispatchPage />).is('div.dispatch-container') ).toBe(true);
  });

  it('has a header section', () => {
    expect( shallow(<DispatchPage />).find('div.dispatch-header').length ).toBe(1);
  });

  it('has a body (content) section', () => {
    expect( shallow(<DispatchPage />).find('div.dispatch-body').length ).toBe(1);
  });

  it('displays text about the site', () => {
    expect( shallow(<DispatchPage />).text() ).toMatch(/News.*Storm's\sReach/i);
  });

  it('links to homepage', () => {
    expect( shallow(<DispatchPage />).find('HomepageLink').length ).toBe(1);
  });

});
