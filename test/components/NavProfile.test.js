import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import NavProfile from '../../app/components/NavProfile';

describe('<NavProfile /> Component', () => {

  describe('as a stateless functional component', () => {

    it('is a function', () => {
      expect( typeof NavProfile ).toEqual('function');
    });

  });

  it('does not have propTypes defined', () => {
    expect( shallow(<NavProfile />).propTypes ).toBeUndefined();
  });

  it('does not have defaultProps', () => {
    expect( shallow(<NavProfile />).defaultProps ).toBeUndefined();
  });

  it('does render a Link element', () => {
    const testNavProfile = shallow(<NavProfile />);

    expect( testNavProfile.find('Link').length ).toEqual(1);
  });

});
