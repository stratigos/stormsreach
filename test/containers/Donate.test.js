import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Donate from '../../app/containers/Donate';

describe('<Donate /> Component', () => {

  it('should render the PayPal Component', () => {
    const testDonate = shallow(<Donate />);

    expect( testDonate.find('PayPalButton').length ).toEqual(1);
  });

  it('should render the Bitcoin Component', () => {
    const testDonate = shallow(<Donate />);

    expect( testDonate.find('BitcoinQRAddress').length ).toEqual(1);
  });

});
