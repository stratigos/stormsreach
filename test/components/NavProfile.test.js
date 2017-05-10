import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import NavProfile from '../../app/components/NavProfile';

describe('<NavProfile /> Component', () => {

  describe('as a stateless functional component', () => {

    it('should be a function', () => {
      expect( typeof NavProfile ).toEqual('function');
    });

  });

  it('should not have propTypes defined', () => {
    expect( shallow(<NavProfile />).propTypes ).toBeUndefined();
  });

  it('should not have defaultProps', () => {
    expect( shallow(<NavProfile />).defaultProps ).toBeUndefined();
  });

  it('should render a Link element', () => {
    const testNavProfile = shallow(<NavProfile />);

    expect( testNavProfile.find('Link').length ).toEqual(1);
  });

});
