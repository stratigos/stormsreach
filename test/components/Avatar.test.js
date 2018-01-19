import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../../app/components/Avatar';

describe('<Avatar /> Component', () => {

  it('should be a functional component', () => {
    expect( typeof Avatar ).toEqual('function');
  });

});
