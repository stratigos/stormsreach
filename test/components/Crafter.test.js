import React from 'react';
import { shallow } from 'enzyme';

import Crafter from '../../app/components/Crafter';

describe('<Crafter /> Component', () => {

  it('should render its containing div', () => {
    expect( shallow(<Crafter />).is('div.crafter') ).toBe(true);
  });

  // Test state

  // Test default props present/defined

  // Test expected child Components

});
